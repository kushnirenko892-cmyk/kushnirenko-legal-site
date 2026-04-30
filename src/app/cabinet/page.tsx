import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Личный кабинет - Елизавета Кушниренко",
  robots: {
    index: false,
    follow: false
  }
};

export default function CabinetPage() {
  return (
    <main className="min-h-screen bg-porcelain py-16 text-chocolate">
      <Container>
        <Link href="/" className="text-sm font-semibold text-bronze">
          На главную
        </Link>
        <h1 className="mt-8 font-serif text-4xl">Личный кабинет клиента</h1>
        <p className="mt-4 max-w-2xl text-chocolate/70">
          Архитектурная заглушка под профиль, историю обращений, бонусы, материалы и будущую систему лояльности.
        </p>
      </Container>
    </main>
  );
}
