import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";
import { ServiceHero } from "../../components/sections/service-hero";
import { ServiceDetail } from "../../components/sections/service-detail";
import { ServiceTopics } from "../../components/sections/service-topics";
import { ServiceSituations } from "../../components/sections/service-situations";
import { ServiceInsights } from "../../components/sections/service-insights";
import { Cta } from "../../components/sections/cta";

// Assets (Using placeholders until final files are provided)
import heroImg from "../../assets/consultoriahero.png";
import detailImg from "../../assets/consultoriadetail.png";
import situationImg from "../../assets/consultoriasituation.png";

export default function Consulting() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      <main className="flex-1">
        <ServiceHero
          hat="Orientação jurídica voltada à análise técnica, prevenção de riscos e segurança na tomada de decisões."
          title={<><span className="text-secondary block">Consultoria jurídica</span> em decisões e análise preventiva</>}
          description="Orientação especializada para quem busca entender implicações jurídicas e avaliar cenários antes de tomar decisões importantes."
          image={heroImg}
        />

        <ServiceDetail
          hat="Como funciona o serviço"
          title="Como funciona a consultoria jurídica"
          paragraphs={[
            "A consultoria jurídica é voltada à análise prévia de situações que exigem compreensão técnica antes de qualquer decisão.",
            "Diferente de uma atuação reativa, a consultoria permite avaliar cenários, interpretar contratos, entender implicações jurídicas e organizar informações de forma estruturada.",
            "A Fontenele Advogados atua com foco em trazer clareza ao cliente, permitindo que decisões sejam tomadas com base em análise jurídica consistente.",
            "Esse tipo de orientação é especialmente relevante em contextos que envolvem impacto financeiro, contratual ou estratégico."
          ]}
          image={detailImg}
        />

        <ServiceTopics
          hat="Para quem é?"
          title="Para quem a consultoria é indicada"
          description="A consultoria jurídica é indicada para pessoas que desejam compreender melhor uma situação antes de tomar uma decisão."
          topics={[
            "Quem está prestes a firmar contratos",
            "Pessoas que possuem dúvidas sobre cenários jurídicos específicos",
            "Situações que exigem análise antes de assumir compromissos",
            "Quem busca prevenção de riscos jurídicos e financeiros"
          ]}
          alertText="Também é indicada para quem deseja organizar informações e entender possíveis caminhos antes de qualquer ação."
        />

        <ServiceSituations
          hat="Situações comuns"
          title={<>Situações em que a consultoria <span className="text-secondary">pode ser útil</span></>}
          intro="Alguns cenários em que a consultoria jurídica costuma ser relevante:"
          bullets={[
            "Análise de contratos antes da assinatura",
            "Avaliação de riscos em decisões financeiras",
            "Dúvidas sobre implicações jurídicas de determinada escolha",
            "Necessidade de entender um cenário antes de tomar uma decisão",
            "Organização de informações para definição de estratégia"
          ]}
          outro="A consultoria permite antecipar riscos e estruturar decisões com maior segurança."
          image={situationImg}
        />

        <ServiceInsights
          hat="Análise"
          title={<>Consultoria jurídica como <span className="text-secondary">ferramenta de prevenção</span></>}
          paragraphs={[
            "Grande parte das demandas jurídicas poderia ser evitada ou reduzida com uma análise prévia adequada.",
            "A consultoria jurídica atua exatamente nesse ponto antes do problema."
          ]}
          listData={{
            title: "Ao analisar um cenário com antecedência, é possível:",
            items: [
              "compreender implicações jurídicas de decisões",
              "avaliar riscos e consequências",
              "organizar informações relevantes",
              "estruturar caminhos mais seguros"
            ]
          }}
          alertText="Em um contexto onde contratos e relações são cada vez mais complexos, a orientação preventiva se torna um diferencial importante para decisões mais conscientes."
        />

        <Cta
          hat="Fale com a equipe"
          title="Precisa analisar uma situação antes de decidir?"
          description="Se você está diante de uma decisão importante e busca orientação jurídica para entender melhor o cenário, a consultoria pode ajudar a trazer clareza e segurança."
        />
      </main>

      <Footer />
    </div>
  );
}
