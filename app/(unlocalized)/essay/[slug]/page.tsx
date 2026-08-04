import type { Metadata } from "next";
import { LanguageGateway } from "@/components/LanguageGateway";
import { getAllContent, getTranslations } from "@/lib/content";
import { createLanguageOptions } from "@/lib/i18n/locale";
import { contentPath } from "@/lib/routes";
import { legacyContentGatewayMetadata } from "@/lib/seo/metadata";

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [...new Set(getAllContent().map((document) => document.slug))]
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getAllContent().find((document) => document.slug === slug);
  if (!essay) return {};
  return legacyContentGatewayMetadata(essay, getTranslations(essay.id));
}

export default async function LegacyEssayGatewayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getAllContent().find((document) => document.slug === slug);
  if (!essay) return null;
  const translations = getTranslations(essay.id);
  const destinations = Object.fromEntries(
    translations.map((translation) => [
      translation.locale,
      contentPath(translation.locale, translation.slug),
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
