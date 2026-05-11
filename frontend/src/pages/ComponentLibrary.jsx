import { useState } from "react";
import { Button } from "../components/ui/button";
import { Check, Copy } from "lucide-react";

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

  return (
    <div className="flex h-screen w-full font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-primary-ink text-canvas p-6 flex flex-col gap-6">
        <div className="font-serif text-xl font-bold border-b border-white/10 pb-4">
          FA | UI Library
        </div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveComponent("button")}
            className={`text-left px-4 py-2 text-sm transition-colors ${activeComponent === "button" ? "bg-primary-deep text-white font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            Button
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

      </div>
    </div>
  );
}