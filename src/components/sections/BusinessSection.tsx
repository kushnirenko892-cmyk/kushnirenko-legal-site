import { businessItems } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { ExpandableServicesList } from "@/components/sections/ExpandableServicesList";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BusinessSection() {
  return (
    <MotionSection id="business" className="bg-ink py-16 text-paper sm:py-24">
      <Container>
          <SectionTitle
            eyebrow="Бизнес"
            number="1.2"
            title="Онлайн-сопровождение бизнеса"
            light
          />
          <ExpandableServicesList items={businessItems} />
      </Container>
    </MotionSection>
  );
}
