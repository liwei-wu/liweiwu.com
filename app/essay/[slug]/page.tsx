import type { Metadata } from "next";
import { EssayView } from "@/components/EssayView";
import { getAllContent, getContent, getTranslations } from "@/lib/content";
import { contentPath } from "@/lib/routes";
import { siteConfig } from "@/site.config";

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllContent()
    .filter((document) => document.type === "essay" && document.locale === "en")
    .map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({ params }: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getContent("en", "essay", slug);
  if (!essay) return {};
  const translations = getTranslations(essay.id);

  return {
    title: essay.title,
    description: essay.description,
    authors: [{ name: siteConfig.author }],
    alternates: {
      canonical: contentPath("en", "essay", essay.slug),
      languages: {
        ...Object.fromEntries(
          translations.map((translation) => [
            translation.locale,
            contentPath(translation.locale, translation.type, translation.slug),
          ]),
        ),
        "x-default": contentPath("en", "essay", essay.slug),
      },
    },
    openGraph: {
      type: "article",
      title: essay.title,
      description: essay.description,
      publishedTime: essay.publishedAt,
      modifiedTime: essay.revisedAt,
      locale: "en",
    },
  };
}

export default async function EnglishEssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  return <EssayView locale="en" slug={slug} autoDetect />;
}
