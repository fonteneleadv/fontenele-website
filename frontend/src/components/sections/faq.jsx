import { SectionHat } from "../ui/section-hat";
import { Accordion } from "../ui/accordion";
import FaqImage from "@/assets/faq-image.png";

export function Faq() {
  const faqs = [
    {
      question: "Como funciona o atendimento inicial?",
      answer: "O primeiro contato tem como objetivo entender a situação apresentada e orientar de forma clara sobre os possíveis caminhos."
    },
    {
      question: "É necessário iniciar um processo ao entrar em contato?",
      answer: "Não. O atendimento inicial é voltado à orientação. Qualquer decisão posterior é tomada com base na análise do caso."
    },
    {
      question: "Quais áreas o escritório atende?",
      answer: "Direito Administrativo, Direito Constitucional, Direito do Consumidor e Consultoria Jurídica."
    },
    {
      question: "O atendimento é apenas para servidores públicos?",
      answer: "O escritório possui foco em servidores públicos, mas também atua em demandas relacionadas a contratos bancários e relações de consumo."
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Coluna da Esquerda (Imagem) */}
        <div className="w-full h-[400px] lg:h-[600px] rounded-sm overflow-hidden order-1 lg:order-none">
          <img
            src={FaqImage}
            alt="Livros e balança da justiça"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coluna da Direita (Conteúdo e Accordions) */}
        {/* A classe border-l-2 cria a linha vertical charmosa do design */}
        <div className="flex flex-col items-start border-l border-secondary/50 pl-6 md:pl-10 order-2 lg:order-none">
          <SectionHat className="mb-6">FAQ</SectionHat>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-primary-ink mb-12">
            Dúvidas frequentes
          </h2>

          <div className="w-full flex flex-col">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.question}
                defaultOpen={index === 0}
              >
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
