import { cases } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CasesSection() {
  return (
    <MotionSection id="cases" className="light-grid bg-card py-16 text-foreground sm:py-24">
      <Container>
          <SectionTitle eyebrow="Кейсы" number="2.1" title="Доверие через конкретные рабочие ситуации" light />
          <div className="mt-12 border-y border-[color:var(--line-soft)]">
          {cases.map((item, index) => (
            <article key={item.title} className="grid gap-5 border-b border-[color:var(--line-soft)] py-8 last:border-b-0 md:grid-cols-[92px_1fr_220px]">
              <span className="font-luxury text-5xl text-bronze">0{index + 1}</span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/44">{item.tag}</span>
                <h3 className="mt-3 font-display text-4xl leading-tight text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm leading-6 text-foreground/62">{item.result}</p>
            </article>
          ))}
          </div>
      </Container>
    </MotionSection>
  );
}
