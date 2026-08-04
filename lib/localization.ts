export function isReferenceLocale(locale: string): boolean {
  const normalized = locale.toLowerCase();
  return (
    normalized === "en" ||
    normalized.startsWith("en-") ||
    normalized.startsWith("zh")
  );
}

export function isAiTranslationLocale(locale: string): boolean {
  return !isReferenceLocale(locale);
}

export const LANGUAGE_PREFERENCE_KEY = "liweiwu.com-locale";
export const RECENT_LANGUAGE_PREFERENCES_KEY = "liweiwu.com-recent-locales";
