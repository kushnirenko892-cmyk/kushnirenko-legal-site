import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionEyebrow } from "@/components/luxury/SectionEyebrow";

export function FinalCTA() {
  return (
    <MotionSection className="editorial-grid bg-coal py-16 text-paper sm:py-24">
      <Container>
          <div>
            <SectionEyebrow number="3.0">Первый шаг</SectionEyebrow>
            <h2 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[0.98] sm:text-7xl lg:text-8xl">
              Запишитесь на стратегический разбор, чтобы понять риски, приоритеты и маршрут запуска.
            </h2>
            <p className="mt-6 max-w-2xl text-paper/64">
              Telegram-бот задаст несколько вопросов и передаст команде структурированную заявку.
            </p>
            <Button className="mt-9" />
          </div>
      </Container>
    </MotionSection>
  );
}
