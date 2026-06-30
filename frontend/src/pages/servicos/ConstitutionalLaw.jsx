import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceDetail } from "@/components/sections/service-detail";
import { ServiceTopics } from "@/components/sections/service-topics";
import { ServiceSituations } from "@/components/sections/service-situations";
import { ServiceInsights } from "@/components/sections/service-insights";
import { Cta } from "@/components/sections/cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import heroImg from "@/assets/direitopublicohero.png";
import detailImg from "@/assets/direitopublicodetail.png";
import situationImg from "@/assets/direitopublicosituations.png";

export default function ConstitutionalLaw() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      <main className="flex-1">
        <ScrollReveal>
          <ServiceHero
            hat="Atuação estratégica para identificar omissões e ilegalidades, buscando a valorização dos direitos do servidor público"
            title={<><span className="text-secondary block">Direito Constitucional</span> aplicado às relações dos servidores públicos com a Administração Pública.</>}
            description="Atuação jurídica voltada à análise e condução de demandas que envolvem servidores públicos e relações com o poder público."
            image={heroImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceDetail
            hat="Como funciona o serviço"
            title="Atuação em Direito Constitucional"
            paragraphs={[
              "O Direito Constitucional regula as relações entre o indivíduo e a administração pública, abrangendo normas, deveres e direitos aplicáveis a servidores e demais vínculos institucionais.",
              "A atuação da Fontenele Advogados nessa área é direcionada à análise e condução de situações que envolvem impacto jurídico e, muitas vezes, reflexos diretos na vida funcional e financeira do cliente.",
              "O trabalho é desenvolvido com base na compreensão das normas constitucionais, interpretação adequada da legislação e organização da situação apresentada, permitindo uma avaliação técnica e estruturada de cada caso.",
            ]}
            image={detailImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceTopics
            hat="Para quem é?"
            title="Para quem essa atuação é indicada"
            description="A atuação em Direito Constitucional é direcionada principalmente para:"
            topics={[
              "Servidores públicos municipais, estaduais e federais",
              "Servidores públicos em atividade ou aposentados",
              "Servidores públicos militares em atividade ou na reserva remunerada",
              "Aposentados e pensionistas vinculados ao serviço público"
            ]}
            alertText="Também se aplica a situações em que há necessidade de compreender direitos, deveres ou impactos decorrentes de decisões administrativas."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceSituations
            hat="Situações comuns"
            title={<>Situações que podem exigir <span className="text-secondary">análise em Direito Constitucional</span></>}
            intro="Cada caso possui particularidades, mas algumas situações costumam demandar análise jurídica nessa área:"
            bullets={[
              "Impactos financeiros relacionados à evolução na carreira pública",
              "Situações envolvendo decisões administrativas",
              "Necessidade de interpretação de normas constitucionais aplicáveis ao servidor",
              "Questionamentos sobre procedimentos ou vínculos com a administração",
            ]}
            outro="A análise técnica permite compreender o cenário e avaliar quais caminhos são possíveis dentro da legislação aplicável."
            image={situationImg}
            buttonText="Quero saber mais sobre a análise técnica"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceInsights
            hat="Análise"
            title={<>A Constituição Federal e a <span className="text-secondary">proteção de direitos</span></>}
            paragraphs={[
              "A Constituição Federal de 1988 é a norma suprema que rege as relações jurídicas no país, estabelecendo limites intransponíveis para a atuação da Administração Pública.",
              "No âmbito do serviço público, a observância dos princípios constitucionais (como legalidade, impessoalidade e moralidade) é obrigatória e serve como escudo contra arbitrariedades."
            ]}
            listData={{
              title: "A correta aplicação e interpretação dessas garantias permite:",
              items: [
                "resguardar a estabilidade e a integridade da carreira pública",
                "identificar e afastar atos administrativos inconstitucionais",
                "assegurar o amplo acesso e a igualdade de condições em concursos",
                "garantir que reformas legislativas respeitem o direito adquirido e o ato jurídico perfeito"
              ]
            }}
            alertText="A atuação jurídica em Direito Constitucional requer compreensão multidisciplinar e visão orgânica das estruturas, assegurando que as regras internas estejam em plena conformidade com a Constituição Federal."
          />
        </ScrollReveal>

        <ScrollReveal>
          <Cta
            hat="Fale com a equipe"
            title="Precisa entender melhor sua situação?"
            description="Se você possui dúvidas relacionadas à sua atuação como servidor público ou a alguma decisão administrativa, uma análise jurídica constitucional pode trazer mais clareza sobre o seu cenário."
            buttonText="Falar com um especialista"
          />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
