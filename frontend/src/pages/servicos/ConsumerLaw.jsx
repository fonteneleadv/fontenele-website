import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";
import { ServiceHero } from "../../components/sections/service-hero";
import { ServiceDetail } from "../../components/sections/service-detail";
import { ServiceTopics } from "../../components/sections/service-topics";
import { ServiceSituations } from "../../components/sections/service-situations";
import { ServiceInsights } from "../../components/sections/service-insights";
import { Cta } from "../../components/sections/cta";
import { ScrollReveal } from "../../components/ui/scroll-reveal";
import heroImg from "../../assets/direitodoconsumirdorhero.png";
import detailImg from "../../assets/atuacaoemdireito.png";
import situationImg from "../../assets/analisedoc.png";

export default function ConsumerLaw() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      <main className="flex-1">
        <ScrollReveal>
          <ServiceHero
            hat="Atuação estratégica para identificar irregularidades, revisar contratos e garantir a restituição de direitos financeiros."
            title={<><span className="text-secondary block">Direito do Consumidor</span> com foco em análise de contratos bancários para servidores públicos</>}
            description="Assessoria jurídica especializada contra práticas abusivas de instituições financeiras, com foco na proteção do servidor público."
            image={heroImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceDetail
            hat="Como funciona o serviço"
            title="Atuação em Direito Bancário"
            paragraphs={[
              "Atuamos de forma especializada na defesa de servidores públicos em demandas envolvendo relações bancárias e financeiras, combatendo cobranças abusivas, fraudes e irregularidades praticadas por instituições financeiras.",
              "Com ampla experiência em Direito do Consumidor Bancário, oferecemos assessoria jurídica estratégica para proteger o patrimônio, a renda e os direitos dos servidores públicos municipais, estaduais e federais, tanto na esfera administrativa quanto judicial.",
              "Sabemos que muitos servidores públicos enfrentam situações de endividamento excessivo, contratos abusivos e fraudes que comprometem sua estabilidade financeira. Por isso, atuamos com transparência, proximidade e excelência técnica para oferecer a melhor estratégia jurídica em cada situação."
            ]}
            image={detailImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceTopics
            hat="Para quem é?"
            title="Para quem essa atuação é indicada"
            description="A atuação em Direito Bancário é indicada para servidores públicos que possuem ou já tiveram relação com instituições financeiras, especialmente em situações que envolvem contratos ou decisões financeiras relevantes."
            topics={[
              "Funcionários públicos com empréstimos ou financiamentos",
              "Servidores que possuem contratos bancários ativos",
              "Servidor público que busca entender melhor condições contratuais",
              "Situações que envolvem múltiplas operações financeiras",
              "Servidores com cartão de crédito consignado e encargos abusivos",
              "Quem enfrenta situação de superendividamento e busca reorganização jurídica"
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceSituations
            hat="Situações comuns"
            title={<>Situações que podem exigir <span className="text-secondary">análise em Direito Bancário para servidores públicos</span></>}
            intro="Alguns cenários são mais recorrentes quando se trata de relações bancárias e podem demandar análise jurídica:"
            bullets={[
              "Empréstimos consignados abusivos",
              "Cartão de crédito consignado",
              "Descontos indevidos em folha de pagamento",
              "Fraudes bancárias e empréstimos não reconhecidos",
              "Restituição de valores cobrados indevidamente",
              "Contratos com cláusulas abusivas que precisam ser revisadas",
              "Danos morais ou materiais causados por condutas de instituições financeiras"
            ]}
            outro="Nosso trabalho é pautado na análise individualizada de cada caso, buscando soluções rápidas, seguras e eficazes para minimizar prejuízos financeiros e garantir o respeito aos direitos do consumidor."
            image={situationImg}
            buttonText="Quero saber mais sobre a análise técnica"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceInsights
            hat="Análise"
            title={<>Direito do Consumidor como <span className="text-secondary">ferramenta de equilíbrio</span></>}
            paragraphs={[
              "Grande parte dos desentendimentos em relações de consumo poderia ser evitada ou reduzida com uma análise prévia e o conhecimento adequado dos direitos previstos no CDC.",
              "A atuação jurídica atua exatamente na readequação desse equilíbrio, protegendo a parte vulnerável da relação."
            ]}
            listData={{
              title: "Ao analisar um cenário com antecedência, é possível:",
              items: [
                "compreender as cláusulas e implicações dos contratos de consumo",
                "identificar práticas abusivas ou ilegais por parte de fornecedores",
                "organizar informações e provas relevantes para a defesa de direitos",
                "estruturar caminhos mais seguros para a resolução de conflitos"
              ]
            }}
            alertText="Com o aumento da complexidade das relações de consumo e serviços digitais, a orientação especializada se torna fundamental para decisões mais conscientes."
          />
        </ScrollReveal>

        <ScrollReveal>
          <Cta
            hat="Fale com a equipe"
            title="Identificou alguma irregularidade em seus contratos ou descontos?"
            description="Se você é servidor público e suspeita de cobranças indevidas, descontos não autorizados ou práticas abusivas por parte de instituições financeiras, uma análise jurídica especializada pode indicar o caminho mais adequado para a sua situação."
            buttonText="Falar com um especialista"
          />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}