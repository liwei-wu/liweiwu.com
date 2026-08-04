import fs from "node:fs/promises";
import matter from "gray-matter";

const essayDir = "content/essays/not-yet-a-dagger";
const sourceHash = "62b7213dec31d272";
const delimiter = "ZXQBLOCKSEPZXQ";

const localeRules = {
  "zh-Hant": {
    source: "zh-Hans",
    from: "zh-CN",
    to: "zh-TW",
    title: "只有刀尖，還不是匕首",
    topics: ["創業", "產品", "人工智慧", "奇績創壇", "魔法葫蘆"],
  },
  es: {
    source: "en",
    from: "en",
    to: "es",
    title: "Una punta por sí sola no es una daga",
    topics: ["Emprendimiento", "Producto", "Inteligencia artificial", "MiraclePlus", "MagicGourd"],
  },
  pt: {
    source: "en",
    from: "en",
    to: "pt",
    title: "Só a ponta ainda não é uma adaga",
    topics: ["Empreendedorismo", "Produto", "Inteligência artificial", "MiraclePlus", "MagicGourd"],
  },
  fr: {
    source: "en",
    from: "en",
    to: "fr",
    title: "Une pointe seule ne fait pas un poignard",
    topics: ["Entrepreneuriat", "Produit", "Intelligence artificielle", "MiraclePlus", "MagicGourd"],
  },
  ja: {
    source: "en",
    from: "en",
    to: "ja",
    title: "切っ先だけでは、まだ短剣ではない",
    topics: ["起業", "プロダクト", "人工知能", "MiraclePlus", "MagicGourd"],
  },
  ru: {
    source: "en",
    from: "en",
    to: "ru",
    title: "Одно острие — ещё не кинжал",
    topics: ["Предпринимательство", "Продукт", "Искусственный интеллект", "MiraclePlus", "MagicGourd"],
  },
  de: {
    source: "en",
    from: "en",
    to: "de",
    title: "Eine Spitze allein ist noch kein Dolch",
    topics: ["Unternehmertum", "Produkt", "Künstliche Intelligenz", "MiraclePlus", "MagicGourd"],
  },
  ko: {
    source: "en",
    from: "en",
    to: "ko",
    title: "칼끝만으로는 아직 단검이 아니다",
    topics: ["창업", "제품", "인공지능", "MiraclePlus", "MagicGourd"],
  },
  hi: {
    source: "en",
    from: "en",
    to: "hi",
    title: "केवल नोक अभी खंजर नहीं है",
    topics: ["उद्यमिता", "उत्पाद", "कृत्रिम बुद्धिमत्ता", "MiraclePlus", "MagicGourd"],
  },
  id: {
    source: "en",
    from: "en",
    to: "id",
    title: "Ujung Saja Belum Menjadi Belati",
    topics: ["Kewirausahaan", "Produk", "Kecerdasan buatan", "MiraclePlus", "MagicGourd"],
  },
  vi: {
    source: "en",
    from: "en",
    to: "vi",
    title: "Chỉ có mũi nhọn thì chưa phải là dao găm",
    topics: ["Khởi nghiệp", "Sản phẩm", "Trí tuệ nhân tạo", "MiraclePlus", "MagicGourd"],
  },
  it: {
    source: "en",
    from: "en",
    to: "it",
    title: "Una punta da sola non è ancora un pugnale",
    topics: ["Imprenditorialità", "Prodotto", "Intelligenza artificiale", "MiraclePlus", "MagicGourd"],
  },
};

const documents = {
  "zh-Hans": matter(await fs.readFile(`${essayDir}/zh-Hans.md`, "utf8")),
  en: matter(await fs.readFile(`${essayDir}/en.md`, "utf8")),
};

function replacementsFor(sourceLocale, targetLocale) {
  const isTraditional = targetLocale === "zh-Hant";
  const entries = [
    ["[MiraclePlus][entity-miracleplus]", "ZXQENTITYMIRACLEPLUSZXQ", isTraditional ? "[奇績創壇][entity-miracleplus]" : "[MiraclePlus][entity-miracleplus]"],
    ["[奇绩创坛][entity-miracleplus]", "ZXQENTITYMIRACLEPLUSZXQ", isTraditional ? "[奇績創壇][entity-miracleplus]" : "[MiraclePlus][entity-miracleplus]"],
    [sourceLocale === "zh-Hans" ? "魔法葫芦" : "MagicGourd", "ZXQMAGICGOURDZXQ", isTraditional ? "魔法葫蘆" : "MagicGourd"],
    [sourceLocale === "zh-Hans" ? "奇绩创坛" : "MiraclePlus", "ZXQMIRACLEPLUSZXQ", isTraditional ? "奇績創壇" : "MiraclePlus"],
    ["Sayso", "ZXQSAYSOZXQ", "Sayso"],
    [sourceLocale === "zh-Hans" ? "商汤" : "SenseTime", "ZXQSENSETIMEZXQ", isTraditional ? "商湯" : "SenseTime"],
    ["DeepSeek", "ZXQDEEPSEEKZXQ", "DeepSeek"],
    ["ChatGPT", "ZXQCHATGPTZXQ", "ChatGPT"],
    [sourceLocale === "zh-Hans" ? "科含" : "Kehan", "ZXQKEHANZXQ", isTraditional ? "科含" : "Kehan"],
    ["Peter", "ZXQPETERZXQ", "Peter"],
    ["Qi Lu", "ZXQQILUZXQ", "Qi Lu"],
    ["AI", "ZXQAIZXQ", "AI"],
    ["UI", "ZXQUIZXQ", "UI"],
    ["PDF", "ZXQPDFZXQ", "PDF"],
    [sourceLocale === "zh-Hans" ? "Demo" : "demo", "ZXQDEMOZXQ", "Demo"],
    ["sharp", "ZXQSHARPZXQ", "sharp"],
  ];
  return entries;
}

