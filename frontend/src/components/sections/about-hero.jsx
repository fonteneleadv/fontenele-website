import { SectionHat } from "../ui/section-hat";
import { Button } from "../ui/button";
import { HeroDecorator } from "../ui/hero-decorator";
import { Seal } from "../ui/seal";
import AboutHeroImage from "@/assets/about-hero-image.png";

const paragraphs = [
  "A Fontenele Advogados nasceu a partir da identificação de uma realidade recorrente entre servidores públicos: profissionais com estabilidade e organização financeira, mas frequentemente inseridos em situações jurídicas complexas envolvendo carreira, remuneração, relações bancárias e direitos funcionais.",
  "Ao longo da atuação prática, tornou-se evidente que muitos desses problemas não estavam relacionados à falta de planejamento, mas à ausência de orientação jurídica clara sobre normas administrativas, contratos, direitos estatutários e implicações legais que impactam diretamente a vida funcional e financeira do servidor.",
  "A partir dessa constatação, o escritório consolidou sua atuação com foco em Direito Administrativo, Direito Constitucional e Direito do Consumidor, oferecendo suporte técnico, análise estratégica e condução responsável de cada demanda.",
  "Hoje, a Fontenele Advogados atua de forma especializada na defesa dos direitos e interesses de servidores públicos, com foco em segurança jurídica, proteção da carreira e soluções eficientes para situações que exigem precisão, estratégia e confiança.",
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
