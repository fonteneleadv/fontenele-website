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
            title="Atuação em Direito do Consumidor"
            paragraphs={[
              "O Direito do Consumidor Bancário regula a relação entre pessoas físicas e instituições financeiras, estabelecendo limites para cobranças, contratos e práticas comerciais.",
              "A atuação da Fontenele Advogados nessa área é voltada especificamente à defesa do servidor público, que, por ter renda estável e margem consignável, frequentemente se torna alvo de práticas abusivas por parte de bancos e financeiras.",
              "O trabalho é desenvolvido com base na análise técnica dos contratos, identificação de irregularidades e condução estratégica das demandas, tanto na esfera administrativa quanto judicial, sempre com foco na proteção dos direitos e na recuperação de valores indevidos."
            ]}
            image={detailImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceTopics
            hat="Para quem é?"
            title="Para quem essa atuação é indicada"
            description="A atuação em Direito do Consumidor é direcionada principalmente para:"
            topics={[
              "Servidores públicos com empréstimos ou descontos consignados em folha",
              "Servidores públicos que identificaram cobranças ou descontos indevidos",
              "Servidores públicos com cartão de crédito consignado e encargos abusivos",
              "Servidores públicos que enfrentam situação de superendividamento ",
            ]}
            alertText="Também se aplica a situações em que há necessidade de revisar contratos ou buscar indenizações por danos causados por instituições financeiras."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceSituations
            hat="Situações comuns"
            title={<>Situações que podem exigir <span className="text-secondary">análise em Direito do Consumidor</span></>}
            intro="Cada caso possui particularidades, mas algumas situações costumam demandar análise jurídica nessa área:"
            bullets={[
              "Anulação de descontos em folha não reconhecidos ou não autorizados",
              "Indenização por fraudes bancárias",
              "Recuperação em dobro de valores de cobranças indevidas em consignados",
              "Indenização por danos morais e materiais causados por instituições bancárias",
            ]}
            outro="A análise técnica permite identificar irregularidades e avaliar os melhores caminhos para a defesa dos seus direitos."
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