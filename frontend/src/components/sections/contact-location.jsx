import { SectionHat } from "../ui/section-hat";
import { MapPin } from "lucide-react";

export function ContactLocation() {
  return (
    <section className="w-full bg-white overflow-hidden relative flex flex-col lg:block">
      
      {/* Mapa (Mobile - Empilhado no topo) */}
      <div className="block lg:hidden w-full h-[400px] z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975005872635!2d-46.68505238447575!3d-23.581512484674723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744883f3db3%3A0x6b0938af643751a0!2sAv.%20Brig.%20Faria%20Lima%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1655000000000!5m2!1spt-BR!2sbr" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Container Principal do Grid */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[600px]">
        
        {/* Coluna da Esquerda (Vazia no grid, serve para empurrar o texto) */}
        <div className="hidden lg:block"></div>
        
        {/* Coluna da Direita (Texto) */}
        <div className="flex flex-col items-start w-full lg:max-w-xl z-10 py-16 md:py-24 pl-0 lg:pl-12 xl:pl-16">
          <SectionHat className="mb-6">Localização</SectionHat>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-primary-ink mb-10">
            Atendimento realizado com organização e <span className="text-secondary">horário previamente definido.</span>
          </h2>
          
          <div className="flex items-start gap-4">
            <MapPin className="text-secondary shrink-0 size-6 mt-1" strokeWidth={1.5} />
            <p className="text-body text-base md:text-lg leading-relaxed">
              Av. Brig. Faria Lima, São Paulo - SP<br />
              <span className="text-sm text-gray-500 mt-1 block">(Endereço provisório para demonstração)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mapa (Desktop - Bleed Left) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1/2 h-full z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975005872635!2d-46.68505238447575!3d-23.581512484674723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744883f3db3%3A0x6b0938af643751a0!2sAv.%20Brig.%20Faria%20Lima%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1655000000000!5m2!1spt-BR!2sbr" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
}
