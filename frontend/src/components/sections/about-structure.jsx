import { SectionHat } from "../ui/section-hat";
import { AttentionCard } from "../ui/attention-card";
import { BadgeCheck } from "lucide-react";

export function AboutStructure() {
  const topics = [
    {
      title: "Compreensão detalhada do caso apresentado",
    },
    {
      title: "Análise jurídica consistente",
    },
    {
      title: "Definição clara de possíveis caminhos",
    },
    {
      title: "Condução estruturada, quando necessária",
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col items-start md:items-center">

        {/* Cabeçalho */}
        <div className="flex flex-col items-start text-left md:items-center md:text-center gap-6 mb-16 max-w-4xl">
          <SectionHat className="md:mx-auto">Estrutura de atuação</SectionHat>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-1.2px] text-primary-ink">
            A Fontenele Advogados opera com uma estrutura voltada à análise técnica e ao acompanhamento estratégico dos casos.
          </h2>

          <div className="text-zinc-500 text-base md:text-lg max-w-[700px] flex flex-col gap-3">
            <p className="font-semibold text-secondary md:mx-auto">
              O fluxo de atuação é organizado para garantir:
            </p>
          </div>
        </div>

        {/* Grid de Tópicos (Checklist) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10 mb-20">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-start gap-4 border-b border-[#E5E7EB] pb-6">
              <BadgeCheck className="text-secondary shrink-0 size-6 mt-0.5" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-primary-ink text-lg font-semibold leading-tight">{topic.title}</span>
                <span className="text-zinc-500 text-base font-normal leading-relaxed">{topic.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Card de Atenção Inferior */}
        <div className="w-full">
          <AttentionCard>
            A atuação é orientada por processos que priorizam organização, previsibilidade e responsabilidade em cada etapa. Nosso foco está na qualidade da análise e na clareza das decisões.
          </AttentionCard>
        </div>

      </div>
    </section>
  );
}
