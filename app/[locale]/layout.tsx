import { notFound } from "next/navigation";
import { LocaleDocument } from "@/components/LocaleDocument";
import { getPublishedLocales } from "@/lib/content";
import { isRtl } from "@/lib/i18n";
import { DEFAULT_LOCALE } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedLocales()
    .filter((locale) => locale !== DEFAULT_LOCALE)
    .map((locale) => ({ locale }));
}

export default async function LocaleLayout({
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
    <div className="locale-root" lang={locale} dir={dir}>
      <LocaleDocument locale={locale} dir={dir} />
      {children}
    </div>
  );
}
