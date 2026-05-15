import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceDetail } from "@/components/sections/service-detail";
import { ServiceTopics } from "@/components/sections/service-topics";
import { ServiceSituations } from "@/components/sections/service-situations";
import { ServiceAnalysis } from "@/components/sections/service-analysis";
import { Cta } from "@/components/sections/cta";
import heroImg from "@/assets/imgherodirbank.png";
import detailImg from "@/assets/direito-bancario-detailv2.png";
import situationsImg from "@/assets/direito-bancario-situationsv2.png";

export default function BankingLaw() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas">
      <Header />
      <main className="flex-1">
        <ServiceHero
          hat="Clareza técnica para decisões mais seguras em relações bancárias."
          highlightTitle="Direito Bancário"
          title="e análise de contratos financeiros"
          description="Atuação jurídica voltada à análise e compreensão de contratos, relações com instituições financeiras e impactos jurídicos decorrentes dessas operações."
          image={heroImg}
        />

        <ServiceDetail
          hat="Como funciona o serviço"
          title="Atuação em Direito Bancário"
          image={detailImg}
          paragraphs={[
            "O Direito Bancário envolve a análise e interpretação de contratos firmados com instituições financeiras, bem como das regras que regulam essas relações.",
            "A atuação da Fontenele Advogados é direcionada à compreensão detalhada dessas estruturas contratuais, considerando cláusulas, condições, encargos e implicações jurídicas envolvidas.",
            "Muitas dessas relações são complexas e exigem leitura técnica para que o cliente consiga entender com precisão o que foi contratado e quais são os seus efeitos ao longo do tempo.",
            "O objetivo é organizar essas informações, permitindo uma visão clara do cenário antes de qualquer decisão."
          ]}
        />

        <ServiceTopics
          hat="Para quem é?"
          title="Para quem essa atuação é indicada"
          description="A atuação em Direito Bancário é indicada para pessoas que possuem ou já tiveram relação com instituições financeiras, especialmente em situações que envolvem contratos ou decisões financeiras relevantes."
          topics={[
            "Pessoas com empréstimos ou financiamentos",
            "Clientes que possuem contratos bancários ativos",
            "Quem busca entender melhor condições contratuais",
            "Situações que envolvem múltiplas operações financeiras"
          ]}
        />

        <ServiceSituations
          hat="Situações comuns"
          title={<>Situações que podem exigir <span className="text-secondary">análise em Direito Bancário</span></>}
          intro="Alguns cenários são mais recorrentes quando se trata de relações bancárias e podem demandar análise jurídica:"
          bullets={[
            "Dúvidas sobre contratos de empréstimos ou financiamentos",
            "Falta de clareza sobre encargos, prazos ou condições",
            "Necessidade de entender a evolução de um contrato ao longo do tempo",
            "Situações com múltiplos contratos ativos",
            "Questionamentos sobre cobranças ou estrutura contratual"
          ]}
          outro="A análise técnica permite compreender com mais precisão como essas relações estão estruturadas e quais implicações podem existir."
          image={situationsImg}
          buttonText="Esclarecer minha situação"
        />

        <ServiceAnalysis
          hat="Análise"
          title={<>Contratos bancários e a <span className="text-secondary">importância da interpretação jurídica</span></>}
          description="Contratos bancários possuem características próprias e seguem normas específicas que regulam sua formação e execução."
          leftList={{
            title: "Muitas vezes, esses contratos apresentam:",
            items: [
              "estruturas complexas",
              "termos técnicos pouco acessíveis",
              "condições que exigem interpretação especializada"
            ]
          }}
          rightList={{
            title: "A análise jurídica permite:",
            items: [
              "compreender a lógica do contrato",
              "identificar como os encargos são aplicados",
              "avaliar impactos financeiros ao longo do tempo",
              "trazer clareza sobre direitos e obrigações"
            ]
          }}
          alertText="No contexto atual, onde o acesso ao crédito é facilitado, a compreensão dessas relações se torna essencial para decisões mais seguras e estruturadas."
        />

        <Cta
          hat="Fale com a equipe"
          title="Precisa entender melhor um contrato ou situação bancária?"
          description="Se você possui dúvidas sobre contratos, condições ou relações com instituições financeiras, uma análise jurídica pode ajudar a trazer clareza sobre o seu cenário."
          buttonText="Falar com um especialista"
        />
      </main>
      <Footer />
    </div>
  );
}
