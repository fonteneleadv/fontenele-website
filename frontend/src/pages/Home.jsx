import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Blog } from "@/components/sections/blog";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Faq />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
