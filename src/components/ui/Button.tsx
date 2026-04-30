import { LuxuryButton } from "@/components/luxury/LuxuryButton";

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = ""
}: ButtonProps) {
  const luxuryVariant = variant === "primary" ? "cream" : variant === "secondary" ? "outline" : "ghost";

  return (
    <LuxuryButton href={href} variant={luxuryVariant} className={className}>
      {children}
    </LuxuryButton>
  );
}
