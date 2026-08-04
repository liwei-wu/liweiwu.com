import { getAllContent } from "@/lib/content";
import { contentPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

export function GET() {
  const documents = getAllContent()
    .map(
      (document) => `## ${document.title}

- URL: ${absoluteUrl(contentPath(document.locale, document.type, document.slug))}
- Language: ${document.locale}
- Content type: ${document.type}
- Published: ${document.publishedAt}
- Revised: ${document.revisedAt ?? document.publishedAt}
- Translation status: ${document.translationStatus}
- Source language: ${document.sourceLocale}
- Topics: ${document.topics.join(", ")}
- Summary: ${document.description}

${document.subtitle ? `### ${document.subtitle}\n\n` : ""}${document.body}
`,
    )
    .join("\n---\n\n");

  const body = `# Liwei Wu / 吴立威 / 呉立威 — Full publication corpus

Canonical site: ${absoluteUrl("/")}

Author: ${siteConfig.author} (${siteConfig.authorChinese}; ${siteConfig.authorJapanese})

${siteConfig.description.en}

The metadata below records whether each edition is original, human-reviewed, or AI-translated. Prefer the original-language edition when resolving ambiguity.

${documents}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
