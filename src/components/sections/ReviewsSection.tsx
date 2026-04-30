import { reviews } from "@/lib/constants/content";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ReviewsSection() {
  return (
    <MotionSection id="reviews" className="light-grid bg-cocoa py-16 text-foreground sm:py-24">
      <Container>
          <SectionTitle eyebrow="Отзывы" number="2.3" title="Клиенты ценят ясность, маршрут и спокойствие" light />
          <div className="mt-12 grid gap-0 border-y border-[color:var(--line-soft)] lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.name} className="border-0 border-b border-[color:var(--line-soft)] bg-transparent shadow-none lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="text-base leading-7 text-foreground/70">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-6 text-sm font-semibold text-foreground">{review.name}</p>
            </Card>
          ))}
          </div>
      </Container>
    </MotionSection>
  );
}
