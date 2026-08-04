export const LANGUAGE_PREFERENCE_KEY = "liweiwu.com-locale";

export function readLanguagePreference(): string | null {
  try {
    return localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
  } catch {
    return null;
  }
}

export function saveLanguagePreference(locale: string): void {
  try {
    localStorage.setItem(LANGUAGE_PREFERENCE_KEY, locale);
  } catch {
    // The selected link still works when browser storage is unavailable.
  }
}
