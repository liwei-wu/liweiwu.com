import type { ReactNode } from "react";

const themeScript = `
(() => {
  const key = "liweiwu.com-color-mode";
  const saved = localStorage.getItem(key);
  const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
})();`;

export function DocumentShell({
  children,
  lang,
  dir,
}: {
  children: ReactNode;
  lang: string;
  dir: "ltr" | "rtl";
}) {
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className="locale-root">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
