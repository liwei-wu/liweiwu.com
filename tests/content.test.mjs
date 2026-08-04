import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("home introductions are localized content documents", async () => {
  const [english, chinese, japanese, siteConfig] = await Promise.all([
    readFile(new URL("content/pages/home/en.md", root), "utf8"),
    readFile(new URL("content/pages/home/zh-Hans.md", root), "utf8"),
    readFile(new URL("content/pages/home/ja.md", root), "utf8"),
    readFile(new URL("site.config.ts", root), "utf8"),
  ]);

  assert.match(english, /type: page[\s\S]*translation_status: author-reviewed/);
  assert.match(chinese, /type: page[\s\S]*translation_status: original/);
  assert.match(japanese, /type: page[\s\S]*translation_status: ai-translated/);
  assert.match(japanese, /source_hash: [a-f0-9]{16}/);
  for (const document of [english, chinese, japanese]) {
    assert.match(document, /\[entity-deepflywheel\]/);
    assert.match(document, /\[entity-sensetime\]/);
    assert.match(document, /\[entity-nanjingUniversity\]/);
    assert.match(document, /\[entity-tsinghuaUniversity\]/);
    assert.doesNotMatch(
      document,
      /https:\/\/(?:deepflywheel\.com|www\.(?:sensetime|nju|tsinghua)\.)/,
    );
  }
  assert.match(siteConfig, /entities:[\s\S]*sensetime:[\s\S]*nanjingUniversity:[\s\S]*tsinghuaUniversity:/);
  assert.doesNotMatch(siteConfig, /homeTitle|description:/);
});

test("published blog editions and translation tooling follow the controlled glossary", async () => {
  const essayRoot = new URL("content/essays/", root);
  const essayDirectories = (await readdir(essayRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory());
  const sources = [];

  for (const directory of essayDirectories) {
    const directoryUrl = new URL(`${directory.name}/`, essayRoot);
    const filenames = (await readdir(directoryUrl))
      .filter((filename) => filename.endsWith(".md"));
    for (const filename of filenames) {
      sources.push({
        file: `content/essays/${directory.name}/${filename}`,
        text: await readFile(new URL(filename, directoryUrl), "utf8"),
      });
    }
  }

  sources.push({
    file: "scripts/translate-not-yet-a-dagger.mjs",
    text: await readFile(
      new URL("scripts/translate-not-yet-a-dagger.mjs", root),
      "utf8",
    ),
  });

  const forbiddenSpellings = [
    /Magic Gourd/,
    /Magicgourd/,
    /magicgourd/,
    /SaySo/,
    /Say So/,
    /\bsayso\b/,
    /Deep Flywheel/,
    /Deepflywheel/,
    /Sense Time/,
    /Miracle Plus/,
    /Miracle Forum/,
    /Miracle Camp/,
    /Qi Lu/,
    /Qinghua University/,
  ];

  for (const { file, text } of sources) {
    for (const spelling of forbiddenSpellings) {
      assert.doesNotMatch(text, spelling, `${file} contains ${spelling}`);
    }
  }
});
