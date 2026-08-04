import Link from "next/link";
import { getUiMessages } from "@/lib/i18n/messages";
import { isReferenceLocale } from "@/lib/i18n/policy";

interface TranslationNoticeProps {
  locale: string;
  englishHref: string;
  chineseHref: string;
  as?: "footer" | "p";
  className?: string;
}

export function TranslationNotice({
  locale,
  englishHref,
  chineseHref,
  as = "p",
  className,
}: TranslationNoticeProps) {
  if (isReferenceLocale(locale)) return null;

  const copy = getUiMessages(locale).translationNotice;
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
