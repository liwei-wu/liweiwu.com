import localeConfig from "@/config/locales.json";

const REFERENCE_LOCALES = localeConfig.locales
  .filter((locale) => locale.tier === "A0")
  .map((locale) => locale.tag.toLowerCase());

export function isReferenceLocale(locale: string): boolean {
  const normalized = locale.toLowerCase();
  return REFERENCE_LOCALES.some(
    (reference) =>
      normalized === reference || normalized.startsWith(`${reference}-`),
  );
}

export function isAiTranslationLocale(locale: string): boolean {
  return !isReferenceLocale(locale);
}
