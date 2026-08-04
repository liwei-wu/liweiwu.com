import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://liweiwu.com").replace(
  /\/$/,
  "",
);
const dryRun = process.argv.includes("--dry-run");

async function canonicalUrls() {
  const sitemapPath = path.join(root, "out", "sitemap.xml");
  let sitemap;
  try {
    sitemap = await readFile(sitemapPath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new Error("Missing out/sitemap.xml. Run npm run build before submitting URLs.");
    }
    throw error;
  }

  const expectedOrigin = new URL(siteUrl).origin;
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1]
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'"),
  );
  if (!urls.length) throw new Error(`No canonical URLs found in ${sitemapPath}.`);
  for (const url of urls) {
    if (new URL(url).origin !== expectedOrigin) {
      throw new Error(
        `Sitemap URL origin does not match NEXT_PUBLIC_SITE_URL: ${url}`,
      );
    }
  }
  return [...new Set(urls)].sort();
}

async function submitIndexNow(urlList) {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) return false;
  const payload = {
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/indexnow-key.txt`,
    urlList,
  };

  if (dryRun) {
    console.log(`IndexNow: would submit ${urlList.length} URLs.`);
    return true;
  }

  const keyLocation = `${siteUrl}/indexnow-key.txt`;
  const keyResponse = await fetch(keyLocation);
  const deployedKey = (await keyResponse.text()).trim();
  if (!keyResponse.ok || deployedKey !== key) {
    throw new Error(
      `IndexNow key is not deployed at ${keyLocation}. Build and deploy with INDEXNOW_KEY first.`,
    );
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`IndexNow ${response.status}: ${await response.text()}`);
  }
  console.log(`IndexNow: submitted ${urlList.length} URLs (${response.status}).`);
  return true;
}

async function submitBaidu(urlList) {
  const endpoint = process.env.BAIDU_PUSH_ENDPOINT?.trim();
  if (!endpoint) return false;

  if (dryRun) {
    console.log(`Baidu: would submit ${urlList.length} URLs.`);
    return true;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    body: `${urlList.join("\n")}\n`,
  });
  const body = await response.text();
  if (!response.ok) throw new Error(`Baidu ${response.status}: ${body}`);
  console.log(`Baidu: submitted ${urlList.length} URLs. ${body}`);
  return true;
}

const urls = await canonicalUrls();
if (dryRun) {
  console.log(`Canonical URLs (${urls.length}):\n${urls.join("\n")}`);
}
const results = await Promise.all([submitIndexNow(urls), submitBaidu(urls)]);
if (!results.some(Boolean) && !dryRun) {
  throw new Error(
    "No submission provider is configured. Set INDEXNOW_KEY and/or BAIDU_PUSH_ENDPOINT.",
  );
}
