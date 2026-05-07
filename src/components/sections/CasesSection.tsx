import { BriefcaseBusiness, GraduationCap, Handshake } from "lucide-react";
import { cases } from "@/lib/constants/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const caseIcons = [BriefcaseBusiness, GraduationCap, Handshake] as const;

export function CasesSection() {
  return (
    <MotionSection id="cases" className="light-grid bg-card py-16 text-foreground sm:py-24">
      <Container>
          <SectionTitle eyebrow="Реальные примеры" number="2.1" title="Моя практика" light />
          <div className="mt-12 border-y border-[color:var(--line-soft)]">
          {cases.map((item, index) => {
            const Icon = caseIcons[index] ?? BriefcaseBusiness;

            return (
            <article key={item.title} className="grid gap-5 border-b border-[color:var(--line-soft)] py-7 last:border-b-0 md:grid-cols-[88px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3 text-bronze">
                <Icon className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-[0.14em]">{item.tag}</span>
              </div>
              <div>
                <h3 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/62">{item.result}</p>
              </div>
              <Button href={item.href} className="md:min-w-56" variant="secondary">
                {item.cta}
              </Button>
            </article>
            );
          })}
          </div>
      </Container>
    </MotionSection>
  );
}
