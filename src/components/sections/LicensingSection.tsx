import { onlineSchoolItems } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { ExpandableServicesList } from "@/components/sections/ExpandableServicesList";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function LicensingSection() {
  return (
    <MotionSection id="licensing" className="light-grid bg-card py-16 text-foreground sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Онлайн-школы"
          number="1.3"
          title="Сопровождение запуска онлайн-школ и курсов"
          light
        />
        <ExpandableServicesList items={onlineSchoolItems} />
      </Container>
    </MotionSection>
  );
}
