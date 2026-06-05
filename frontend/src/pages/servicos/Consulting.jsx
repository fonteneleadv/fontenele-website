import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceDetail } from "@/components/sections/service-detail";
import { ServiceTopics } from "@/components/sections/service-topics";
import { ServiceSituations } from "@/components/sections/service-situations";
import { ServiceAnalysis } from "@/components/sections/service-analysis";
import { Cta } from "@/components/sections/cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import heroImg from "@/assets/consultoriahero.png";
import detailImg from "@/assets/consultoriadetail.png";
import situationsImg from "@/assets/consultoriasituation.png";

export default function Consulting() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas">
      <Header />
      <main className="flex-1">
        <ScrollReveal>
          <ServiceHero
            hat="Antes de agir, entender o cenário pode evitar consequências futuras."
            title={<><span className="text-secondary block">Consultoria jurídica</span> para decisões mais seguras</>}
            description="Orientação técnica para analisar cenários, compreender riscos e estruturar decisões com base jurídica."
            image={heroImg}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceDetail
            hat="Como funciona o serviço"
            title="Como funciona a consultoria jurídica"
            image={detailImg}
            paragraphs={[
              "A consultoria jurídica é voltada à análise prévia de situações que exigem compreensão técnica antes de qualquer decisão.",
              "Diferente de uma atuação reativa, a consultoria permite avaliar cenários, interpretar contratos, entender implicações jurídicas e organizar informações de forma estruturada.",
              "A Fontenele Advogados atua com foco em trazer clareza ao cliente, permitindo que decisões sejam tomadas com base em análise jurídica consistente. Esse tipo de orientação é especialmente relevante em contextos que envolvem impacto financeiro, contratual ou estratégico."
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceTopics
            hat="Para quem é?"
            title="Para quem a consultoria é indicada"
            description="A consultoria jurídica é indicada para pessoas que desejam compreender melhor uma situação antes de tomar uma decisão. Inclui:"
            topics={[
              "Quem está prestes a firmar contratos",
              "Pessoas que possuem dúvidas sobre cenários jurídicos específicos",
              "Situações que exigem análise antes de assumir compromissos",
              "Quem busca prevenção de riscos jurídicos e financeiros"
            ]}
            alertText="Também é indicada para quem deseja organizar informações e entender possíveis caminhos antes de qualquer ação."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceSituations
            hat="Situações comuns"
            title={<>Situações em que a <span className="text-secondary">consultoria pode ser útil</span></>}
            intro="Alguns cenários em que a consultoria jurídica costuma ser relevante:"
            bullets={[
              "Análise de contratos antes da assinatura",
              "Avaliação de riscos em decisões financeiras",
              "Dúvidas sobre implicações jurídicas de determinada escolha",
              "Necessidade de entender um cenário antes de tomar uma decisão",
              "Organização de informações para definição de estratégia"
            ]}
            outro="A consultoria permite antecipar riscos e estruturar decisões com maior segurança."
            image={situationsImg}
            buttonText="Esclarecer minha situação"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceAnalysis
            hat="Análise"
            title={<>Consultoria preventiva e a <span className="text-secondary">importância do planejamento</span></>}
            description="Grande parte dos litígios e passivos jurídicos poderiam ser evitados com uma avaliação prévia bem estruturada das regras e dos contratos aplicáveis."
            leftList={{
              title: "Ao analisar um cenário com antecedência, é possível:",
              items: [
                "compreender os riscos envolvidos em negócios e acordos",
                "identificar cláusulas abusivas ou desequilibradas em contratos",
                "garantir conformidade com a legislação aplicável ao setor"
              ]
            }}
            rightList={{
              title: "A consultoria jurídica preventiva permite:",
              items: [
                "planejar ações futuras com maior segurança jurídica",
                "reduzir a ocorrência de litígios judiciais onerosos",
                "otimizar a negociação de termos contratuais benéficos",
                "proporcionar tranquilidade e economia de recursos no longo prazo"
              ]
            }}
            alertText="Com relações contratuais cada vez mais dinâmicas, o planejamento e a assessoria preventiva tornam-se essenciais para resguardar direitos e viabilizar parcerias saudáveis."
          />
        </ScrollReveal>

        <ScrollReveal>
          <Cta
            hat="Fale com a equipe"
            title="Precisa analisar uma situação antes de decidir?"
            description="Se você está diante de uma decisão importante e busca orientação jurídica para entender melhor o cenário, a consultoria pode ajudar a trazer clareza e segurança."
            buttonText="Falar com um especialista"
          />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}