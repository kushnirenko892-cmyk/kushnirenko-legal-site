import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function LicensingSection() {
  return (
    <MotionSection id="licensing" className="light-grid bg-card py-16 text-foreground sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="border-l border-bronze pl-6">
            <p className="font-display text-5xl leading-tight text-foreground sm:text-6xl">Лицензия - это доверие к курсу, а не просто папка документов.</p>
            <p className="mt-5 text-foreground/62">
            Проверяем программу, сайт, оферты, команду и маршрут получения образовательной лицензии.
            </p>
          </div>
          <div>
            <SectionTitle
              eyebrow="Онлайн-школы"
              number="1.3"
              title="Готовим образовательный проект к проверке"
              text="Подходит экспертам, наставникам, продюсерам и владельцам курсов, которым важно работать легально и статусно."
              light
            />
            <Button className="mt-7" variant="secondary">Обсудить лицензирование</Button>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
