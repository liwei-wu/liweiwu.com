import type { MetadataRoute } from "next";
import { getAllContent, getPublishedLocales } from "@/lib/content";
import { siteConfig } from "@/site.config";
import { contentPath, localeHomePath } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const homes = getPublishedLocales().map((locale) => ({
    url: `${siteConfig.siteUrl}${localeHomePath(locale)}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const articles = getAllContent().map((document) => ({
    url: `${siteConfig.siteUrl}${contentPath(
      document.locale,
      document.type,
      document.slug,
    )}`,
    lastModified: document.revisedAt ?? document.publishedAt,
    changeFrequency: "yearly" as const,
    priority: document.type === "essay" ? 1 : 0.6,
  }));

  return [...homes, ...articles];
}
