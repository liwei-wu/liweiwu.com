"use client";

const STORAGE_KEY = "liweiwu.com-color-mode";

export function ThemeToggle() {
  function toggleTheme() {
    const nextIsDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    window.localStorage.setItem(STORAGE_KEY, nextIsDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle color mode"
      onClick={toggleTheme}
    >
      <span className="theme-toggle-thumb" aria-hidden="true" />
    </button>
  );
}
