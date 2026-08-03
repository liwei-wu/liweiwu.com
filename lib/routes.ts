export const DEFAULT_LOCALE = "en";

export function localeHomePath(locale: string): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
}

export function contentPath(
  locale: string,
  type: "essay" | "note",
  slug: string,
): string {
  const path = `/${type}/${slug}/`;
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}
