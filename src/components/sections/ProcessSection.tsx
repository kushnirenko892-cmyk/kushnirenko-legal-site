import { processSteps } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProcessSection() {
  return (
    <MotionSection id="process" className="bg-ink py-16 text-paper sm:py-24">
      <Container>
          <SectionTitle eyebrow="Процесс" number="2.0" title="От разбора к внедрению без лишней сложности" light />
          <div className="mt-12 grid gap-0 border-y border-paper/14 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="border-b border-paper/12 p-6 md:border-r lg:border-b-0 lg:last:border-r-0">
              <span className="font-luxury text-4xl text-bronze">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-paper/62">{step.text}</p>
            </div>
          ))}
          </div>
      </Container>
    </MotionSection>
  );
}
