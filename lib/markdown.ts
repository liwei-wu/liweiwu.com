import { marked } from "marked";
import { siteConfig } from "@/site.config";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function plainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}

function slugify(value: string): string {
  return value
    .toLocaleLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function withEntityLinkDefinitions(body: string, locale: string): string {
  const useChineseUrls = locale === "zh-Hans";
  const definitions = [
    `[entity-deepflywheel]: ${siteConfig.company.url}`,
    ...Object.entries(siteConfig.entities).map(
      ([id, entity]) =>
        `[entity-${id}]: ${useChineseUrls ? entity.urls.zhHans : entity.urls.en}`,
    ),
  ];
  return `${body}\n\n${definitions.join("\n")}`;
}

export function renderMarkdown(
  body: string,
  locale: string,
): { html: string; toc: TocItem[] } {
  const rawHtml = marked.parse(withEntityLinkDefinitions(body, locale), {
    async: false,
    gfm: true,
    breaks: false,
  }) as string;
  const toc: TocItem[] = [];
  const usedIds = new Map<string, number>();

  const html = rawHtml.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (_match, rawLevel: string, headingHtml: string) => {
      const level = Number(rawLevel) as 2 | 3;
      const text = plainText(headingHtml);
      const baseId = slugify(text) || `section-${toc.length + 1}`;
      const seen = usedIds.get(baseId) ?? 0;
      usedIds.set(baseId, seen + 1);
      const id = seen === 0 ? baseId : `${baseId}-${seen + 1}`;
      toc.push({ id, text, level });
      return `<h${level} id="${id}">${headingHtml}</h${level}>`;
    },
  );

  return { html, toc };
}
