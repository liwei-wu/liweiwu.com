import type { Metadata } from "next";
import { LanguageGateway } from "@/components/LanguageGateway";
import { getAllContent, getContent, getTranslations } from "@/lib/content";
import { createLanguageOptions } from "@/lib/i18n";
import { contentPath } from "@/lib/routes";
import { legacyContentGatewayMetadata } from "@/lib/seo";

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
  return legacyContentGatewayMetadata(essay, getTranslations(essay.id));
}

export default async function EnglishEssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getContent("en", "essay", slug);
  if (!essay) return null;
  const translations = getTranslations(essay.id);
  const destinations = Object.fromEntries(
    translations.map((translation) => [
      translation.locale,
      contentPath(translation.locale, translation.type, translation.slug),
    ]),
  );
  return (
    <LanguageGateway
      destinations={destinations}
      options={createLanguageOptions(
        "en",
        translations.map((translation) => translation.locale),
        destinations,
      )}
    />
  );
}
