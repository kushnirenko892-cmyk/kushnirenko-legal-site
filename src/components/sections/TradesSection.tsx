import { tradeItems } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { ExpandableServicesList } from "@/components/sections/ExpandableServicesList";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TradesSection() {
  return (
    <MotionSection id="trades" className="bg-coal py-16 text-paper sm:py-24">
      <Container>
          <SectionTitle
            eyebrow="Торги"
            number="1.4"
            title="Участие в торгах и тендерах"
            light
          />
          <ExpandableServicesList items={tradeItems} />
      </Container>
    </MotionSection>
  );
}
