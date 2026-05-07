import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainCta } from "@/lib/constants/content";

export function Hero() {
  return (
    <section id="hero" className="premium-noise editorial-grid relative overflow-hidden bg-background text-foreground">
      <Image
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=82"
        alt="Рабочий стол с юридическими документами"
        fill
        priority
        className="object-cover opacity-[0.14] sm:opacity-[0.22]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/82" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-background" />
      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-10 sm:py-14">
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
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=82"
              alt="Юрист за рабочим столом"
              fill
              priority
              className="object-cover opacity-85 grayscale"
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
