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
  defaultLocale: "en",
  siteUrl,
  socialImage: "/og.png",
  scholarUrl: "https://scholar.google.com/citations?user=dg1JyaUAAAAJ",
  company: {
    name: "DeepFlywheel",
    nameChinese: "深度飞轮",
    url: "https://deepflywheel.com/",
  },
  entities: {
    sensetime: {
      name: "SenseTime",
      nameChinese: "商汤科技",
      urls: {
        en: "https://www.sensetime.com/en/",
        zhHans: "https://www.sensetime.com/cn/index",
      },
    },
    nanjingUniversity: {
      name: "Nanjing University",
      nameChinese: "南京大学",
      nameJapanese: "南京大学",
      urls: {
        en: "https://www.nju.edu.cn/en/",
        zhHans: "https://www.nju.edu.cn/",
      },
    },
    tsinghuaUniversity: {
      name: "Tsinghua University",
      nameChinese: "清华大学",
      nameJapanese: "清華大学",
      urls: {
        en: "https://www.tsinghua.edu.cn/en/",
        zhHans: "https://www.tsinghua.edu.cn/",
      },
    },
  },
} as const;
