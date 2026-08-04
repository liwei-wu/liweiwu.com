import {
  getAllContent,
  getHomeContent,
  getPublishedLocales,
} from "@/lib/content";
import { contentPath, localeHomePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

export function GET() {
  const documents = getAllContent();
  const englishHome = getHomeContent(siteConfig.defaultLocale);
  const profiles = getPublishedLocales()
    .map((locale) => {
      const home = getHomeContent(locale);
      return `- [${home.title}](${absoluteUrl(localeHomePath(locale))}): ${home.description} [${locale}; ${home.translationStatus}]`;
    })
    .join("\n");
  const publications = documents
    .map(
      (document) =>
        `- [${document.title}](${absoluteUrl(
          contentPath(document.locale, document.slug),
        )}): ${document.description} [${document.locale}; ${document.translationStatus}]`,
    )
    .join("\n");

  const body = `# Liwei Wu / 吴立威 / 呉立威

> ${englishHome.description}

This is the canonical personal publication of Liwei Wu. Simplified Chinese is the source language for current essays. Every translated page states its language and review status.

## Author profiles

${profiles}
- [Google Scholar](${siteConfig.scholarUrl})
- [DeepFlywheel](${siteConfig.company.url})

## Publications

${publications}

## Machine-readable resources

- [XML sitemap](${absoluteUrl("/sitemap.xml")})
- [RSS feed](${absoluteUrl("/feed.xml")})
- [Full Markdown corpus](${absoluteUrl("/llms-full.txt")})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
