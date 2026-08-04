import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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

