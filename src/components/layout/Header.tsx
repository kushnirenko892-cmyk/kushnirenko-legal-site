"use client";

import { useEffect, useState } from "react";
import { mainCta } from "@/lib/constants/content";
import { navigationItems, telegramUrl } from "@/lib/constants/navigation";
import { Container } from "@/components/ui/Container";
import { MonogramMark } from "@/components/luxury/MonogramMark";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isFooterInverted, setIsFooterInverted] = useState(false);

  useEffect(() => {
    const syncFromDocument = () => {
      setIsFooterInverted(document.documentElement.dataset.footerInverted === "true");
    };

    const handleFooterInversion = (event: Event) => {
      const detail = (event as CustomEvent<{ inverted?: boolean }>).detail;
      setIsFooterInverted(Boolean(detail?.inverted));
    };

    syncFromDocument();
    window.addEventListener("footer-inversion-change", handleFooterInversion);

    return () => {
      window.removeEventListener("footer-inversion-change", handleFooterInversion);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur transition-colors duration-700 ease-out",
        isFooterInverted ? "border-ink/10 bg-paper/88" : "border-[color:var(--line-soft)] bg-background/86"
      )}
    >
      <Container className="relative flex h-20 items-center justify-between">
        <a href="#hero" className="flex min-w-0 items-center gap-4">
          <MonogramMark
            className={cn(
              "hidden h-10 min-w-10 text-base transition-colors duration-700 sm:inline-flex",
              isFooterInverted ? "border-ink/15" : ""
            )}
          />
          <span
            className={cn(
              "min-w-0 max-w-[220px] truncate font-display text-xl transition-colors duration-700 sm:max-w-[280px]",
              isFooterInverted ? "text-ink" : "text-foreground"
            )}
          >
            Елизавета Кушниренко
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.14em] transition duration-500 hover:text-bronze",
                isFooterInverted ? "text-ink/62" : "text-foreground/58"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={telegramUrl}
          className={cn(
            "hidden min-h-11 items-center border px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition duration-500 lg:inline-flex",
            isFooterInverted
              ? "border-ink/20 text-ink hover:bg-ink hover:text-paper"
              : "border-[color:var(--line-strong)] text-foreground hover:bg-foreground hover:text-background"
          )}
        >
          {mainCta}
        </a>
        <MobileMenu inverted={isFooterInverted} />
      </Container>
    </header>
  );
}
