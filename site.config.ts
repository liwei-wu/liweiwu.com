const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://liweiwu.com").replace(
  /\/$/,
  "",
);

export const siteConfig = {
  author: "Liwei Wu",
  authorChinese: "吴立威",
  authorJapanese: "呉立威",
  title: "Liwei Wu",
  siteName: "Liwei Wu / 吴立威",
  homeTitle: {
    en: "Liwei Wu — AI Entrepreneur, DeepFlywheel Founder, and Writer",
    zh: "吴立威｜AI 创业者、深度飞轮创始人及作者",
    ja: "呉立威｜AIアプリケーション起業家、DeepFlywheel創業者、著者",
  },
  description: {
    en: "Liwei Wu is an AI application entrepreneur, founder of DeepFlywheel, former SenseTime R&D director, and writer on AI, software, and authorship.",
    zh: "吴立威是 AI 应用创业者、深度飞轮创始人、前商汤科技研发总监，关注 AI、软件与作者身份。",
    ja: "呉立威は、AIアプリケーション起業家、DeepFlywheel創業者、元SenseTime研究開発ディレクターであり、AI、ソフトウェア、オーサーシップについて執筆しています。",
  },
  defaultLocale: "en",
  siteUrl,
  socialImage: "/og.png",
  scholarUrl: "https://scholar.google.com/citations?user=dg1JyaUAAAAJ",
  company: {
    name: "DeepFlywheel",
    nameChinese: "深度飞轮",
    url: "https://deepflywheel.com/",
  },
} as const;
