import { cn } from "@/lib/utils";

export function ContactLink({ icon, children, className, ...props }) {
  return (
    <a
      href="#"
      className={cn(
        "group flex items-center gap-2 text-base font-medium text-muted transition-colors duration-300 hover:text-secondary",
        className
      )}
      {...props}
    >
      {/* Ícone herdará a cor do texto automaticamente */}
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {/* Texto */}
      <span>{children}</span>
    </a>
  );
}
