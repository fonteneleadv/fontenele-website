import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function ServiceSituations({ 
  hat, 
  title, 
  intro,
  bullets = [], 
  outro,
  buttonText = "Esclarecer minha situação",
  image
}) {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Coluna da Esquerda (Imagem) */}
        <div className="w-full h-[400px] lg:h-[600px] rounded-sm overflow-hidden order-1 lg:order-none">
          <img 
            src={image} 
            alt="Análise de documentos" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Coluna da Direita (Texto com Borda Esquerda) */}
        <div className="flex flex-col items-start border-l border-secondary/50 pl-6 md:pl-10 lg:pl-12 order-2 lg:order-none">
          {hat && <SectionHat className="mb-6">{hat}</SectionHat>}
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-primary-ink mb-6">
            {title}
          </h2>
          
          {intro && (
            <p className="text-body text-base md:text-lg mb-8 leading-relaxed text-zinc-500">
              {intro}
            </p>
          )}

          {/* Bloco de destaque com bullets */}
          {bullets.length > 0 && (
            <div className="w-full mb-8">
              <div className="bg-[#f8ebe1] py-6 px-8 rounded-sm">
                <ul className="list-disc list-outside ml-4 space-y-4 text-body text-base md:text-lg text-zinc-600">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="pl-2 leading-snug">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {outro && (
            <p className="text-body text-base md:text-lg mb-10 leading-relaxed text-zinc-500">
              {outro}
            </p>
          )}

          <Button variant="default" withArrow>
            {buttonText}
          </Button>
        </div>

      </div>
    </section>
  );
}
