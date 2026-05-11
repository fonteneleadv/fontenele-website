import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { ArrowUpRight } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // 1. BASE LIMPA: Focada apenas na estrutura, sem estilos fantasmas do shadcn
  "inline-flex items-center justify-center rounded-none text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // 2. CORES EXATAS DO TOKENS
        default: "bg-secondary text-canvas hover:bg-secondary-hover",
        secondary: "bg-secondary-warm text-secondary hover:bg-secondary hover:text-canvas",
        tertiary: "bg-transparent text-secondary hover:bg-transparent hover:text-primary-deep px-0 h-auto",
        whatsapp: "bg-transparent text-whatsapp hover:bg-transparent hover:text-[#14833b] px-0 h-auto",
        outline: "border border-hairline bg-transparent hover:bg-surface-muted text-body",
        ghost: "hover:bg-surface-muted text-body",
        link: "text-primary-deep underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-3 gap-2",
        sm: "h-9 px-3 gap-1",
        lg: "h-12 px-8 gap-2",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  iconRight,
  withArrow = false,
  children,
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {withArrow && <ArrowUpRight className="size-4 shrink-0" />}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };