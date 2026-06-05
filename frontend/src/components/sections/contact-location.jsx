import { SectionHat } from "../ui/section-hat";
import { MapPin } from "lucide-react";

export function ContactLocation() {
  return (
    <section className="w-full bg-white overflow-hidden relative flex flex-col lg:block">
      
      {/* Mapa (Mobile - Empilhado no topo) */}
      <div className="block lg:hidden w-full h-[400px] z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.440788647573!2d-60.01275992510255!3d-3.1079361968516086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b3f9b2f65a1%3A0x67e1a6c0b39e7c5b!2sRua%20Salvador%2C%20440%20-%20Adrian%C3%B3polis%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1717600000000!5m2!1spt-BR!2sbr" 
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
              Rua Salvador, 440, Soberane Work, Adrianópolis, Manaus – AM
            </p>
          </div>
        </div>
      </div>

      {/* Mapa (Desktop - Bleed Left) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1/2 h-full z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.440788647573!2d-60.01275992510255!3d-3.1079361968516086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b3f9b2f65a1%3A0x67e1a6c0b39e7c5b!2sRua%20Salvador%2C%20440%20-%20Adrian%C3%B3polis%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1717600000000!5m2!1spt-BR!2sbr" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
}
