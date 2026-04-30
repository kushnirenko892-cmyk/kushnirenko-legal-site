import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialDivider } from "@/components/luxury/EditorialDivider";
import { MonogramMark } from "@/components/luxury/MonogramMark";
import { heroStats } from "@/lib/constants/content";

export function Hero() {
  return (
    <section id="hero" className="premium-noise editorial-grid relative overflow-hidden bg-background text-foreground">
      <Image
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=82"
        alt="Рабочий стол со стратегическими документами"
        fill
        priority
        className="object-cover opacity-[0.14] sm:opacity-[0.22]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/82" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-background" />
      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-between py-10 sm:py-14">
        <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/56 sm:flex-row sm:items-start sm:justify-between">
          <span>1.0</span>
          <span className="font-luxury max-w-full break-words text-bronze sm:text-right">Legal Atelier / KUSH</span>
        </div>
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <MonogramMark className="mb-8" />
            <p className="max-w-full break-words text-xs font-semibold uppercase leading-6 tracking-[0.24em] text-bronze">
              <span className="sm:hidden">Юридический стратег</span>
              <span className="hidden sm:inline">Юридический стратег для запусков</span>
            </p>
            <h1 className="mt-6 max-w-6xl font-display text-[3.65rem] font-medium leading-[0.9] sm:text-8xl lg:text-9xl">
              <span className="sm:hidden">
                Право
                <br />с особым
                <br />вниманием
                <br />к бизнесу.
              </span>
              <span className="hidden sm:inline">Право с особым вниманием к бизнесу.</span>
            </h1>
            <p className="mt-8 max-w-[22rem] text-base leading-8 text-foreground/70 sm:max-w-2xl sm:text-lg">
              Елизавета Кушниренко собирает юридическую архитектуру для бизнеса, онлайн-школ, торгов и запусков с командой KUSH.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto">
                <span className="sm:hidden">Записаться на разбор</span>
                <span className="hidden sm:inline">Записаться на стратегический разбор</span>
              </Button>
              <Button href="#directions" variant="ghost" className="w-full sm:w-auto">
                Смотреть услуги
              </Button>
            </div>
          </div>
          <aside className="min-w-0 border border-[color:var(--line-strong)] bg-card/88 p-6 backdrop-blur">
            <p className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
              <span className="sm:hidden">Стратегия, документы и запуск.</span>
              <span className="hidden sm:inline">Стратегия, документы и запуск в одной управляемой системе.</span>
            </p>
            <EditorialDivider className="my-7" />
            <dl className="mt-8 grid gap-5">
              {heroStats.map((item) => (
                <div key={item.label} className="grid grid-cols-[78px_1fr] items-baseline gap-3 border-t border-[color:var(--line-soft)] pt-4 sm:grid-cols-[72px_1fr] sm:gap-4">
                  <dt className="font-luxury whitespace-nowrap text-3xl text-bronze">{item.value}</dt>
                  <dd className="min-w-0 break-words text-xs leading-5 text-foreground/58 sm:text-sm">{item.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
        <div className="flex flex-col gap-3 border-t border-[color:var(--line-soft)] pt-5 text-xs uppercase tracking-[0.2em] text-foreground/48 sm:flex-row sm:items-center sm:justify-between">
          <span>Scroll to explore</span>
          <span>Москва / онлайн</span>
        </div>
      </Container>
    </section>
  );
}
