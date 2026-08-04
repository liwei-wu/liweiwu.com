export const DEFAULT_LOCALE = "en";

export function localeHomePath(locale: string): string {
  return `/${locale}/`;
}

export function contentPath(
  locale: string,
  type: "essay" | "note",
  slug: string,
): string {
  return `/${locale}/${type}/${slug}/`;
}

export function legacyContentGatewayPath(
  type: "essay" | "note",
  slug: string,
): string {
  return `/${type}/${slug}/`;
}

export const LANGUAGE_GATEWAY_PATH = "/";
export const LANGUAGE_DIRECTORY_PATH = "/languages/";
