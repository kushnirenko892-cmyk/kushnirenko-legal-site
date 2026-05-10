import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { isPracticeSlug, practicePages, practiceSlugs } from "@/lib/constants/practiceCases";

type PracticePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return practiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PracticePageProps) {
  const { slug } = await params;

  if (!isPracticeSlug(slug)) {
    return {};
  }

  const page = practicePages[slug];

  return {
    title: `${page.title} | Елизавета Кушниренко`,
    description: page.description
  };
}

export default async function PracticePage({ params }: PracticePageProps) {
  const { slug } = await params;

  if (!isPracticeSlug(slug)) {
    notFound();
  }

  const page = practicePages[slug];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="premium-noise editorial-grid border-b border-[color:var(--line-soft)] bg-background pt-12 text-foreground sm:pt-16">
        <Container className="pb-14 pt-10 sm:pb-20 lg:pb-24">
          <Link
            href="/#cases"
            className="inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-bronze transition-colors duration-500 hover:text-foreground"
          >
            ← Моя практика
          </Link>
          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Практика</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[0.92] sm:text-7xl lg:text-8xl">
            {page.title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-foreground/68 sm:text-lg">{page.description}</p>
        </Container>
      </section>

      <section className="light-grid bg-card py-14 text-foreground sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12">
            {page.cases.map((practiceCase, index) => (
              <article
                key={practiceCase.title}
                className="grid gap-8 border-y border-[color:var(--line-soft)] py-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:py-12"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-background">
                  <Image
                    src={practiceCase.image}
                    alt={practiceCase.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    priority={index === 0}
                  />
                </div>
                <div>
                  <span className="font-luxury text-4xl text-bronze">0{index + 1}</span>
                  <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                    {practiceCase.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-foreground/68">
                    {practiceCase.shortDescription}
                  </p>

                  <div className="mt-9 grid gap-7">
                    <section>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Ситуация</h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/66">{practiceCase.situation}</p>
                    </section>
                    <section>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Задача</h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/66">{practiceCase.task}</p>
                    </section>
                    <section>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Что сделали</h3>
                      <ul className="mt-3 grid gap-3 text-sm leading-7 text-foreground/66">
                        {practiceCase.actions.map((action) => (
                          <li key={action} className="border-l border-bronze/45 pl-4">
                            {action}
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Результат</h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/66">{practiceCase.result}</p>
                    </section>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
