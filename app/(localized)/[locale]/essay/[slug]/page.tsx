import type { Metadata } from "next";
import { EssayView } from "@/components/EssayView";
import { getAllContent, getContent, getTranslations } from "@/lib/content";
import { contentMetadata } from "@/lib/seo";

interface EssayPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllContent()
    .filter((document) => document.type === "essay")
    .map((document) => ({ locale: document.locale, slug: document.slug }));
}

export async function generateMetadata({ params }: EssayPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const essay = getContent(locale, "essay", slug);
  if (!essay) return {};
  return contentMetadata(essay, getTranslations(essay.id));
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { locale, slug } = await params;
  return <EssayView locale={locale} slug={slug} />;
}
