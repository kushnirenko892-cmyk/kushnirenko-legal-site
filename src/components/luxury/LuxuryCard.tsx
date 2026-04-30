import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function LuxuryCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "border border-[color:var(--line-soft)] bg-card/72 p-6 transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-bronze/70 hover:bg-cocoa/72",
        className
      )}
    >
      {children}
    </article>
  );
}
