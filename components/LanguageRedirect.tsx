"use client";

import { useEffect } from "react";
import { matchLocale } from "@/lib/i18n/locale";
import { readLanguagePreference } from "@/lib/i18n/preferences";

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
    const saved = readLanguagePreference();
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
