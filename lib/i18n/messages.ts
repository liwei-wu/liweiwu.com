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
  "zh-Hant": {
    languagePicker: {
      trigger: "選擇語言",
      title: "選擇語言",
      search: "搜尋語言",
      unavailable: "此頁面暫無此語言版本",
      empty: "找不到語言",
      close: "關閉語言選擇器",
    },
    gatewayStatus: "正在選擇語言…",
    navigation: {
      contents: "目錄",
      openContents: "開啟目錄",
      closeContents: "關閉目錄",
    },
    theme: {
      switchMode: "切換顯示模式",
      switchToLight: "切換至淺色模式",
      switchToDark: "切換至深色模式",
    },
    home: { essays: "文章", research: "研究" },
    essay: {
      readingMinutes: (minutes) => `${minutes} 分鐘`,
      revised: (date) => `修訂於 ${date}`,
      firstPublished: (date) => `首次發表於 ${date}`,
    },
    translationNotice: {
      prefix: "此版本由 AI 翻譯。請參閱",
      english: "英文版",
      conjunction: "或",
      chinese: "中文版",
      suffix: "。",
    },
  },
  es: {
    languagePicker: {
      trigger: "Elegir idioma",
      title: "Idiomas",
      search: "Buscar idiomas",
      unavailable: "No disponible para esta página",
      empty: "No se encontraron idiomas",
      close: "Cerrar el selector de idioma",
    },
    gatewayStatus: "Seleccionando tu idioma…",
    navigation: {
      contents: "Índice",
      openContents: "Abrir el índice",
      closeContents: "Cerrar el índice",
    },
    theme: {
      switchMode: "Cambiar el modo de color",
      switchToLight: "Cambiar al modo claro",
      switchToDark: "Cambiar al modo oscuro",
    },
    home: { essays: "Ensayos", research: "Investigación" },
    essay: {
      readingMinutes: (minutes) => `${minutes} min`,
      revised: (date) => `Revisado el ${date}`,
      firstPublished: (date) => `Publicado por primera vez el ${date}`,
    },
    translationNotice: {
      prefix: "Esta versión ha sido traducida por IA. Consulta la ",
      english: "versión en inglés",
      conjunction: " o la ",
      chinese: "versión en chino",
      suffix: ".",
    },
  },
  pt: {
    languagePicker: {
      trigger: "Escolher idioma",
      title: "Idiomas",
      search: "Pesquisar idiomas",
      unavailable: "Indisponível nesta página",
      empty: "Nenhum idioma encontrado",
      close: "Fechar o seletor de idioma",
    },
    gatewayStatus: "Selecionando seu idioma…",
    navigation: {
      contents: "Sumário",
      openContents: "Abrir o sumário",
      closeContents: "Fechar o sumário",
    },
    theme: {
      switchMode: "Alternar modo de cor",
      switchToLight: "Mudar para o modo claro",
      switchToDark: "Mudar para o modo escuro",
    },
    home: { essays: "Ensaios", research: "Pesquisa" },
    essay: {
      readingMinutes: (minutes) => `${minutes} min`,
      revised: (date) => `Revisado em ${date}`,
      firstPublished: (date) => `Publicado originalmente em ${date}`,
    },
    translationNotice: {
      prefix: "Esta versão foi traduzida por IA. Consulte a ",
      english: "versão em inglês",
      conjunction: " ou a ",
      chinese: "versão em chinês",
      suffix: ".",
    },
  },
  fr: {
    languagePicker: {
      trigger: "Choisir la langue",
      title: "Langues",
      search: "Rechercher une langue",
      unavailable: "Indisponible pour cette page",
      empty: "Aucune langue trouvée",
      close: "Fermer le sélecteur de langue",
    },
    gatewayStatus: "Sélection de votre langue…",
    navigation: {
      contents: "Sommaire",
      openContents: "Ouvrir le sommaire",
      closeContents: "Fermer le sommaire",
    },
    theme: {
      switchMode: "Changer le mode d’affichage",
      switchToLight: "Passer au mode clair",
      switchToDark: "Passer au mode sombre",
    },
    home: { essays: "Essais", research: "Recherche" },
    essay: {
      readingMinutes: (minutes) => `${minutes} min`,
      revised: (date) => `Révisé le ${date}`,
      firstPublished: (date) => `Publié pour la première fois le ${date}`,
    },
    translationNotice: {
      prefix: "Cette version a été traduite par IA. Consultez la ",
      english: "version anglaise",
      conjunction: " ou la ",
      chinese: "version chinoise",
      suffix: ".",
    },
  },
  ja: {
    languagePicker: {
      trigger: "言語を選択",
      title: "言語を選択",
      search: "言語を検索",
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
  ru: {
    languagePicker: {
      trigger: "Выбрать язык",
      title: "Языки",
      search: "Поиск языков",
      unavailable: "Недоступно для этой страницы",
      empty: "Языки не найдены",
      close: "Закрыть выбор языка",
    },
    gatewayStatus: "Выбираем язык…",
    navigation: {
      contents: "Содержание",
      openContents: "Открыть содержание",
      closeContents: "Закрыть содержание",
    },
    theme: {
      switchMode: "Сменить цветовую тему",
      switchToLight: "Переключить на светлую тему",
      switchToDark: "Переключить на тёмную тему",
    },
    home: { essays: "Эссе", research: "Исследования" },
    essay: {
      readingMinutes: (minutes) => `${minutes} мин`,
      revised: (date) => `Обновлено ${date}`,
      firstPublished: (date) => `Впервые опубликовано ${date}`,
    },
    translationNotice: {
      prefix: "Эта версия переведена с помощью ИИ. См. ",
      english: "английскую версию",
      conjunction: " или ",
      chinese: "китайскую версию",
      suffix: ".",
    },
  },
  de: {
    languagePicker: {
      trigger: "Sprache wählen",
      title: "Sprachen",
      search: "Sprachen durchsuchen",
      unavailable: "Für diese Seite nicht verfügbar",
      empty: "Keine Sprachen gefunden",
      close: "Sprachauswahl schließen",
    },
    gatewayStatus: "Sprache wird ausgewählt…",
    navigation: {
      contents: "Inhalt",
      openContents: "Inhaltsverzeichnis öffnen",
      closeContents: "Inhaltsverzeichnis schließen",
    },
    theme: {
      switchMode: "Farbschema wechseln",
      switchToLight: "Zum hellen Modus wechseln",
      switchToDark: "Zum dunklen Modus wechseln",
    },
    home: { essays: "Essays", research: "Forschung" },
    essay: {
      readingMinutes: (minutes) => `${minutes} Min.`,
      revised: (date) => `Überarbeitet am ${date}`,
      firstPublished: (date) => `Erstveröffentlicht am ${date}`,
    },
    translationNotice: {
      prefix: "Diese Fassung wurde mit KI übersetzt. Lesen Sie die ",
      english: "englische Fassung",
      conjunction: " oder die ",
      chinese: "chinesische Fassung",
      suffix: ".",
    },
  },
  ko: {
    languagePicker: {
      trigger: "언어 선택",
      title: "언어",
      search: "언어 검색",
      unavailable: "이 페이지에서는 제공되지 않음",
      empty: "언어를 찾을 수 없음",
      close: "언어 선택기 닫기",
    },
    gatewayStatus: "언어를 선택하는 중…",
    navigation: {
      contents: "목차",
      openContents: "목차 열기",
      closeContents: "목차 닫기",
    },
    theme: {
      switchMode: "색상 모드 전환",
      switchToLight: "라이트 모드로 전환",
      switchToDark: "다크 모드로 전환",
    },
    home: { essays: "에세이", research: "연구" },
    essay: {
      readingMinutes: (minutes) => `${minutes}분`,
      revised: (date) => `${date} 수정`,
      firstPublished: (date) => `${date} 최초 게시`,
    },
    translationNotice: {
      prefix: "이 버전은 AI로 번역되었습니다. ",
      english: "영어판",
      conjunction: " 또는 ",
      chinese: "중국어판",
      suffix: "을 확인해 주세요.",
    },
  },
  hi: {
    languagePicker: {
      trigger: "भाषा चुनें",
      title: "भाषाएँ",
      search: "भाषाएँ खोजें",
      unavailable: "इस पृष्ठ के लिए उपलब्ध नहीं",
      empty: "कोई भाषा नहीं मिली",
      close: "भाषा चयन बंद करें",
    },
    gatewayStatus: "आपकी भाषा चुनी जा रही है…",
    navigation: {
      contents: "विषय-सूची",
      openContents: "विषय-सूची खोलें",
      closeContents: "विषय-सूची बंद करें",
    },
    theme: {
      switchMode: "रंग मोड बदलें",
      switchToLight: "हल्के मोड पर जाएँ",
      switchToDark: "गहरे मोड पर जाएँ",
    },
    home: { essays: "निबंध", research: "शोध" },
    essay: {
      readingMinutes: (minutes) => `${minutes} मिनट`,
      revised: (date) => `${date} को संशोधित`,
      firstPublished: (date) => `${date} को पहली बार प्रकाशित`,
    },
    translationNotice: {
      prefix: "इस संस्करण का अनुवाद AI द्वारा किया गया है। ",
      english: "अंग्रेज़ी संस्करण",
      conjunction: " या ",
      chinese: "चीनी संस्करण",
      suffix: " देखें।",
    },
  },
  id: {
    languagePicker: {
      trigger: "Pilih bahasa",
      title: "Bahasa",
      search: "Cari bahasa",
      unavailable: "Tidak tersedia untuk halaman ini",
      empty: "Bahasa tidak ditemukan",
      close: "Tutup pemilih bahasa",
    },
    gatewayStatus: "Memilih bahasa Anda…",
    navigation: {
      contents: "Daftar isi",
      openContents: "Buka daftar isi",
      closeContents: "Tutup daftar isi",
    },
    theme: {
      switchMode: "Ganti mode warna",
      switchToLight: "Beralih ke mode terang",
      switchToDark: "Beralih ke mode gelap",
    },
    home: { essays: "Esai", research: "Riset" },
    essay: {
      readingMinutes: (minutes) => `${minutes} menit`,
      revised: (date) => `Direvisi ${date}`,
      firstPublished: (date) => `Pertama kali diterbitkan ${date}`,
    },
    translationNotice: {
      prefix: "Versi ini diterjemahkan oleh AI. Lihat ",
      english: "versi bahasa Inggris",
      conjunction: " atau ",
      chinese: "versi bahasa Tionghoa",
      suffix: ".",
    },
  },
  vi: {
    languagePicker: {
      trigger: "Chọn ngôn ngữ",
      title: "Ngôn ngữ",
      search: "Tìm kiếm ngôn ngữ",
      unavailable: "Không có cho trang này",
      empty: "Không tìm thấy ngôn ngữ",
      close: "Đóng trình chọn ngôn ngữ",
    },
    gatewayStatus: "Đang chọn ngôn ngữ…",
    navigation: {
      contents: "Mục lục",
      openContents: "Mở mục lục",
      closeContents: "Đóng mục lục",
    },
    theme: {
      switchMode: "Chuyển chế độ màu",
      switchToLight: "Chuyển sang chế độ sáng",
      switchToDark: "Chuyển sang chế độ tối",
    },
    home: { essays: "Tiểu luận", research: "Nghiên cứu" },
    essay: {
      readingMinutes: (minutes) => `${minutes} phút`,
      revised: (date) => `Sửa đổi ngày ${date}`,
      firstPublished: (date) => `Xuất bản lần đầu ngày ${date}`,
    },
    translationNotice: {
      prefix: "Bản này được dịch bằng AI. Xem ",
      english: "bản tiếng Anh",
      conjunction: " hoặc ",
      chinese: "bản tiếng Trung",
      suffix: ".",
    },
  },
  it: {
    languagePicker: {
      trigger: "Scegli lingua",
      title: "Lingue",
      search: "Cerca lingue",
      unavailable: "Non disponibile per questa pagina",
      empty: "Nessuna lingua trovata",
      close: "Chiudi il selettore della lingua",
    },
    gatewayStatus: "Selezione della lingua…",
    navigation: {
      contents: "Indice",
      openContents: "Apri l’indice",
      closeContents: "Chiudi l’indice",
    },
    theme: {
      switchMode: "Cambia modalità colore",
      switchToLight: "Passa alla modalità chiara",
      switchToDark: "Passa alla modalità scura",
    },
    home: { essays: "Saggi", research: "Ricerca" },
    essay: {
      readingMinutes: (minutes) => `${minutes} min`,
      revised: (date) => `Revisione del ${date}`,
      firstPublished: (date) => `Pubblicato per la prima volta il ${date}`,
    },
    translationNotice: {
      prefix: "Questa versione è stata tradotta dall’IA. Consulta la ",
      english: "versione inglese",
      conjunction: " o la ",
      chinese: "versione cinese",
      suffix: ".",
    },
  },
};

export function getUiMessages(locale: string): UiMessages {
  return messages[locale] ?? messages[locale.split("-")[0]] ?? messages.en;
}

export function assertUiMessageCoverage(locales: readonly string[]): void {
  const missing = locales.filter(
    (locale) => !Object.prototype.hasOwnProperty.call(messages, locale),
  );
  if (missing.length) {
    throw new Error(`Missing UI messages for locales: ${missing.join(", ")}`);
  }
}
