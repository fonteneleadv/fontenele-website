import { cn } from "@/lib/utils";

export function SocialLink({ icon, children, className, ...props }) {
  return (
    <a
      href="#"
      className={cn(
        "group relative inline-flex items-center gap-2 pb-1 text-base font-medium transition-colors text-ink hover:text-primary-deep",
        // A linha inferior animada que cobre o ícone e o texto
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary-warm after:transition-all after:duration-300 after:w-0 hover:after:w-full",
        className
      )}
      {...props}
    >
      {/* Container do Ícone */}
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {/* Texto */}
      <span>{children}</span>
    </a>
  );
}
