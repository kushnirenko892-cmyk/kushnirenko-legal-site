import { cn } from "@/lib/utils";

export function SectionEyebrow({
  number,
  children,
  className,
  light = false,
  numberClassName
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  numberClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze", className)}>
      {number ? (
        <span
          className={cn(
            `font-luxury text-base tracking-normal ${light ? "text-foreground/70" : "text-ink/58"}`,
            numberClassName
          )}
        >
          {number}
        </span>
      ) : null}
      <span className="h-px w-10 bg-bronze/55" />
      <span>{children}</span>
    </div>
  );
}
