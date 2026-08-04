import type { Metadata } from "next";
import { LanguageGateway } from "@/components/LanguageGateway";
import { getPublishedLocales } from "@/lib/content";
import { createLanguageOptions } from "@/lib/i18n/locale";
import { localeHomePath } from "@/lib/routes";
import { gatewayMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = gatewayMetadata(getPublishedLocales());

export default function LanguageGatewayPage() {
  const locales = getPublishedLocales();
  const destinations = Object.fromEntries(
    locales.map((locale) => [locale, localeHomePath(locale)]),
  );
  return (
    <LanguageGateway
      destinations={destinations}
      options={createLanguageOptions("en", locales, destinations)}
    />
  );
}
