import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import CtaBg from "@/assets/cta-bg.png";

export function Cta({ 
  hat = "Fale com a equipe", 
  title = "Se você busca orientação jurídica clara e responsável, nossa equipe está disponível para atender e analisar sua situação.",
  description,
  buttonText = "Entrar em contato pelo WhatsApp"
}) {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center bg-primary-ink">
      
      {/* Camada de Fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={CtaBg}
          alt="Biblioteca e estátuas jurídicas"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-primary-ink/60" />
      </div>

      {/* Conteúdo Central */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center max-w-6xl gap-6 md:gap-8">
        
        <SectionHat className="mx-auto text-white/90 hover:text-white">
          {hat}
        </SectionHat>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-white text-balance">
          {title}
        </h2>

        {/* Renderiza a descrição apenas se ela for passada por prop */}
        {description && (
          <p className="text-white/80 text-base md:text-lg max-w-3xl">
            {description}
          </p>
        )}

        <Button variant="default" withArrow className="mt-4">
          {buttonText}
        </Button>
        
      </div>
    </section>
  );
}
