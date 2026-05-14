import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutLawyer } from "@/components/sections/about-lawyer";
import { AboutStructure } from "@/components/sections/about-structure";
import { AboutTeam } from "@/components/sections/about-team";
import { Faq } from "@/components/sections/faq";
import { Blog } from "@/components/sections/blog";
import { Cta } from "@/components/sections/cta";

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-canvas font-sans">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutLawyer />
        <AboutStructure />
        <AboutTeam />
        <Faq />
        <Blog />
        <Cta 
          title="A Fontenele Advogados não se posiciona apenas como executora de demandas jurídicas."
          description="O foco está em oferecer clareza, organização e segurança para que cada cliente compreenda sua situação e tome decisões de forma estruturada."
        />
      </main>
      <Footer />
    </div>
  );
}
