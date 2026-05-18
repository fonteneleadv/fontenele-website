import { useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollReveal } from "../ui/scroll-reveal";
import { companySpecs } from "@/data/legal-texts";

export function LegalLayout({ title, htmlContent }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
        <ScrollReveal>
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">

            {/* Cabeçalho do Documento */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary-ink mb-2">
              {title}
            </h1>
            <p className="text-sm text-gray-400 mb-10">
              Última atualização: {companySpecs.updateDate}
            </p>

            {/* Renderização Segura do HTML Dinâmico */}
            <div
              className="text-body text-base md:text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}