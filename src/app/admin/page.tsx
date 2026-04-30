import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Админ-панель - Елизавета Кушниренко",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-chocolate py-16 text-porcelain">
      <Container>
        <Link href="/" className="text-sm text-bronze">
          На главную
        </Link>
        <h1 className="mt-8 font-serif text-4xl">Админ-панель</h1>
        <p className="mt-4 max-w-2xl text-porcelain/70">
          Заглушка для будущего управления заявками: авторизация команды, статусы, комментарии и назначение ответственных.
        </p>
      </Container>
    </main>
  );
}
