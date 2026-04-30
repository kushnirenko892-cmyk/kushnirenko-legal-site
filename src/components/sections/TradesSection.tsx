import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TradesSection() {
  return (
    <MotionSection id="trades" className="bg-coal py-16 text-paper sm:py-24">
      <Container>
          <SectionTitle
            eyebrow="Торги"
            number="1.4"
            title="Проверяем лот до того, как он станет проблемой"
            text="На торгах можно купить актив ниже рынка. Но без юридической проверки легко купить не возможность, а риск."
            light
          />
          <div className="mt-12 grid gap-0 border-y border-paper/14 md:grid-cols-3">
            {["Проверка лота", "Аккредитация", "Сопровождение участия"].map((item, index) => (
              <div key={item} className="border-b border-paper/12 p-6 md:border-b-0 md:border-r md:last:border-r-0">
                <span className="font-luxury text-4xl text-bronze">0{index + 1}</span>
                <p className="mt-5 font-semibold">{item}</p>
                <p className="mt-3 text-sm leading-6 text-paper/62">Понятный шаг в общем маршруте покупки актива.</p>
              </div>
            ))}
          </div>
          <Button className="mt-8">Проверить лот</Button>
      </Container>
    </MotionSection>
  );
}
