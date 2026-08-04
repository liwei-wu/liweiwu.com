import { getAllContent, getHomeContent } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import { contentPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cdata(value: string): string {
  return value.replace(/]]>/g, "]]]]><![CDATA[>");
}

export function GET() {
  const documents = getAllContent();
  const englishHome = getHomeContent(siteConfig.defaultLocale);
  const lastModified = documents
    .map((document) => document.revisedAt ?? document.publishedAt)
    .sort()
    .at(-1);
  const items = documents
    .map((document) => {
      const url = absoluteUrl(
        contentPath(document.locale, document.slug),
      );
      const { html } = renderMarkdown(document.body, document.locale);
      const categories = document.topics
        .map((topic) => `<category>${escapeXml(topic)}</category>`)
        .join("");

      return [
        "<item>",
        `<title>${escapeXml(document.title)}</title>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `<description>${escapeXml(document.description)}</description>`,
        `<content:encoded><![CDATA[${cdata(html)}]]></content:encoded>`,
        `<dc:creator>${escapeXml(siteConfig.author)}</dc:creator>`,
        `<dc:language>${escapeXml(document.locale)}</dc:language>`,
        `<pubDate>${new Date(`${document.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>`,
        categories,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    "<channel>",
    `<title>${escapeXml(siteConfig.siteName)}</title>`,
    `<link>${escapeXml(absoluteUrl("/"))}</link>`,
    `<description>${escapeXml(englishHome.description)}</description>`,
    `<language>en</language>`,
    `<atom:link href="${escapeXml(absoluteUrl("/feed.xml"))}" rel="self" type="application/rss+xml"/>`,
    `<lastBuildDate>${new Date(`${lastModified ?? "1970-01-01"}T00:00:00Z`).toUTCString()}</lastBuildDate>`,
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
