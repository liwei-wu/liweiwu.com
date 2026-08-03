export const siteConfig = {
  author: "Liwei Wu",
  authorChinese: "吴立威",
  title: "Liwei Wu",
  description:
    "The personal website of Liwei Wu—AI entrepreneur, founder of DeepFlywheel, and writer on AI and software.",
  defaultLocale: "en",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
