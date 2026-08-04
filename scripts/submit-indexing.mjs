import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://liweiwu.com").replace(
  /\/$/,
  "",
);
const dryRun = process.argv.includes("--dry-run");

async function canonicalUrls() {
  const contentRoot = path.join(root, "content");
  const localeEntries = await readdir(contentRoot, { withFileTypes: true });
  const locales = localeEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const urls = locales.map((locale) =>
    locale === "en" ? `${siteUrl}/` : `${siteUrl}/${locale}/`,
  );

  for (const locale of locales) {
    const localeDirectory = path.join(contentRoot, locale);
    const typeEntries = await readdir(localeDirectory, { withFileTypes: true });
    for (const typeEntry of typeEntries) {
      if (!typeEntry.isDirectory()) continue;
      const type = typeEntry.name.replace(/s$/, "");
      const directory = path.join(localeDirectory, typeEntry.name);
      const files = (await readdir(directory)).filter((file) => file.endsWith(".md"));
      for (const file of files) {
        const { data } = matter(await readFile(path.join(directory, file), "utf8"));
        const prefix = locale === "en" ? "" : `/${locale}`;
        urls.push(`${siteUrl}${prefix}/${type}/${data.slug}/`);
      }
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
