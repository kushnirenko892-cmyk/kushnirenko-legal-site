import { mainCta } from "@/lib/constants/content";
import { navigationItems, telegramUrl } from "@/lib/constants/navigation";
import { Container } from "@/components/ui/Container";
import { MonogramMark } from "@/components/luxury/MonogramMark";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line-soft)] bg-background/86 backdrop-blur">
      <Container className="relative flex h-20 items-center justify-between">
        <a href="#hero" className="flex min-w-0 items-center gap-4">
          <MonogramMark className="hidden h-10 min-w-10 text-base sm:inline-flex" />
          <span className="min-w-0 max-w-[220px] truncate font-display text-xl text-foreground sm:max-w-[280px]">
            Елизавета Кушниренко
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/58 transition duration-500 hover:text-bronze">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={telegramUrl}
          className="hidden min-h-11 items-center border border-[color:var(--line-strong)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition duration-500 hover:bg-foreground hover:text-background lg:inline-flex"
        >
          {mainCta}
        </a>
        <MobileMenu />
      </Container>
    </header>
  );
}
