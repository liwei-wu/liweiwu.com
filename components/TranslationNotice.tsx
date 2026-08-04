import Link from "next/link";
import { isReferenceLocale } from "@/lib/localization";

interface NoticeCopy {
  prefix: string;
  english: string;
  conjunction: string;
  chinese: string;
  suffix: string;
}

interface TranslationNoticeProps {
  locale: string;
  englishHref: string;
  chineseHref: string;
  as?: "footer" | "p";
  className?: string;
}

const noticeCopies: Record<string, NoticeCopy> = {
  ja: {
    prefix: "日本語版はAI翻訳です。",
    english: "英語版",
    conjunction: "または",
    chinese: "中国語版",
    suffix: "をご覧ください。",
  },
};

const fallbackCopy: NoticeCopy = {
  prefix: "This edition is AI-translated. View the ",
  english: "English edition",
  conjunction: " or ",
  chinese: "Chinese edition",
  suffix: ".",
};

export function TranslationNotice({
  locale,
  englishHref,
  chineseHref,
  as = "p",
  className,
}: TranslationNoticeProps) {
  if (isReferenceLocale(locale)) return null;

  const copy = noticeCopies[locale] ?? noticeCopies[locale.split("-")[0]] ?? fallbackCopy;
  const Element = as;

  return (
    <Element className={className}>
      {copy.prefix}
      <Link href={englishHref}>{copy.english}</Link>
      {copy.conjunction}
      <Link href={chineseHref}>{copy.chinese}</Link>
      {copy.suffix}
    </Element>
  );
}
