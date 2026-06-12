import { SectionHat } from "../ui/section-hat";
import LawyerImage from "@/assets/Foto Home.jpg";

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
            Advogado | Atuação em Direito Administrativo, Constitucional e do Consumidor
          </SectionHat>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-secondary mb-8">
            Davi Fontenele
          </h2>
          
          <div className="flex flex-col gap-5 text-body text-base md:text-lg leading-relaxed">
            <p>
              Advogado e fundador da Fontenele Advogados, Davi Fontenele atua de forma especializada na defesa dos direitos dos servidores públicos, com foco em Direito Administrativo, Constitucional e do Consumidor.
            </p>
            <p>
              Sua atuação é marcada por uma abordagem técnica, estratégica e personalizada, voltada à proteção da carreira, da estabilidade funcional e da segurança financeira de seus clientes. Ao longo de sua trajetória, desenvolveu experiência na condução de demandas relacionadas a direitos remuneratórios, processos administrativos, contratos bancários e relações de consumo.
            </p>
            <p>
              Com compromisso pautado na ética, transparência e excelência jurídica, Davi Fontenele busca oferecer soluções seguras e eficientes, auxiliando servidores públicos e consumidores na tomada de decisões com maior clareza e segurança jurídica.
            </p>
            <p>
              Na Fontenele Advogados, acredita que uma advocacia especializada e responsável é essencial para garantir proteção, estabilidade e valorização dos direitos de cada cliente.
            </p>
          </div>
        </div>
      </div>

      {/* 1. Imagem Mobile (Aparece por último no empilhamento mobile) */}
      <div className="block lg:hidden w-full h-auto overflow-hidden z-0 bg-white">
        <img 
          src={LawyerImage} 
          alt="Dr. Davi Fontenele" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. Imagem Desktop (Colada na borda ESQUERDA) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1/2 h-full z-0 overflow-hidden bg-white">
        <img 
          src={LawyerImage} 
          alt="Dr. Davi Fontenele" 
          // object-contain garante que apareça por inteiro
          className="w-full h-full object-contain object-left" 
        />
      </div>

    </section>
  );
}
