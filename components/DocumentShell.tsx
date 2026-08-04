import type { ReactNode } from "react";

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
    <html
      lang={lang}
      dir={dir}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="locale-root">{children}</body>
    </html>
  );
}
