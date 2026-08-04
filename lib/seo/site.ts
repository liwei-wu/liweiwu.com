import { getHomeContent } from "@/lib/content";
import { isChineseLocale, isJapaneseLocale } from "@/lib/i18n/locale";
import { siteConfig } from "@/site.config";

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}

export function localizedSiteCopy(locale: string) {
  const home = getHomeContent(locale);
  return {
    author: isChineseLocale(locale)
      ? siteConfig.authorChinese
      : isJapaneseLocale(locale)
        ? siteConfig.authorJapanese
        : siteConfig.author,
    description: home.description,
    homeTitle: home.title,
  };
}
