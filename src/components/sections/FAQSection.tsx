import { faq } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Accordion, AccordionContent, AccordionTrigger, LuxuryAccordionItem } from "@/components/ui/shadcn/accordion";

type FAQSectionProps = {
  variant?: "default" | "inverted" | "scroll-inverted";
};

export function FAQSection({ variant = "default" }: FAQSectionProps) {
  const isInverted = variant === "inverted";
  const isScrollInverted = variant === "scroll-inverted";

  return (
    <MotionSection
      id="faq"
      className={
        isScrollInverted
          ? "relative bg-transparent py-16 text-[color:var(--footer-zone-fg)] sm:py-24"
          : isInverted
            ? "relative bg-transparent py-16 text-ink sm:py-24"
            : "bg-ink py-16 text-paper sm:py-24"
      }
    >
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          number="2.4"
          title="Часто задаваемые вопросы"
          light={!isInverted && !isScrollInverted}
          titleClassName={isScrollInverted ? "text-[color:var(--footer-zone-fg)]" : undefined}
          eyebrowNumberClassName={isScrollInverted ? "text-[color:var(--footer-zone-muted)]" : undefined}
        />
        <Accordion
          type="single"
          collapsible
          className={`mt-12 border-y ${
            isScrollInverted ? "border-[color:var(--footer-zone-line)]" : isInverted ? "border-ink/10" : "border-[color:var(--line-soft)]"
          }`}
        >
          {faq.map((item, index) => (
            <LuxuryAccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger
                className={`flex w-full items-center justify-between gap-6 py-6 text-left font-display text-2xl leading-tight transition-colors duration-500 ${
                  isScrollInverted
                    ? "text-[color:var(--footer-zone-fg)] hover:text-bronze"
                    : isInverted
                      ? "text-ink hover:text-bronze"
                      : "text-paper hover:text-bronze"
                }`}
              >
                <span>{item.question}</span>
                <span className="font-luxury text-lg text-bronze">+</span>
              </AccordionTrigger>
              <AccordionContent
                className={`overflow-hidden pb-6 text-sm leading-7 data-[state=closed]:animate-none data-[state=open]:animate-none ${
                  isScrollInverted ? "text-[color:var(--footer-zone-muted)]" : isInverted ? "text-ink/64" : "text-paper/62"
                }`}
              >
                {item.answer}
              </AccordionContent>
            </LuxuryAccordionItem>
          ))}
        </Accordion>
      </Container>
    </MotionSection>
  );
}
