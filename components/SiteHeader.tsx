"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LanguagePicker } from "@/components/LanguagePicker";
import type { TocItem } from "@/lib/content";
import type { LanguageOption } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";

interface SiteHeaderProps {
  author: string;
  homeHref: string;
  currentLocale: string;
  languageOptions: readonly LanguageOption[];
  toc?: TocItem[];
  contentsLabel?: string;
  children: ReactNode;
}

export function SiteHeader({
  author,
  homeHref,
  currentLocale,
  languageOptions,
  toc = [],
  contentsLabel = "Contents",
  children,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>();
  const hasToc = toc.length > 0;
  const menuLabel = currentLocale.startsWith("zh")
    ? menuOpen
      ? "关闭目录"
      : "打开目录"
    : currentLocale === "ja"
      ? menuOpen
        ? "目次を閉じる"
        : "目次を開く"
      : menuOpen
        ? "Close contents"
        : "Open contents";

  useEffect(() => {
    if (!hasToc) return;
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [hasToc, toc]);

  return (
    <div
      className={[
        "site-shell",
        hasToc ? "has-toc" : "",
        menuOpen ? "menu-is-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="site-header">
        {hasToc ? (
          <div className="header-side header-side-start">
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuLabel}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        ) : null}

        <Link className="site-name" href={homeHref}>
          {author}
        </Link>

        <div className="header-side header-side-end">
          <LanguagePicker
            currentLocale={currentLocale}
            options={languageOptions}
          />
          <ThemeToggle locale={currentLocale} />
        </div>
      </header>

      {hasToc ? (
        <aside className="contents-panel" aria-hidden={!menuOpen}>
          <h2>{contentsLabel}</h2>
          <ol>
            {toc.map((item) => (
              <li key={item.id} className={item.level === 3 ? "toc-level-3" : undefined}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      ) : null}

      {children}
    </div>
  );
}
