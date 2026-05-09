import Link from "next/link";
import {
  footerCompanyNote,
  footerCopyright,
  footerDisclaimer,
  footerDocuments,
  footerRequisites
} from "@/lib/constants/content";
import { footerNavigation, telegramUrl } from "@/lib/constants/navigation";
import { Container } from "@/components/ui/Container";

type FooterProps = {
  withinInvertedZone?: boolean;
};

export function Footer({ withinInvertedZone = false }: FooterProps) {
  const foregroundClassName = withinInvertedZone ? "text-[color:var(--footer-zone-fg)]" : "text-ink";
  const mutedClassName = withinInvertedZone ? "text-[color:var(--footer-zone-muted)]" : "text-ink/72";
  const softMutedClassName = withinInvertedZone ? "text-[color:var(--footer-zone-muted)]" : "text-ink/60";
  const lineClassName = withinInvertedZone ? "border-[color:var(--footer-zone-line)]" : "border-ink/10";
  const footerLinkClassName = `whitespace-normal text-sm leading-6 ${mutedClassName} transition-colors duration-300 hover:text-bronze`;

  return (
    <footer id="contacts" className="relative">
      {!withinInvertedZone ? (
        <div
          aria-hidden="true"
          className="h-24 border-t border-paper/10 bg-gradient-to-b from-transparent via-paper/10 to-paper"
        />
      ) : null}
      <div className={`${foregroundClassName} ${withinInvertedZone ? `border-t ${lineClassName} bg-transparent` : "border-t border-ink/10 bg-paper"}`}>
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className={`grid gap-10 border-b ${lineClassName} pb-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr] lg:gap-12`}>
            <div className="max-w-md">
              <p className={`font-display text-4xl leading-none ${foregroundClassName} sm:text-5xl`}>Елизавета Кушниренко</p>
              <p className={`mt-5 text-sm leading-7 ${mutedClassName} sm:text-base`}>{footerCompanyNote}</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Документы</h2>
              <nav className="mt-5 grid gap-3">
                {footerDocuments.map((item) => (
                  <Link key={item.href} href={item.href} className={footerLinkClassName}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Навигация</h2>
              <nav className="mt-5 grid gap-3">
                {footerNavigation.map((item) => (
                  <a key={item.href} href={item.href} className={footerLinkClassName}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Реквизиты</h2>
              <div className={`mt-5 grid gap-3 text-sm leading-6 ${mutedClassName}`}>
                {footerRequisites.map((item) => (
                  <p key={item.label} className="whitespace-normal">
                    <span className={foregroundClassName}>{item.label}:</span> {item.value}
                  </p>
                ))}
                <p className="whitespace-normal">
                  <span className={foregroundClassName}>Telegram:</span>{" "}
                  <Link href={telegramUrl} className="transition-colors duration-300 hover:text-bronze">
                    Перейти
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 pt-8 lg:grid-cols-[1.2fr_auto] lg:items-end lg:justify-between">
            <p className={`max-w-3xl text-sm leading-6 ${softMutedClassName}`}>{footerDisclaimer}</p>
            <p className={`text-sm leading-6 ${softMutedClassName}`}>{footerCopyright}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
