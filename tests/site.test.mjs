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
  const [englishHome, englishEssay, home, essay] = await Promise.all([
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
  ]);

  assert.match(englishHome, /Liwei Wu \(吴立威\)/);
  assert.match(englishHome, /Director of R&amp;D at SenseTime/);
  assert.match(englishHome, /bachelor(?:&apos;|&#x27;|')s degree from Nanjing University/);
  assert.match(englishHome, /New Paper and Pen, New Artists/);
  assert.match(englishHome, /August 2026/);
  assert.match(englishEssay, /How AI Changes Software and People/);
  assert.match(englishEssay, /Code Is Becoming an Intermediate Artifact/);
  assert.match(englishEssay, /AI translation/);

  assert.match(home, /吴立威（Liwei Wu）/);
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

});

function getJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]),
  );
}

test("every edition exports localized canonical metadata and structured data", async () => {
  const [englishHome, chineseHome, englishEssay, chineseEssay] = await Promise.all([
    readFile(new URL("out/index.html", root), "utf8"),
    readFile(new URL("out/zh-Hans/index.html", root), "utf8"),
    readFile(
      new URL("out/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(
      new URL("out/zh-Hans/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
  ]);

  assert.match(englishHome, /^<!DOCTYPE html><html lang="en" dir="ltr"/);
  assert.match(chineseHome, /^<!DOCTYPE html><html lang="zh-Hans" dir="ltr"/);
  assert.match(
    englishHome,
    /<title>Liwei Wu — AI Entrepreneur, DeepFlywheel Founder, and Writer<\/title>/,
  );
  assert.match(
    chineseHome,
    /<title>吴立威｜AI 创业者、深度飞轮创始人及作者<\/title>/,
  );
  assert.doesNotMatch(chineseHome, /<title>[^<]*Liwei Wu[^<]*Liwei Wu<\/title>/);

  for (const html of [englishHome, chineseHome, englishEssay, chineseEssay]) {
    assert.match(html, /<link rel="canonical" href="https:\/\/liweiwu\.com\//);
    assert.match(html, /<link rel="alternate" hrefLang="en"/);
    assert.match(html, /<link rel="alternate" hrefLang="zh-Hans"/);
    assert.match(html, /<link rel="alternate" hrefLang="x-default"/);
    assert.match(html, /<link rel="alternate" type="application\/rss\+xml"/);
    assert.doesNotMatch(html, /http:\/\/localhost:3000/);
  }

  assert.match(
    englishEssay,
    /<meta name="twitter:title" content="New Paper and Pen, New Artists — Liwei Wu"/,
  );
  assert.match(
    chineseEssay,
    /<meta property="og:title" content="新的纸和笔，新的艺术家"/,
  );

  const homeGraph = getJsonLd(chineseHome)[0]["@graph"];
  assert.ok(homeGraph.some((node) => node["@type"] === "ProfilePage"));
  const person = homeGraph.find((node) => node["@type"] === "Person");
  assert.equal(person.name, "吴立威");
  assert.deepEqual(person.alternateName, ["Liwei Wu"]);

  const essayGraph = getJsonLd(englishEssay)[0]["@graph"];
  const posting = essayGraph.find((node) => node["@type"] === "BlogPosting");
  assert.equal(posting.inLanguage, "en");
  assert.equal(
    posting.translationOfWork["@id"],
    "https://liweiwu.com/zh-Hans/essay/new-paper-and-pen-new-artists/#article",
  );
});

test("the crawl and AI discovery resources contain only production URLs", async () => {
  const [sitemap, robots, feed, llms, llmsFull, manifest, indexNow] =
    await Promise.all([
      readFile(new URL("out/sitemap.xml", root), "utf8"),
      readFile(new URL("out/robots.txt", root), "utf8"),
      readFile(new URL("out/feed.xml", root), "utf8"),
      readFile(new URL("out/llms.txt", root), "utf8"),
      readFile(new URL("out/llms-full.txt", root), "utf8"),
      readFile(new URL("out/manifest.webmanifest", root), "utf8"),
      readFile(new URL("out/indexnow-key.txt", root), "utf8"),
    ]);

  assert.match(
    sitemap,
    /<loc>https:\/\/liweiwu\.com\/essay\/new-paper-and-pen-new-artists\/<\/loc>/,
  );
  assert.match(sitemap, /xmlns:xhtml="http:\/\/www\.w3\.org\/1999\/xhtml"/);
  assert.match(sitemap, /hreflang="zh-Hans"/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.doesNotMatch(sitemap, /\/en\/|localhost/);

  for (const userAgent of [
    "Googlebot",
    "Bingbot",
    "Baiduspider",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
  ]) {
    assert.match(robots, new RegExp(`User-Agent: ${userAgent}`));
  }
  assert.match(robots, /Sitemap: https:\/\/liweiwu\.com\/sitemap\.xml/);

  assert.match(feed, /<rss version="2\.0"/);
  assert.match(feed, /<dc:language>zh-Hans<\/dc:language>/);
  assert.match(feed, /<content:encoded><!\[CDATA\[/);
  assert.match(llms, /# Liwei Wu \/ 吴立威/);
  assert.match(llms, /Full Markdown corpus/);
  assert.match(llmsFull, /Translation status: original/);
  assert.match(llmsFull, /Translation status: ai-translated/);
  assert.equal(JSON.parse(manifest).name, "Liwei Wu / 吴立威");
  assert.equal(indexNow, "IndexNow is not configured.\n");

  for (const resource of [sitemap, robots, feed, llms, llmsFull]) {
    assert.doesNotMatch(resource, /http:\/\/localhost:3000/);
  }
});
