import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { AttentionCard } from "../ui/attention-card";
import { CircleCheck } from "lucide-react";

export function ServiceTopics({ 
  hat, 
  title, 
  description, 
  topics = [], 
  buttonText = "Falar com um especialista",
  alertText
}) {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col items-center">
        
        {/* Cabeçalho Centralizado */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          {hat && <SectionHat className="mx-auto">{hat}</SectionHat>}
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-primary-ink">
            {title}
          </h2>
          
          {description && (
            <p className="text-body text-base md:text-lg max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* Grid de Tópicos (Checklist) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10 mb-16">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center gap-4 border-b border-[#E5E7EB] pb-4">
              <CircleCheck className="text-secondary shrink-0 size-6" strokeWidth={1.5} />
              <span className="text-body font-medium">{topic}</span>
            </div>
          ))}
        </div>
        
        {/* Card de Atenção Opcional */}
        {alertText && (
          <div className="w-full mb-12">
            <AttentionCard>{alertText}</AttentionCard>
          </div>
        )}

        {/* CTA Inferior */}
        <Button variant="default" withArrow>
          {buttonText}
        </Button>

      </div>
    </section>
  );
}
