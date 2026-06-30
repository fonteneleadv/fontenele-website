import { SectionHat } from "../ui/section-hat";
import LawyerImage from "@/assets/Foto Home.jpg";

export function AboutLawyer() {
  return (
    <section className="w-full bg-white overflow-hidden relative flex flex-col lg:block">

      {/* Container Principal do Grid - Limita apenas o texto */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[700px]">

        {/* Coluna da Esquerda (Vazia no grid, serve para empurrar o texto) */}
        <div className="hidden lg:block"></div>

        {/* Coluna da Direita (Texto) - Respeita o Grid da Página */}
        <div className="flex flex-col items-start w-full lg:max-w-xl z-10 py-16 md:py-24 lg:py-32 pl-0 lg:pl-16">
          <SectionHat className="mb-6 lowercase first-letter:uppercase">
            Advogado | Atuação em Direito Administrativo, Constitucional e do Consumidor
          </SectionHat>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-secondary mb-8">
            Davi Fontenele
          </h2>

          <div className="flex flex-col gap-5 text-body text-base md:text-lg leading-relaxed">
            <p>
              <b>Davi Fontenele</b> é advogado especializado em <b>Direito Constitucional</b>, com atuação voltada à defesa de servidores públicos, análise de contratos bancários e demandas relacionadas às relações de consumo.
            </p>
            <p>
              Há mais de <b>8 anos</b>, dedica-se à advocacia com o propósito de ajudar pessoas a compreenderem seus direitos e tomarem decisões com mais segurança diante de situações que muitas vezes impactam sua vida financeira, profissional e familiar.
            </p>
            <p>
              Ao longo de sua trajetória, participou da condução de centenas de demandas e desenvolveu uma atuação baseada na análise cuidadosa de cada caso, acreditando que bons resultados começam pela compreensão completa do problema e de suas particularidades.
            </p>
            <p>
              Seu trabalho combina conhecimento técnico, estratégia e proximidade com o cliente, sempre valorizando uma comunicação clara e transparente. Mais do que apresentar soluções jurídicas, busca oferecer orientação segura e responsável para que cada cliente tenha confiança nas decisões tomadas ao longo do processo.
            </p>
            <p>
              Sua atuação reforça o posicionamento do escritório: oferecer segurança jurídica por meio de análise consistente e orientação responsável.
            </p>
          </div>
        </div>
      </div>

      {/* 1. Imagem Mobile (Aparece por último no empilhamento mobile) */}
      <div className="block lg:hidden w-full h-auto overflow-hidden z-0 bg-white">
        <img
          src={LawyerImage}
          alt="Dr. Davi Fontenele"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. Imagem Desktop (Colada na borda ESQUERDA) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1/2 h-full z-0 overflow-hidden bg-white">
        <img
          src={LawyerImage}
          alt="Dr. Davi Fontenele"
          // object-contain garante que apareça por inteiro
          className="w-full h-full object-contain object-left"
        />
      </div>

    </section>
  );
}
