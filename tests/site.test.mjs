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
  assert.ok(config.languages.includes("ja"));
  assert.ok(!config.languages.includes("zh"));
});

test("the static export contains English, Chinese, and Japanese editions", async () => {
  const [
    gateway,
    legacyEssay,
    englishHome,
    englishEssay,
    home,
    essay,
    japaneseHome,
    japaneseEssay,
    languages,
    styles,
  ] = await Promise.all([
    readFile(new URL("out/index.html", root), "utf8"),
    readFile(
      new URL("out/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(new URL("out/en/index.html", root), "utf8"),
    readFile(
      new URL("out/en/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(new URL("out/zh-Hans/index.html", root), "utf8"),
    readFile(
      new URL("out/zh-Hans/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(new URL("out/ja/index.html", root), "utf8"),
    readFile(
      new URL("out/ja/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(new URL("out/languages/index.html", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(gateway, /Selecting your language/);
  assert.match(gateway, /href="\/en\/"/);
  assert.match(gateway, /href="\/ja\/"/);
  assert.doesNotMatch(gateway, /Director of R&amp;D at SenseTime/);
  assert.match(legacyEssay, /Selecting your language/);
  assert.match(legacyEssay, /href="\/en\/essay\/new-paper-and-pen-new-artists\/"/);

  assert.match(englishHome, /Liwei Wu \(吴立威\)/);
  assert.match(englishHome, /Director of R&amp;D at SenseTime/);
  assert.match(englishHome, /bachelor(?:&apos;|&#x27;|')s degree from Nanjing University/);
  assert.match(englishHome, /New Paper and Pen, New Artists/);
  assert.match(englishHome, /August 2026/);
  assert.match(englishEssay, /How AI Changes Software and People/);
  assert.match(englishEssay, /Code Is Becoming an Intermediate Artifact/);
  assert.doesNotMatch(englishEssay, /translation-notice|AI translation/);

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
  assert.match(home, /class="theme-toggle-track"/);
  assert.match(home, /class="theme-toggle-choice theme-toggle-light"/);
  assert.match(home, /class="theme-toggle-choice theme-toggle-dark"/);
  assert.match(home, /class="language-trigger"/);
  assert.match(home, /aria-label="选择语言"/);
  assert.doesNotMatch(home, /class="language-trigger"[^>]*>[^<]*简体中文/);
  assert.match(home, /data-scroll-behavior="smooth"/);
  assert.match(styles, /@media \(prefers-color-scheme: dark\)/);
  assert.match(styles, /:root:not\(\[data-theme\]\)/);
  assert.doesNotMatch(home, /2026年8月3日/);
  assert.match(essay, /AI 如何改变软件与人/);
  assert.match(essay, /我们所说的 AI，究竟是什么/);
  assert.match(japaneseHome, /呉立威（Liwei Wu）/);
  assert.match(japaneseHome, /SenseTimeの研究開発ディレクター/);
  assert.match(japaneseHome, /新しい紙とペン、新しい芸術家/);
  assert.match(japaneseHome, /（2026年8月）/);
  assert.match(japaneseHome, /日本語版はAI翻訳です/);
  assert.match(japaneseHome, /href="\/en\/">英語版<\/a>/);
  assert.match(japaneseHome, /href="\/zh-Hans\/">中国語版<\/a>/);
  assert.match(japaneseHome, /home-footer translation-notice/);
  assert.doesNotMatch(japaneseHome, /language-switcher|簡中/);
  assert.match(japaneseEssay, /AIはソフトウェアと人間をどう変えるか/);
  assert.match(japaneseEssay, /私たちが言うAIとは、いったい何か/);
  assert.match(japaneseEssay, /AI翻訳/);
  const referenceUrls = [
    "https://x.com/karpathy/status/1886192184808149383",
    "https://x.com/karpathy/status/2019137879310836075",
    "https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html",
    "https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html",
    "https://doi.org/10.1145/361604.361612",
    "https://paulgraham.com/hp.html",
    "https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9",
    "https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/",
  ];
  for (const referenceUrl of referenceUrls) {
    for (const edition of [englishEssay, essay, japaneseEssay]) {
      assert.ok(
        edition.includes(`href="${referenceUrl}"`),
        `missing reference link ${referenceUrl}`,
      );
    }
  }
  assert.match(
    japaneseEssay,
    /href="\/en\/essay\/new-paper-and-pen-new-artists\/">英語版<\/a>/,
  );
  assert.match(
    japaneseEssay,
    /href="\/zh-Hans\/essay\/new-paper-and-pen-new-artists\/">中国語版<\/a>/,
  );
  assert.doesNotMatch(englishHome, /translation-notice/);
  assert.doesNotMatch(home, /translation-notice/);
  assert.doesNotMatch(home, /codex-preview|Your site is taking shape/i);
  assert.match(languages, /class="language-directory"/);
  assert.match(languages, /hrefLang="en" href="\/en\/"/);
  assert.match(languages, /hrefLang="ja" href="\/ja\/"/);
  assert.match(languages, /hrefLang="zh-Hans" href="\/zh-Hans\/"/);
});

function getJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]),
  );
}

test("every edition exports localized canonical metadata and structured data", async () => {
  const [
    englishHome,
    chineseHome,
    japaneseHome,
    englishEssay,
    chineseEssay,
    japaneseEssay,
  ] = await Promise.all([
    readFile(new URL("out/en/index.html", root), "utf8"),
    readFile(new URL("out/zh-Hans/index.html", root), "utf8"),
    readFile(new URL("out/ja/index.html", root), "utf8"),
    readFile(
      new URL("out/en/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(
      new URL("out/zh-Hans/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(
      new URL("out/ja/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
  ]);

  assert.match(englishHome, /^<!DOCTYPE html><html lang="en" dir="ltr"/);
  assert.match(chineseHome, /^<!DOCTYPE html><html lang="zh-Hans" dir="ltr"/);
  assert.match(japaneseHome, /^<!DOCTYPE html><html lang="ja" dir="ltr"/);
  assert.match(
    englishHome,
    /<title>Liwei Wu — AI Entrepreneur, DeepFlywheel Founder, and Writer<\/title>/,
  );
  assert.match(
    chineseHome,
    /<title>吴立威｜AI 创业者、深度飞轮创始人及作者<\/title>/,
  );
  assert.doesNotMatch(chineseHome, /<title>[^<]*Liwei Wu[^<]*Liwei Wu<\/title>/);
  assert.match(
    japaneseHome,
    /<title>呉立威｜AIアプリケーション起業家、DeepFlywheel創業者、著者<\/title>/,
  );

  for (const html of [
    englishHome,
    chineseHome,
    japaneseHome,
    englishEssay,
    chineseEssay,
    japaneseEssay,
  ]) {
    assert.match(html, /<link rel="canonical" href="https:\/\/liweiwu\.com\//);
    assert.match(html, /<link rel="alternate" hrefLang="en"/);
    assert.match(html, /<link rel="alternate" hrefLang="zh-Hans"/);
    assert.match(html, /<link rel="alternate" hrefLang="ja"/);
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
  assert.match(
    japaneseEssay,
    /<meta property="og:title" content="新しい紙とペン、新しい芸術家"/,
  );
  assert.match(japaneseEssay, /<meta property="og:locale" content="ja_JP"/);
  assert.match(
    englishHome,
    /<link rel="canonical" href="https:\/\/liweiwu\.com\/en\/"/,
  );
  assert.match(
    englishEssay,
    /<link rel="canonical" href="https:\/\/liweiwu\.com\/en\/essay\/new-paper-and-pen-new-artists\/"/,
  );
  assert.match(
    englishHome,
    /<link rel="alternate" hrefLang="x-default" href="https:\/\/liweiwu\.com\/"/,
  );
  assert.match(
    englishEssay,
    /<link rel="alternate" hrefLang="x-default" href="https:\/\/liweiwu\.com\/en\/essay\/new-paper-and-pen-new-artists\/"/,
  );

  const homeGraph = getJsonLd(chineseHome)[0]["@graph"];
  assert.ok(homeGraph.some((node) => node["@type"] === "ProfilePage"));
  const person = homeGraph.find((node) => node["@type"] === "Person");
  assert.equal(person.name, "吴立威");
  assert.deepEqual(person.alternateName, ["Liwei Wu", "呉立威"]);

  const essayGraph = getJsonLd(englishEssay)[0]["@graph"];
  const posting = essayGraph.find((node) => node["@type"] === "BlogPosting");
  assert.equal(posting.inLanguage, "en");
  assert.equal(
    posting.translationOfWork["@id"],
    "https://liweiwu.com/zh-Hans/essay/new-paper-and-pen-new-artists/#article",
  );

  const japaneseGraph = getJsonLd(japaneseEssay)[0]["@graph"];
  const japanesePosting = japaneseGraph.find(
    (node) => node["@type"] === "BlogPosting",
  );
  assert.equal(japanesePosting.inLanguage, "ja");
  assert.equal(
    japanesePosting.translationOfWork["@id"],
    "https://liweiwu.com/zh-Hans/essay/new-paper-and-pen-new-artists/#article",
  );
});

test("language gateways are distinct from explicit, indexable editions", async () => {
  const [gateway, legacyEssay, englishHome] = await Promise.all([
    readFile(new URL("out/index.html", root), "utf8"),
    readFile(
      new URL("out/essay/new-paper-and-pen-new-artists/index.html", root),
      "utf8",
    ),
    readFile(new URL("out/en/index.html", root), "utf8"),
  ]);

  assert.match(gateway, /<link rel="canonical" href="https:\/\/liweiwu\.com\/"/);
  assert.match(gateway, /hrefLang="en" href="https:\/\/liweiwu\.com\/en\/"/);
  assert.match(legacyEssay, /<meta name="robots" content="noindex, follow"/);
  assert.match(
    legacyEssay,
    /<link rel="canonical" href="https:\/\/liweiwu\.com\/en\/essay\/new-paper-and-pen-new-artists\/"/,
  );
  assert.doesNotMatch(englishHome, /Selecting your language/);
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
    /<loc>https:\/\/liweiwu\.com\/en\/essay\/new-paper-and-pen-new-artists\/<\/loc>/,
  );
  assert.match(sitemap, /xmlns:xhtml="http:\/\/www\.w3\.org\/1999\/xhtml"/);
  assert.match(sitemap, /hreflang="zh-Hans"/);
  assert.match(sitemap, /hreflang="ja"/);
  assert.match(sitemap, /<loc>https:\/\/liweiwu\.com\/ja\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/liweiwu\.com\/en\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/liweiwu\.com\/languages\/<\/loc>/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.doesNotMatch(
    sitemap,
    /<loc>https:\/\/liweiwu\.com\/essay\/new-paper-and-pen-new-artists\/<\/loc>|localhost/,
  );

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
  assert.match(feed, /<dc:language>ja<\/dc:language>/);
  assert.match(feed, /<content:encoded><!\[CDATA\[/);
  assert.match(llms, /# Liwei Wu \/ 吴立威/);
  assert.match(llms, /Full Markdown corpus/);
  assert.match(llms, /日本語プロフィール/);
  assert.match(llmsFull, /Translation status: original/);
  assert.match(llmsFull, /Translation status: ai-translated/);
  assert.match(llmsFull, /Translation status: author-reviewed/);
  assert.match(llmsFull, /Language: ja/);
  assert.equal(JSON.parse(manifest).name, "Liwei Wu / 吴立威");
  assert.equal(indexNow, "IndexNow is not configured.\n");

  for (const resource of [sitemap, robots, feed, llms, llmsFull]) {
    assert.doesNotMatch(resource, /http:\/\/localhost:3000/);
  }
});
