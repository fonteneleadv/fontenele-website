import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function AttentionCard({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "group flex items-start transition-colors duration-300",
        "bg-secondary-warm hover:bg-secondary p-5 gap-4",
        className
      )}
      {...props}
    >
      <AlertTriangle className="size-6 shrink-0 transition-colors duration-300 text-secondary group-hover:text-secondary-soft" />
      <div className="text-lg font-normal leading-relaxed text-body transition-colors duration-300 group-hover:text-secondary-soft">
        {children}
      </div>
    </div>
  );
}
