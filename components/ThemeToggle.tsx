"use client";

import { useLayoutEffect, useState } from "react";

const STORAGE_KEY = "liweiwu.com-color-mode";
type ColorMode = "light" | "dark";

function savedColorMode(): ColorMode | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

export function ThemeToggle({ locale }: { locale: string }) {
  const [mode, setMode] = useState<ColorMode | null>(null);
  const chinese = locale.startsWith("zh");
  const japanese = locale === "ja";

  useLayoutEffect(() => {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

    function applyMode(nextMode: ColorMode) {
      document.documentElement.dataset.theme = nextMode;
      setMode(nextMode);
    }

    applyMode(
      savedColorMode() ?? (systemPreference.matches ? "dark" : "light"),
    );

    function followSystem(event: MediaQueryListEvent) {
      if (!savedColorMode()) applyMode(event.matches ? "dark" : "light");
    }

    function syncAcrossTabs(event: StorageEvent) {
      if (event.key !== STORAGE_KEY) return;
      const saved = savedColorMode();
      applyMode(saved ?? (systemPreference.matches ? "dark" : "light"));
    }

    systemPreference.addEventListener("change", followSystem);
    window.addEventListener("storage", syncAcrossTabs);
    return () => {
      systemPreference.removeEventListener("change", followSystem);
      window.removeEventListener("storage", syncAcrossTabs);
    };
  }, []);

  function toggleTheme() {
    const nextMode: ColorMode =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextMode;
    setMode(nextMode);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextMode);
    } catch {
      // The visual preference still applies for the current page.
    }
  }

  const label =
    mode === null
      ? chinese
        ? "切换深浅色模式"
        : japanese
          ? "表示テーマを切り替える"
          : "Switch color mode"
      : mode === "dark"
        ? chinese
          ? "切换到浅色模式"
          : japanese
            ? "ライトモードに切り替える"
            : "Switch to light mode"
        : chinese
          ? "切换到深色模式"
          : japanese
            ? "ダークモードに切り替える"
            : "Switch to dark mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      aria-pressed={mode === null ? undefined : mode === "dark"}
      title={label}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-choice theme-toggle-light">
          <svg viewBox="0 0 24 24" focusable="false">
            <circle cx="12" cy="12" r="3.6" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.28 5.28l1.42 1.42M17.3 17.3l1.42 1.42M18.72 5.28 17.3 6.7M6.7 17.3l-1.42 1.42" />
          </svg>
        </span>
        <span className="theme-toggle-choice theme-toggle-dark">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M19.3 15.45A7.7 7.7 0 0 1 8.55 4.7 8.2 8.2 0 1 0 19.3 15.45Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
