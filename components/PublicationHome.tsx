import Link from "next/link";
import { LanguageRedirect } from "@/components/LanguageRedirect";
import { SiteHeader } from "@/components/SiteHeader";
import { getContentByLocale, getPublishedLocales } from "@/lib/content";
import { formatMonth, getLanguageLabel } from "@/lib/i18n";
import { contentPath, localeHomePath } from "@/lib/routes";
import { siteConfig } from "@/site.config";

interface PublicationHomeProps {
  locale: string;
  autoDetect?: boolean;
}

export function PublicationHome({ locale, autoDetect = false }: PublicationHomeProps) {
  const chinese = locale.startsWith("zh");
  const showTranslationNotice = !chinese && !locale.startsWith("en");
  const essays = getContentByLocale(locale, "essay");
  const notes = getContentByLocale(locale, "note");
  const localeOptions = getPublishedLocales().map((item) => ({
    locale: item,
    label: getLanguageLabel(item),
    href: localeHomePath(item),
  }));

  return (
    <SiteHeader
      author={chinese ? siteConfig.authorChinese : siteConfig.author}
      homeHref={localeHomePath(locale)}
      currentLocale={locale}
      localeOptions={localeOptions}
    >
      {autoDetect ? (
        <LanguageRedirect
          destinations={Object.fromEntries(
            localeOptions.map((option) => [option.locale, option.href]),
          )}
          fallback="en"
        />
      ) : null}
      <main className="home-main">
        <article className="home-content">
          {chinese ? (
            <>
              <p>
                吴立威是一名 AI 应用创业者，也是
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
          ) : (
            <>
              <p>
                Liwei Wu is an AI application entrepreneur and the founder of{" "}
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
            <h2>{chinese ? "文章" : "Essays"}</h2>
            <ul className="publication-list">
              {essays.map((essay) => (
                <li key={essay.id}>
                  <Link href={contentPath(locale, "essay", essay.slug)}>
                    {essay.title}
                  </Link>
                  <span className="publication-date-inline">
                    {chinese
                      ? `（${formatMonth(essay.publishedAt, locale)}）`
                      : ` (${formatMonth(essay.publishedAt, locale)})`}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {notes.length ? (
            <section className="home-section">
              <h2>{chinese ? "札记" : "Notes"}</h2>
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
            <h2>{chinese ? "研究" : "Research"}</h2>
            <ul className="publication-list">
              <li>
                <a href="https://scholar.google.com/citations?user=dg1JyaUAAAAJ">
                  Google Scholar
                </a>
              </li>
            </ul>
          </section>

          {showTranslationNotice ? (
            <footer className="home-footer">
              Chinese and English are author-reviewed. Other editions are clearly
              marked AI translations.
            </footer>
          ) : null}
        </article>
      </main>
    </SiteHeader>
  );
}
