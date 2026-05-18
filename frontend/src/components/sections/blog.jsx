import { Link } from "react-router-dom";
import { SectionHat } from "../ui/section-hat";
import { ArticleCard } from "../ui/article-card";
import { Button } from "../ui/button";
import { mockArticles } from "@/data/articles";

export function Blog() {
  const latestArticles = [...mockArticles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

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
          {latestArticles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              category={article.category}
              title={article.title}
              href={`/blog/${article.id}`}
            />
          ))}
        </div>

        {/* Botão Inferior */}
        <div className="flex justify-center mt-10 md:mt-12 w-full">
          {/* O asChild faz o Button renderizar como Link, transferindo os estilos */}
          <Button asChild withArrow>
            <Link to="/blog">
              Ver todos os artigos
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
