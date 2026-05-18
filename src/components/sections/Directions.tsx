import { directions } from "@/lib/constants/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Directions() {
  return (
    <MotionSection id="directions" className="light-grid bg-cocoa py-16 text-foreground sm:py-24">
      <Container>
          <SectionTitle
            eyebrow="Направления"
            number="1.1"
            title="Направления работы"
            text="Основные направления моей юридической практики"
            light
          />
        <div className="mt-12 border-y border-[color:var(--line-soft)]">
          {directions.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="grid gap-5 border-b border-[color:var(--line-soft)] py-7 last:border-b-0 md:grid-cols-[88px_1fr_auto] md:items-center">
                <div className="flex items-center gap-3 text-bronze">
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-[0.14em]">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/62">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
        <Button className="mt-8" variant="secondary" />
      </Container>
    </MotionSection>
  );
}
