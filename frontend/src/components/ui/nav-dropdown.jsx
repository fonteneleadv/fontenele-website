import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavDropdown({ title, items, light = false, className }) {
  return (
    <div className={cn("relative group inline-block", className)}>
      {/* Gatilho (Trigger) */}
      <button className={cn(
        "flex items-center gap-1.5 pb-2 text-base font-medium transition-colors",
        light ? "text-white hover:text-white/80" : "text-ink hover:text-primary-deep"
      )}>
        {title}
        <ChevronDown className="size-4 transition-transform duration-300 group-hover:-rotate-180" />
      </button>

      {/* Ponte invisível para o mouse não perder o hover ao descer */}
      <div className="absolute left-0 top-[100%] w-full h-2 bg-transparent"></div>

      {/* Menu Dropdown */}
      <div className="absolute right-0 top-[calc(100%+0.5rem)] w-[280px] bg-canvas border border-hairline rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href || "#"}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-ink transition-colors hover:bg-secondary hover:text-white group/item"
              >
                {/* Ícone */}
                <span className="text-secondary group-hover/item:text-white transition-colors">
                  {item.icon}
                </span>
                {/* Texto */}
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
