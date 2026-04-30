import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function KushSection() {
  return (
    <MotionSection id="kush" className="light-grid bg-cocoa py-16 text-foreground sm:py-24">
      <Container>
        <div className="border-y border-[color:var(--line-soft)] py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-end">
          <SectionTitle
            eyebrow="KUSH"
            number="1.5"
            title="Когда проекту нужна не только юридическая база"
            text="Подключаем визуал, сайт, Telegram-боты, техническую настройку и запусковую упаковку, чтобы решение не распадалось на отдельных подрядчиков."
            light
          />
            <Button variant="secondary">Запустить проект с KUSH</Button>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
