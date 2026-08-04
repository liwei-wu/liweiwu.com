"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type { LanguageOption } from "@/lib/i18n/locale";
import { getUiMessages } from "@/lib/i18n/messages";
import { saveLanguagePreference } from "@/lib/i18n/preferences";

interface LanguagePickerProps {
  currentLocale: string;
  options: readonly LanguageOption[];
}

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase()
    .trim();
}

export function LanguagePicker({ currentLocale, options }: LanguagePickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const copy = getUiMessages(currentLocale).languagePicker;

  useEffect(() => {
    if (!open || !dialogRef.current) return;
    dialogRef.current.showModal();
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open]);

  const filteredOptions = useMemo(() => {
    const term = normalize(query);
    if (!term) return options;
    return options.filter((option) =>
      [option.locale, option.nativeName, option.currentName, option.englishName]
        .map(normalize)
        .some((value) => value.includes(term)),
    );
  }, [options, query]);

  function close() {
    dialogRef.current?.close();
    setOpen(false);
    setQuery("");
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close();
  }

  function renderOption(option: LanguageOption) {
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
      <li key={option.locale}>
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
              {filteredOptions.length ? (
                <ul className="language-options">
                  {filteredOptions.map(renderOption)}
                </ul>
              ) : (
                <p className="language-empty">{copy.empty}</p>
              )}
            </div>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
