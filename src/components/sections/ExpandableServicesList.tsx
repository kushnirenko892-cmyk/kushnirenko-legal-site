"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ExpandableServicesListProps = {
  items?: readonly string[];
  className?: string;
  itemClassName?: string;
};

export function ExpandableServicesList({
  items,
  className,
  itemClassName
}: ExpandableServicesListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const safeItems = items ?? [];
  const visibleItems = isExpanded ? safeItems : safeItems.slice(0, 4);

  return (
    <>
      <ul className={cn("mt-12 grid gap-0 border-y border-paper/14 sm:grid-cols-2", className)}>
        {visibleItems.map((item, index) => (
          <li
            key={item}
            className={cn(
              "border-b border-paper/12 p-5 text-sm leading-6 text-paper/72 sm:odd:border-r",
              index >= visibleItems.length - 2 ? "sm:border-b-0" : "",
              index === visibleItems.length - 1 ? "border-b-0" : "",
              itemClassName
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      {safeItems.length > 4 ? (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 border border-[color:var(--line-strong)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-all duration-500 ease-out hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? "Свернуть" : "Смотреть все услуги"}</span>
          <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-y-0.5">
            {isExpanded ? "↑" : "↓"}
          </span>
        </button>
      ) : null}
    </>
  );
}
