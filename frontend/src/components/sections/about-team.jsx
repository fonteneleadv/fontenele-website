import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import teamImg from "../../assets/about-team.png";

export function AboutTeam() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          
          {/* Coluna de Texto */}
          <div className="flex flex-col justify-center lg:pr-16 lg:border-r border-secondary/30">
            <SectionHat className="mb-6">Equipe</SectionHat>
            
            <h2 className="text-3xl lg:text-[40px] leading-tight font-serif text-primary-ink mb-8">
              A atuação do escritório é conduzida por{" "}
              <span className="text-secondary">
                profissionais com foco em direito público, direito bancário e direito do consumidor.
              </span>
            </h2>

            <div className="space-y-6 text-zinc-500 text-lg leading-relaxed font-sans mb-10">
              <p>
                Mesmo com estrutura enxuta, o modelo de trabalho é orientado à especialização e ao acompanhamento próximo de cada caso.
              </p>
              <p>
                Quando necessário, o escritório conta com apoio técnico complementar para garantir profundidade na análise e consistência na condução das demandas.
              </p>
            </div>

            <div className="flex justify-start">
              <Button size="lg" className="group">
                Falar com um especialista
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="lg:pl-16 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
              <img
                src={teamImg}
                alt="Equipe Fontenele Advogados"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary-ink/5 mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
