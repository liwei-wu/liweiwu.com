import type { Metadata } from "next";
import type { ContentDocument } from "@/lib/content";
import { contentPath, localeHomePath } from "@/lib/routes";
import { siteConfig } from "@/site.config";

const verificationOther = Object.fromEntries(
  [
    ["msvalidate.01", process.env.BING_SITE_VERIFICATION],
    ["baidu-site-verification", process.env.BAIDU_SITE_VERIFICATION],
    ["360-site-verification", process.env.SO_SITE_VERIFICATION],
    ["sogou_site_verification", process.env.SOGOU_SITE_VERIFICATION],
  ].filter((entry): entry is [string, string] => Boolean(entry[1])),
);

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}

export function isChineseLocale(locale: string): boolean {
  return locale.toLowerCase().startsWith("zh");
}

export function localeCopy(locale: string) {
  const chinese = isChineseLocale(locale);
  return {
    author: chinese ? siteConfig.authorChinese : siteConfig.author,
    description: chinese ? siteConfig.description.zh : siteConfig.description.en,
    homeTitle: chinese ? siteConfig.homeTitle.zh : siteConfig.homeTitle.en,
  };
}

function openGraphLocale(locale: string): string {
  if (locale === "zh-Hans") return "zh_CN";
  if (locale === "zh-Hant") return "zh_TW";
  if (locale === "en") return "en_US";
  return locale.replace("-", "_");
}

function socialImage() {
  return {
    url: absoluteUrl(siteConfig.socialImage),
    width: 1200,
    height: 630,
    alt: "Liwei Wu — AI, software, and authorship",
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
  const copy = localeCopy(locale);
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
      types: {
        "application/rss+xml": absoluteUrl("/feed.xml"),
      },
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
      images: [socialImage()],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.homeTitle,
      description: copy.description,
      images: [socialImage()],
    },
  };
}

export function homeMetadata(
  locale: string,
  publishedLocales: readonly string[],
): Metadata {
  const copy = localeCopy(locale);
  const path = localeHomePath(locale);
  const languages = Object.fromEntries(
    publishedLocales.map((item) => [item, absoluteUrl(localeHomePath(item))]),
  );
  languages["x-default"] = absoluteUrl(localeHomePath(siteConfig.defaultLocale));

  return {
    title: { absolute: copy.homeTitle },
    description: copy.description,
    alternates: {
      canonical: absoluteUrl(path),
      languages,
      types: {
        "application/rss+xml": absoluteUrl("/feed.xml"),
      },
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
      lastName: locale === "en" ? "Wu" : "吴",
      username: siteConfig.author,
      images: [socialImage()],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.homeTitle,
      description: copy.description,
      images: [socialImage()],
    },
  };
}

export function contentMetadata(
  document: ContentDocument,
  translations: readonly ContentDocument[],
): Metadata {
  const copy = localeCopy(document.locale);
  const path = contentPath(document.locale, document.type, document.slug);
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
  const title = `${document.title} — ${copy.author}`;

  return {
    title: { absolute: title },
    description: document.description,
    authors: [{ name: copy.author, url: absoluteUrl(localeHomePath(document.locale)) }],
    category: document.type === "essay" ? "Essay" : "Note",
    alternates: {
      canonical: absoluteUrl(path),
      languages,
      types: {
        "application/rss+xml": absoluteUrl("/feed.xml"),
      },
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
      section: document.type === "essay" ? "Essays" : "Notes",
      tags: document.topics,
      images: [socialImage()],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: document.description,
      images: [socialImage()],
    },
  };
}

function personNode(locale: string, detailed = true) {
  const chinese = isChineseLocale(locale);
  const node: Record<string, unknown> = {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: chinese ? siteConfig.authorChinese : siteConfig.author,
    alternateName: [chinese ? siteConfig.author : siteConfig.authorChinese],
    url: absoluteUrl("/"),
    sameAs: [siteConfig.scholarUrl],
  };

  if (detailed) {
    node.description = localeCopy(locale).description;
    node.jobTitle = chinese
      ? ["AI 应用创业者", "深度飞轮创始人"]
      : ["AI Application Entrepreneur", "Founder of DeepFlywheel"];
    node.worksFor = { "@id": `${siteConfig.company.url}#organization` };
    node.alumniOf = [
      { "@type": "CollegeOrUniversity", name: "Nanjing University" },
      { "@type": "CollegeOrUniversity", name: "Tsinghua University" },
    ];
    node.knowsAbout = [
      "Artificial intelligence",
      "AI applications",
      "Software engineering",
      "Computer vision",
      "Intelligent hardware-software systems",
    ];
  }

  return node;
}

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.company.url}#organization`,
    name: siteConfig.company.name,
    alternateName: siteConfig.company.nameChinese,
    url: siteConfig.company.url,
    founder: { "@id": `${siteConfig.siteUrl}/#person` },
  };
}

