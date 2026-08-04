export const DEFAULT_LOCALE = "en";

export function localeHomePath(locale: string): string {
  return `/${locale}/`;
}

export function contentPath(
  locale: string,
  slug: string,
): string {
  return `/${locale}/essay/${slug}/`;
}

export function legacyContentGatewayPath(slug: string): string {
  return `/essay/${slug}/`;
}

export const LANGUAGE_GATEWAY_PATH = "/";
