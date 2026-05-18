import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Cta } from "@/components/sections/cta";
import { ArticleCard } from "@/components/ui/article-card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { sanityClient, urlFor } from "@/lib/sanity";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    sanityClient
      .fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (!post) {
      setRelatedPosts([]);
      return;
    }
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
          _id, title, "slug": slug.current, publishedAt, category, mainImage
        }`,
        { slug: post.slug?.current ?? slug }
      )
      .then((data) => setRelatedPosts(data))
      .catch(console.error);
  }, [post, slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex flex-col bg-canvas font-sans">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-32 pb-20">
          <p className="text-muted text-base">Carregando artigo…</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
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

  const coverUrl = post.mainImage ? urlFor(post.mainImage).url() : null;

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
                {post.category}
              </p>

              {/* Título */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-primary-ink mb-6">
                {post.title}
              </h1>

              {/* Data */}
              <p className="text-gray-500 text-sm mb-12">
                Publicado em {formatDate(post.publishedAt)}
              </p>

              {/* Imagem de capa */}
              {coverUrl && (
                <div className="w-full overflow-hidden rounded-sm mb-12">
                  <img
                    src={coverUrl}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Corpo do texto (PortableText) */}
              <div className="text-body text-base md:text-lg leading-relaxed space-y-6">
                <PortableText value={post.body} />
              </div>
            </article>
          </div>
        </ScrollReveal>

        {relatedPosts.length > 0 && (
          <ScrollReveal>
            <div className="container mx-auto px-4 md:px-8 pb-20">
              <div className="mx-auto max-w-3xl">
                <hr className="mb-16 border-hairline" />

                <div className="flex flex-col gap-10">
                  <h2 className="font-serif text-3xl md:text-4xl text-primary-ink">
                    Continue lendo
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((related) => (
                      <ArticleCard key={related._id} article={related} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <Cta />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
