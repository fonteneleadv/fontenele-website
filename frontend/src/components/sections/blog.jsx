import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHat } from "../ui/section-hat";
import { ArticleCard } from "../ui/article-card";
import { Button } from "../ui/button";
import { sanityClient } from "@/lib/sanity";

export function Blog() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0...3] {
        _id, title, "slug": slug.current, publishedAt, category, mainImage
      }`)
      .then(setLatestPosts)
      .catch(console.error);
  }, []);

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
            O acesso à informação clara é parte essencial de qualquer decisão jurídica. Por isso, o escritório também atua na produção de conteúdos que ajudam a compreender temas relevantes do  direito administrativo, constitucional e do consumidor.
          </p>
        </div>

        {/* Grid de Artigos */}
        {latestPosts.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {latestPosts.map((post) => (
              <ArticleCard key={post._id} article={post} />
            ))}
          </div>
        )}

        {/* Botão Inferior */}
        <div className="flex justify-center mt-10 md:mt-12 w-full">
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
