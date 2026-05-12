import { cn } from "@/lib/utils";

export function SectionHat({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "group flex items-center transition-colors duration-300 text-primary-deep hover:text-secondary cursor-default",
        "gap-1.5",
        className
      )}
      {...props}
    >
      <span className="bg-current transition-colors duration-300 w-[13px] h-[2px]" />
      <span className="text-xs font-normal leading-4">
        {children}
      </span>
    </div>
  );
}
