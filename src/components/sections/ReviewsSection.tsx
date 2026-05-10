"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import { testimonials } from "@/lib/constants/content";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const instagramReviewsUrl = "https://www.instagram.com/stories/highlights/18186953866333046/";
const collapsedReviewStyle: CSSProperties = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden"
};

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const isActiveReviewExpanded = Boolean(expandedReviews[activeReview]);

  useEffect(() => {
    if (
      testimonials.length <= 1 ||
      isActiveReviewExpanded ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % testimonials.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isActiveReviewExpanded]);

  const showPreviousReview = () => {
    setActiveReview((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % testimonials.length);
  };

  const toggleReview = (index: number) => {
    setExpandedReviews((current) => ({
      ...current,
      [index]: !current[index]
    }));
  };

  return (
    <MotionSection id="reviews" className="light-grid bg-cocoa py-16 text-foreground sm:py-24">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle eyebrow="Отзывы" number="2.3" title="Отзывы клиентов" light />
          <div className="flex flex-wrap gap-3">
            <a
              href={instagramReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-[color:var(--line-strong)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition duration-500 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            >
              Все отзывы →
            </a>
            <button
              type="button"
              onClick={showPreviousReview}
              className="inline-flex h-12 w-12 items-center justify-center border border-[color:var(--line-strong)] text-foreground transition duration-500 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNextReview}
              className="inline-flex h-12 w-12 items-center justify-center border border-[color:var(--line-strong)] text-foreground transition duration-500 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden border-y border-[color:var(--line-soft)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(-${activeReview * 100}%, 0, 0)` }}
          >
            {testimonials.map((review, index) => {
              const isExpanded = Boolean(expandedReviews[index]);

              return (
                <div key={`${index}-${review.text.slice(0, 24)}`} className="min-w-full">
                  <Card className="border-0 bg-transparent p-0 shadow-none">
                    <div className="py-9 lg:py-12">
                      <p
                        className="max-w-5xl font-display text-3xl leading-tight text-foreground/78 sm:text-4xl lg:text-5xl"
                        style={isExpanded ? undefined : collapsedReviewStyle}
                      >
                        &ldquo;{review.text}&rdquo;
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleReview(index)}
                        className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-bronze transition-colors duration-500 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Свернуть" : "Смотреть ещё →"}
                      </button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          {testimonials.map((review, index) => (
            <button
              key={`${index}-${review.text.slice(0, 24)}`}
              type="button"
              onClick={() => setActiveReview(index)}
              className={`h-px flex-1 transition-colors duration-500 ${index === activeReview ? "bg-bronze" : "bg-foreground/18"}`}
              aria-label={`Показать отзыв ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
