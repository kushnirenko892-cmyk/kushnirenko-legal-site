import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainCta } from "@/lib/constants/content";
import heroDesktop from "../../../img/hero 16.9.png";
import heroTablet from "../../../img/hero 3.4.png";
import heroMobile from "../../../img/hero 9.16.png";
import heroPortrait from "../../../img/IMG1.jpg";

export function Hero() {
  return (
    <section id="hero" className="premium-noise editorial-grid relative overflow-hidden bg-background text-foreground">
      <Image
        src={heroMobile}
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover sm:hidden"
        sizes="100vw"
      />
      <Image
        src={heroTablet}
        alt=""
        fill
        priority
        aria-hidden="true"
        className="hidden object-cover sm:block lg:hidden"
        sizes="100vw"
      />
      <Image
        src={heroDesktop}
        alt=""
        fill
        priority
        aria-hidden="true"
        className="hidden object-cover lg:block"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/72" />
      <Container className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-center py-10 sm:py-14">
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <h1 className="max-w-6xl font-display text-[3.4rem] font-medium leading-[0.9] sm:text-8xl lg:text-9xl">
              Юрист для бизнеса и специалист по торгам
            </h1>
            <p className="mt-8 max-w-[22rem] text-base leading-8 text-foreground/70 sm:max-w-2xl sm:text-lg">
              Юридическое сопровождение предпринимателей, экспертов, онлайн-школ и компаний.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto">{mainCta}</Button>
              <Button href="#directions" variant="ghost" className="w-full sm:w-auto">
                Направления
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-[color:var(--line-strong)] bg-card/88 backdrop-blur sm:min-h-[480px]">
            <Image
              src={heroPortrait}
              alt="Юрист за рабочим столом"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </div>
        <div className="border-t border-[color:var(--line-soft)] pt-5 text-xs uppercase tracking-[0.2em] text-foreground/48">
          <span>Санкт-Петербург / онлайн</span>
        </div>
      </Container>
    </section>
  );
}
