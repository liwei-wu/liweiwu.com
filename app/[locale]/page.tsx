import type { Metadata } from "next";
import { PublicationHome } from "@/components/PublicationHome";
import { getPublishedLocales } from "@/lib/content";
import { localeHomePath } from "@/lib/routes";
import { siteConfig } from "@/site.config";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const chinese = locale.startsWith("zh");
  return {
    title: siteConfig.title,
    description: chinese
      ? "吴立威关于 AI、软件与作者身份的文章。"
      : siteConfig.description,
    alternates: {
      canonical: localeHomePath(locale),
      languages: {
        ...Object.fromEntries(
          getPublishedLocales().map((item) => [item, localeHomePath(item)]),
        ),
        "x-default": "/",
      },
    },
  };
}

export default async function LocaleHome({ params }: HomePageProps) {
  const { locale } = await params;
  return <PublicationHome locale={locale} />;
}
