import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center border text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        luxury: "border-[color:var(--line-strong)] text-foreground hover:bg-foreground hover:text-background",
        ghost: "border-transparent text-foreground/70 hover:border-[color:var(--line-soft)] hover:text-foreground"
      },
      size: {
        default: "h-12 px-6",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "luxury",
      size: "default"
    }
  }
);

type ShadcnButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function ShadcnButton({ className, variant, size, asChild = false, ...props }: ShadcnButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
