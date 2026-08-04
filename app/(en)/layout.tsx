import type { Metadata } from "next";
import "../globals.css";
import { DocumentShell } from "@/components/DocumentShell";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata("en");

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <DocumentShell lang="en" dir="ltr">
      {children}
    </DocumentShell>
  );
}
