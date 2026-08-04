import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { TranslationNotice } from "@/components/TranslationNotice";
import { getContentByLocale, getPublishedLocales } from "@/lib/content";
import { createLanguageOptions, formatMonth } from "@/lib/i18n";
import { contentPath, localeHomePath } from "@/lib/routes";
import { homeStructuredData } from "@/lib/seo";
import { siteConfig } from "@/site.config";

interface PublicationHomeProps {
  locale: string;
}

export function PublicationHome({ locale }: PublicationHomeProps) {
  const chinese = locale.startsWith("zh");
  const japanese = locale === "ja";
  const author = chinese
    ? siteConfig.authorChinese
    : japanese
      ? siteConfig.authorJapanese
      : siteConfig.author;
  const essays = getContentByLocale(locale, "essay");
  const notes = getContentByLocale(locale, "note");
  const publications = [...essays, ...notes];
  const publishedLocales = getPublishedLocales();
  const localeDestinations = Object.fromEntries(
    publishedLocales.map((item) => [item, localeHomePath(item)]),
  );
  const languageOptions = createLanguageOptions(
    locale,
    publishedLocales,
    localeDestinations,
  );

  return (
    <SiteHeader
      author={author}
      homeHref={localeHomePath(locale)}
      currentLocale={locale}
      languageOptions={languageOptions}
    >
      <JsonLd
        data={homeStructuredData(locale, publications, publishedLocales)}
      />
      <main className="home-main">
        <article className="home-content">
          <h1 className="sr-only">
            {chinese
              ? "吴立威（Liwei Wu）"
              : japanese
                ? "呉立威（Liwei Wu）"
                : "Liwei Wu (吴立威)"}
          </h1>
          {chinese ? (
            <>
              <p>
                吴立威（Liwei Wu）是一名 AI 应用创业者，也是
                <a href="https://deepflywheel.com/">深度飞轮</a>
                的创始人，致力于探索如何用 AI 构建新一代应用与软件。
              </p>
              <p>
                此前，吴立威曾任商汤科技研发总监，并作为早期创始员工参与公司创业。他先后创建人脸活体检测与工业视觉研发团队，推动
                AI 技术服务数亿用户，并应用于手机、高铁等大规模工业场景。
              </p>
              <p>
                吴立威本科毕业于南京大学，后获清华大学硕士学位，目前在清华大学攻读创新领军工程博士，研究方向为智能软硬件系统。
              </p>
            </>
          ) : japanese ? (
            <>
              <p>
                呉立威（Liwei Wu）はAIアプリケーション起業家であり、
                <a href="https://deepflywheel.com/">DeepFlywheel</a>
                の創業者です。AIを用いて次世代のアプリケーションとソフトウェアを構築する方法を探究しています。
              </p>
              <p>
                以前はSenseTimeの研究開発ディレクターを務め、創業初期のメンバーとして同社の立ち上げに参画しました。顔の生体検知と産業用コンピュータビジョンの研究開発チームを創設し、数億人のユーザーにAI技術を届け、スマートフォンや高速鉄道など大規模な産業現場への導入を推進しました。
              </p>
              <p>
                南京大学を卒業後、清華大学で修士号を取得。現在は同大学のイノベーション・リーダーシップ工学博士課程に在籍し、知能化されたハードウェア・ソフトウェアシステムを研究しています。
              </p>
            </>
          ) : (
            <>
              <p>
                Liwei Wu (吴立威) is an AI application entrepreneur and the founder of{" "}
                <a href="https://deepflywheel.com/">DeepFlywheel</a>, where he
                explores how AI can be used to build a new generation of
                applications and software.
              </p>
              <p>
                Previously, Liwei served as Director of R&amp;D at SenseTime and
                joined the company as an early founding employee. He founded its
                face liveness detection and industrial vision R&amp;D teams,
                helping bring AI technology to hundreds of millions of users and
                large-scale industrial applications including smartphones and
                high-speed rail.
              </p>
              <p>
                Liwei earned his bachelor&apos;s degree from Nanjing University and
                his master&apos;s degree from Tsinghua University. He is currently
                pursuing an engineering doctorate in innovation leadership at
                Tsinghua University, with a research focus on intelligent
                hardware-software systems.
              </p>
            </>
          )}

          <section className="home-section">
            <h2>{chinese ? "文章" : japanese ? "エッセイ" : "Essays"}</h2>
            <ul className="publication-list">
              {essays.map((essay) => (
                <li key={essay.id}>
                  <Link href={contentPath(locale, "essay", essay.slug)}>
                    {essay.title}
                  </Link>
                  <span className="publication-date-inline">
                    {chinese || japanese
                      ? `（${formatMonth(essay.publishedAt, locale)}）`
                      : ` (${formatMonth(essay.publishedAt, locale)})`}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {notes.length ? (
            <section className="home-section">
              <h2>{chinese ? "札记" : japanese ? "ノート" : "Notes"}</h2>
              <ul className="publication-list">
                {notes.map((note) => (
                  <li key={note.id}>
                    <Link href={contentPath(locale, "note", note.slug)}>
                      {note.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="home-section">
            <h2>{chinese ? "研究" : japanese ? "研究" : "Research"}</h2>
            <ul className="publication-list">
              <li>
                <a href={siteConfig.scholarUrl} rel="me">
                  Google Scholar
                </a>
              </li>
            </ul>
          </section>

          <TranslationNotice
            locale={locale}
            englishHref={localeHomePath("en")}
            chineseHref={localeHomePath("zh-Hans")}
            as="footer"
            className="home-footer translation-notice"
          />
        </article>
      </main>
    </SiteHeader>
  );
}
