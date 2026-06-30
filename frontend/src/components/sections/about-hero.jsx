import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { HeroDecorator } from "../ui/hero-decorator";
import { Seal } from "../ui/seal";
import AboutHeroImage from "@/assets/about-hero-image.png";

const paragraphs = [
  "A Fontenele Advogados nasceu a partir da identificação de um padrão recorrente: servidores públicos com renda estável, mas inseridos em estruturas contratuais complexas, com impacto direto na organização financeira e funcional.",
  "Ao longo da atuação prática, tornou-se evidente que muitos desses casos não estavam relacionados à falta de capacidade financeira, mas à ausência de clareza sobre contratos, normas administrativas e implicações jurídicas.",
  "A partir desse contexto, o escritório consolidou sua atuação com foco em Direito Administrativo, Direito Constitucional e Direito do Consumidor, direcionando sua prática para análise técnica, orientação estruturada e condução responsável de cada caso.",
  "Hoje, a Fontenele Advogados atua de forma especializada na compreensão e organização de situações jurídicas que exigem precisão, estratégia e segurança na tomada de decisão.",
];

export function AboutHero() {
  return (
    <section className="w-full relative pt-24 pb-12 md:pt-32 md:pb-24 flex items-end bg-canvas">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-8">

        {/* Left Content */}
        <div className="flex flex-col items-start gap-8 lg:gap-[68px] w-full lg:w-1/2 z-10 justify-end">
          <div className="flex flex-col items-start gap-8 max-w-[594px]">
            <SectionHat>
              Sobre nós
            </SectionHat>

            <div className="flex flex-col items-start gap-4">
              <h1 className="font-serif text-5xl md:text-[72px] leading-none tracking-[-1.8px] text-secondary">
                Origem e atuação
              </h1>

              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="font-sans text-base md:text-lg text-body leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="default" withArrow>
                Falar com um especialista
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroDecorator />
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative w-full lg:w-[533px] h-[400px] lg:h-[646px] overflow-visible z-10">
          {/* Main Image Container */}
          <div className="relative w-full h-full overflow-hidden">
            {/* The mix-blend-saturation white layer from Figma */}
            <div className="absolute inset-0 bg-white mix-blend-saturation pointer-events-none z-10" />
            <img
              src={AboutHeroImage}
              alt="Escritório de advocacia com balança da justiça e livros jurídicos"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

          {/* Seal */}
          <div className="absolute -bottom-4 left-0 md:-bottom-[64px] md:-left-[106px] z-30 scale-75 md:scale-100 origin-bottom-left md:origin-center">
            <Seal />
          </div>
        </div>

      </div>
    </section>
  );
}
