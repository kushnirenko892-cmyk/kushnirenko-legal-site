import { cn } from "@/lib/utils";

export function SectionEyebrow({
  number,
  children,
  className
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze", className)}>
      {number ? <span className="font-luxury text-base tracking-normal text-foreground/70">{number}</span> : null}
      <span className="h-px w-10 bg-bronze/55" />
      <span>{children}</span>
    </div>
  );
}
