import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { HeroDecorator } from "@/components/ui/hero-decorator";
import { SectionHat } from "@/components/ui/section-hat";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Info */}
        <div className="space-y-12">
          
          <div className="space-y-8">
            <SectionHat>Fale conosco</SectionHat>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-[72px] font-serif leading-[1.0] tracking-[-1.8px] text-[#09090b]">
                Fale com a <br />
                <span className="text-secondary font-serif">Fontenele Advogados</span>
              </h1>
              <p className="text-lg lg:text-[18px] text-zinc-500 max-w-md font-sans leading-relaxed">
                Nossa equipe está disponível para orientar de forma clara e responsável.
              </p>
            </div>
          </div>

          {/* Direct Contacts - Horizontal alignment */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex items-center gap-4">
              <div className="text-zinc-400">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg text-zinc-500 font-sans tracking-tight">
                <a href="tel:+5592984016228" className="hover:text-secondary transition-colors">(92) 98401-6228</a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-zinc-400">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg text-zinc-500 font-sans tracking-tight">
                <a href="mailto:contato@fonteneleadv.com" className="hover:text-secondary transition-colors">contato@fonteneleadv.com</a>
              </span>
            </div>
          </div>

          {/* WhatsApp Section - Figma style with separators */}
          <div className="space-y-10 w-full max-w-xl">
            <div className="h-px bg-zinc-200 w-full" />
            
            <div className="flex gap-5 items-start">
              {/* SVG Oficial do WhatsApp */}
              <div className="shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#25D366" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="space-y-4">
                <h4 className="text-[20px] font-semibold tracking-tight text-zinc-600 font-sans">
                  Atendimento rápido pelo WhatsApp
                </h4>
                <p className="text-[18px] text-zinc-500 leading-snug font-sans">
                  Para um atendimento mais ágil, utilize o WhatsApp ou clique no botão abaixo.
                </p>
                <a 
                  href="https://wa.me/5592984016228" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 pt-1"
                  style={{ 
                    backgroundImage: "linear-gradient(179.82deg, #57D163 6.25%, #23B33A 91.21%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  FALAR PELO WHATSAPP
                  <ArrowUpRight className="w-4 h-4 text-[#23B33A]" />
                </a>
              </div>
            </div>

            <div className="h-px bg-zinc-200 w-full" />
          </div>

          {/* Decorator posicionado no fluxo da coluna esquerda, após o bloco do WhatsApp */}
          <div className="mt-12 md:mt-16 block">
            <HeroDecorator />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:max-w-[488px] lg:justify-self-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
