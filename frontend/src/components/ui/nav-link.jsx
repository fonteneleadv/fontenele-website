import { cn } from "@/lib/utils";

export function NavLink({ children, href = "#", isActive = false, light = false, className, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        "relative pb-1 text-base font-medium transition-colors",
        light ? "text-white hover:text-white/80" : "text-ink hover:text-primary-deep",
        // A linha inferior animada
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary-warm after:transition-all after:duration-300",
        // Lógica de estado Ativo vs Default/Hover
        isActive 
          ? "after:w-full" 
          : "after:w-0 hover:after:w-full",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
