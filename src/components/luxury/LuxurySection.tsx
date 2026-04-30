import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { cn } from "@/lib/utils";

export function LuxurySection({
  id,
  children,
  tone = "dark",
  className
}: {
  id?: string;
  children: ReactNode;
  tone?: "dark" | "cocoa" | "deep";
  className?: string;
}) {
  const tones = {
    dark: "bg-background text-foreground",
    cocoa: "bg-cocoa text-foreground",
    deep: "bg-card text-foreground"
  };

  return (
    <MotionSection id={id} className={cn("py-20 sm:py-28", tones[tone], className)}>
      <Container>{children}</Container>
    </MotionSection>
  );
}
