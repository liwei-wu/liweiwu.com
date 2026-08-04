interface TranslationNoticeMessages {
  prefix: string;
  english: string;
  conjunction: string;
  chinese: string;
  suffix: string;
}

export interface UiMessages {
  languagePicker: {
    trigger: string;
    title: string;
    search: string;
    suggested: string;
    all: string;
    unavailable: string;
    empty: string;
    close: string;
  };
  gatewayStatus: string;
  navigation: {
    contents: string;
    openContents: string;
    closeContents: string;
  };
  theme: {
    switchMode: string;
    switchToLight: string;
    switchToDark: string;
  };
  home: {
    essays: string;
    research: string;
  };
  essay: {
    readingMinutes: (minutes: number) => string;
    revised: (date: string) => string;
    firstPublished: (date: string) => string;
  };
  translationNotice: TranslationNoticeMessages;
}

const messages: Record<string, UiMessages> = {
  en: {
    languagePicker: {
      trigger: "Choose language",
      title: "Languages",
      search: "Search languages",
      suggested: "Suggested",
      all: "All languages",
      unavailable: "Not available for this page",
      empty: "No languages found",
      close: "Close language picker",
    },
    gatewayStatus: "Selecting your language…",
    navigation: {
      contents: "Contents",
      openContents: "Open contents",
      closeContents: "Close contents",
    },
    theme: {
      switchMode: "Switch color mode",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    home: { essays: "Essays", research: "Research" },
    essay: {
      readingMinutes: (minutes) => `${minutes} min`,
      revised: (date) => `Revised ${date}`,
      firstPublished: (date) => `First published ${date}`,
    },
    translationNotice: {
      prefix: "This edition is AI-translated. View the ",
      english: "English edition",
      conjunction: " or ",
      chinese: "Chinese edition",
      suffix: ".",
    },
  },
  "zh-Hans": {
    languagePicker: {
      trigger: "选择语言",
      title: "选择语言",
      search: "搜索语言",
      suggested: "推荐",
      all: "所有语言",
      unavailable: "此页面暂无该语言版本",
      empty: "没有找到语言",
      close: "关闭语言选择器",
    },
    gatewayStatus: "正在选择语言…",
    navigation: {
      contents: "目录",
      openContents: "打开目录",
      closeContents: "关闭目录",
    },
    theme: {
      switchMode: "切换深浅色模式",
      switchToLight: "切换到浅色模式",
      switchToDark: "切换到深色模式",
    },
    home: { essays: "文章", research: "研究" },
    essay: {
      readingMinutes: (minutes) => `${minutes} 分钟`,
      revised: (date) => `修订于 ${date}`,
      firstPublished: (date) => `首次发表于 ${date}`,
    },
    translationNotice: {
      prefix: "此版本由 AI 翻译。请参阅",
      english: "英文版",
      conjunction: "或",
      chinese: "中文版",
      suffix: "。",
    },
  },
  ja: {
    languagePicker: {
      trigger: "言語を選択",
      title: "言語を選択",
      search: "言語を検索",
      suggested: "おすすめ",
      all: "すべての言語",
      unavailable: "このページでは利用できません",
      empty: "言語が見つかりません",
      close: "言語選択を閉じる",
    },
    gatewayStatus: "言語を選択しています…",
    navigation: {
      contents: "目次",
      openContents: "目次を開く",
      closeContents: "目次を閉じる",
    },
    theme: {
      switchMode: "表示テーマを切り替える",
      switchToLight: "ライトモードに切り替える",
      switchToDark: "ダークモードに切り替える",
    },
    home: { essays: "エッセイ", research: "研究" },
    essay: {
      readingMinutes: (minutes) => `${minutes}分`,
      revised: (date) => `${date}改訂`,
      firstPublished: (date) => `${date}初出`,
    },
    translationNotice: {
      prefix: "日本語版はAI翻訳です。",
      english: "英語版",
      conjunction: "または",
      chinese: "中国語版",
      suffix: "をご覧ください。",
    },
  },
};

export function getUiMessages(locale: string): UiMessages {
  return messages[locale] ?? messages[locale.split("-")[0]] ?? messages.en;
}
