import type { Metadata } from "next";
import { PublicationHome } from "@/components/PublicationHome";
import { getPublishedLocales } from "@/lib/content";
import { localeHomePath } from "@/lib/routes";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    languages: {
      ...Object.fromEntries(
        getPublishedLocales().map((locale) => [locale, localeHomePath(locale)]),
      ),
      "x-default": "/",
    },
  },
};

export default function Home() {
  return <PublicationHome locale="en" autoDetect />;
}
