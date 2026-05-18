import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { CircleCheck } from "lucide-react";
import AboutImage from "@/assets/about-image.png";

export function About() {
  return (
    // Seção principal com overflow-hidden para travar a sangria da imagem
    <section className="w-full bg-white overflow-hidden relative">

      {/* 2. Imagem Mobile (Stacked, 100% width, colada) */}
      <div className="block lg:hidden w-full h-[400px] mt-0 overflow-hidden z-0">
        <img
          src={AboutImage}
          alt="Dr. Fontenele no escritório"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Container Principal do Grid - Só limita o texto */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[700px]">

        {/* Coluna da Esquerda (Texto) - Respeita o Grid da Página */}
        <div className="flex flex-col items-start w-full lg:max-w-xl z-10 py-20 md:py-32 pr-0 lg:pr-12">
          <SectionHat className="mb-6">Sobre nós</SectionHat>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-primary-ink mb-8">
            Sobre a Fontenele Advogados
          </h2>

          <div className="flex flex-col gap-4 text-body text-base md:text-lg mb-8">
            <p>A Fontenele Advogados é um escritório com atuação especializada em direito público e relações bancárias. Fundado pelo Dr. Francisco Fontenele, o escritório nasceu com o compromisso de oferecer uma advocacia de excelência, pautada pela ética, transparência e pelo atendimento personalizado.</p>
            <p>Nosso foco está em fornecer soluções jurídicas eficazes, com uma abordagem estratégica e foco em resultados. Com anos de experiência acumulada...</p>
          </div>

          <div className="w-full border-y border-[#E5E7EB] py-6 mb-8 flex items-start gap-4">
            <CircleCheck className="shrink-0 size-6 text-secondary" strokeWidth={1.5} />
            <p className="text-body font-medium">
              Mais do que atuar juridicamente, o objetivo é oferecer clareza para que cada cliente compreenda sua própria situação com segurança.
            </p>
          </div>

          <Button variant="default" withArrow to="/sobre-nos">
            Saiba mais
          </Button>
        </div>
      </div>

      {/* --- Estratégia da Imagem (Colada nos cantos) --- */}

      {/* 1. Imagem Desktop (Alinhada à direita da viewport, pegando metade da tela) */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 h-full z-0 overflow-hidden">
        <img
          src={AboutImage}
          alt="Dr. Fontenele no escritório"
          // object-cover garante que preencha, e object-center (ou object-top) foca no rosto
          className="w-full h-full object-cover object-top"
        />
      </div>

    </section>
  );
}
