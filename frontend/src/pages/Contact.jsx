import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { ContactHero } from "../components/sections/contact-hero";
import { ContactLocation } from "../components/sections/contact-location";
import { Faq } from "../components/sections/faq";
import { Blog } from "../components/sections/blog";
import { ScrollReveal } from "../components/ui/scroll-reveal";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <ScrollReveal><ContactHero /></ScrollReveal>
        <ScrollReveal><ContactLocation /></ScrollReveal>
        <ScrollReveal><Faq /></ScrollReveal>
        <ScrollReveal><Blog /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}