function protect(text, replacements) {
  let result = text;
  for (const [source, token] of replacements) {
    result = result.split(source).join(token);
  }
  return result;
}

function restore(text, replacements) {
  let result = text;
  for (const [, token, target] of replacements) {
    result = result.split(token).join(target);
  }
  return result.trim();
}

function makeChunks(blocks, maxLength = 3600) {
  const chunks = [];
  let current = [];
  let length = 0;
  for (const block of blocks) {
    const added = block.length + (current.length ? delimiter.length : 0);
    if (current.length && length + added > maxLength) {
      chunks.push(current);
      current = [];
      length = 0;
    }
    current.push(block);
    length += block.length + (current.length > 1 ? delimiter.length : 0);
  }
  if (current.length) chunks.push(current);
  return chunks;
}

async function requestTranslation(text, from, to) {
  const url = "https://translate.googleapis.com/translate_a/single";
  const form = new URLSearchParams({ client: "gtx", sl: from, tl: to, dt: "t", q: text });

  let lastError;
  for (let attempt = 1; attempt <= 8; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: form,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      return payload[0].map((part) => part[0]).join("");
    } catch (error) {
      lastError = error;
      const delay = Math.min(30_000, 2_000 * 2 ** (attempt - 1));
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}

async function translateBlocks(blocks, rule, replacements) {
  const headingFlags = blocks.map((block) => block.startsWith("## "));
  const protectedBlocks = blocks.map((block) =>
    protect(block.replace(/^## /, ""), replacements),
  );
  const chunks = makeChunks(protectedBlocks);
  const translated = [];

  async function translateChunk(chunk) {
    const result = await requestTranslation(chunk.join(delimiter), rule.from, rule.to);
    const pieces = result.split(delimiter);
    if (pieces.length !== chunk.length) {
      if (chunk.length === 1) {
        throw new Error(`Block count changed for ${rule.to}: expected 1, got ${pieces.length}`);
      }
      const middle = Math.ceil(chunk.length / 2);
      return [
        ...(await translateChunk(chunk.slice(0, middle))),
        ...(await translateChunk(chunk.slice(middle))),
      ];
    }
    return pieces.map((piece) => restore(piece, replacements));
  }

  for (const chunk of chunks) {
    translated.push(...(await translateChunk(chunk)));
  }
  return translated.map((block, index) =>
    headingFlags[index] ? `## ${block}` : block,
  );
}

function yamlString(value) {
  return JSON.stringify(value);
}

async function translateLocale(locale, rule) {
  const source = documents[rule.source];
  const replacements = replacementsFor(rule.source, locale);
  const bodyBlocks = source.content.trim().split(/\n\n+/);
  const [translatedDescription] = await translateBlocks(
    [source.data.description],
    rule,
    replacements,
  );
  const translatedBody = await translateBlocks(bodyBlocks, rule, replacements);
  const headings = translatedBody.filter((block) => block.startsWith("## "));
  if (headings.length !== 8) throw new Error(`${locale} has ${headings.length} headings`);
  const entityCount = translatedBody.join("\n\n").match(/\[entity-miracleplus\]/g)?.length ?? 0;
  if (entityCount !== 1) throw new Error(`${locale} has ${entityCount} entity references`);

  const frontMatter = [
    "---",
    "id: not-yet-a-dagger",
    "type: essay",
    `locale: ${locale}`,
    `title: ${yamlString(rule.title)}`,
    `description: ${yamlString(translatedDescription)}`,
    "slug: not-yet-a-dagger",
    "published_at: 2025-12-31",
    "translation_status: ai-translated",
    "source_locale: zh-Hans",
    `source_hash: ${sourceHash}`,
    "topics:",
    ...rule.topics.map((topic) => `  - ${topic}`),
    "---",
    "",
  ].join("\n");

  await fs.writeFile(`${essayDir}/${locale}.md`, `${frontMatter}${translatedBody.join("\n\n")}\n`, "utf8");
  process.stdout.write(`${locale}: ${translatedBody.length} blocks, ${headings.length} headings\n`);
}

const entries = Object.entries(localeRules);
for (const [locale, rule] of entries) {
  try {
    await fs.access(`${essayDir}/${locale}.md`);
    process.stdout.write(`${locale}: already generated\n`);
  } catch {
    await translateLocale(locale, rule);
    await new Promise((resolve) => setTimeout(resolve, 1_500));
  }
}
