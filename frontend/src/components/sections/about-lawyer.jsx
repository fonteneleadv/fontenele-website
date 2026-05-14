import { SectionHat } from "../ui/section-hat";
import LawyerImage from "@/assets/lawyer-davi.png";

export function AboutLawyer() {
  return (
    <section className="w-full bg-white overflow-hidden relative flex flex-col lg:block">
      
      {/* Container Principal do Grid - Limita apenas o texto */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[700px]">
        
        {/* Coluna da Esquerda (Vazia no grid, serve para empurrar o texto) */}
        <div className="hidden lg:block"></div>
        
        {/* Coluna da Direita (Texto) - Respeita o Grid da Página */}
        <div className="flex flex-col items-start w-full lg:max-w-xl z-10 py-16 md:py-24 lg:py-32 pl-0 lg:pl-16">
          <SectionHat className="mb-6 lowercase first-letter:uppercase">
            Advogado | Atuação em direito público e relações bancárias
          </SectionHat>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-secondary mb-8">
            Davi Fontenele
          </h2>
          
          <div className="flex flex-col gap-5 text-body text-base md:text-lg leading-relaxed">
            <p>
              Davi Fontenele é advogado com atuação direcionada à análise de contratos, relações com instituições financeiras e demandas envolvendo servidores públicos.
            </p>
            <p>
              Sua prática é baseada na combinação entre técnica jurídica e visão estratégica, com foco em compreender o cenário antes de qualquer definição de caminho.
            </p>
            <p>
              Ao longo de sua trajetória, desenvolveu atuação voltada à condução de casos que envolvem impacto financeiro relevante, sempre priorizando clareza na comunicação, organização das informações e tomada de decisão fundamentada.
            </p>
            <p>
              Sua atuação reforça o posicionamento do escritório: oferecer segurança jurídica por meio de análise consistente e orientação responsável.
            </p>
          </div>
        </div>
      </div>

      {/* 1. Imagem Mobile (Aparece por último no empilhamento mobile) */}
      <div className="block lg:hidden w-full h-[450px] overflow-hidden z-0">
        <img 
          src={LawyerImage} 
          alt="Dr. Davi Fontenele" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* 2. Imagem Desktop (Colada na borda ESQUERDA) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1/2 h-full z-0 overflow-hidden">
        <img 
          src={LawyerImage} 
          alt="Dr. Davi Fontenele" 
          className="w-full h-full object-cover object-top" 
        />
      </div>

    </section>
  );
}
