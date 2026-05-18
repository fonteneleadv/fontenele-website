import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function ServiceCard({ title, description, href = "#", className, ...props }) {
  const isInternal = href.startsWith("/");

  const CardContent = (
    <div className="flex items-end justify-between w-full">
      <div className="flex flex-col gap-1 w-full max-w-sm">
        <h3 className="font-serif text-3xl tracking-[-0.75px] leading-9 text-ink">
          {title}
        </h3>
        <p className="text-base font-sans text-muted">
          {description}
        </p>
      </div>

      <div className="flex shrink-0">
        <Button 
          variant="tertiary" 
          withArrow 
          className="group-hover:text-primary-deep transition-colors duration-300"
          tabIndex={-1}
        >
          Ver mais
        </Button>
      </div>
    </div>
  );

  const cardClassName = cn(
    "group flex flex-col justify-between transition-all duration-300",
    // Borda inferior que muda de cor no hover
    "border-b border-secondary hover:border-primary-deep pb-8 gap-8",
    className
  );

  if (isInternal) {
    return (
      <Link to={href} className={cardClassName} {...props}>
        {CardContent}
      </Link>
    );
  }

  return (
    <a href={href} className={cardClassName} {...props}>
      {CardContent}
    </a>
  );
}
