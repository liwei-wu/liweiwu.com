import type { Metadata } from "next";
import { EssayView } from "@/components/EssayView";
import { getAllContent, getContent, getTranslations } from "@/lib/content";
import { contentMetadata } from "@/lib/seo";

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
  return contentMetadata(essay, getTranslations(essay.id));
}

export default async function EnglishEssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  return <EssayView locale="en" slug={slug} autoDetect />;
}
