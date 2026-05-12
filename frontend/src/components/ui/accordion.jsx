import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ title, children, className, defaultOpen = false, ...props }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border-b border-hairline", className)} {...props}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors"
      >
        <span className="font-serif text-xl tracking-[-0.6px] text-secondary">
          {title}
        </span>
        <ChevronDown 
          className={cn("size-5 text-secondary transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>
      
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0 pb-0"
        )}
      >
        <div className="overflow-hidden text-base text-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
