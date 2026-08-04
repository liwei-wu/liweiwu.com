"use client";

import { useEffect } from "react";
import { matchLocale } from "@/lib/i18n";
import { LANGUAGE_PREFERENCE_KEY } from "@/lib/localization";

interface LanguageRedirectProps {
  destinations: Record<string, string>;
  fallback: string;
}

export function LanguageRedirect({
  destinations,
  fallback,
}: LanguageRedirectProps) {
  useEffect(() => {
    const available = Object.keys(destinations);
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
    } catch {}
    const locale =
      saved && available.includes(saved)
        ? saved
        : matchLocale(navigator.languages, available, fallback);
    const destination = destinations[locale] ?? destinations[fallback];
    if (destination && window.location.pathname !== destination) {
      window.location.replace(destination);
    }
  }, [destinations, fallback]);

  return null;
}
