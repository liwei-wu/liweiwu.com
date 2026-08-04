import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import matter from "gray-matter";

const root = new URL("../", import.meta.url);

test("the locale release configuration defines A0 and A1", async () => {
  const config = JSON.parse(
    await readFile(new URL("config/locales.json", root), "utf8"),
  );
  const tags = config.locales.map((locale) => locale.tag);
  const a0 = config.locales
    .filter((locale) => locale.tier === "A0")
    .map((locale) => locale.tag);
  const a1 = config.locales
    .filter((locale) => locale.tier === "A1")
    .map((locale) => locale.tag);

  assert.equal(config.defaultLocale, "en");
  assert.equal(config.sourceLocale, "zh-Hans");
  assert.equal(config.policyDocument, "../docs/translation-language-tiers.md");
  assert.equal(config.locales.length, 14);
  assert.equal(new Set(tags).size, tags.length);
  assert.deepEqual(a0, ["zh-Hans", "en"]);
  assert.deepEqual(a1, [
    "zh-Hant",
    "es",
    "pt",
    "fr",
    "ja",
    "ru",
    "de",
    "ko",
    "hi",
    "id",
    "vi",
    "it",
  ]);
  assert.deepEqual(
    config.locales
      .filter((locale) => locale.tier === "A0")
      .map(({ tag, role, translationStatus }) => [
        tag,
        role,
        translationStatus,
      ]),
    [
      ["zh-Hans", "original", "original"],
      ["en", "author-reviewed", "author-reviewed"],
    ],
  );
  for (const locale of config.locales.filter((item) => item.tier === "A1")) {
    assert.equal(locale.role, "ai-translation-target");
    assert.equal(locale.translationStatus, "ai-translated");
  }
});

function sourceHash(document) {
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

function markdownShape(body) {
  return {
    headings: [...body.matchAll(/^## /gm)].length,
    entityReferences: [...body.matchAll(/\[entity-[^\]]+\]/g)]
      .map(([reference]) => reference)
      .sort(),
    externalUrls: [...body.matchAll(/https?:\/\/[^\s)]+/g)]
      .map(([url]) => url)
      .sort(),
  };
}

async function assertCompleteTranslationSet(directory, config) {
  const expectedLocales = config.locales.map((locale) => locale.tag).sort();
  const filenames = (await readdir(directory))
    .filter((filename) => filename.endsWith(".md"))
    .sort();
  assert.deepEqual(
    filenames,
    expectedLocales.map((locale) => `${locale}.md`).sort(),
    `incomplete locale set in ${directory.pathname}`,
  );

  const source = matter(
    await readFile(new URL(`${config.sourceLocale}.md`, directory), "utf8"),
  );
  const expectedHash = sourceHash(source);
  const expectedShape = markdownShape(source.content);

  for (const rule of config.locales) {
    const document = matter(
      await readFile(new URL(`${rule.tag}.md`, directory), "utf8"),
    );
    assert.equal(document.data.locale, rule.tag);
    assert.equal(document.data.translation_status, rule.translationStatus);
    assert.equal(document.data.source_locale, config.sourceLocale);
    assert.doesNotMatch(document.content, /\p{Cf}/u);
    assert.doesNotMatch(document.content, /\] \[entity-/);
    assert.doesNotMatch(document.content, /\]\s+\(https?:\/\//);
    assert.doesNotMatch(document.content, /\]\(http(?:x\.com|www\.|doi\.)/);

    if (rule.tier === "A1") {
      assert.equal(document.data.source_hash, expectedHash);
      assert.deepEqual(markdownShape(document.content), expectedShape);
    }
  }
}

async function assertPublishedEssaySet(directory, config) {
  const rules = new Map(config.locales.map((rule) => [rule.tag, rule]));
  const filenames = (await readdir(directory))
    .filter((filename) => filename.endsWith(".md"))
    .sort();
  const locales = filenames.map((filename) => filename.slice(0, -3));

  assert.ok(locales.includes(config.sourceLocale), `missing source edition in ${directory.pathname}`);
  for (const locale of locales) {
    assert.ok(rules.has(locale), `unexpected locale ${locale} in ${directory.pathname}`);
  }

  const source = matter(
    await readFile(new URL(`${config.sourceLocale}.md`, directory), "utf8"),
  );
  const expectedHash = sourceHash(source);
  const expectedShape = markdownShape(source.content);

  for (const locale of locales) {
    const rule = rules.get(locale);
    const document = matter(
      await readFile(new URL(`${locale}.md`, directory), "utf8"),
    );
    assert.equal(document.data.locale, locale);
    assert.equal(document.data.translation_status, rule.translationStatus);
    assert.equal(document.data.source_locale, config.sourceLocale);
    assert.doesNotMatch(document.content, /\p{Cf}/u);
    assert.doesNotMatch(document.content, /\] \[entity-/);
    assert.doesNotMatch(document.content, /\]\s+\(https?:\/\//);
    assert.doesNotMatch(document.content, /\]\(http(?:x\.com|www\.|doi\.)/);

    if (rule.tier === "A1") {
      assert.ok(locales.includes("en"), `A1 edition ${locale} requires English in ${directory.pathname}`);
      assert.equal(document.data.source_hash, expectedHash);
      assert.deepEqual(markdownShape(document.content), expectedShape);
    }
  }
}

test("home pages cover every locale and essays may publish translations incrementally", async () => {
  const config = JSON.parse(
    await readFile(new URL("config/locales.json", root), "utf8"),
  );
  await assertCompleteTranslationSet(
    new URL("content/pages/home/", root),
    config,
  );

  const essayRoot = new URL("content/essays/", root);
  const essayDirectories = (await readdir(essayRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory());
  assert.ok(essayDirectories.length > 0);
  for (const entry of essayDirectories) {
    await assertPublishedEssaySet(new URL(`${entry.name}/`, essayRoot), config);
  }
});
