import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-paper/12 bg-ink py-12 text-paper">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-4xl">Елизавета Кушниренко</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-paper/60">
            Юридический стратег для бизнеса, онлайн-школ, лицензирования, торгов и запусков с командой KUSH.
          </p>
        </div>
        <p className="text-sm text-paper/50">MVP сайта готов к подключению Telegram-бота.</p>
      </Container>
    </footer>
  );
}
