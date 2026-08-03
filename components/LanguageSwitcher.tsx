"use client";

import { useEffect, useId, useRef, useState } from "react";

interface LocaleOption {
  locale: string;
  label: string;
  href: string;
}

interface LanguageSwitcherProps {
  currentLocale: string;
  options: LocaleOption[];
}

export function LanguageSwitcher({
  currentLocale,
  options,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const currentLabel =
    options.find((option) => option.locale === currentLocale)?.label ?? currentLocale;

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function switchLocale(nextLocale: string, href: string) {
    setOpen(false);
    if (nextLocale === currentLocale) return;
    window.localStorage.setItem("liweiwu.com-locale", nextLocale);
    window.location.assign(href);
  }

  return (
    <div
      ref={rootRef}
      className={open ? "language-switcher language-switcher-open" : "language-switcher"}
    >
      <button
        ref={triggerRef}
        type="button"
        className="language-trigger"
        aria-label={`Language: ${currentLabel}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <span>{currentLabel}</span>
        <span className="language-chevron" aria-hidden="true" />
      </button>

      {open ? (
        <div id={menuId} className="language-menu" role="listbox" aria-label="Language">
          {options.map((option) => {
            const selected = option.locale === currentLocale;
            return (
              <button
                key={option.locale}
                type="button"
                className="language-option"
                role="option"
                aria-selected={selected}
                onClick={() => switchLocale(option.locale, option.href)}
              >
                <span>{option.label}</span>
                {selected ? <span className="language-current" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
