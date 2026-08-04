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
} from "@/lib/content";
import {
  createLanguageOptions,
  formatDate,
  isChineseLocale,
  isJapaneseLocale,
} from "@/lib/i18n/locale";
import { getUiMessages } from "@/lib/i18n/messages";
import { isReferenceLocale } from "@/lib/i18n/policy";
import { renderMarkdown } from "@/lib/markdown";
import { contentPath, localeHomePath } from "@/lib/routes";
import { contentStructuredData } from "@/lib/seo/structured-data";
import { siteConfig } from "@/site.config";

interface EssayViewProps {
  locale: string;
  slug: string;
}

export function EssayView({ locale, slug }: EssayViewProps) {
  const essay = getContent(locale, slug);
  if (!essay) notFound();

  const { html, toc } = renderMarkdown(essay.body, essay.locale);
  const translations = getTranslations(essay.id);
  const localeDestinations = Object.fromEntries(
    translations.map((translation) => [
      translation.locale,
      contentPath(translation.locale, translation.slug),
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
  const chineseEdition = translations.find(
    (translation) => translation.locale === "zh-Hans",
  );
  if (!isReferenceLocale(locale) && (!englishEdition || !chineseEdition)) {
    throw new Error(
      `Non-reference edition ${locale}/${essay.slug} requires English and Chinese counterparts.`,
    );
  }
  const chinese = isChineseLocale(locale);
  const japanese = isJapaneseLocale(locale);
  const copy = getUiMessages(locale);
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
      contentsLabel={copy.navigation.contents}
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
                {copy.essay.readingMinutes(essay.readingMinutes)}
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
                ? copy.essay.revised(formatDate(essay.revisedAt, locale))
                : copy.essay.firstPublished(formatDate(essay.publishedAt, locale))}
            </p>
            <TranslationNotice
              locale={locale}
              englishHref={
                englishEdition
                  ? contentPath(englishEdition.locale, englishEdition.slug)
                  : localeHomePath("en")
              }
              chineseHref={
                chineseEdition
                  ? contentPath(chineseEdition.locale, chineseEdition.slug)
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
