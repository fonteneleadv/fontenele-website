import { SectionHat } from "../ui/section-hat";
import { ServiceCard } from "../ui/service-card";

export function Services() {
  const servicesData = [
    {
      title: "Direito Administrativo",
      description: "Suporte jurídico em processos administrativos, progressões funcionais, gratificações, aposentadorias e concursos públicos.",
      href: "/servicos/direito-administrativo"
    },
    {
      title: "Direito Constitucional",
      description: "Atuação na defesa de direitos fundamentais, estabilidade, acesso a cargos públicos, legalidade administrativa e garantias previstas na Constituição Federal.",
      href: "/servicos/direito-constitucional"
    },
    {
      title: "Direito do Consumidor",
      description: "Suporte jurídico a servidores públicos em casos de cobranças indevidas, problemas bancários, contratos abusivos, planos de saúde e falhas na prestação de serviços.",
      href: "/servicos/direito-do-consumidor"
    },
    {
      title: "Consultoria Jurídica",
      description: "Orientação preventiva e estratégica em questões funcionais, administrativas e patrimoniais.",
      href: "/servicos/consultoria"
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-start text-left md:items-center md:text-center max-w-5xl mb-16 md:mb-24 gap-6">
          <SectionHat className="md:mx-auto">Áreas de atuação</SectionHat>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-1.2px] text-primary-ink">
            Atuação jurídica direcionada a cenários que exigem <span className="text-secondary">análise técnica, clareza e segurança na tomada de decisão.</span>
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
