"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { aboutPhotos } from "@/lib/constants/content";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const safePhotos = aboutPhotos.length
    ? aboutPhotos
    : [{ src: "/og-image.svg", alt: "Елизавета Кушниренко" }] as const;

  useEffect(() => {
    if (safePhotos.length <= 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % safePhotos.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [safePhotos.length]);

  return (
    <MotionSection id="about" className="bg-coal py-16 text-paper sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div className="relative min-h-[420px] overflow-hidden">
            {safePhotos.map((photo, index) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                className={cn(
                  "object-cover opacity-0 grayscale transition-opacity duration-700",
                  index === activePhoto ? "opacity-[0.82]" : ""
                )}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ))}
          </div>
          <div>
            <SectionTitle eyebrow="Обо мне" number="2.2" title="Обо мне" light />
            <div className="mt-5 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">
              <p>
                Меня зовут Елизавета Сергеевна Кушниренко. Я юрист с высшим юридическим образованием и опытом частной практики более 5 лет.
              </p>
              <p className="mt-4">
                Моя основная специализация — юридическое сопровождение бизнеса, торгов, тендеров, онлайн-школ и образовательных проектов.
              </p>
              <p className="mt-4">
                Также имею дополнительную квалификацию в сфере торгов и тендерного сопровождения.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
