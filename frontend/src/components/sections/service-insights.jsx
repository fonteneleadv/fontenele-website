import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { InfoCard } from "../ui/info-card";
import { AttentionCard } from "../ui/attention-card";
import { Search } from "lucide-react";

export function ServiceInsights({
  hat,
  title,
  paragraphs = [],
  alertText,
  listData = { title: "", items: [] },
  buttonText = "Falar com um especialista"
}) {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Cabeçalho Centralizado */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          {hat && <SectionHat className="mx-auto">{hat}</SectionHat>}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-primary-ink lg:whitespace-nowrap">
            {title}
          </h2>
        </div>

        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start mb-12">
          {/* Coluna Esquerda: Parágrafos */}
          <div className="flex flex-col gap-6 text-zinc-500 text-base md:text-lg leading-relaxed">
            {paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
          </div>

          {/* Coluna Direita: Lista com InfoCard */}
          <div className="flex flex-col w-full">
            {listData.title && (
              <InfoCard
                variant="blue"
                icon={<Search size={20} />}
              >
                {listData.title}
              </InfoCard>
            )}

            <ul className="mt-6 space-y-4 text-zinc-500 text-base md:text-lg">
              {listData.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alerta Full Width (Preenchendo o espaço) */}
        {alertText && (
          <div className="w-full mb-16">
            <AttentionCard className="py-6 px-8">{alertText}</AttentionCard>
          </div>
        )}

        {/* CTA Inferior Centralizado */}
        <div className="flex justify-center">
          <Button variant="default" withArrow>
            {buttonText}
          </Button>
        </div>

      </div>
    </section>
  );
}
