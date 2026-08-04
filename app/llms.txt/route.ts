import { getAllContent } from "@/lib/content";
import { contentPath, localeHomePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

export function GET() {
  const documents = getAllContent();
  const publications = documents
    .map(
      (document) =>
        `- [${document.title}](${absoluteUrl(
          contentPath(document.locale, document.type, document.slug),
        )}): ${document.description} [${document.locale}; ${document.translationStatus}]`,
    )
    .join("\n");

  const body = `# Liwei Wu / 吴立威 / 呉立威

> Liwei Wu (吴立威) is an AI application entrepreneur, founder of DeepFlywheel, former SenseTime R&D director, and writer on AI, software, and authorship.

This is the canonical personal publication of Liwei Wu. Simplified Chinese is the source language for current essays. Every translated page states its language and review status.

## Author profiles

- [English profile](${absoluteUrl(localeHomePath("en"))})
- [简体中文主页](${absoluteUrl(localeHomePath("zh-Hans"))})
- [日本語プロフィール](${absoluteUrl(localeHomePath("ja"))})
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
