"use client";

import Link from "next/link";
import { telegramUrl } from "@/lib/constants/navigation";

export function FloatingTelegramCTA() {
  return (
    <Link
      href={telegramUrl}
      className="fixed bottom-5 right-5 z-40 hidden border border-bronze/50 bg-card/90 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/82 backdrop-blur transition-all duration-500 hover:border-foreground hover:bg-foreground hover:text-background md:inline-flex"
    >
      Telegram
    </Link>
  );
}
