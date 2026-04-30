import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { mainCta } from "@/lib/constants/content";
import { telegramUrl } from "@/lib/constants/navigation";

type LuxuryButtonProps = {
  children?: ReactNode;
  href?: string;
  variant?: "outline" | "cream" | "ghost";
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children" | "className">;

const variants = {
  outline:
    "border-[color:var(--line-strong)] text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
  cream:
    "border-foreground bg-foreground text-background hover:border-bronze hover:bg-transparent hover:text-foreground",
  ghost:
    "border-transparent text-foreground/76 hover:border-[color:var(--line-soft)] hover:text-foreground"
};

export function LuxuryButton({
  children = mainCta,
  href = telegramUrl,
  variant = "outline",
  className,
  ...props
}: LuxuryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze",
        variants[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
