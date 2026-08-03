"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { TocItem } from "@/lib/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

interface LocaleOption {
  locale: string;
  label: string;
  href: string;
}

interface SiteHeaderProps {
  author: string;
  homeHref: string;
  currentLocale: string;
  localeOptions: LocaleOption[];
  toc?: TocItem[];
  contentsLabel?: string;
  children: ReactNode;
}

export function SiteHeader({
  author,
  homeHref,
  currentLocale,
  localeOptions,
  toc = [],
  contentsLabel = "Contents",
  children,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>();
  const hasToc = toc.length > 0;

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
              aria-label={menuOpen ? "Close contents" : "Open contents"}
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
          <LanguageSwitcher
            currentLocale={currentLocale}
            options={localeOptions}
          />
          <ThemeToggle />
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
