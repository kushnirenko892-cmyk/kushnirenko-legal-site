import { SectionEyebrow } from "@/components/luxury/SectionEyebrow";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  number,
  title,
  text,
  light = false,
  titleClassName,
  textClassName,
  eyebrowNumberClassName
}: {
  eyebrow: string;
  number?: string;
  title: string;
  text?: string;
  light?: boolean;
  titleClassName?: string;
  textClassName?: string;
  eyebrowNumberClassName?: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionEyebrow number={number} light={light} numberClassName={eyebrowNumberClassName}>
        {eyebrow}
      </SectionEyebrow>
      <h2
        className={cn(
          `mt-6 max-w-5xl font-display text-4xl font-medium leading-[0.98] sm:text-5xl lg:text-7xl ${
            light ? "text-paper" : "text-ink"
          }`,
          titleClassName
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            `mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-paper/70" : "text-ink/70"}`,
            textClassName
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
