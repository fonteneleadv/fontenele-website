import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Cta } from "@/components/sections/cta";
import { ArticleCard } from "@/components/ui/article-card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { mockArticles } from "@/data/articles";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { id } = useParams();
  const article = mockArticles.find((a) => String(a.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen w-full flex flex-col bg-canvas font-sans">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-6 max-w-xl">
            <h1 className="font-serif text-4xl md:text-5xl text-primary-ink">
              Artigo <span className="text-secondary">não encontrado</span>
            </h1>
            <p className="text-body text-base md:text-lg">
              O conteúdo que você procura pode ter sido movido ou ainda não está disponível.
            </p>
            <Link to="/blog">
              <Button variant="outline" withArrow>
                Voltar para o blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = mockArticles
    .filter((a) => a.id !== article.id)
    .sort((a, b) => {
      const sameCategoryA = a.category === article.category ? 0 : 1;
      const sameCategoryB = b.category === article.category ? 0 : 1;
      if (sameCategoryA !== sameCategoryB) return sameCategoryA - sameCategoryB;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas font-sans">
      <Header />

      <main className="flex-1">
        <ScrollReveal>
          <div className="container mx-auto px-4 md:px-8 pt-32 pb-20">
            <article className="mx-auto max-w-3xl">

              {/* Voltar */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-ink hover:text-secondary transition-colors mb-10"
              >
                <ArrowLeft className="size-4" />
                Voltar para o blog
              </Link>

              {/* Categoria */}
              <p className="text-xs font-medium uppercase tracking-wider text-secondary mb-4">
                {article.category}
              </p>

              {/* Título */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-primary-ink mb-6">
                {article.title}
              </h1>

              {/* Data */}
              <p className="text-gray-500 text-sm mb-12">
                Publicado em {formatDate(article.date)}
              </p>

              {/* Imagem de capa */}
              <div className="w-full overflow-hidden rounded-sm mb-12">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Corpo do texto (mock) */}
              <p className="text-body text-lg leading-relaxed mb-6">
                A análise jurídica que apresentamos a seguir parte de um princípio simples: decisões bem fundamentadas começam por uma leitura clara do contexto. Cada caso traz nuances que exigem técnica, mas também sensibilidade para enxergar o impacto prático sobre quem busca orientação.
              </p>

              <p className="text-body text-lg leading-relaxed mb-6">
                O cenário regulatório brasileiro avança em ritmo próprio, e acompanhar essas mudanças é parte essencial do trabalho de qualquer escritório responsável. Neste artigo, organizamos os pontos centrais para que profissionais, gestores e cidadãos possam compreender o tema sem perder rigor técnico.
              </p>

              <h2 className="font-serif text-2xl text-primary-ink mt-10 mb-4">
                O que diz a legislação aplicável
              </h2>

              <p className="text-body text-lg leading-relaxed mb-6">
                O conjunto normativo combina dispositivos do Código Civil, da legislação específica do setor e da jurisprudência consolidada nos tribunais superiores. Esse arranjo cria um terreno em que a interpretação literal raramente é suficiente — a análise sistêmica costuma ser determinante para preservar o direito.
              </p>

              <blockquote className="border-l-4 border-secondary pl-6 my-10 italic text-primary-ink text-xl leading-relaxed">
                “A clareza jurídica não é um luxo técnico: é a base sobre a qual decisões responsáveis são construídas.”
              </blockquote>

              <h2 className="font-serif text-2xl text-primary-ink mt-10 mb-4">
                Aspectos práticos para o leitor
              </h2>

              <p className="text-body text-lg leading-relaxed mb-6">
                Na prática, identificar precocemente os pontos sensíveis — cláusulas, prazos, requisitos formais — costuma evitar litígios desnecessários e preservar o equilíbrio das relações. A orientação preventiva é, em muitos casos, mais eficiente do que a atuação contenciosa posterior.
              </p>

              <p className="text-body text-lg leading-relaxed mb-6">
                Cada situação, contudo, precisa ser avaliada à luz dos documentos e do histórico envolvidos. Este artigo tem caráter informativo e não substitui a análise individualizada por um advogado.
              </p>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="container mx-auto px-4 md:px-8 pb-20">
            <div className="mx-auto max-w-3xl">
              <hr className="mb-16 border-hairline" />

              {/* Artigos Relacionados */}
              <div className="flex flex-col gap-10">
                <h2 className="font-serif text-3xl md:text-4xl text-primary-ink">
                  Continue lendo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedArticles.map((related) => (
                    <ArticleCard
                      key={related.id}
                      image={related.image}
                      category={related.category}
                      title={related.title}
                      href={`/blog/${related.id}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Cta />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
