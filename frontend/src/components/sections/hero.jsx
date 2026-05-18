import { Link } from "react-router-dom";
import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { HeroDecorator } from "../ui/hero-decorator";
import { Seal } from "../ui/seal";
import HeroImage from "@/assets/hero-image.png";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="w-full relative min-h-screen pt-24 pb-12 md:pt-32 md:pb-24 flex items-center bg-canvas">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8 lg:gap-[165px] w-full lg:w-1/2 z-10">
          <div className="flex flex-col items-start gap-8 max-w-[594px]">
            <SectionHat>
              Analisar, orientar e conduzir cada caso com precisão.
            </SectionHat>
            
            <div className="flex flex-col items-start gap-4">
              <h1 className="font-serif text-5xl md:text-[72px] leading-[1.1] md:leading-none tracking-[-1.8px] text-primary-ink">
                Atuação jurídica com <span className="text-secondary">clareza, estratégia e responsabilidade</span>
              </h1>
              <p className="font-sans text-base md:text-lg text-body leading-relaxed">
                Especialistas em Direito dos servidores públicos, com foco em orientar decisões e proteger interesses de forma técnica e segura.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button to="/contato" variant="default" withArrow>
                Falar com um especialista
              </Button>
              <Button to="/sobre-nos" variant="secondary" withArrow>
                Saiba mais
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block mt-auto">
            <HeroDecorator />
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative w-full lg:w-[533px] h-[400px] lg:h-[646px] rounded-sm overflow-visible z-10 mt-12 lg:mt-0">
          {/* Main Image Container */}
          <div className="relative w-full h-full overflow-hidden rounded-[8px]">
            <img 
              src={HeroImage} 
              alt="Martelo e balança da justiça" 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Ellipse overlay from Figma */}
            <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-transparent to-black/20 z-20 pointer-events-none" />
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
