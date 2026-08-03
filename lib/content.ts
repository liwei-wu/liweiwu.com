import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type ContentType = "essay" | "note";
export type TranslationStatus =
  | "original"
  | "author-reviewed"
  | "human-reviewed"
  | "ai-translated";

export interface ContentDocument {
  id: string;
  type: ContentType;
  locale: string;
  title: string;
  subtitle?: string;
  description: string;
  slug: string;
  publishedAt: string;
  revisedAt?: string;
  translationStatus: TranslationStatus;
  sourceLocale: string;
  sourceHash?: string;
  topics: string[];
  body: string;
  readingMinutes: number;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

function assertString(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing or invalid ${field} in ${file}`);
  }
  return value.trim();
}

function assertDate(value: unknown, field: string, file: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  return assertString(value, field, file);
}

function estimateReadingMinutes(body: string): number {
  const withoutMarkup = body.replace(/[`#>*_\[\]()!-]/g, " ");
  const cjkCount = (withoutMarkup.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? [])
    .length;
  const latinWords = withoutMarkup
    .replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(cjkCount / 500 + latinWords / 225));
}

function readContentFile(file: string): ContentDocument {
  const source = fs.readFileSync(file, "utf8");
  const { data, content } = matter(source);
  const topics = Array.isArray(data.topics)
    ? data.topics.map(String)
    : [];

  return {
    id: assertString(data.id, "id", file),
    type: assertString(data.type, "type", file) as ContentType,
    locale: assertString(data.locale, "locale", file),
    title: assertString(data.title, "title", file),
    subtitle: typeof data.subtitle === "string" ? data.subtitle.trim() : undefined,
    description: assertString(data.description, "description", file),
    slug: assertString(data.slug, "slug", file),
    publishedAt: assertDate(data.published_at, "published_at", file),
    revisedAt: data.revised_at
      ? assertDate(data.revised_at, "revised_at", file)
      : undefined,
    translationStatus: assertString(
      data.translation_status,
      "translation_status",
      file,
    ) as TranslationStatus,
    sourceLocale: assertString(data.source_locale, "source_locale", file),
    sourceHash:
      typeof data.source_hash === "string" ? data.source_hash.trim() : undefined,
    topics,
    body: content.trim(),
    readingMinutes: estimateReadingMinutes(content),
  };
}

export function getAllContent(): ContentDocument[] {
  if (!fs.existsSync(CONTENT_ROOT)) return [];

  const files: string[] = [];
  for (const localeEntry of fs.readdirSync(CONTENT_ROOT, {
    withFileTypes: true,
  })) {
    if (!localeEntry.isDirectory()) continue;
    const localePath = path.join(CONTENT_ROOT, localeEntry.name);

    for (const typeEntry of fs.readdirSync(localePath, {
      withFileTypes: true,
    })) {
      if (!typeEntry.isDirectory()) continue;
      const typePath = path.join(localePath, typeEntry.name);
      for (const file of fs.readdirSync(typePath)) {
        if (file.endsWith(".md")) files.push(path.join(typePath, file));
      }
    }
  }

  return files
    .map(readContentFile)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPublishedLocales(): string[] {
  return [...new Set(getAllContent().map((document) => document.locale))].sort();
}

export function getContentByLocale(
  locale: string,
  type?: ContentType,
): ContentDocument[] {
  return getAllContent().filter(
    (document) => document.locale === locale && (!type || document.type === type),
  );
}

export function getContent(
  locale: string,
  type: ContentType,
  slug: string,
): ContentDocument | undefined {
  return getAllContent().find(
    (document) =>
      document.locale === locale &&
      document.type === type &&
      document.slug === slug,
  );
}

export function getTranslations(id: string): ContentDocument[] {
  return getAllContent().filter((document) => document.id === id);
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

export function renderMarkdown(body: string): { html: string; toc: TocItem[] } {
  const rawHtml = marked.parse(body, {
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
