import Link from "next/link";
import { LanguageRedirect } from "@/components/LanguageRedirect";
import type { LanguageOption } from "@/lib/i18n/locale";
import { getUiMessages } from "@/lib/i18n/messages";

interface LanguageGatewayProps {
  destinations: Record<string, string>;
  options: readonly LanguageOption[];
}

export function LanguageGateway({ destinations, options }: LanguageGatewayProps) {
  const copy = getUiMessages("en");
  return (
    <main className="redirect-page">
      <LanguageRedirect destinations={destinations} fallback="en" />
      <div>
        <p className="redirect-title">Liwei Wu · 吴立威 · 呉立威</p>
        <p className="redirect-status">{copy.gatewayStatus}</p>
        <nav aria-label="Languages">
          {options.map((option) => (
            <Link
              key={option.locale}
              href={option.href ?? destinations[option.locale]}
              hrefLang={option.locale}
              lang={option.locale}
            >
              {option.nativeName}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
