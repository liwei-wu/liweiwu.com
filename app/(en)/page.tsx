import type { Metadata } from "next";
import { PublicationHome } from "@/components/PublicationHome";
import { getPublishedLocales } from "@/lib/content";
import { homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata("en", getPublishedLocales());

export default function Home() {
  return <PublicationHome locale="en" autoDetect />;
}
