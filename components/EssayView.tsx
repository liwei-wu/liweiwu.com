import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { LanguageRedirect } from "@/components/LanguageRedirect";
import { SiteHeader } from "@/components/SiteHeader";
import { getContent, getTranslations, renderMarkdown } from "@/lib/content";
import { formatDate, getLanguageLabel } from "@/lib/i18n";
import { contentPath, localeHomePath } from "@/lib/routes";
import { contentStructuredData } from "@/lib/seo";
import { siteConfig } from "@/site.config";

interface EssayViewProps {
  locale: string;
  slug: string;
  autoDetect?: boolean;
}

export function EssayView({ locale, slug, autoDetect = false }: EssayViewProps) {
  const essay = getContent(locale, "essay", slug);
  if (!essay) notFound();

  const { html, toc } = renderMarkdown(essay.body);
  const translations = getTranslations(essay.id);
  const localeOptions = translations.map((translation) => ({
    locale: translation.locale,
    label: getLanguageLabel(translation.locale),
    href: contentPath(translation.locale, translation.type, translation.slug),
  }));
  const isAiTranslation = essay.translationStatus === "ai-translated";
  const chinese = locale.startsWith("zh");

  return (
    <SiteHeader
      author={chinese ? siteConfig.authorChinese : siteConfig.author}
      homeHref={localeHomePath(locale)}
      currentLocale={locale}
      localeOptions={localeOptions}
      toc={toc}
      contentsLabel={chinese ? "目录" : "Contents"}
    >
      <JsonLd data={contentStructuredData(essay, translations)} />
      {autoDetect ? (
        <LanguageRedirect
          destinations={Object.fromEntries(
            localeOptions.map((option) => [option.locale, option.href]),
          )}
          fallback="en"
        />
      ) : null}
      <main className="essay-main">
        <article className="essay" aria-labelledby="essay-title">
          <header className="essay-heading">
            <h1 id="essay-title">{essay.title}</h1>
            {essay.subtitle ? <p className="essay-subtitle">{essay.subtitle}</p> : null}
            <p className="essay-meta">
              <Link rel="author" href={localeHomePath(locale)}>
                {chinese ? siteConfig.authorChinese : siteConfig.author}
              </Link>
              <span aria-hidden="true"> · </span>
              <time dateTime={essay.publishedAt}>
                {formatDate(essay.publishedAt, locale)}
              </time>
              <span aria-hidden="true"> · </span>
              <span>
                {chinese ? `${essay.readingMinutes} 分钟` : `${essay.readingMinutes} min`}
              </span>
            </p>
          </header>

          <div
            className="essay-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <footer className="essay-footer">
            <p>
              {essay.revisedAt && essay.revisedAt !== essay.publishedAt
                ? chinese
                  ? `修订于 ${formatDate(essay.revisedAt, locale)}`
                  : `Revised ${formatDate(essay.revisedAt, locale)}`
                : chinese
                  ? `首次发表于 ${formatDate(essay.publishedAt, locale)}`
                  : `First published ${formatDate(essay.publishedAt, locale)}`}
              {isAiTranslation ? (
                <span className="translation-status">
                  <span aria-hidden="true"> · </span>
                  {chinese ? "AI 翻译" : "AI translation"}
                </span>
              ) : null}
            </p>
          </footer>
        </article>
      </main>
    </SiteHeader>
  );
}
