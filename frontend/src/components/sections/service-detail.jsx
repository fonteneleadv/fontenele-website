import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";

export function ServiceDetail({ 
  hat, 
  title, 
  paragraphs = [], 
  image, 
  buttonText = "Falar com um especialista" 
}) {
  return (
    <section className="w-full bg-white overflow-hidden relative lg:block">
      
      {/* Container Principal do Grid - Limita apenas o texto */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[700px]">
        
        {/* Coluna da Esquerda (Vazia no grid, serve para empurrar o texto) */}
        <div className="hidden lg:block"></div>
        
        {/* Coluna da Direita (Texto) */}
        <div className="flex flex-col items-start w-full lg:max-w-xl z-10 py-16 md:py-24 pl-0 lg:pl-12 xl:pl-16">
          <SectionHat className="mb-6">{hat}</SectionHat>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-secondary mb-8">
            {title}
          </h2>
          
          <div className="flex flex-col gap-5 text-zinc-500 text-base md:text-lg leading-relaxed mb-10">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Button variant="default" withArrow>
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Imagem Mobile (Abaixo do conteúdo, conforme feedback) */}
      <div className="block lg:hidden w-full h-[400px] overflow-hidden z-0">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
      </div>

      {/* Imagem Desktop (Colada na borda ESQUERDA) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1/2 h-full z-0 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
      </div>

    </section>
  );
}
