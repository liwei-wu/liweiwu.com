import type { Metadata } from "next";
import { LanguageDirectoryList } from "@/components/LanguageDirectoryList";
import { SiteHeader } from "@/components/SiteHeader";
import { getPublishedLocales } from "@/lib/content";
import { createLanguageOptions } from "@/lib/i18n";
import { LANGUAGE_DIRECTORY_PATH, localeHomePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: { absolute: "Languages — Liwei Wu" },
  description: "Choose a language for Liwei Wu's website.",
  alternates: { canonical: absoluteUrl(LANGUAGE_DIRECTORY_PATH) },
};

export default function LanguagesPage() {
  const locales = getPublishedLocales();
  const destinations = Object.fromEntries(
    locales.map((locale) => [locale, localeHomePath(locale)]),
  );
  const options = createLanguageOptions("en", locales, destinations);

  return (
    <SiteHeader
      author={siteConfig.author}
      homeHref={localeHomePath("en")}
      currentLocale="en"
      languageOptions={options}
    >
      <main className="language-directory">
        <h1>Languages</h1>
        <p>Choose your preferred language.</p>
        <LanguageDirectoryList options={options} />
      </main>
    </SiteHeader>
  );
}
