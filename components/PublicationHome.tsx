import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { TranslationNotice } from "@/components/TranslationNotice";
import {
  getContentByLocale,
  getHomeContent,
  getPublishedLocales,
} from "@/lib/content";
import {
  createLanguageOptions,
  formatMonth,
  isChineseLocale,
  isJapaneseLocale,
} from "@/lib/i18n/locale";
import { getUiMessages } from "@/lib/i18n/messages";
import { renderMarkdown } from "@/lib/markdown";
import { contentPath, localeHomePath } from "@/lib/routes";
import { homeStructuredData } from "@/lib/seo/structured-data";
import { siteConfig } from "@/site.config";

interface PublicationHomeProps {
  locale: string;
}

export function PublicationHome({ locale }: PublicationHomeProps) {
  const chinese = isChineseLocale(locale);
  const japanese = isJapaneseLocale(locale);
  const copy = getUiMessages(locale);
  const author = chinese
    ? siteConfig.authorChinese
    : japanese
      ? siteConfig.authorJapanese
      : siteConfig.author;
  const essays = getContentByLocale(locale);
  const home = getHomeContent(locale);
  const { html: introductionHtml } = renderMarkdown(home.body, home.locale);
  const publishedLocales = getPublishedLocales();
  const localeDestinations = Object.fromEntries(
    publishedLocales.map((item) => [item, localeHomePath(item)]),
  );
  const languageOptions = createLanguageOptions(
    locale,
    publishedLocales,
    localeDestinations,
  );

  return (
    <SiteHeader
      author={author}
      homeHref={localeHomePath(locale)}
      currentLocale={locale}
      languageOptions={languageOptions}
    >
      <JsonLd
        data={homeStructuredData(locale, essays, publishedLocales)}
      />
      <main className="home-main">
        <article className="home-content">
          <h1 className="sr-only">{home.title}</h1>
          <div
            className="home-introduction"
            dangerouslySetInnerHTML={{ __html: introductionHtml }}
          />

          <section className="home-section">
            <h2>{copy.home.essays}</h2>
            <ul className="publication-list">
              {essays.map((essay) => (
                <li key={essay.id}>
                  <Link href={contentPath(locale, essay.slug)}>
                    {essay.title}
                  </Link>
                  <span className="publication-date-inline">
                    {chinese || japanese
                      ? `（${formatMonth(essay.publishedAt, locale)}）`
                      : ` (${formatMonth(essay.publishedAt, locale)})`}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="home-section">
            <h2>{copy.home.research}</h2>
            <ul className="publication-list">
              <li>
                <a href={siteConfig.scholarUrl} rel="me">
                  Google Scholar
                </a>
              </li>
            </ul>
          </section>

          <TranslationNotice
            locale={locale}
            englishHref={localeHomePath("en")}
            chineseHref={localeHomePath("zh-Hans")}
            as="footer"
            className="home-footer translation-notice"
          />
        </article>
      </main>
    </SiteHeader>
  );
}
