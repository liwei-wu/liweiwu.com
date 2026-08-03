import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("the global language configuration contains 185 unique tags", async () => {
  const config = JSON.parse(
    await readFile(new URL("languages.json", root), "utf8"),
  );
  assert.equal(config.languages.length, 185);
  assert.equal(new Set(config.languages).size, 185);
  assert.ok(config.languages.includes("zh-Hans"));
  assert.ok(config.languages.includes("zh-Hant"));
  assert.ok(!config.languages.includes("zh"));
});

test("the static export contains English and Chinese publication editions", async () => {
  const [englishHome, englishEssay, home, essay, sitemap] = await Promise.all([
    readFile(new URL("out/index.html", root), "utf8"),
    readFile(
      new URL("out/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(new URL("out/zh-Hans/index.html", root), "utf8"),
    readFile(
      new URL("out/zh-Hans/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(new URL("out/sitemap.xml", root), "utf8"),
  ]);

  assert.match(englishHome, /Liwei Wu/);
  assert.match(englishHome, /Director of R&amp;D at SenseTime/);
  assert.match(englishHome, /bachelor(?:&apos;|&#x27;|')s degree from Nanjing University/);
  assert.match(englishHome, /New Paper and Pen, New Artists/);
  assert.match(englishHome, /August 2026/);
  assert.match(englishEssay, /How AI Changes Software and People/);
  assert.match(englishEssay, /Code Is Becoming an Intermediate Artifact/);
  assert.match(englishEssay, /AI translation/);

  assert.match(home, /吴立威/);
  assert.match(home, /商汤科技研发总监/);
  assert.match(home, /本科毕业于南京大学，后获清华大学硕士学位/);
  assert.match(home, /scholar\.google\.com\/citations\?user=dg1JyaUAAAAJ/);
  assert.match(home, /https:\/\/deepflywheel\.com\//);
  assert.doesNotMatch(home, /AI 应用与软件创作实践/);
  assert.doesNotMatch(home, /<h2>项目<\/h2>/);
  assert.doesNotMatch(home, /中文与英文由作者负责|Chinese and English are author-reviewed/);
  assert.match(home, /新的纸和笔，新的艺术家/);
  assert.match(home, /（2026年8月）/);
  assert.doesNotMatch(home, /2026年8月3日/);
  assert.match(essay, /AI 如何改变软件与人/);
  assert.match(essay, /我们所说的 AI，究竟是什么/);
  assert.doesNotMatch(home, /codex-preview|Your site is taking shape/i);

  assert.match(sitemap, /<loc>http:\/\/localhost:3000\/essay\/new-paper-and-pen-new-artists\/<\/loc>/);
  assert.match(sitemap, /<loc>http:\/\/localhost:3000\/zh-Hans\/essay\/new-paper-and-pen-new-artists\/<\/loc>/);
  assert.doesNotMatch(sitemap, /\/en\//);
});
