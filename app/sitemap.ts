import type { MetadataRoute } from "next";
import { getAllContent, getPublishedLocales, getTranslations } from "@/lib/content";
import {
  LANGUAGE_DIRECTORY_PATH,
  LANGUAGE_GATEWAY_PATH,
  contentPath,
  localeHomePath,
} from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const documents = getAllContent();
  const publishedLocales = getPublishedLocales();
  const homeLanguages = Object.fromEntries(
    publishedLocales.map((locale) => [locale, absoluteUrl(localeHomePath(locale))]),
  );
  homeLanguages["x-default"] = absoluteUrl(LANGUAGE_GATEWAY_PATH);

  const homes = publishedLocales.map((locale) => {
    const localeDocuments = documents.filter((item) => item.locale === locale);
    const lastModified = localeDocuments
      .map((item) => item.revisedAt ?? item.publishedAt)
      .sort()
      .at(-1);

    return {
      url: absoluteUrl(localeHomePath(locale)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: homeLanguages },
    };
  });

  const articles = documents.map((document) => {
    const translations = getTranslations(document.id);
    const defaultTranslation =
      translations.find((item) => item.locale === siteConfig.defaultLocale) ??
      translations.find((item) => item.locale === document.sourceLocale) ??
      document;
    const languages = Object.fromEntries(
      translations.map((translation) => [
        translation.locale,
        absoluteUrl(
          contentPath(translation.locale, translation.type, translation.slug),
        ),
      ]),
    );
    languages["x-default"] = absoluteUrl(
      contentPath(
        defaultTranslation.locale,
        defaultTranslation.type,
        defaultTranslation.slug,
      ),
    );

    return {
      url: absoluteUrl(
        contentPath(document.locale, document.type, document.slug),
      ),
      lastModified: document.revisedAt ?? document.publishedAt,
      changeFrequency: "yearly" as const,
      priority: document.type === "essay" ? 1 : 0.6,
      alternates: { languages },
    };
  });

  return [
    ...homes,
    ...articles,
    {
      url: absoluteUrl(LANGUAGE_DIRECTORY_PATH),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];
}
