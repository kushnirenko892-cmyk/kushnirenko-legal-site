"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { aboutPhotos } from "@/lib/constants/content";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const safePhotos = aboutPhotos.length
    ? aboutPhotos
    : [{ src: "/img/about-1.jpg", alt: "Елизавета Кушниренко" }] as const;

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
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="order-2 relative aspect-[2/3] w-full max-w-[420px] overflow-hidden lg:order-1">
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-out"
              style={{ transform: `translate3d(-${activePhoto * 100}%, 0, 0)` }}
            >
              {safePhotos.map((photo) => (
                <div key={photo.alt} className="relative h-full min-w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pt-8 xl:pt-14">
            <SectionTitle eyebrow="Обо мне" number="2.2" title="Обо мне" light />
            <div className="mt-5 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">
              <p>
                Меня зовут Елизавета Сергеевна Кушниренко. Я юрист с высшим юридическим образованием и с 5-летним опытом частной практики
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
