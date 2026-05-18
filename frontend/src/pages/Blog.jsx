import { useState, useMemo } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Cta } from "@/components/sections/cta";
import { SectionHat } from "@/components/ui/section-hat";
import { ArticleCard } from "@/components/ui/article-card";
import { CategoryTab } from "@/components/ui/category-tab";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { mockArticles } from "@/data/articles";

const categories = [
  "Todos",
  "Direito Bancário",
  "Direito do Consumidor",
  "Direito Público",
  "Consultoria",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Todos") return mockArticles;
    return mockArticles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero Interno */}
        <ScrollReveal>
          <section className="w-full bg-canvas pt-32 pb-16">
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center max-w-4xl gap-6">
              <SectionHat className="mx-auto">Artigos Jurídicos</SectionHat>
              <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] text-primary-ink">
                Conteúdo jurídico para decisões{" "}
                <span className="text-secondary">conscientes</span>
              </h1>
              <p className="text-body text-base md:text-lg max-w-2xl">
                Análises, orientações e perspectivas sobre direito bancário, do consumidor, público e consultoria — escritas com clareza para quem precisa compreender antes de agir.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Filtros + Grid de Artigos */}
        <ScrollReveal>
          <section className="w-full bg-canvas pb-12">
            <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                  <CategoryTab
                    key={category}
                    isActive={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </CategoryTab>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full bg-canvas pb-24 md:pb-32">
            <div className="container mx-auto px-4 md:px-8">
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      image={article.image}
                      category={article.category}
                      title={article.title}
                      href={`/blog/${article.id}`}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted text-base">
                  Nenhum artigo encontrado para esta categoria.
                </p>
              )}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <Cta
            hat="Não encontrou sua resposta?"
            title="Cada caso tem nuances que um artigo não alcança. Fale com um especialista da Fontenele Advogados."
            description="Nossa equipe avalia sua situação com clareza e propõe os próximos passos com responsabilidade técnica."
            buttonText="Falar com um especialista"
          />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
