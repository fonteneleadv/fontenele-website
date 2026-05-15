import { SectionHat } from "@/components/ui/section-hat";
import { Button } from "@/components/ui/button";
import { HeroDecorator } from "@/components/ui/hero-decorator";
import { Seal } from "@/components/ui/seal";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceHero({ 
  hat, 
  title, 
  highlightTitle, 
  description, 
  image, 
  ctaText = "Falar com um especialista" 
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl space-y-8">
            <div className="space-y-6">
              <SectionHat>
                {hat}
              </SectionHat>
              
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[1.1] text-primary-ink">
                {highlightTitle && (
                  <>
                    <span className="text-secondary">{highlightTitle}</span>
                    <br />
                  </>
                )}
                {title}
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-500 max-w-xl font-sans leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Button size="lg" className="h-14 px-8 text-base">
                {ctaText}
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="pt-8">
              <HeroDecorator />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex-1 w-full max-w-[533px]">
            <div className="aspect-[533/646] overflow-hidden bg-zinc-100">
               <img 
                src={image} 
                alt={highlightTitle || "Serviço"}
                className="w-full h-full object-cover object-center"
               />
            </div>
            
            {/* Seal positioning */}
            <div className="absolute -left-16 bottom-16 hidden lg:block scale-75">
              <Seal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
