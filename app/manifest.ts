import type { MetadataRoute } from "next";
import { getHomeContent } from "@/lib/content";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const englishHome = getHomeContent(siteConfig.defaultLocale);
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.author,
    description: englishHome.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f0eee6",
    theme_color: "#f0eee6",
    lang: "en",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
