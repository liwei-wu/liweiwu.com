import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const sourceLocale = "zh-Hans";
const essaysDirectory = path.join(root, "content", "essays");
const languageConfig = JSON.parse(
  await readFile(path.join(root, "languages.json"), "utf8"),
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
  throw new Error("Use --locale <tag> for one language or --all for every configured language.");
}
if (translateAll && process.env.CONFIRM_ALL_TRANSLATIONS !== "1") {
  throw new Error(
    "All-language generation can incur substantial API cost. Set CONFIRM_ALL_TRANSLATIONS=1 to continue.",
  );
}

const configuredLanguages = languageConfig.languages.filter(
  (locale) => locale !== sourceLocale,
);
const targets = translateAll ? configuredLanguages : [requestedLocale];
for (const locale of targets) {
  if (!configuredLanguages.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
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
        "Do not summarize, explain, add claims, or wrap the Markdown in a code fence.",
        "Use the natural long-form editorial register of the target language.",
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
  return [
    "---",
    `id: ${source.data.id}`,
    `type: ${source.data.type}`,
    `locale: ${targetLocale}`,
    `title: ${JSON.stringify(translated.title)}`,
    `subtitle: ${JSON.stringify(translated.subtitle)}`,
    `description: ${JSON.stringify(translated.description)}`,
    `slug: ${source.data.slug}`,
    `published_at: ${dateValue(source.data.published_at)}`,
    `revised_at: ${dateValue(source.data.revised_at ?? source.data.published_at)}`,
    "translation_status: ai-translated",
    `source_locale: ${sourceLocale}`,
    `source_hash: ${sourceHash}`,
    "topics:",
    ...(source.data.topics ?? []).map((topic) => `  - ${topic}`),
    "---",
    "",
    translated.body.trim(),
    "",
  ].join("\n");
}

async function translateArticle(articleDirectory, targetLocale) {
  const articlePath = path.join(essaysDirectory, articleDirectory);
  const sourcePath = path.join(articlePath, `${sourceLocale}.md`);
  const source = matter(await readFile(sourcePath, "utf8"));
  const sourceHash = hashSource(source);
  const targetPath = path.join(articlePath, `${targetLocale}.md`);

  if (!force) {
    try {
      const existing = matter(await readFile(targetPath, "utf8"));
      if (existing.data.source_hash === sourceHash) {
        console.log(`skip ${articleDirectory}/${targetLocale}.md`);
        return;
      }
    } catch {
      // The translation does not exist yet.
    }
  }

  const translated = await requestTranslation(source, targetLocale);
  const output = serialize(source, translated, targetLocale, sourceHash);
  await mkdir(articlePath, { recursive: true });
  const temporaryPath = `${targetPath}.tmp`;
  await writeFile(temporaryPath, output, "utf8");
  await rename(temporaryPath, targetPath);
  console.log(`write ${articleDirectory}/${targetLocale}.md`);
}

const articleDirectories = (await readdir(essaysDirectory, {
  withFileTypes: true,
}))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
const jobs = targets.flatMap((locale) =>
  articleDirectories.map((articleDirectory) => [articleDirectory, locale]),
);
let nextJob = 0;

async function worker() {
  while (nextJob < jobs.length) {
    const [articleDirectory, locale] = jobs[nextJob++];
    await translateArticle(articleDirectory, locale);
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, jobs.length) }, worker));
