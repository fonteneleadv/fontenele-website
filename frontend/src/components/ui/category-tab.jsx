import { cn } from "@/lib/utils";

export function CategoryTab({ children, isActive = false, onClick, className, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center h-10 px-5 text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap",
        isActive
          ? "bg-primary-ink text-canvas border border-primary-ink"
          : "bg-transparent text-primary-ink border border-hairline hover:border-primary-ink hover:text-primary-ink",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
