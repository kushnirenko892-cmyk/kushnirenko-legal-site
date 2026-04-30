import { faq } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Accordion, AccordionContent, AccordionTrigger, LuxuryAccordionItem } from "@/components/ui/shadcn/accordion";

export function FAQSection() {
  return (
    <MotionSection id="faq" className="bg-ink py-16 text-paper sm:py-24">
      <Container>
          <SectionTitle eyebrow="FAQ" number="2.4" title="Коротко о первом шаге и формате работы" light />
          <Accordion type="single" collapsible className="mt-12 border-y border-[color:var(--line-soft)]">
            {faq.map((item, index) => (
              <LuxuryAccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-2xl leading-tight text-paper transition-colors duration-500 hover:text-bronze">
                  <span>{item.question}</span>
                  <span className="font-luxury text-lg text-bronze">+</span>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden pb-6 text-sm leading-7 text-paper/62 data-[state=closed]:animate-none data-[state=open]:animate-none">
                  {item.answer}
                </AccordionContent>
              </LuxuryAccordionItem>
            ))}
          </Accordion>
      </Container>
    </MotionSection>
  );
}
