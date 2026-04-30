import { LuxuryCard } from "@/components/luxury/LuxuryCard";

export function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <LuxuryCard className={className}>{children}</LuxuryCard>;
}
