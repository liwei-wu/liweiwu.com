# Liwei Wu — personal publication

A static, Markdown-first personal publication about AI, software, and authorship. The visual and structural benchmark is [darioamodei.com](https://darioamodei.com/): restrained typography, a single reading column, an optional table of contents, and light/dark appearance. This site adds locale-aware URLs and transparent AI translation status.

## Author

- Chinese name: 吴立威
- English name: Liwei Wu

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. English is the default edition and uses unprefixed URLs. The root route detects the browser language, respects a saved manual choice, and falls back to English when no published edition matches.

Production verification:

```bash
npm test
```

The build is a static export in `out/`, so it can be hosted on any static web host. This repository contains no Codex Sites deployment configuration.

## Publish an article

Add a Markdown file under:

```text
content/zh-Hans/essays/<slug>.md
```

Use the existing first essay as the frontmatter template. Restart the development server after adding a new file so static route parameters are refreshed.

## Generate translations

Copy `.env.example` to `.env.local`, add an OpenAI API key, and export the variables into your shell. Generate one language:

```bash
npm run translate -- --locale en
```

Regenerate a stale translation:

```bash
npm run translate -- --locale en --force
```

Generate all configured languages only after reviewing the expected API cost:

```bash
CONFIRM_ALL_TRANSLATIONS=1 npm run translate -- --all
```

Generated files are ordinary Markdown and include `source_hash`. Unchanged translations are skipped. After personally reviewing Chinese or English, change `translation_status` to `original` or `author-reviewed`; untouched outputs remain visibly marked `ai-translated`.

## Locale policy

`languages.json` contains 185 tags: the current ISO 639 Set 1 list with `zh` replaced by `zh-Hans` and `zh-Hant`. Region variants collapse to their base language; for example, `zh-Hant-HK` and `zh-Hant-TW` both match `zh-Hant`.

English pages live at `/` and `/essay/<slug>/`. Every other language is explicitly prefixed, such as `/zh-Hans/` and `/zh-Hans/essay/<slug>/`. A language switch stays on the corresponding article whenever that translation exists.
