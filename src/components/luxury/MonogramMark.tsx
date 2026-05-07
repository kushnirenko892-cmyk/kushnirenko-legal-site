import { cn } from "@/lib/utils";

export function MonogramMark({
  label = "ЕК",
  className
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-luxury inline-flex h-12 min-w-12 items-center justify-center border border-[color:var(--line-strong)] px-3 text-xl uppercase tracking-[0.08em] text-bronze",
        className
      )}
      aria-label={label}
    >
      {label}
    </span>
  );
}
