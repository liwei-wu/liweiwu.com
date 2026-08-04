"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LanguageOption } from "@/lib/i18n";
import { LANGUAGE_PREFERENCE_KEY } from "@/lib/localization";

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

export function LanguageDirectoryList({ options }: { options: readonly LanguageOption[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = normalize(query.trim());
    if (!term) return options;
    return options.filter((option) =>
      [option.locale, option.nativeName, option.englishName]
        .map(normalize)
        .some((value) => value.includes(term)),
    );
  }, [options, query]);

  return (
    <>
      <label className="directory-search">
        <span className="sr-only">Search languages</span>
        <input
          type="search"
          value={query}
          placeholder="Search languages"
          autoComplete="off"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <ul className="language-directory-list">
        {filtered.map((option) => (
          <li key={option.locale}>
            <Link
              href={option.href!}
              hrefLang={option.locale}
              onClick={() => {
                try {
                  localStorage.setItem(LANGUAGE_PREFERENCE_KEY, option.locale);
                } catch {}
              }}
            >
              <span lang={option.locale} dir="auto">{option.nativeName}</span>
              {option.englishName !== option.nativeName ? (
                <span>{option.englishName}</span>
              ) : null}
              <code>{option.locale}</code>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
