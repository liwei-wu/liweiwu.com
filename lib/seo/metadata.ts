import type { Metadata } from "next";
import type { ContentDocument } from "@/lib/content";
import { isJapaneseLocale } from "@/lib/i18n/locale";
import {
  LANGUAGE_GATEWAY_PATH,
  contentPath,
  localeHomePath,
} from "@/lib/routes";
import { absoluteUrl, localizedSiteCopy } from "@/lib/seo/site";
import { siteConfig } from "@/site.config";

const verificationOther = Object.fromEntries(
  [
    ["msvalidate.01", process.env.BING_SITE_VERIFICATION],
    ["baidu-site-verification", process.env.BAIDU_SITE_VERIFICATION],
    ["360-site-verification", process.env.SO_SITE_VERIFICATION],
    ["sogou_site_verification", process.env.SOGOU_SITE_VERIFICATION],
  ].filter((entry): entry is [string, string] => Boolean(entry[1])),
);

function openGraphLocale(locale: string): string {
  if (locale === "zh-Hans") return "zh_CN";
  if (locale === "zh-Hant") return "zh_TW";
  if (locale === "en") return "en_US";
  if (locale === "ja") return "ja_JP";
  return locale.replace("-", "_");
}

function socialImage(locale = "en") {
  return {
    url: absoluteUrl(siteConfig.socialImage),
    width: 1200,
    height: 630,
    alt: localizedSiteCopy(locale).homeTitle,
  };
}

function verification(): Metadata["verification"] {
  return {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
    other: Object.keys(verificationOther).length ? verificationOther : undefined,
  };
}

export function rootMetadata(locale: string): Metadata {
  const copy = localizedSiteCopy(locale);
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    applicationName: siteConfig.siteName,
    title: {
      default: copy.homeTitle,
      template: `%s — ${copy.author}`,
    },
    description: copy.description,
    authors: [{ name: copy.author, url: absoluteUrl(localeHomePath(locale)) }],
    creator: copy.author,
    publisher: copy.author,
    referrer: "strict-origin-when-cross-origin",
    alternates: {
      types: { "application/rss+xml": absoluteUrl("/feed.xml") },
    },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: verification(),
    openGraph: {
      type: "website",
      siteName: siteConfig.siteName,
      title: copy.homeTitle,
      description: copy.description,
      locale: openGraphLocale(locale),
      images: [socialImage(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.homeTitle,
      description: copy.description,
      images: [socialImage(locale)],
    },
  };
}

export function homeMetadata(
  locale: string,
  publishedLocales: readonly string[],
): Metadata {
  const copy = localizedSiteCopy(locale);
  const path = localeHomePath(locale);
  const languages = Object.fromEntries(
    publishedLocales.map((item) => [item, absoluteUrl(localeHomePath(item))]),
  );
  languages["x-default"] = absoluteUrl(LANGUAGE_GATEWAY_PATH);

  return {
    title: { absolute: copy.homeTitle },
    description: copy.description,
    alternates: {
      canonical: absoluteUrl(path),
      languages,
      types: { "application/rss+xml": absoluteUrl("/feed.xml") },
    },
    openGraph: {
      type: "profile",
      url: absoluteUrl(path),
      siteName: siteConfig.siteName,
      title: copy.homeTitle,
      description: copy.description,
      locale: openGraphLocale(locale),
      alternateLocale: publishedLocales
        .filter((item) => item !== locale)
        .map(openGraphLocale),
      firstName: locale === "en" ? "Liwei" : "立威",
      lastName: isJapaneseLocale(locale) ? "呉" : locale === "en" ? "Wu" : "吴",
      username: siteConfig.author,
      images: [socialImage(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.homeTitle,
      description: copy.description,
      images: [socialImage(locale)],
    },
  };
}

export function gatewayMetadata(
  publishedLocales: readonly string[],
): Metadata {
  const copy = localizedSiteCopy(siteConfig.defaultLocale);
  const languages = Object.fromEntries(
    publishedLocales.map((locale) => [
      locale,
      absoluteUrl(localeHomePath(locale)),
    ]),
  );
  languages["x-default"] = absoluteUrl(LANGUAGE_GATEWAY_PATH);

  return {
    title: { absolute: copy.homeTitle },
    description: copy.description,
    alternates: {
      canonical: absoluteUrl(LANGUAGE_GATEWAY_PATH),
      languages,
      types: { "application/rss+xml": absoluteUrl("/feed.xml") },
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(LANGUAGE_GATEWAY_PATH),
      siteName: siteConfig.siteName,
      title: copy.homeTitle,
      description: copy.description,
      images: [socialImage(siteConfig.defaultLocale)],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.homeTitle,
      description: copy.description,
      images: [socialImage(siteConfig.defaultLocale)],
    },
  };
}

export function contentMetadata(
  document: ContentDocument,
  translations: readonly ContentDocument[],
): Metadata {
  const copy = localizedSiteCopy(document.locale);
  const path = contentPath(document.locale, document.slug);
  const defaultTranslation =
    translations.find((item) => item.locale === siteConfig.defaultLocale) ??
    translations.find((item) => item.locale === document.sourceLocale) ??
    document;
  const languages = Object.fromEntries(
    translations.map((translation) => [
      translation.locale,
      absoluteUrl(contentPath(translation.locale, translation.slug)),
    ]),
  );
  languages["x-default"] = absoluteUrl(
    contentPath(defaultTranslation.locale, defaultTranslation.slug),
  );
  const title = `${document.title} — ${copy.author}`;

  return {
    title: { absolute: title },
    description: document.description,
    authors: [
      { name: copy.author, url: absoluteUrl(localeHomePath(document.locale)) },
    ],
    category: document.locale === "ja" ? "エッセイ" : "Essay",
    alternates: {
      canonical: absoluteUrl(path),
      languages,
      types: { "application/rss+xml": absoluteUrl("/feed.xml") },
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      siteName: siteConfig.siteName,
      title: document.title,
      description: document.description,
      locale: openGraphLocale(document.locale),
      alternateLocale: translations
        .filter((item) => item.locale !== document.locale)
        .map((item) => openGraphLocale(item.locale)),
      publishedTime: document.publishedAt,
      modifiedTime: document.revisedAt ?? document.publishedAt,
      authors: [absoluteUrl(localeHomePath(document.locale))],
      section: document.locale === "ja" ? "エッセイ" : "Essays",
      tags: document.topics,
      images: [socialImage(document.locale)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: document.description,
      images: [socialImage(document.locale)],
    },
  };
}

export function legacyContentGatewayMetadata(
  document: ContentDocument,
  translations: readonly ContentDocument[],
): Metadata {
  const canonical =
    translations.find((item) => item.locale === siteConfig.defaultLocale) ??
    translations.find((item) => item.locale === document.sourceLocale) ??
    document;
  const languages = Object.fromEntries(
    translations.map((translation) => [
      translation.locale,
      absoluteUrl(contentPath(translation.locale, translation.slug)),
    ]),
  );
  languages["x-default"] = absoluteUrl(
    contentPath(canonical.locale, canonical.slug),
  );

  return {
    title: { absolute: document.title },
    description: document.description,
    alternates: {
      canonical: absoluteUrl(contentPath(canonical.locale, canonical.slug)),
      languages,
    },
    robots: { index: false, follow: true },
  };
}
