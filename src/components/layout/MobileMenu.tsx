"use client";

import { Menu, X } from "lucide-react";
import { navigationItems, telegramUrl } from "@/lib/constants/navigation";
import { mainCta } from "@/lib/constants/content";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/shadcn/sheet";
import { ShadcnButton } from "@/components/ui/shadcn/button";

export function MobileMenu() {
  return (
    <Sheet>
      <div className="fixed right-24 top-4 z-50 shrink-0 lg:hidden">
        <SheetTrigger asChild>
          <ShadcnButton type="button" aria-label="Открыть меню" size="icon" variant="luxury">
            <Menu className="h-5 w-5" />
          </ShadcnButton>
        </SheetTrigger>
      </div>
      <SheetContent>
        <div className="flex items-center justify-between border-b border-[color:var(--line-soft)] pb-5">
          <span className="font-luxury text-2xl text-bronze">ЕК</span>
          <SheetClose asChild>
            <ShadcnButton type="button" aria-label="Закрыть меню" size="icon" variant="ghost">
              <X className="h-5 w-5" />
            </ShadcnButton>
          </SheetClose>
        </div>
        <nav className="mt-8 grid gap-2">
          {navigationItems.map((item) => (
            <SheetClose key={item.href} asChild>
              <a href={item.href} className="border-b border-[color:var(--line-soft)] py-4 font-display text-3xl text-foreground">
                {item.label}
              </a>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <a
              href={telegramUrl}
              className="mt-8 border border-[color:var(--line-strong)] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition duration-500 hover:bg-foreground hover:text-background"
            >
              {mainCta}
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
