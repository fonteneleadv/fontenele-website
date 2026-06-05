import { useState } from "react";
import { Button } from "../components/ui/button";
import { NavLink } from "../components/ui/nav-link";
import { NavDropdown } from "../components/ui/nav-dropdown";
import { SocialLink } from "../components/ui/social-link";
import { ContactLink } from "../components/ui/contact-link";
import { Seal } from "../components/ui/seal";
import { SectionHat } from "../components/ui/section-hat";
import { HeroDecorator } from "../components/ui/hero-decorator";
import { AttentionCard } from "../components/ui/attention-card";
import { InfoCard } from "../components/ui/info-card";
import { ServiceCard } from "../components/ui/service-card";
import { Accordion } from "../components/ui/accordion";
import { Header } from "../components/layout/header";
import { Check, Copy, Landmark, ShieldCheck, Users, Briefcase, MessageCircle, Mail, Phone, MapPin, FileText, Search, Layers } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

// ==========================================
// Subcomponente de Bloco de Código (UX/UI IDE)
// ==========================================
function CodeBlock({ code, language, brandColorClass }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Volta ao normal após 2s
  };

  return (
    <div className="relative flex flex-col bg-[#0d1117] border border-[#30363d] shadow-sm">
      {/* Linha de marca no topo */}
      {brandColorClass && <div className={`absolute top-0 left-0 w-full h-[2px] ${brandColorClass}`}></div>}

      {/* Barra superior (Linguagem e Botão Copiar) */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
        <span className="text-xs font-mono text-muted-soft lowercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-soft hover:text-white transition-colors cursor-pointer"
          title="Copiar código"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-success" />
              <span className="text-success">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Área do Código */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-[#c9d1d9] whitespace-pre-wrap leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

// ==========================================
// Página Principal da Biblioteca
// ==========================================
export default function ComponentLibrary() {
  const [activeComponent, setActiveComponent] = useState("button");

  const dropdownItems = [
    { label: "Direito Administrativo", icon: <Landmark className="size-5" /> },
    { label: "Direito do Consumidor", icon: <ShieldCheck className="size-5" /> },
    { label: "Direito Constitucional", icon: <Users className="size-5" /> },
    { label: "Consultoria Jurídica", icon: <Briefcase className="size-5" /> },
  ];

  return (
    <div className="flex h-screen w-full font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-primary-ink text-canvas p-6 flex flex-col gap-6">
        {/* Cabeçalho da Biblioteca */}
        <div className="flex items-center gap-3 px-4 py-6 border-b border-white/10 mb-4">
          <div className="bg-secondary/10 p-2 rounded-lg flex items-center justify-center">
            <Layers className="size-6 text-secondary" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-xl text-white leading-tight">Biblioteca</h1>
            <span className="text-[10px] font-medium text-white/50 uppercase tracking-widest mt-0.5">
              de Componentes
            </span>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveComponent("button")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "button" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Button
          </button>
          <button 
            onClick={() => setActiveComponent("navigation")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "navigation" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Navigation
          </button>
          <button 
            onClick={() => setActiveComponent("badges")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "badges" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Badges
          </button>
          <button 
            onClick={() => setActiveComponent("typography")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "typography" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Typography
          </button>
          <button 
            onClick={() => setActiveComponent("decorators")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "decorators" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Decorators
          </button>
          <button 
            onClick={() => setActiveComponent("cards")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "cards" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Cards
          </button>
          <button 
            onClick={() => setActiveComponent("accordions")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "accordions" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Accordions
          </button>
          <button 
            onClick={() => setActiveComponent("layout")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "layout" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Layout (Header)
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-surface-muted p-10 flex flex-col overflow-y-auto">

        {activeComponent === "button" && (
          <div className="max-w-4xl flex flex-col gap-16 pb-20">

            {/* Header Global do Componente */}
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Button</h2>
              <p className="text-body text-lg">
                Elemento interativo base do Design System. Diferentes variantes representam diferentes níveis de hierarquia nas chamadas de ação.
              </p>
            </div>

            {/* =========================================
                BLOCO 1: BOTÃO PRIMÁRIO
                ========================================= */}
            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">1. Botão Primário (Default)</h3>
                <p className="text-muted text-sm mt-1">Usado para a ação principal da página (ex: Falar com um especialista).</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-10 flex justify-center">
                <Button withArrow>Falar com um especialista</Button>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock
                  language="jsx / react"
                  brandColorClass="bg-secondary"
                  code={`<Button withArrow>Falar com um especialista</Button>`}
                />

                <CodeBlock
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`\n<a href="#" class="inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors bg-secondary text-white hover:bg-[#753924] h-11 px-5 py-3 gap-2">\n  Falar com um especialista\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>\n</a>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 2: BOTÃO SECUNDÁRIO
                ========================================= */}
            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">2. Botão Secundário</h3>
                <p className="text-muted text-sm mt-1">Fundo claro e texto em destaque. Ideal para ações alternativas secundárias (ex: Saiba mais).</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-10 flex justify-center">
                <Button variant="secondary" withArrow>Saiba mais</Button>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock
                  language="jsx / react"
                  brandColorClass="bg-secondary-warm"
                  code={`<Button variant="secondary" withArrow>Saiba mais</Button>`}
                />

                <CodeBlock
                  language="html / tailwind"
                  brandColorClass="bg-secondary-warm"
                  code={`\n<a href="#" class="inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors bg-[#f8ebe1] text-[#bc6e3d] hover:bg-[#bc6e3d] hover:text-white h-11 px-5 py-3 gap-2">\n  Saiba mais\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>\n</a>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 3: BOTÃO TERCIÁRIO
                ========================================= */}
            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">3. Botão Terciário (Link)</h3>
                <p className="text-muted text-sm mt-1">Botão sem fundo estilo link. Usado para navegação sutil e ações de "Ver mais".</p>
              </div>
              
              <div className="bg-canvas border border-hairline shadow-sm p-10 flex justify-center">
                <Button variant="tertiary" withArrow>Ver mais</Button>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-primary-deep"
                  code={`<Button variant="tertiary" withArrow>Ver mais</Button>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-primary-deep"
                  code={`\n<a href="#" class="inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors bg-transparent text-[#bc6e3d] hover:bg-transparent hover:text-[#0e335e] px-0 h-auto gap-2">\n  Ver mais\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>\n</a>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 4: BOTÃO WHATSAPP
                ========================================= */}
            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">4. Botão WhatsApp</h3>
                <p className="text-muted text-sm mt-1">Botão focado em conversão direta. Comportamento de link com a cor semântica do WhatsApp.</p>
              </div>
              
              <div className="bg-canvas border border-hairline shadow-sm p-10 flex justify-center">
                <Button variant="whatsapp" withArrow>Falar pelo WhatsApp</Button>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-whatsapp"
                  code={`<Button variant="whatsapp" withArrow>Falar pelo WhatsApp</Button>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-whatsapp"
                  code={`\n<a href="#" class="inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors bg-transparent text-[#16a34a] hover:bg-transparent hover:text-[#14833b] px-0 h-auto gap-2">\n  Falar pelo WhatsApp\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>\n</a>`}
                />
              </div>
            </div>

          </div>
        )}

        {activeComponent === "navigation" && (
          <div className="max-w-4xl flex flex-col gap-16 pb-20">
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Navigation</h2>
              <p className="text-body text-lg">
                Links de navegação principal. Possuem indicador visual animado para os estados de hover e página ativa (selecionado).
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-canvas border border-hairline shadow-sm p-16 flex items-center justify-center gap-10">
                <NavLink>Início</NavLink>
                <NavLink isActive>Sobre nós</NavLink>
                <NavLink>Áreas de Atuação</NavLink>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary-warm"
                  code={`<NavLink isActive={true}>Início</NavLink>\n<NavLink>Sobre nós</NavLink>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary-warm"
                  code={`\n<a href="#" class="relative pb-1 text-base font-medium transition-colors text-[#020617] hover:text-[#0e335e] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#f8ebe1] after:transition-all after:duration-300 after:w-0 hover:after:w-full">\n  Início\n</a>\n\n\n<a href="#" class="relative pb-1 text-base font-medium transition-colors text-[#020617] hover:text-[#0e335e] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#f8ebe1] after:transition-all after:duration-300 after:w-full">\n  Sobre nós\n</a>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 2: NAV DROPDOWN
                ========================================= */}
            <div className="flex flex-col gap-6 mt-8 border-t border-hairline pt-8">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">2. Link Dropdown (Serviços)</h3>
                <p className="text-muted text-sm mt-1">Navegação com menu expansível no hover. Ideal para exibir múltiplas áreas de atuação.</p>
              </div>
              
              <div className="bg-canvas border border-hairline shadow-sm p-16 flex justify-center pb-64">
                {/* O pb-64 é para dar espaço para o dropdown abrir sem cortar a tela */}
                <NavDropdown title="Serviços" items={dropdownItems} />
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary"
                  code={`const itensServicos = [\n  { label: "Direito Administrativo", icon: <Landmark className="size-5" /> },\n  // ...\n];\n\n<NavDropdown title="Serviços" items={itensServicos} />`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`\n<div class="relative group inline-block">\n  <button class="flex items-center gap-1.5 pb-2 text-base font-medium text-ink hover:text-[#0e335e]">\n    Serviços\n    <svg class="size-4 transition-transform duration-300 group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>\n  </button>\n\n  <div class="absolute left-0 top-[100%] w-[280px] bg-white border border-[#e2e8f0] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">\n    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-[#020617] hover:bg-[#bc6e3d] hover:text-white group/item">\n      <svg class="size-5 text-[#bc6e3d] group-hover/item:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22v-20l18 10-18 10z"/></svg>\n      <span class="text-sm font-medium">Item Exemplo</span>\n    </a>\n  </div>\n</div>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 3: LINK SOCIAL
                ========================================= */}
            <div className="flex flex-col gap-6 mt-8 border-t border-hairline pt-8">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">3. Link Social (Icon + Text)</h3>
                <p className="text-muted text-sm mt-1">Usado no rodapé ou seções de contato para links externos. Possui a mesma animação de sublinhado da navegação principal.</p>
              </div>
              
              <div className="bg-canvas border border-hairline shadow-sm p-16 flex justify-center gap-10">
                <SocialLink icon={<MessageCircle className="size-5" />}>WhatsApp</SocialLink>
                <SocialLink icon={<InstagramIcon />}>Instagram</SocialLink>
                <SocialLink icon={<LinkedinIcon />}>LinkedIn</SocialLink>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary-warm"
                  code={`import { SocialLink } from "@/components/ui/social-link";\nimport { Instagram } from "lucide-react";\n\n<SocialLink icon={<Instagram className="size-5" />}>\n  Instagram\n</SocialLink>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary-warm"
                  code={`\n<a href="#" class="group relative inline-flex items-center gap-2 pb-1 text-base font-medium transition-colors text-[#020617] hover:text-[#0e335e] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#f8ebe1] after:transition-all after:duration-300 after:w-0 hover:after:w-full">\n  <span class="flex items-center justify-center">\n    <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>\n  </span>\n  <span>Instagram</span>\n</a>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 4: LINK DE CONTATO
                ========================================= */}
            <div className="flex flex-col gap-6 mt-8 border-t border-hairline pt-8">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">4. Link de Contato</h3>
                <p className="text-muted text-sm mt-1">Usado principalmente no rodapé para e-mails, telefones e endereços. Transição sutil de cor no hover, sem sublinhado.</p>
                <div className="flex flex-col gap-3 mt-4">
                  <ContactLink icon={<Mail className="size-5" />}>contato@fonteneleadv.com</ContactLink>
                  <ContactLink icon={<Phone className="size-5" />}>(92) 98401-6228</ContactLink>
                </div>
              </div>
              
              <div className="p-6 bg-zinc-50 border-t border-zinc-200">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary"
                  code={`import { ContactLink } from "@/components/ui/contact-link";\nimport { Mail } from "lucide-react";\n\n<ContactLink icon={<Mail className="size-5" />}>\n  contato@fonteneleadv.com\n</ContactLink>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`\n<a href="mailto:contato@fonteneleadv.com" class="group flex items-center gap-2 text-base font-medium text-[#64748b] transition-colors duration-300 hover:text-[#bc6e3d]">\n  <span class="flex items-center justify-center">\n    <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>\n  </span>\n  <span>contato@fonteneleadv.com</span>\n</a>`}
                />
              </div>
            </div>
          </div>
        )}

        {activeComponent === "badges" && (
          <div className="max-w-4xl flex flex-col gap-16 pb-20">
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Badges</h2>
              <p className="text-body text-lg">
                Elementos de identidade visual dinâmica. O selo circular utiliza animação CSS contínua e caminhos de texto SVG para um efeito editorial premium.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">Seal (Logo Rotating Text)</h3>
                <p className="text-muted text-sm mt-1">O texto gira 360° infinitamente. No hover, as cores do fundo e do logo se invertem.</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-24 flex justify-center items-center">
                <Seal />
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-primary-deep"
                  code={`import { Seal } from "@/components/ui/seal";\n\n<Seal />`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`\n<div class="relative group w-48 h-48 flex items-center justify-center">\n  <div class="absolute inset-0 rounded-full bg-[#0e335e] transition-colors duration-700 group-hover:bg-[#bc6e3d]"></div>\n  \n  <svg class="absolute inset-0 w-full h-full animate-spin" style="animation-duration: 15s;" viewBox="0 0 100 100">\n    <path id="txtPath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>\n    <text fill="#f8ebe1" font-size="7.5" font-weight="500" letter-spacing="0.22em" class="uppercase">\n      <textPath xlink:href="#txtPath">Fontenele — Fontenele — Fontenele —</textPath>\n    </text>\n  </svg>\n\n  <div class="relative z-10 w-20 h-20 text-[#bc6e3d] group-hover:text-[#092242] transition-colors duration-700">\n    \n  </div>\n</div>`}
                />
              </div>
            </div>
          </div>
        )}

        {activeComponent === "typography" && (
          <div className="max-w-4xl flex flex-col gap-16 pb-20">
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Typography</h2>
              <p className="text-body text-lg">
                Elementos textuais estruturais do site, utilizados para criar hierarquia visual e introduzir seções.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">Section Hat (Eyebrow)</h3>
                <p className="text-muted text-sm mt-1">Texto introdutório com linha horizontal acoplada. Transição simultânea de cor no hover.</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-16 flex justify-center items-center">
                <SectionHat>Áreas de atuação</SectionHat>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-primary-deep"
                  code={`import { SectionHat } from "@/components/ui/section-hat";\n\n<SectionHat>Áreas de atuação</SectionHat>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-primary-deep"
                  code={`<div class="group flex items-center gap-1.5 text-[#0e335e] transition-colors duration-300 hover:text-[#bc6e3d] cursor-default">\n  <span class="h-[2px] w-[13px] bg-current transition-colors duration-300"></span>\n  <span class="text-xs font-normal leading-4">Áreas de atuação</span>\n</div>`}
                />
              </div>
            </div>
          </div>
        )}

        {activeComponent === "decorators" && (
          <div className="max-w-4xl flex flex-col gap-16 pb-20">
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Decorators</h2>
              <p className="text-body text-lg">
                Elementos gráficos de apoio visual. Utilizados para enriquecer as seções e reforçar a identidade da marca.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">Hero Decorator</h3>
                <p className="text-muted text-sm mt-1">Vetor comemorativo usado na seção Hero. Muda do padrão Navy para os tons Bronze no hover.</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-16 flex justify-center items-center">
                <HeroDecorator />
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-primary-deep"
                  code={`import { HeroDecorator } from "@/components/ui/hero-decorator";\n\n<HeroDecorator />`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-primary-deep"
                  code={`<div class="group cursor-default inline-flex">\n  <svg width="119" height="24" viewBox="0 0 118.207 23.094" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-auto h-6">\n    <g id="Arrows">\n      <path d="..." class="fill-[#092242] group-hover:fill-[#33170E] transition-colors duration-300"/>\n      <path d="..." class="fill-[#B8D2EF] group-hover:fill-[#EFD1BC] transition-colors duration-300"/>\n      <path d="..." class="fill-[#B8D2EF] group-hover:fill-[#EFD1BC] transition-colors duration-300"/>\n    </g>\n  </svg>\n</div>`}
                />
              </div>
            </div>
          </div>
        )}

        {activeComponent === "cards" && (
          <div className="max-w-4xl flex flex-col gap-16 pb-20">
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Cards</h2>
              <p className="text-body text-lg">
                Componentes de bloco para exibição de conteúdo estruturado, avisos e agrupamento de informações.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">Attention Card (Callout)</h3>
                <p className="text-muted text-sm mt-1">Utilizado para destacar princípios ou avisos importantes na leitura. Inverte as cores no hover.</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-16 flex justify-center items-center">
                <AttentionCard>
                  A atuação é orientada por processos que priorizam organização, previsibilidade e responsabilidade em cada etapa.<br/>
                  Mais do que volume, o foco está na qualidade da análise e na clareza das decisões.
                </AttentionCard>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary"
                  code={`import { AttentionCard } from "@/components/ui/attention-card";\n\n<AttentionCard>\n  A atuação é orientada por processos que priorizam organização, previsibilidade e responsabilidade em cada etapa.\\n  Mais do que volume, o foco está na qualidade da análise e na clareza das decisões.\n</AttentionCard>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`<div class="group flex items-start bg-secondary-warm hover:bg-secondary p-5 gap-4 transition-colors duration-300">\n  <!-- Ícone SVG -->\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6 shrink-0 text-secondary group-hover:text-secondary-soft transition-colors duration-300">\n    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>\n    <path d="M12 9v4"/>\n    <path d="M12 17h.01"/>\n  </svg>\n  <!-- Texto -->\n  <div class="text-lg font-normal leading-relaxed text-body group-hover:text-secondary-soft transition-colors duration-300">\n    A atuação é orientada por processos que priorizam...\n  </div>\n</div>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 2: INFO CARD
                ========================================= */}
            <div className="flex flex-col gap-6 mt-8 border-t border-hairline pt-8">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">2. Info Card (Feature)</h3>
                <p className="text-muted text-sm mt-1">Utilizado em listagens de benefícios e características nas páginas de serviços. Possui duas variantes temáticas (Bronze e Azul).</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-16 flex flex-col gap-6 items-center">
                <InfoCard variant="bronze" icon={<FileText className="size-5" />}>
                  Muitas vezes, esses contratos apresentam:
                </InfoCard>
                
                <InfoCard variant="blue" icon={<Search className="size-5" />}>
                  A análise jurídica permite:
                </InfoCard>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary"
                  code={`import { InfoCard } from "@/components/ui/info-card";\nimport { FileText, Search } from "lucide-react";\n\n// Variante Bronze (Default)\n<InfoCard icon={<FileText className="size-5" />}>\n  Muitas vezes, esses contratos apresentam:\n</InfoCard>\n\n// Variante Azul\n<InfoCard variant="blue" icon={<Search className="size-5" />}>\n  A análise jurídica permite:\n</InfoCard>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`<!-- Variante Bronze -->\n<div class="group flex items-center bg-secondary-warm hover:bg-secondary p-5 gap-4 transition-colors duration-300">\n  <span class="shrink-0 text-secondary group-hover:text-secondary-soft transition-colors duration-300">\n    <!-- SVG AQUI (size-5) -->\n  </span>\n  <div class="text-lg font-normal text-body group-hover:text-secondary-soft transition-colors duration-300">\n    Muitas vezes, esses contratos apresentam:\n  </div>\n</div>\n\n<!-- Variante Azul -->\n<div class="group flex items-center bg-[#d8e7f8] hover:bg-primary-deep p-5 gap-4 transition-colors duration-300">\n  <span class="shrink-0 text-primary-deep group-hover:text-[#edf4fc] transition-colors duration-300">\n    <!-- SVG AQUI (size-5) -->\n  </span>\n  <div class="text-lg font-normal text-body group-hover:text-[#edf4fc] transition-colors duration-300">\n    A análise jurídica permite:\n  </div>\n</div>`}
                />
              </div>
            </div>

            {/* =========================================
                BLOCO 3: SERVICE CARD
                ========================================= */}
            <div className="flex flex-col gap-6 mt-8 border-t border-hairline pt-8">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">3. Service Card</h3>
                <p className="text-muted text-sm mt-1">Card interativo para áreas de atuação. Aplica Atomic Design reutilizando o Botão Terciário interno. Transição de borda no hover.</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-16 flex justify-center w-full">
                <div className="w-full max-w-lg">
                  <ServiceCard 
                    title="Direito Administrativo" 
                    description="Análise e condução de demandas envolvendo licitações, contratos públicos, atos administrativos e fiscalizações."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary"
                  code={`import { ServiceCard } from "@/components/ui/service-card";\n\n<ServiceCard \n  title="Direito Administrativo" \n  description="Análise e condução de demandas envolvendo licitações, contratos públicos, atos administrativos e fiscalizações."\n/>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`<a href="#" class="group flex flex-col justify-between transition-all duration-300 border-b border-secondary hover:border-primary-deep pb-8 gap-8">\n  <div class="flex items-end justify-between w-full">\n    <div class="flex flex-col gap-1 w-full max-w-sm">\n      <h3 class="font-serif text-3xl tracking-[-0.75px] leading-9 text-ink">\n        Direito Administrativo\n      </h3>\n      <p class="text-base font-sans text-muted">\n        Análise e condução de demandas envolvendo licitações, contratos públicos, atos administrativos e fiscalizações.\n      </p>\n    </div>\n    <div class="flex shrink-0">\n      <!-- Tertiary Button with Arrow -->\n      <span class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors h-10 px-0 py-2 text-secondary text-sm font-medium leading-none group-hover:text-primary-deep duration-300">\n        Ver mais\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>\n      </span>\n    </div>\n  </div>\n</a>`}
                />
              </div>
            </div>
          </div>
        )}

        {activeComponent === "accordions" && (
          <div className="max-w-4xl flex flex-col gap-16 pb-20">
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Accordions</h2>
              <p className="text-body text-lg">
                Componentes de ocultação de conteúdo, ideais para seções de Perguntas Frequentes (FAQ) e detalhamento de serviços.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">FAQ Accordion</h3>
                <p className="text-muted text-sm mt-1">Expande e retrai o conteúdo ao clicar. Oculta o excesso de texto mantendo a página limpa.</p>
              </div>

              <div className="bg-canvas border border-hairline shadow-sm p-16 flex flex-col w-full max-w-3xl mx-auto">
                <Accordion title="Como funciona o atendimento inicial?" defaultOpen={true}>
                  O primeiro contato tem como objetivo entender a situação apresentada e orientar de forma clara sobre possíveis caminhos.
                </Accordion>
                <Accordion title="Quais documentos preciso separar?">
                  Para a primeira análise, recomendamos ter em mãos contratos, notificações recebidas e o histórico de trocas de e-mail relacionados ao caso.
                </Accordion>
                <Accordion title="O escritório atende clientes de outros estados?">
                  Sim, nosso atendimento é totalmente digital e estruturado para atender clientes em todo o território nacional com a mesma agilidade e segurança.
                </Accordion>
              </div>

              <div className="flex flex-col gap-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-secondary"
                  code={`import { Accordion } from "@/components/ui/accordion";\n\n<Accordion title="Como funciona o atendimento inicial?">\n  O primeiro contato tem como objetivo entender a situação...\n</Accordion>`}
                />
                
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-secondary"
                  code={`<!-- Requer JS (Alpine.js / JS Puro) para alternar as classes baseadas no estado open/close -->\n<div class="border-b border-hairline">\n  <button class="flex w-full items-center justify-between py-4 text-left transition-colors">\n    <span class="font-serif text-xl tracking-[-0.6px] text-secondary">\n      Como funciona o atendimento inicial?\n    </span>\n    <!-- Adicione 'rotate-180' ao SVG se aberto -->\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 text-secondary transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>\n  </button>\n  \n  <!-- Aberto: grid-rows-[1fr] opacity-100 pb-4 | Fechado: grid-rows-[0fr] opacity-0 pb-0 -->\n  <div class="grid transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100 pb-4">\n    <div class="overflow-hidden text-base text-muted">\n      O primeiro contato tem como objetivo entender a situação...\n    </div>\n  </div>\n</div>`}
                />
              </div>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* LAYOUT / ORGANISMS                        */}
        {/* ========================================= */}
        {activeComponent === "layout" && (
          <div className="max-w-6xl flex flex-col gap-16 pb-20">
            <div>
              <h2 className="text-4xl font-serif text-primary-deep mb-3">Layout Organisms</h2>
              <p className="text-body text-lg">
                Componentes maiores que orquestram diversos elementos de UI.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="border-b border-hairline pb-2">
                <h3 className="text-2xl font-serif text-primary-deep">Navegação Global (Header)</h3>
                <p className="text-muted text-sm mt-1">O Header real é fixo no topo. Aqui estão as representações visuais dos seus dois estados principais.</p>
              </div>

              {/* ESTADO 1: DEFAULT (TOPO) */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-muted uppercase tracking-wider">Estado 1: Default (No topo da página)</span>
                {/* Fundo levemente escurecido para o logo transparente aparecer bem na doc */}
                <div className="bg-[#e2e8f0] border border-hairline shadow-sm rounded-md relative min-h-[80px] pb-64 z-20">
                  <Header preview={true} previewScrolled={false} />
                </div>
              </div>

              {/* ESTADO 2: SCROLLED (ROLANDO A PÁGINA) */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-muted uppercase tracking-wider">Estado 2: Scrolled (Ao rolar a página)</span>
                <div className="bg-canvas border border-hairline shadow-sm rounded-md relative min-h-[80px] pb-64 z-10">
                  <Header preview={true} previewScrolled={true} />
                </div>
              </div>

              {/* CÓDIGO DE USO */}
              <div className="flex flex-col gap-4 mt-4">
                <CodeBlock 
                  language="jsx / react"
                  brandColorClass="bg-primary-deep"
                  code={`import { Header } from "@/components/layout/header";\n\n// Utilize no nível mais alto do seu layout (ex: App.jsx)\nexport default function RootLayout({ children }) {\n  return (\n    <div className="relative min-h-screen">\n      <Header />\n      <main>{children}</main>\n    </div>\n  );\n}`}
                />
                <CodeBlock 
                  language="html / tailwind"
                  brandColorClass="bg-primary-deep"
                  code={`\n<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-4 flex items-center justify-between bg-[#092242] shadow-md">\n  \n  \n  <div class="w-48 h-auto text-white">\n    <svg viewBox="0 0 200 50" fill="currentColor">...</svg>\n  </div>\n\n  \n  <nav class="hidden md:flex items-center gap-8">\n    \n    <a href="#" class="relative pb-1 text-base font-medium transition-colors text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#f8ebe1] after:transition-all after:duration-300 after:w-full">\n      Início\n    </a>\n\n    \n    <a href="#" class="relative pb-1 text-base font-medium transition-colors text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#f8ebe1] after:transition-all after:duration-300 after:w-0 hover:after:w-full">\n      Sobre nós\n    </a>\n\n    \n    <div class="relative group inline-block">\n      <button class="flex items-center gap-1.5 pb-2 text-base font-medium text-white/80 hover:text-white">\n        Serviços\n        <svg class="size-4 transition-transform duration-300 group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>\n      </button>\n      <div class="absolute left-0 top-[100%] w-full h-2 bg-transparent"></div>\n      <div class="absolute left-0 top-[calc(100%+0.5rem)] w-[280px] bg-white border border-[#e2e8f0] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">\n        <ul class="flex flex-col gap-1">\n           <li><a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-[#020617] hover:bg-[#bc6e3d] hover:text-white">Direito Administrativo</a></li>\n        </ul>\n      </div>\n    </div>\n\n  </nav>\n</header>`}
                />
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}