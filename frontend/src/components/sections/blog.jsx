import { SectionHat } from "../ui/section-hat";
import { ArticleCard } from "../ui/article-card";
import { Button } from "../ui/button";

import Article1 from "@/assets/article-1.png";
import Article2 from "@/assets/article-2.png";
import Article3 from "@/assets/article-3.png";

export function Blog() {
  const articles = [
    {
      image: Article1,
      category: "Direito Bancário",
      title: "Entendendo contratos bancários e suas implicações",
    },
    {
      image: Article2,
      category: "Direito do consumidor",
      title: "Relações de consumo e direitos do consumidor",
    },
    {
      image: Article3,
      category: "Direito do Servidor Público",
      title: "Estrutura jurídica aplicada ao servidor público",
    }
  ];

  return (
    <section className="w-full bg-white pb-20 md:pb-32 pt-10 md:pt-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-16 gap-6">
          <SectionHat className="mx-auto">Artigos Jurídicos</SectionHat>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-primary-ink">
            Informação jurídica como base para <span className="text-secondary">boas decisões</span>
          </h2>
          <p className="text-body text-base md:text-lg">
            O acesso à informação clara é parte essencial de qualquer decisão jurídica. Por isso, o escritório também atua na produção de conteúdos que ajudam a compreender temas relevantes do direito público, bancário e do consumidor.
          </p>
        </div>

        {/* Grid de Artigos */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        {/* Botão Inferior */}
        <Button variant="default" withArrow>
          Ver mais artigos
        </Button>

      </div>
    </section>
  );
}
