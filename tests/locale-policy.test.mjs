import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

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

