import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import { DocumentShell } from "@/components/DocumentShell";
import { getPublishedLocales } from "@/lib/content";
import { isRtl } from "@/lib/i18n/locale";
import { assertUiMessageCoverage } from "@/lib/i18n/messages";
import { rootMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  const locales = getPublishedLocales();
  assertUiMessageCoverage(locales);
  return locales.map((locale) => ({ locale }));
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
  if (!getPublishedLocales().includes(locale)) notFound();
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <DocumentShell lang={locale} dir={dir}>
      {children}
    </DocumentShell>
  );
}
