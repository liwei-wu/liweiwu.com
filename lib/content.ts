import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { isAiTranslationLocale } from "@/lib/i18n/policy";

export type TranslationStatus =
  | "original"
  | "author-reviewed"
  | "ai-translated";

export interface ContentDocument {
  id: string;
  type: "essay";
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

export interface HomeDocument {
  id: "home";
  type: "page";
  locale: string;
  title: string;
  description: string;
  slug: "home";
  translationStatus: TranslationStatus;
  sourceLocale: string;
  sourceHash?: string;
  body: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");
const HOME_ROOT = path.join(CONTENT_ROOT, "pages", "home");
const ESSAYS_ROOT = path.join(CONTENT_ROOT, "essays");

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
  const locale = assertString(data.locale, "locale", file);
  const translationStatus = assertString(
    data.translation_status,
    "translation_status",
    file,
  ) as TranslationStatus;
  const sourceHash =
    typeof data.source_hash === "string" ? data.source_hash.trim() : undefined;
  const slug = assertString(data.slug, "slug", file);
  const type = assertString(data.type, "type", file);

  if (type !== "essay") {
    throw new Error(`Essay content must use type: essay in ${file}`);
  }

  if (path.basename(file, ".md") !== locale) {
    throw new Error(`Content filename must match locale ${locale} in ${file}`);
  }
  if (path.basename(path.dirname(file)) !== slug) {
    throw new Error(`Content directory must match slug ${slug} in ${file}`);
  }

  if (isAiTranslationLocale(locale) && translationStatus !== "ai-translated") {
    throw new Error(
      `Non-reference locale ${locale} must use translation_status: ai-translated in ${file}`,
    );
  }
  if (isAiTranslationLocale(locale) && !sourceHash) {
    throw new Error(`AI-translated content must include source_hash in ${file}`);
  }

  return {
    id: assertString(data.id, "id", file),
    type: "essay",
    locale,
    title: assertString(data.title, "title", file),
    subtitle: typeof data.subtitle === "string" ? data.subtitle.trim() : undefined,
    description: assertString(data.description, "description", file),
    slug,
    publishedAt: assertDate(data.published_at, "published_at", file),
    revisedAt: data.revised_at
      ? assertDate(data.revised_at, "revised_at", file)
      : undefined,
    translationStatus,
    sourceLocale: assertString(data.source_locale, "source_locale", file),
    sourceHash,
    topics,
    body: content.trim(),
    readingMinutes: estimateReadingMinutes(content),
  };
}

function readHomeFile(file: string): HomeDocument {
  const source = fs.readFileSync(file, "utf8");
  const { data, content } = matter(source);
  const locale = assertString(data.locale, "locale", file);
  const id = assertString(data.id, "id", file);
  const type = assertString(data.type, "type", file);
  const slug = assertString(data.slug, "slug", file);
  const translationStatus = assertString(
    data.translation_status,
    "translation_status",
    file,
  ) as TranslationStatus;
  const sourceHash =
    typeof data.source_hash === "string" ? data.source_hash.trim() : undefined;

  if (id !== "home" || type !== "page" || slug !== "home") {
    throw new Error(`Home content must use id: home, type: page, and slug: home in ${file}`);
  }
  if (path.basename(file, ".md") !== locale) {
    throw new Error(`Home content filename must match locale ${locale} in ${file}`);
  }
  if (isAiTranslationLocale(locale) && translationStatus !== "ai-translated") {
    throw new Error(
      `Non-reference locale ${locale} must use translation_status: ai-translated in ${file}`,
    );
  }
  if (isAiTranslationLocale(locale) && !sourceHash) {
    throw new Error(`AI-translated home content must include source_hash in ${file}`);
  }

  return {
    id: "home",
    type: "page",
    locale,
    title: assertString(data.title, "title", file),
    description: assertString(data.description, "description", file),
    slug: "home",
    translationStatus,
    sourceLocale: assertString(data.source_locale, "source_locale", file),
    sourceHash,
    body: content.trim(),
  };
}

function findMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findMarkdownFiles(entryPath);
      return entry.isFile() && entry.name.endsWith(".md") ? [entryPath] : [];
    });
}

export function getAllContent(): ContentDocument[] {
  if (!fs.existsSync(CONTENT_ROOT)) return [];

  return findMarkdownFiles(ESSAYS_ROOT)
    .map(readContentFile)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getAllHomeContent(): HomeDocument[] {
  return findMarkdownFiles(HOME_ROOT)
    .map(readHomeFile)
    .sort((a, b) => a.locale.localeCompare(b.locale));
}

export function getHomeContent(locale: string): HomeDocument {
  const document = getAllHomeContent().find((item) => item.locale === locale);
  if (!document) throw new Error(`Missing home content for locale ${locale}`);
  return document;
}

export function getPublishedLocales(): string[] {
  const homeLocales = getAllHomeContent().map((document) => document.locale);
  const homeLocaleSet = new Set(homeLocales);
  const orphanedPublication = getAllContent().find(
    (document) => !homeLocaleSet.has(document.locale),
  );
  if (orphanedPublication) {
    throw new Error(
      `Published locale ${orphanedPublication.locale} is missing home content`,
    );
  }
  return [...new Set(homeLocales)].sort();
}

export function getContentByLocale(locale: string): ContentDocument[] {
  return getAllContent().filter((document) => document.locale === locale);
}

export function getContent(
  locale: string,
  slug: string,
): ContentDocument | undefined {
  return getAllContent().find(
    (document) =>
      document.locale === locale &&
      document.slug === slug,
  );
}

export function getTranslations(id: string): ContentDocument[] {
  return getAllContent().filter((document) => document.id === id);
}
