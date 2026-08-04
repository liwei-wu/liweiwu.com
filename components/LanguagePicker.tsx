"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type { LanguageOption } from "@/lib/i18n";
import { findLocaleMatch } from "@/lib/i18n";
import {
  LANGUAGE_PREFERENCE_KEY,
  RECENT_LANGUAGE_PREFERENCES_KEY,
} from "@/lib/localization";
import { LANGUAGE_DIRECTORY_PATH } from "@/lib/routes";

interface LanguagePickerProps {
  currentLocale: string;
  options: readonly LanguageOption[];
}

interface PickerCopy {
  trigger: string;
  title: string;
  search: string;
  suggested: string;
  all: string;
  unavailable: string;
  empty: string;
  close: string;
  directory: string;
}

const copies: Record<string, PickerCopy> = {
  en: {
    trigger: "Choose language",
    title: "Languages",
    search: "Search languages",
    suggested: "Suggested",
    all: "All languages",
    unavailable: "Not available for this page",
    empty: "No languages found",
    close: "Close language picker",
    directory: "View language directory",
  },
  "zh-Hans": {
    trigger: "选择语言",
    title: "选择语言",
    search: "搜索语言",
    suggested: "推荐",
    all: "所有语言",
    unavailable: "此页面暂无该语言版本",
    empty: "没有找到语言",
    close: "关闭语言选择器",
    directory: "查看语言目录",
  },
  ja: {
    trigger: "言語を選択",
    title: "言語を選択",
    search: "言語を検索",
    suggested: "おすすめ",
    all: "すべての言語",
    unavailable: "このページでは利用できません",
    empty: "言語が見つかりません",
    close: "言語選択を閉じる",
    directory: "言語一覧を見る",
  },
};

const fallbackCopy = copies.en;

function pickerCopy(locale: string): PickerCopy {
  return copies[locale] ?? copies[locale.split("-")[0]] ?? fallbackCopy;
}

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase()
    .trim();
}

function readRecentLocales(): string[] {
  try {
    const value = JSON.parse(
      localStorage.getItem(RECENT_LANGUAGE_PREFERENCES_KEY) ?? "[]",
    );
    return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function saveLanguagePreference(locale: string) {
  try {
    localStorage.setItem(LANGUAGE_PREFERENCE_KEY, locale);
    const recent = [locale, ...readRecentLocales().filter((item) => item !== locale)];
    localStorage.setItem(
      RECENT_LANGUAGE_PREFERENCES_KEY,
      JSON.stringify(recent.slice(0, 5)),
    );
  } catch {}
}

export function LanguagePicker({ currentLocale, options }: LanguagePickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestedLocales, setSuggestedLocales] = useState<string[]>([
    currentLocale,
  ]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const copy = pickerCopy(currentLocale);

  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const available = options.map((option) => option.locale);
    const browserMatches = (navigator.languages ?? [])
      .map((locale) => findLocaleMatch([locale], available))
      .filter((locale): locale is string => Boolean(locale));
    const suggested = [
      currentLocale,
      ...readRecentLocales(),
      ...browserMatches,
      "en",
      "zh-Hans",
      "ja",
    ].filter(
      (locale, index, items) =>
        available.includes(locale) && items.indexOf(locale) === index,
    );
    setSuggestedLocales(suggested.slice(0, 5));
    dialogRef.current.showModal();
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [currentLocale, open, options]);

  const filteredOptions = useMemo(() => {
    const term = normalize(query);
    if (!term) return options;
    return options.filter((option) =>
      [option.locale, option.nativeName, option.currentName, option.englishName]
        .map(normalize)
        .some((value) => value.includes(term)),
    );
  }, [options, query]);

  const suggestedOptions = useMemo(
    () =>
      suggestedLocales
        .map((locale) => options.find((option) => option.locale === locale))
        .filter((option): option is LanguageOption => Boolean(option)),
    [options, suggestedLocales],
  );

  function close() {
    dialogRef.current?.close();
    setOpen(false);
    setQuery("");
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close();
  }

  function renderOption(option: LanguageOption, suggested = false) {
    const secondaryName =
      option.currentName !== option.nativeName ? option.currentName : option.englishName;
    const current = option.locale === currentLocale;
    const content = (
      <>
        <span className="language-option-check" aria-hidden="true">
          {current ? "✓" : ""}
        </span>
        <span className="language-option-names">
          <span className="language-option-native" lang={option.locale} dir="auto">
            {option.nativeName}
          </span>
          {secondaryName !== option.nativeName ? (
            <span className="language-option-secondary">{secondaryName}</span>
          ) : null}
        </span>
        <span className="language-option-code">{option.locale}</span>
      </>
    );

    return (
      <li key={`${suggested ? "suggested" : "all"}-${option.locale}`}>
        {option.href ? (
          <Link
            className="language-option"
            href={option.href}
            hrefLang={option.locale}
            aria-current={current ? "page" : undefined}
            onClick={() => {
              saveLanguagePreference(option.locale);
              close();
            }}
          >
            {content}
          </Link>
        ) : (
          <span
            className="language-option is-unavailable"
            title={copy.unavailable}
            aria-disabled="true"
          >
            {content}
          </span>
        )}
      </li>
    );
  }

  return (
    <>
      <button
        type="button"
        className="language-trigger"
        aria-label={copy.trigger}
        aria-haspopup="dialog"
        aria-expanded={open}
        title={copy.trigger}
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.4 2.45 3.6 5.45 3.6 9s-1.2 6.55-3.6 9c-2.4-2.45-3.6-5.45-3.6-9S9.6 5.45 12 3Z" />
        </svg>
      </button>

      {open ? (
        <dialog
          ref={dialogRef}
          className="language-dialog"
          aria-labelledby="language-dialog-title"
          onClick={handleBackdropClick}
          onClose={() => {
            setOpen(false);
            setQuery("");
          }}
          onCancel={() => setOpen(false)}
        >
          <div className="language-dialog-panel">
            <header className="language-dialog-header">
              <h2 id="language-dialog-title">{copy.title}</h2>
              <button type="button" className="language-dialog-close" onClick={close}>
                <span aria-hidden="true">×</span>
                <span className="sr-only">{copy.close}</span>
              </button>
            </header>

            <label className="language-search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m15.5 15.5 5 5" />
              </svg>
              <span className="sr-only">{copy.search}</span>
              <input
                ref={searchRef}
                type="search"
                value={query}
                placeholder={copy.search}
                autoComplete="off"
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>

            <div className="language-dialog-scroll">
              {!query && options.length > 8 && suggestedOptions.length ? (
                <section className="language-group">
                  <h3>{copy.suggested}</h3>
                  <ul>{suggestedOptions.map((option) => renderOption(option, true))}</ul>
                </section>
              ) : null}

              <section className="language-group">
                <h3>{copy.all}</h3>
                {filteredOptions.length ? (
                  <ul>{filteredOptions.map((option) => renderOption(option))}</ul>
                ) : (
                  <p className="language-empty">{copy.empty}</p>
                )}
              </section>
            </div>

            <footer className="language-dialog-footer">
              <Link href={LANGUAGE_DIRECTORY_PATH} onClick={close}>
                {copy.directory}
              </Link>
            </footer>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