function websiteNode(languages: readonly string[], locale: string) {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: absoluteUrl("/"),
    name: siteConfig.siteName,
    description: localeCopy(locale).description,
    inLanguage: [...new Set(languages)],
    publisher: { "@id": `${siteConfig.siteUrl}/#person` },
  };
}

export function homeStructuredData(
  locale: string,
  documents: readonly ContentDocument[],
  publishedLocales: readonly string[],
) {
  const copy = localeCopy(locale);
  const path = localeHomePath(locale);
  const pageId = `${absoluteUrl(path)}#profile`;
  const items = documents.map((document, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(contentPath(document.locale, document.type, document.slug)),
    name: document.title,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(locale),
      organizationNode(),
      websiteNode(publishedLocales, locale),
      {
        "@type": "ProfilePage",
        "@id": pageId,
        url: absoluteUrl(path),
        name: copy.homeTitle,
        description: copy.description,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        mainEntity: { "@id": `${siteConfig.siteUrl}/#person` },
        hasPart: documents.map((document) => ({
          "@type": document.type === "essay" ? "BlogPosting" : "CreativeWork",
          headline: document.title,
          url: absoluteUrl(
            contentPath(document.locale, document.type, document.slug),
          ),
          datePublished: document.publishedAt,
          author: { "@id": `${siteConfig.siteUrl}/#person` },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(path)}#publications`,
        name: isChineseLocale(locale) ? "吴立威的文章" : "Essays by Liwei Wu",
        itemListElement: items,
      },
    ],
  };
}

function wordCount(body: string): number {
  const cjk = body.match(/[\u3400-\u9fff\uf900-\ufaff]/g)?.length ?? 0;
  const latin = body
    .replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ")
    .replace(/[^\p{Letter}\p{Number}'’-]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return cjk + latin;
}

export function contentStructuredData(
  document: ContentDocument,
  translations: readonly ContentDocument[],
) {
  const path = contentPath(document.locale, document.type, document.slug);
  const pageUrl = absoluteUrl(path);
  const source = translations.find(
    (item) => item.locale === document.sourceLocale,
  );
  const translated = translations.filter(
    (item) => item.locale !== document.sourceLocale,
  );
  const article: Record<string, unknown> = {
    "@type": document.type === "essay" ? "BlogPosting" : "CreativeWork",
    "@id": `${pageUrl}#article`,
    headline: document.title,
    alternativeHeadline: document.subtitle,
    description: document.description,
    url: pageUrl,
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    image: [absoluteUrl(siteConfig.socialImage)],
    datePublished: document.publishedAt,
    dateModified: document.revisedAt ?? document.publishedAt,
    inLanguage: document.locale,
    isAccessibleForFree: true,
    author: { "@id": `${siteConfig.siteUrl}/#person` },
    publisher: { "@id": `${siteConfig.siteUrl}/#person` },
    copyrightHolder: { "@id": `${siteConfig.siteUrl}/#person` },
    copyrightYear: Number(document.publishedAt.slice(0, 4)),
    wordCount: wordCount(document.body),
    keywords: document.topics,
    about: document.topics.map((topic) => ({ "@type": "Thing", name: topic })),
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  };

  if (document.locale !== document.sourceLocale && source) {
    article.translationOfWork = {
      "@id": `${absoluteUrl(
        contentPath(source.locale, source.type, source.slug),
      )}#article`,
    };
  } else if (translated.length) {
    article.workTranslation = translated.map((item) => ({
      "@id": `${absoluteUrl(
        contentPath(item.locale, item.type, item.slug),
      )}#article`,
    }));
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(document.locale, false),
      websiteNode(
        translations.map((item) => item.locale),
        document.locale,
      ),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: document.title,
        description: document.description,
        inLanguage: document.locale,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.socialImage),
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      article,
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: localeCopy(document.locale).author,
            item: absoluteUrl(localeHomePath(document.locale)),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: document.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
