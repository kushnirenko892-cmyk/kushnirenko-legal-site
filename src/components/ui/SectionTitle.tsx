import { SectionEyebrow } from "@/components/luxury/SectionEyebrow";

export function SectionTitle({
  eyebrow,
  number,
  title,
  text,
  light = false
}: {
  eyebrow: string;
  number?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <SectionEyebrow number={number}>{eyebrow}</SectionEyebrow>
      <h2
        className={`mt-6 max-w-5xl font-display text-4xl font-medium leading-[0.98] sm:text-5xl lg:text-7xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-paper/70" : "text-ink/70"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
