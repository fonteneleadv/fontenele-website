import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceDetail } from "@/components/sections/service-detail";
import { ServiceTopics } from "@/components/sections/service-topics";
import { ServiceSituations } from "@/components/sections/service-situations";
import { ServiceInsights } from "@/components/sections/service-insights";
import { Cta } from "@/components/sections/cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Assets
import heroImg from "@/assets/direitodoconsumirdorhero.png";
import detailImg from "@/assets/atuacaoemdireito.png";
import situationsImg from "@/assets/analisedoc.png";

export default function ConsumerLaw() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas">
      <Header />
      <main className="flex-1">

        {/* Seção 1: Hero */}
        <ScrollReveal>
          <ServiceHero
            hat="Clareza jurídica para entender direitos, deveres e implicações em relações de consumo."
            highlightTitle="Direito do Consumidor"
            title="e análise de relações contratuais"
            description="Atuação jurídica voltada à compreensão e condução de situações que envolvem relações de consumo, contratos e prestação de serviços."
            image={heroImg}
          />
        </ScrollReveal>

        {/* Seção 2: Detail */}
        <ScrollReveal>
          <ServiceDetail
            hat="Como funciona o serviço"
            title="Atuação em Direito do Consumidor"
            paragraphs={[
              "O Direito do Consumidor regula as relações entre consumidores e fornecedores de produtos ou serviços, estabelecendo regras para garantir equilíbrio, transparência e segurança nessas interações.",
              "A atuação da Fontenele Advogados nessa área é direcionada à análise dessas relações, com foco na compreensão de contratos, práticas adotadas e possíveis implicações jurídicas envolvidas.",
              "Muitas situações de consumo envolvem estruturas contratuais ou operacionais que não são claras à primeira vista, o que pode gerar dúvidas sobre direitos, obrigações e caminhos possíveis.",
              "O objetivo é organizar essas informações de forma técnica, permitindo que o cliente compreenda seu cenário antes de qualquer decisão."
            ]}
            image={detailImg}
          />
        </ScrollReveal>

        {/* Seção 3: Topics */}
        <ScrollReveal>
          <ServiceTopics
            hat="Para quem é?"
            title="Para quem essa atuação é indicada"
            description="A atuação em Direito do Consumidor é indicada para pessoas que se encontram em relações de consumo que geram dúvidas, insegurança ou necessidade de análise jurídica."
            topics={[
              "Consumidores que possuem contratos com empresas ou prestadores de serviço",
              "Pessoas que desejam entender melhor condições contratuais",
              "Situações que envolvem cobranças, serviços ou produtos",
              "Casos em que há necessidade de avaliar direitos e deveres na relação de consumo"
            ]}
          />
        </ScrollReveal>

        {/* Seção 4: Situations */}
        <ScrollReveal>
          <ServiceSituations
            hat="Situações comuns"
            title={<>Situações que podem exigir <span className="text-secondary">análise em Direito do Consumidor</span></>}
            intro="Alguns cenários são recorrentes nas relações de consumo e podem demandar análise jurídica:"
            bullets={[
              "Dúvidas sobre contratos de serviços ou produtos",
              "Falta de clareza nas condições contratuais",
              "Questionamentos sobre cobranças ou valores aplicados",
              "Problemas na prestação de serviços",
              "Situações que envolvem desequilíbrio contratual"
            ]}
            outro="A análise técnica permite compreender como a relação foi estruturada e quais são as implicações jurídicas envolvidas."
            buttonText="Esclarecer minha situação"
            image={situationsImg}
          />
        </ScrollReveal>

        {/* Seção 5: Insights */}
        <ScrollReveal>
          <ServiceInsights
            hat="Análise"
            title={<>Relações de consumo e a <span className="text-secondary">importância da análise jurídica</span></>}
            paragraphs={[
              "As relações de consumo estão presentes em diversas áreas do dia a dia e são reguladas por normas específicas que buscam garantir equilíbrio entre as partes envolvidas.",
              "No entanto, muitos contratos e serviços apresentam condições que exigem leitura técnica para plena compreensão."
            ]}
            alertText="Com o aumento da complexidade das relações de consumo, compreender esses elementos se torna fundamental para decisões mais seguras e bem estruturadas."
            listData={{
              title: "A análise jurídica permite:",
              items: [
                "entender as condições estabelecidas em contratos",
                "identificar possíveis inconsistências ou dúvidas",
                "avaliar a relação entre consumidor e fornecedor",
                "organizar informações para tomada de decisão"
              ]
            }}
          />
        </ScrollReveal>

        {/* Seção 6: CTA */}
        <ScrollReveal>
          <Cta
            hat="Fale com a equipe"
            title="Precisa entender melhor uma relação de consumo?"
            description="Se você possui dúvidas sobre contratos, serviços ou cobranças, uma análise jurídica pode ajudar a trazer mais clareza sobre a sua situação."
            buttonText="Falar com um especialista"
          />
        </ScrollReveal>

      </main>
      <Footer />
    </div>
  );
}