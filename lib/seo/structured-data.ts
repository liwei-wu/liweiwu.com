import type { ContentDocument } from "@/lib/content";
import { isChineseLocale, isJapaneseLocale } from "@/lib/i18n/locale";
import { contentPath, localeHomePath } from "@/lib/routes";
import { absoluteUrl, localizedSiteCopy } from "@/lib/seo/site";
import { siteConfig } from "@/site.config";

function personNode(locale: string, detailed = true) {
  const chinese = isChineseLocale(locale);
  const japanese = isJapaneseLocale(locale);
  const author = localizedSiteCopy(locale).author;
  const node: Record<string, unknown> = {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: author,
    alternateName: [
      ...new Set(
        [siteConfig.author, siteConfig.authorChinese, siteConfig.authorJapanese].filter(
          (name) => name !== author,
        ),
      ),
    ],
    url: absoluteUrl(localeHomePath("en")),
    sameAs: [siteConfig.scholarUrl],
  };

  if (detailed) {
    node.description = localizedSiteCopy(locale).description;
    node.jobTitle = chinese
      ? ["AI 应用创业者", "深度飞轮创始人"]
      : japanese
        ? ["AIアプリケーション起業家", "DeepFlywheel創業者"]
        : ["AI Application Entrepreneur", "Founder of DeepFlywheel"];
    node.worksFor = { "@id": `${siteConfig.company.url}#organization` };
    node.alumniOf = [
      siteConfig.entities.nanjingUniversity,
      siteConfig.entities.tsinghuaUniversity,
    ].map((university) => ({
      "@type": "CollegeOrUniversity",
      name: chinese
        ? university.nameChinese
        : japanese
          ? university.nameJapanese
          : university.name,
      url: chinese ? university.urls.zhHans : university.urls.en,
    }));
    node.knowsAbout = japanese
      ? [
          "人工知能",
          "AIアプリケーション",
          "ソフトウェア工学",
          "コンピュータビジョン",
          "知能化ハードウェア・ソフトウェアシステム",
        ]
      : [
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
    description: localizedSiteCopy(locale).description,
    inLanguage: [...new Set(languages)],
    publisher: { "@id": `${siteConfig.siteUrl}/#person` },
  };
}

export function homeStructuredData(
  locale: string,
  documents: readonly ContentDocument[],
  publishedLocales: readonly string[],
) {
  const copy = localizedSiteCopy(locale);
  const path = localeHomePath(locale);
  const items = documents.map((document, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(contentPath(document.locale, document.slug)),
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
        "@id": `${absoluteUrl(path)}#profile`,
        url: absoluteUrl(path),
        name: copy.homeTitle,
        description: copy.description,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        mainEntity: { "@id": `${siteConfig.siteUrl}/#person` },
        hasPart: documents.map((document) => ({
          "@type": "BlogPosting",
          headline: document.title,
          url: absoluteUrl(contentPath(document.locale, document.slug)),
          datePublished: document.publishedAt,
          author: { "@id": `${siteConfig.siteUrl}/#person` },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(path)}#publications`,
        name: isChineseLocale(locale)
          ? "吴立威的文章"
          : isJapaneseLocale(locale)
            ? "呉立威のエッセイ"
            : "Essays by Liwei Wu",
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
  const pageUrl = absoluteUrl(contentPath(document.locale, document.slug));
  const source = translations.find(
    (item) => item.locale === document.sourceLocale,
  );
  const translated = translations.filter(
    (item) => item.locale !== document.sourceLocale,
  );
  const article: Record<string, unknown> = {
    "@type": "BlogPosting",
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
      "@id": `${absoluteUrl(contentPath(source.locale, source.slug))}#article`,
    };
  } else if (translated.length) {
    article.workTranslation = translated.map((item) => ({
      "@id": `${absoluteUrl(contentPath(item.locale, item.slug))}#article`,
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
            name: localizedSiteCopy(document.locale).author,
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
