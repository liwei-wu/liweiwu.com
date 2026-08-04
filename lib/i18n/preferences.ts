export const LANGUAGE_PREFERENCE_KEY = "liweiwu.com-locale";
export const RECENT_LANGUAGE_PREFERENCES_KEY = "liweiwu.com-recent-locales";

export function readLanguagePreference(): string | null {
  try {
    return localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
  } catch {
    return null;
  }
}

export function readRecentLanguagePreferences(): string[] {
  try {
    const value = JSON.parse(
      localStorage.getItem(RECENT_LANGUAGE_PREFERENCES_KEY) ?? "[]",
    );
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function saveLanguagePreference(locale: string): void {
  try {
    localStorage.setItem(LANGUAGE_PREFERENCE_KEY, locale);
    const recent = [
      locale,
      ...readRecentLanguagePreferences().filter((item) => item !== locale),
    ];
    localStorage.setItem(
      RECENT_LANGUAGE_PREFERENCES_KEY,
      JSON.stringify(recent.slice(0, 5)),
    );
  } catch {
    // The selected link still works when browser storage is unavailable.
  }
}
