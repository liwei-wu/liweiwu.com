import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import {
  TranslationNotice,
} from "@/components/TranslationNotice";
import {
  getContent,
  getPublishedLocales,
  getTranslations,
  renderMarkdown,
} from "@/lib/content";
import { createLanguageOptions, formatDate } from "@/lib/i18n";
import { isReferenceLocale } from "@/lib/localization";
import { contentPath, localeHomePath } from "@/lib/routes";
import { contentStructuredData } from "@/lib/seo";
import { siteConfig } from "@/site.config";

interface EssayViewProps {
  locale: string;
  slug: string;
}

export function EssayView({ locale, slug }: EssayViewProps) {
  const essay = getContent(locale, "essay", slug);
  if (!essay) notFound();

  const { html, toc } = renderMarkdown(essay.body);
  const translations = getTranslations(essay.id);
  const localeDestinations = Object.fromEntries(
    translations.map((translation) => [
      translation.locale,
      contentPath(translation.locale, translation.type, translation.slug),
    ]),
  );
  const languageOptions = createLanguageOptions(
    locale,
    getPublishedLocales(),
    localeDestinations,
  );
  const englishEdition = translations.find(
    (translation) => translation.locale === "en",
  );
  const chineseEdition = translations.find((translation) =>
    translation.locale.startsWith("zh"),
  );
  if (!isReferenceLocale(locale) && (!englishEdition || !chineseEdition)) {
    throw new Error(
      `Non-reference edition ${locale}/${essay.slug} requires English and Chinese counterparts.`,
    );
  }
  const chinese = locale.startsWith("zh");
  const japanese = locale === "ja";
  const author = chinese
    ? siteConfig.authorChinese
    : japanese
      ? siteConfig.authorJapanese
      : siteConfig.author;

  return (
    <SiteHeader
      author={author}
      homeHref={localeHomePath(locale)}
      currentLocale={locale}
      languageOptions={languageOptions}
      toc={toc}
      contentsLabel={chinese ? "目录" : japanese ? "目次" : "Contents"}
    >
      <JsonLd data={contentStructuredData(essay, translations)} />
      <main className="essay-main">
        <article className="essay" aria-labelledby="essay-title">
          <header className="essay-heading">
            <h1 id="essay-title">{essay.title}</h1>
            {essay.subtitle ? <p className="essay-subtitle">{essay.subtitle}</p> : null}
            <p className="essay-meta">
              <Link rel="author" href={localeHomePath(locale)}>
                {author}
              </Link>
              <span aria-hidden="true"> · </span>
              <time dateTime={essay.publishedAt}>
                {formatDate(essay.publishedAt, locale)}
              </time>
              <span aria-hidden="true"> · </span>
              <span>
                {chinese
                  ? `${essay.readingMinutes} 分钟`
                  : japanese
                    ? `${essay.readingMinutes}分`
                    : `${essay.readingMinutes} min`}
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
                  : japanese
                    ? `${formatDate(essay.revisedAt, locale)}改訂`
                    : `Revised ${formatDate(essay.revisedAt, locale)}`
                : chinese
                  ? `首次发表于 ${formatDate(essay.publishedAt, locale)}`
                  : japanese
                    ? `${formatDate(essay.publishedAt, locale)}初出`
                    : `First published ${formatDate(essay.publishedAt, locale)}`}
            </p>
            <TranslationNotice
              locale={locale}
              englishHref={
                englishEdition
                  ? contentPath(
                      englishEdition.locale,
                      englishEdition.type,
                      englishEdition.slug,
                    )
                  : localeHomePath("en")
              }
              chineseHref={
                chineseEdition
                  ? contentPath(
                      chineseEdition.locale,
                      chineseEdition.type,
                      chineseEdition.slug,
                    )
                  : localeHomePath("zh-Hans")
              }
              className="translation-notice"
            />
          </footer>
        </article>
      </main>
    </SiteHeader>
  );
}
