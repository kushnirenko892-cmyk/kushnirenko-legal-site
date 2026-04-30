import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <MotionSection id="about" className="bg-coal py-16 text-paper sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
            alt="Профессиональная встреча за рабочим столом"
            fill
            className="object-cover opacity-82 grayscale"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          </div>
          <SectionTitle
            eyebrow="О Елизавете"
            number="2.2"
            title="Юридический стратег, который видит бизнес целиком"
            text="Фокус не в том, чтобы выдать набор документов. Задача - понять модель, риски, продажи, команду и собрать юридическую систему, которая поддерживает рост."
            light
          />
        </div>
      </Container>
    </MotionSection>
  );
}
