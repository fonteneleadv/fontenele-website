import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceDetail } from "@/components/sections/service-detail";
import { ServiceTopics } from "@/components/sections/service-topics";
import { ServiceSituations } from "@/components/sections/service-situations";
import { ServiceAnalysis } from "@/components/sections/service-analysis";
import { Cta } from "@/components/sections/cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import heroImg from "@/assets/imgherodirbank.png";
import detailImg from "@/assets/direito-bancario-detailv2.png";
import situationsImg from "@/assets/direito-bancario-situationsv2.png";

export default function AdministrativeLaw() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas">
      <Header />
      <main className="flex-1">
        <ScrollReveal>
          <ServiceHero
            hat="Atuação técnica com foco na segurança jurídica e na valorização dos direitos do servidor público."
            title={<><span className="text-secondary block">Direito Administrativo</span> com ênfase em Servidores Públicos</>}
            description="Atuação técnica com foco na segurança jurídica e na valorização dos direitos do servidor público."
            image={heroImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceDetail
            hat="Como funciona o serviço"
            title="Atuação em Direito Administrativo"
            image={detailImg}
            paragraphs={[
              "O Direito Administrativo regula a relação entre o servidor público e o Estado, abrangendo direitos, deveres e garantias no exercício da função pública.",
              "A atuação da Fontenele Advogados nessa área é voltada à análise e condução de demandas que impactam diretamente a vida funcional e financeira do servidor, desde questões do cotidiano da carreira até situações de maior complexidade disciplinar ou judicial.",
              "O trabalho é desenvolvido com base na leitura técnica da legislação, compreensão da estrutura administrativa e organização estratégica de cada caso, garantindo uma atuação segura e orientada para resultados.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceTopics
            hat="Para quem é?"
            title="Para quem essa atuação é indicada"
            description="A atuação em Direito Administrativo é direcionada principalmente para:"
            topics={[
              "Servidores públicos municipais, estaduais e federais",
              "Servidores públicos em atividade ou aposentados",
              "Servidores públicos militares em atividade ou na reserva remunerada",
              "Aposentados e pensionistas vinculados ao serviço público ",
            ]}
            alertText="Também se aplica a situações em que há necessidade de compreender os impactos das decisões da administração pública sobre a carreira ou a remuneração do servidor."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceSituations
            hat="Situações comuns"
            title={<>Situações que podem exigir <span className="text-secondary">análise em Direito Administrativo</span></>}
            intro="Cada caso possui particularidades, mas algumas situações costumam demandar análise jurídica nessa área:"
            bullets={[
              "Recuperação de valores decorrente da diferença salarial retroativa",
              "Concessão da promoção atrasada, pela via judicial",
              "Transformação de férias não usufruídas em indenização",
              "Transformação de licenças-prêmios não usufruídas em indenização",
            ]}
            outro="A análise técnica permite identificar irregularidades e avaliar os melhores caminhos para a defesa dos seus direitos."
            image={situationsImg}
            buttonText="Esclarecer minha situação"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceAnalysis
            hat="Análise"
            title={<>Contratos administrativos e a <span className="text-secondary">importância da interpretação jurídica</span></>}
            description="Atos e contratos administrativos possuem características próprias e seguem normas de direito público específicas que regulam sua formação e execução."
            leftList={{
              title: "Muitas vezes, essas relações apresentam:",
              items: [
                "estruturas burocráticas complexas",
                "prazos peremptórios e rígidos",
                "prerrogativas da administração que exigem cautela"
              ]
            }}
            rightList={{
              title: "A análise jurídica permite:",
              items: [
                "compreender a legalidade de atos administrativos",
                "identificar inconsistências em processos ou editais",
                "avaliar riscos e desenhar defesas administrativas robustas",
                "trazer clareza sobre deveres e direitos frente ao poder público"
              ]
            }}
            alertText="No contexto atual de governança e regulação, a compreensão dessas relações com o Estado se torna essencial para garantir a conformidade e a segurança jurídica."
          />
        </ScrollReveal>

        <ScrollReveal>
          <Cta
            hat="Fale com a equipe"
            title="Precisa proteger seus direitos como servidor público?"
            description="Se você enfrenta alguma questão funcional, disciplinar ou previdenciária relacionada ao serviço público, uma análise jurídica especializada pode trazer mais clareza e segurança para a sua situação."
            buttonText="Falar com um especialista"
          />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
