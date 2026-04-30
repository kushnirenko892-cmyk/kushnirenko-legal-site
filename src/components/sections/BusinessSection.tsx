import { businessItems } from "@/lib/constants/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BusinessSection() {
  return (
    <MotionSection id="business" className="bg-ink py-16 text-paper sm:py-24">
      <Container>
          <SectionTitle
            eyebrow="Бизнес"
            number="1.2"
            title="Юридическая база, которая помогает продавать спокойнее"
            text="Собираем документы и правила так, чтобы клиентский путь был понятным, а риски возвратов и претензий заранее закрыты."
            light
          />
          <ul className="mt-12 grid gap-0 border-y border-paper/14 sm:grid-cols-2">
            {businessItems.map((item) => (
              <li key={item} className="border-b border-paper/12 p-5 text-sm leading-6 text-paper/72 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0">
                {item}
              </li>
            ))}
          </ul>
          <Button className="mt-8" />
      </Container>
    </MotionSection>
  );
}
