import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { AttentionCard } from "../ui/attention-card";
import { InfoCard } from "../ui/info-card";
import { FileText, Search } from "lucide-react";

export function ServiceAnalysis({ 
  hat, 
  title, 
  description,
  leftList = { title: "", items: [] },
  rightList = { title: "", items: [] },
  alertText,
  buttonText = "Falar com um especialista"
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
            <p className="text-body text-base md:text-lg max-w-3xl text-zinc-500">
              {description}
            </p>
          )}
        </div>

        {/* Grid de Listas (Comparação/Análise) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
          
          {/* Coluna Esquerda */}
          <div className="flex flex-col w-full">
            <InfoCard 
              variant="bronze" 
              icon={<FileText className="size-5" strokeWidth={1.5} />}
              className="mb-6 py-4 px-6 rounded-sm border border-[#E5E7EB]/50"
            >
              <span className="font-medium">{leftList.title}</span>
            </InfoCard>
            <ul className="list-disc list-outside ml-5 space-y-4 text-body text-base md:text-lg text-zinc-500">
              {leftList.items.map((item, index) => (
                <li key={index} className="pl-2 leading-snug">{item}</li>
              ))}
            </ul>
          </div>

          {/* Coluna Direita */}
          <div className="flex flex-col w-full">
            <InfoCard 
              variant="blue" 
              icon={<Search className="size-5" strokeWidth={1.5} />}
              className="mb-6 py-4 px-6 rounded-sm border border-[#E5E7EB]/50"
            >
              <span className="font-medium">{rightList.title}</span>
            </InfoCard>
            <ul className="list-disc list-outside ml-5 space-y-4 text-body text-base md:text-lg text-zinc-500">
              {rightList.items.map((item, index) => (
                <li key={index} className="pl-2 leading-snug">{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Card de Atenção */}
        {alertText && (
          <div className="w-full mb-12">
            <AttentionCard className="py-6 px-8">{alertText}</AttentionCard>
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
