import { DEFAULT_LOCALE } from "@/lib/routes";

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

export function isChineseLocale(locale: string): boolean {
  return locale.toLowerCase().startsWith("zh");
}

export function isJapaneseLocale(locale: string): boolean {
  const normalized = locale.toLowerCase();
  return normalized === "ja" || normalized.startsWith("ja-");
}

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
  return findLocaleMatch(requested, available) ??
    (available.includes(fallback) ? fallback : available[0] ?? fallback);
}

export function findLocaleMatch(
  requested: readonly string[],
  available: readonly string[],
): string | undefined {
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
}

export function getLanguageLabel(
  locale: string,
  displayLocale = locale,
): string {
  try {
    const displayNames = new Intl.DisplayNames([displayLocale], {
      type: "language",
    });
    return displayNames.of(locale) ?? locale;
  } catch {
    return locale;
  }
}

export interface LanguageOption {
  locale: string;
  nativeName: string;
  currentName: string;
  englishName: string;
  href?: string;
}

export function createLanguageOptions(
  currentLocale: string,
  locales: readonly string[],
  destinations: Readonly<Record<string, string | undefined>>,
): LanguageOption[] {
  return locales
    .map((locale) => ({
      locale,
      nativeName: getLanguageLabel(locale),
      currentName: getLanguageLabel(locale, currentLocale),
      englishName: getLanguageLabel(locale, "en"),
      href: destinations[locale],
    }))
    .sort((a, b) => {
      if (a.locale === currentLocale) return -1;
      if (b.locale === currentLocale) return 1;

      return (
        a.currentName.localeCompare(b.currentName, currentLocale, {
          sensitivity: "base",
        }) ||
        a.englishName.localeCompare(b.englishName, "en", {
          sensitivity: "base",
        }) ||
        a.locale.localeCompare(b.locale)
      );
    });
}

function dateLocale(locale: string): string {
  if (locale === "zh-Hans") return "zh-CN";
  if (locale === "zh-Hant") return "zh-TW";
  return locale;
}

export function formatDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(dateLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function formatMonth(date: string, locale: string): string {
  return new Intl.DateTimeFormat(dateLocale(locale), {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
