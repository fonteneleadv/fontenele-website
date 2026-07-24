import { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Cta } from "@/components/sections/cta";
import { SectionHat } from "@/components/ui/section-hat";
import { ArticleCard } from "@/components/ui/article-card";
import { CategoryTab } from "@/components/ui/category-tab";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { sanityClient } from "@/lib/sanity";

const categories = [
  "Todos",
  "Direito Administrativo",
  "Direito do Consumidor",
  "Direito Constitucional",
  "Consultoria Jurídica",
];

// Roda no build (SSG): os posts entram no HTML gerado, indexáveis pelo Google.
// GROQ mantido verbatim. Em navegação client-side, o react-router reexecuta o loader.
export async function loader() {
  const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, "slug": slug.current, publishedAt, category, mainImage
  }`);
  return { posts };
}

export default function Blog() {
  const { posts } = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Todos") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

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
                Análises, orientações e perspectivas sobre direito administrativo, constitucional, do consumidor e consultoria jurídica — escritas com clareza para quem precisa compreender antes de agir.
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
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filteredPosts.map((post) => (
                    <ArticleCard key={post._id} article={post} />
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
