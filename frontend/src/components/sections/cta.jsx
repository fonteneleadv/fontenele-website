import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import CtaBg from "@/assets/cta-bg.png";

export function Cta() {
  return (
    <section className="relative w-full py-24 md:py-[100px] overflow-hidden flex items-center justify-center bg-primary-ink">
      
      {/* Camada de Fundo (Imagem + Overlay azul 95%) */}
      <div className="absolute inset-0 z-0">
        <img
          src={CtaBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(14,51,94,0.95)]" />
      </div>

      {/* Conteúdo Central */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center max-w-5xl gap-8">
        
        <SectionHat className="mx-auto text-[#d8e7f8]">
          Fale com a equipe
        </SectionHat>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-1.2px] text-zinc-50">
          Se você busca orientação jurídica clara e responsável, nossa equipe está disponível para atender e analisar sua situação.
        </h2>

        <Button variant="default" withArrow>
          Entrar em contato pelo WhatsApp
        </Button>
        
      </div>
    </section>
  );
}
