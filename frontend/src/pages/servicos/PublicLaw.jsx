import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";
import { ServiceHero } from "../../components/sections/service-hero";
import { ServiceDetail } from "../../components/sections/service-detail";
import { ServiceTopics } from "../../components/sections/service-topics";
import { ServiceSituations } from "../../components/sections/service-situations";
import { ServiceInsights } from "../../components/sections/service-insights";
import { Cta } from "../../components/sections/cta";
import { ScrollReveal } from "../../components/ui/scroll-reveal";

// Assets (Placeholder names as user hasn't provided the exact files yet)
// We'll use the specific names for later replacement
import heroImg from "../../assets/direitopublicohero.png";
import detailImg from "../../assets/direitopublicodetail.png";
import situationImg from "../../assets/direitopublicosituations.png";

export default function PublicLaw() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      <main className="flex-1">
        <ScrollReveal>
          <ServiceHero
            hat="Compreensão técnica das estruturas administrativas para orientação segura e estratégica."
            title={<><span className="text-secondary block">Direito Público</span> aplicado a servidores e relações com a administração</>}
            description="Atuação jurídica voltada à análise e condução de demandas que envolvem servidores públicos e relações com o poder público."
            image={heroImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceDetail
            hat="Como funciona o serviço"
            title="Atuação em Direito Público"
            paragraphs={[
              "O Direito Público regula as relações entre o indivíduo e a administração pública, abrangendo normas, deveres e direitos aplicáveis a servidores e demais vínculos institucionais.",
              "A atuação da Fontenele Advogados nessa área é direcionada à análise e condução de situações que envolvem impacto jurídico e, muitas vezes, reflexos diretos na vida funcional e financeira do cliente.",
              "O trabalho é desenvolvido com base na compreensão das regras administrativas, interpretação adequada da legislação e organização do cenário apresentado, permitindo uma avaliação técnica e estruturada de cada caso."
            ]}
            image={detailImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceTopics
            hat="Para quem é?"
            title="Para quem essa atuação é indicada"
            description="A atuação em Direito Público é direcionada principalmente para:"
            topics={[
              "Servidores públicos ativos",
              "Aposentados e pensionistas vinculados ao serviço público",
              "Pessoas que mantêm relação jurídica com órgãos públicos"
            ]}
            alertText="Também se aplica a situações em que há necessidade de compreender direitos, deveres ou impactos decorrentes de decisões administrativas."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceSituations
            hat="Situações comuns"
            title={<>Situações que podem exigir <span className="text-secondary">análise em Direito Público</span></>}
            intro="Cada caso possui particularidades, mas algumas situações costumam demandar análise jurídica nessa área:"
            bullets={[
              "Dúvidas sobre direitos e deveres funcionais",
              "Impactos financeiros relacionados à carreira pública",
              "Situações envolvendo decisões administrativas",
              "Necessidade de interpretação de normas aplicáveis ao servidor",
              "Questionamentos sobre procedimentos ou vínculos com a administração"
            ]}
            outro="A análise técnica permite compreender o cenário e avaliar quais caminhos são possíveis dentro da legislação aplicável."
            image={situationImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceInsights
            hat="Análise"
            title={<>Direito Público e a <span className="text-secondary">importância da análise jurídica</span></>}
            paragraphs={[
              "O Direito Público envolve um conjunto de normas específicas que regulam a atuação do Estado e sua relação com os indivíduos.",
              "No contexto dos servidores públicos, essas normas definem direitos, deveres, limites e possibilidades dentro da estrutura administrativa."
            ]}
            listData={{
              title: "A correta interpretação dessas regras é fundamental para:",
              items: [
                "compreender impactos financeiros e funcionais",
                "avaliar decisões administrativas",
                "identificar inconsistências ou dúvidas jurídicas",
                "estruturar caminhos adequados para cada situação"
              ]
            }}
            alertText="A atuação jurídica nessa área exige conhecimento técnico e leitura detalhada do cenário, considerando não apenas a legislação, mas também a aplicação prática das normas no contexto administrativo."
          />
        </ScrollReveal>

        <ScrollReveal>
          <Cta
            hat="Fale com a equipe"
            title="Precisa entender melhor sua situação?"
            description="Se você possui dúvidas relacionadas à sua atuação como servidor público ou a alguma decisão administrativa, uma análise jurídica pode trazer mais clareza sobre o seu cenário."
          />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}