import languageConfig from "@/languages.json";
import { DEFAULT_LOCALE } from "@/lib/routes";

export const ALL_LANGUAGE_TAGS = languageConfig.languages;
export { DEFAULT_LOCALE };

const RTL_LANGUAGES = new Set([
  "ar",
  "dv",
  "fa",
  "he",
  "ku",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
]);

export function isRtl(locale: string): boolean {
  return RTL_LANGUAGES.has(locale.split("-")[0].toLowerCase());
}

function normalizeChinese(tag: string): "zh-Hans" | "zh-Hant" {
  const normalized = tag.replace(/_/g, "-");
  const parts = normalized.split("-");
  const script = parts.find((part) => /^(Hans|Hant)$/i.test(part));
  const region = parts.find((part) => /^(TW|HK|MO|CN|SG)$/i.test(part));

  if (/^Hant$/i.test(script ?? "") || /^(TW|HK|MO)$/i.test(region ?? "")) {
    return "zh-Hant";
  }
  return "zh-Hans";
}

export function matchLocale(
  requested: readonly string[],
  available: readonly string[],
  fallback = DEFAULT_LOCALE,
): string {
  const availableSet = new Set(available);

  for (const rawTag of requested) {
    if (!rawTag) continue;
    const tag = rawTag.replace(/_/g, "-");
    const base = tag.split("-")[0].toLowerCase();

    if (base === "zh") {
      const chinese = normalizeChinese(tag);
      if (availableSet.has(chinese)) return chinese;
      continue;
    }

    const direct = available.find(
      (locale) => locale.toLowerCase() === tag.toLowerCase(),
    );
    if (direct) return direct;
    if (availableSet.has(base)) return base;
  }

  return availableSet.has(fallback) ? fallback : available[0] ?? fallback;
}

export function getLanguageLabel(locale: string): string {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "language" });
    return displayNames.of(locale) ?? locale;
  } catch {
    return locale;
  }
}

export function formatDate(date: string, locale: string): string {
  const normalizedLocale = locale === "zh-Hans" ? "zh-CN" : locale === "zh-Hant" ? "zh-TW" : locale;
  return new Intl.DateTimeFormat(normalizedLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function formatMonth(date: string, locale: string): string {
  const normalizedLocale =
    locale === "zh-Hans" ? "zh-CN" : locale === "zh-Hant" ? "zh-TW" : locale;
  return new Intl.DateTimeFormat(normalizedLocale, {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
