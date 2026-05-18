import { Link } from "react-router-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function ArticleCard({ image, category, title, href = "#", className, ...props }) {
  return (
    <Link to={href} className={cn("group flex flex-col gap-5 cursor-pointer", className)} {...props}>
      {/* Imagem com Zoom no Hover */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-sm">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      {/* Conteúdo */}
      <div className="flex flex-col items-start gap-3">
        {/* Categoria estilo Hat miniatura */}
        <div className="flex items-center gap-2 text-primary-deep group-hover:text-secondary transition-colors duration-300">
          <span className="h-[2px] w-4 bg-current" />
          <span className="text-xs font-medium uppercase tracking-wider">{category}</span>
        </div>
        
        {/* Título */}
        <h3 className="font-serif text-2xl leading-tight text-primary-ink group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        
        {/* CTA reutilizando o botão */}
        <Button 
          variant="tertiary" 
          withArrow 
          className="mt-2 group-hover:text-primary-deep"
          tabIndex={-1}
        >
          Ver mais
        </Button>
      </div>
    </Link>
  );
}
