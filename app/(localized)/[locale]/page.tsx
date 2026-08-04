import type { Metadata } from "next";
import { PublicationHome } from "@/components/PublicationHome";
import { getPublishedLocales } from "@/lib/content";
import { homeMetadata } from "@/lib/seo/metadata";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  return homeMetadata(locale, getPublishedLocales());
}

export default async function LocaleHome({ params }: HomePageProps) {
  const { locale } = await params;
  return <PublicationHome locale={locale} />;
}
