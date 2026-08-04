import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import { DocumentShell } from "@/components/DocumentShell";
import { getPublishedLocales } from "@/lib/content";
import { isRtl } from "@/lib/i18n";
import { DEFAULT_LOCALE } from "@/lib/routes";
import { rootMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedLocales()
    .filter((locale) => locale !== DEFAULT_LOCALE)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return rootMetadata(locale);
}

export default async function LocaleRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (locale === DEFAULT_LOCALE || !getPublishedLocales().includes(locale)) notFound();
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <DocumentShell lang={locale} dir={dir}>
      {children}
    </DocumentShell>
  );
}
