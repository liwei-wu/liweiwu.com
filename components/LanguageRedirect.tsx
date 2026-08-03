"use client";

import { useEffect } from "react";
import { matchLocale } from "@/lib/i18n";

interface LanguageRedirectProps {
  destinations: Record<string, string>;
  fallback: string;
}

export function LanguageRedirect({
  destinations,
  fallback,
}: LanguageRedirectProps) {
  useEffect(() => {
    const saved = window.localStorage.getItem("liweiwu.com-locale");
    const requested = saved ? [saved, ...navigator.languages] : navigator.languages;
    const available = Object.keys(destinations);
    const locale = matchLocale(requested, available, fallback);
    const destination = destinations[locale] ?? destinations[fallback];
    if (destination && window.location.pathname !== destination) {
      window.location.replace(destination);
    }
  }, [destinations, fallback]);

  return null;
}
