import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const localeConfig = JSON.parse(
  await readFile(path.join(root, "config", "locales.json"), "utf8"),
);
const sourceLocale = localeConfig.sourceLocale;
const contentDirectory = path.join(root, "content");
const translatableDirectories = ["essays", "pages"].map((directory) =>
  path.join(contentDirectory, directory),
);
const args = new Set(process.argv.slice(2));
const localeIndex = process.argv.indexOf("--locale");
const requestedLocale = localeIndex >= 0 ? process.argv[localeIndex + 1] : undefined;
const translateAll = args.has("--all");
const force = args.has("--force");
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_TRANSLATION_MODEL ?? "gpt-5.6-sol";
const concurrency = Math.max(1, Number(process.env.TRANSLATION_CONCURRENCY ?? 2));

if (!apiKey) throw new Error("OPENAI_API_KEY is required.");
if (!requestedLocale && !translateAll) {
  throw new Error("Use --locale <tag> for one A1 language or --all for every A1 language.");
}
if (translateAll && process.env.CONFIRM_ALL_TRANSLATIONS !== "1") {
  throw new Error(
    "A1-language generation can incur substantial API cost. Set CONFIRM_ALL_TRANSLATIONS=1 to continue.",
  );
}

const approvedTargets = localeConfig.locales
  .filter((locale) => locale.tier === "A1")
  .map((locale) => locale.tag);
const targets = translateAll ? approvedTargets : [requestedLocale];
for (const locale of targets) {
  if (!approvedTargets.includes(locale)) {
    throw new Error(`Locale is not an approved A1 translation target: ${locale}`);
  }
}

function languageName(locale) {
  try {
    return new Intl.DisplayNames([locale], { type: "language" }).of(locale) ?? locale;
  } catch {
    return locale;
  }
}

function hashSource(document) {
  return createHash("sha256")
    .update(
      JSON.stringify({
        title: document.data.title,
        subtitle: document.data.subtitle,
        description: document.data.description,
        body: document.content,
      }),
    )
    .digest("hex")
    .slice(0, 16);
}

function responseText(response) {
  for (const item of response.output ?? []) {
    if (item.type !== "message") continue;
    for (const part of item.content ?? []) {
      if (part.type === "output_text" && typeof part.text === "string") {
        return part.text;
      }
    }
  }
  throw new Error("The translation response did not contain output text.");
}

async function requestTranslation(source, targetLocale) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      reasoning: { effort: "medium" },
      instructions: [
        `Translate the supplied Chinese publication into ${languageName(targetLocale)} (${targetLocale}).`,
        "Preserve the argument, restraint, authorial voice, Markdown structure, headings, links, reference numbers, proper names, dates, and factual claims.",
        "Write natural, direct, restrained prose in the target language, using short purposeful paragraphs and concrete nouns and verbs.",
        "Preserve the source's progression from the author's own observation to evidence and then to a general conclusion; citations must support the author rather than displace the author's voice.",
        "Favor durable editorial prose over trend commentary, promotional language, academic padding, or ornamental rhetoric.",
        "Preserve every factual limitation and uncertainty, including whether work is unreleased, unvalidated, bounded, or not universally applicable; never turn these into success claims.",
        "Apply only high-level principles of clarity and economy associated with enduring technology essays; do not imitate any living writer's distinctive wording, cadence, or mannerisms.",
        "Keep Markdown entity reference identifiers such as [entity-sensetime] unchanged; translate only their visible labels when appropriate.",
        "Do not summarize, explain, add claims, or wrap the Markdown in a code fence.",
        "Use the natural long-form editorial register, syntax, punctuation, and paragraph rhythm of the target language rather than copying Chinese word order.",
      ].join(" "),
      input: JSON.stringify({
        title: source.data.title,
        subtitle: source.data.subtitle ?? "",
        description: source.data.description,
        body: source.content.trim(),
      }),
      text: {
        verbosity: "medium",
        format: {
          type: "json_schema",
          name: "article_translation",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            required: ["title", "subtitle", "description", "body"],
            properties: {
              title: { type: "string" },
              subtitle: { type: "string" },
              description: { type: "string" },
              body: { type: "string" },
            },
          },
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API ${response.status}: ${await response.text()}`);
  }
  return JSON.parse(responseText(await response.json()));
}

function serialize(source, translated, targetLocale, sourceHash) {
  const dateValue = (value) =>
    value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
  const lines = [
    "---",
    `id: ${source.data.id}`,
    `type: ${source.data.type}`,
    `locale: ${targetLocale}`,
    `title: ${JSON.stringify(translated.title)}`,
  ];
  if (source.data.subtitle) {
    lines.push(`subtitle: ${JSON.stringify(translated.subtitle)}`);
  }
  lines.push(
    `description: ${JSON.stringify(translated.description)}`,
    `slug: ${source.data.slug}`,
  );
  if (source.data.published_at) {
    lines.push(`published_at: ${dateValue(source.data.published_at)}`);
    lines.push(
      `revised_at: ${dateValue(source.data.revised_at ?? source.data.published_at)}`,
    );
  }
  lines.push(
    "translation_status: ai-translated",
    `source_locale: ${sourceLocale}`,
    `source_hash: ${sourceHash}`,
  );
  if (source.data.topics?.length) {
    lines.push(
      "topics:",
      ...source.data.topics.map((topic) => `  - ${topic}`),
    );
  }
  lines.push("---", "", translated.body.trim(), "");
  return lines.join("\n");
}

async function translateDocument(sourcePath, targetLocale) {
  const documentDirectory = path.dirname(sourcePath);
  const source = matter(await readFile(sourcePath, "utf8"));
  const sourceHash = hashSource(source);
  const targetPath = path.join(documentDirectory, `${targetLocale}.md`);
  const displayPath = path.relative(contentDirectory, targetPath);

  if (!force) {
    try {
      const existing = matter(await readFile(targetPath, "utf8"));
      if (existing.data.source_hash === sourceHash) {
        console.log(`skip ${displayPath}`);
        return;
      }
    } catch {
      // The translation does not exist yet.
    }
  }

  const translated = await requestTranslation(source, targetLocale);
  const output = serialize(source, translated, targetLocale, sourceHash);
  await mkdir(documentDirectory, { recursive: true });
  const temporaryPath = `${targetPath}.tmp`;
  await writeFile(temporaryPath, output, "utf8");
  await rename(temporaryPath, targetPath);
  console.log(`write ${displayPath}`);
}

const sourceDocuments = (
  await Promise.all(
    translatableDirectories.map(async (directory) =>
      (await readdir(directory, { withFileTypes: true }))
        .filter((entry) => entry.isDirectory())
        .map((entry) => path.join(directory, entry.name, `${sourceLocale}.md`)),
    ),
  )
).flat();
const jobs = targets.flatMap((locale) =>
  sourceDocuments.map((sourcePath) => [sourcePath, locale]),
);
let nextJob = 0;

async function worker() {
  while (nextJob < jobs.length) {
    const [sourcePath, locale] = jobs[nextJob++];
    await translateDocument(sourcePath, locale);
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, jobs.length) }, worker));
