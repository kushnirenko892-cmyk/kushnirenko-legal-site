import { cn } from "@/lib/utils";

export function EditorialDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-[color:var(--line-soft)]" />
      <span className="h-1.5 w-1.5 rounded-full bg-bronze/80" />
      <span className="h-px flex-1 bg-[color:var(--line-soft)]" />
    </div>
  );
}
