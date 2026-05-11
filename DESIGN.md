---
version: alpha
name: Fontenele Advogados
description: Um escritório de advocacia que se posiciona como conselheiro técnico e não como combatente, ancorado em um canvas branco generoso e em duas vozes cromáticas curtas — o Navy (#0e335e) que carrega o header em scroll e o banner CTA fundo-cheio antes do footer, e o Bronze (#bc6e3d) que carrega todos os botões primários, palavras-chave de destaque dentro de headlines em serifa, e o ícone do selo "FA". Tipografia roda Playfair Display em pesos Black/Semibold para projetar autoridade editorial em headlines (48px / 900 no h1), com Geist (sans-serif neutra) carregando o body de forma propositalmente quieta — uma inversão da convenção jurídica que costuma usar serifa para texto corrido e sans para títulos. O selo circular "FA" flutuando sobre fotografias é a assinatura visual recorrente em todas as páginas. Botões CTA são bronze sólido com cantos `{rounded.lg}` (8px) e ícone de seta diagonal — uma escolha incomum para o setor jurídico, que normalmente cai em verde-WhatsApp ou azul-bandeira. Sistema construído sobre Tailwind + shadcn/ui em modo light apenas.

colors:
  primary: "#3482c6"
  primary-deep: "#0e335e"
  primary-ink: "#092242"
  primary-soft: "#dbeafe"
  secondary: "#bc6e3d"
  secondary-strong: "#914629"
  secondary-warm: "#f8ebe1"
  secondary-soft: "#fcf6f2"
  canvas: "#ffffff"
  surface-soft: "#f8fafc"
  surface-muted: "#f1f5f9"
  ink: "#020617"
  body: "#334155"
  muted: "#64748b"
  muted-soft: "#94a3b8"
  hairline: "#e2e8f0"
  hairline-soft: "#f1f5f9"
  destructive: "#dc2626"
  success: "#16a34a"
  whatsapp: "#16a34a"
  on-primary: "#ffffff"
  on-secondary: "#ffffff"
  on-dark: "#ffffff"
  scrim: "#000000"

typography:
  h1:
    fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif"
    fontSize: 48px
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: -1.25px
  h2:
    fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.75px
  h3:
    fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.75px
  h4:
    fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.5px
  lead:
    fontFamily: "'Playfair Display', serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  large:
    fontFamily: "'Playfair Display', serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: 0
  p:
    fontFamily: "'Geist', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0
  body-medium:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.71
    letterSpacing: 0
  blockquote:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    fontStyle: italic
    letterSpacing: 0
  small:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  muted:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  inline-code:
    fontFamily: "'SF Mono', 'JetBrains Mono', 'Fira Code', monospace"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0
  button-md:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  button-sm:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  eyebrow:
    fontFamily: "'Geist', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  none: 0px
  sm: 2px
  default: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  3xl: 24px
  full: 9999px

spacing:
  px: 1px
  0.5: 2px
  1: 4px
  1.5: 6px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  32: 128px

components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: 12px 20px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.secondary-strong}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.lg}"
  button-secondary:
    backgroundColor: "{colors.secondary-warm}"
    textColor: "{colors.secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: 12px 20px
    height: 44px
  button-secondary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.lg}"
  button-tertiary:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.button-md}"
  button-whatsapp:
    backgroundColor: transparent
    textColor: "{colors.whatsapp}"
    typography: "{typography.button-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 80px
  top-nav-scroll:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 80px
  nav-link-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
  nav-link-inactive:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
  nav-dropdown:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
    padding: 12px
  selo-fa:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
  selo-fa-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-soft}"
    rounded: "{rounded.full}"
  eyebrow:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.eyebrow}"
  service-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  service-card-hover:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  indication-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 16px 0
  analysis-card-warm:
    backgroundColor: "{colors.secondary-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  analysis-card-cool:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  attention-card:
    backgroundColor: "{colors.secondary-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  attention-card-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
  accordion-item:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.h4}"
    padding: 20px 0
  accordion-content:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
    padding: 0 0 20px 0
  cta-banner-deep:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h2}"
    padding: 64px 32px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    padding: 48px 80px
  contact-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
  contact-link-hover:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.body}"
  social-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  form-tab-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  form-tab-inactive:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.muted}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px
  text-area:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  form-submit:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    height: 48px
  form-label:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.body-medium}"
---

## Overview

Fontenele Advogados é a entrada de uma marca de direito que opera em modo **conselheiro técnico** — não em modo combatente. O design system carrega esse posicionamento de forma muito direta: o canvas é **branco puro** (`{colors.canvas}` — #ffffff) com texto em quase-preto (`{colors.ink}` — #020617), e duas vozes cromáticas curtas fazem todo o trabalho de marca: **Navy** (`{colors.primary-deep}` — #0e335e) e **Bronze** (`{colors.secondary}` — #bc6e3d). O Navy aparece em apenas dois lugares na navegação inteira — o `{component.top-nav-scroll}` quando o usuário rola a página, e o `{component.cta-banner-deep}` que ancora a página acima do footer. O Bronze, por outro lado, é onipresente: carrega todos os botões primários, todas as palavras de destaque dentro de headlines serifa ("clareza", "estratégia", "boas decisões", "análise técnica"), o ícone "FA" do selo circular, e os labels dos formulários.

Tipografia roda **Playfair Display** em pesos Black (900) e Semibold (600) para headlines, com **Geist** sans-serif quieta em pesos Regular (400) e Medium (500) para body, navegação e UI. O h1 sai em 48px / 900 com letter-spacing -1.25px — denso e confiante, calibrado para o tamanho de tela desktop sem cair no excesso editorial-magazine. A inversão tipográfica (serifa pesada para títulos + sans para corpo) é deliberada: contraria a convenção jurídica brasileira, que costuma usar Times/Cambria em texto corrido e sans-serif em títulos, e sinaliza desde o primeiro frame que este escritório se comunica como uma editora premium e não como um cartório.

A linguagem de forma é **moderada**. Botões são `{rounded.lg}` (8px) — não pill, não quadrado. Cards informativos são `{rounded.lg}` (8px) também. Inputs são `{rounded.md}` (6px). O selo "FA" e o ícone de seta-diagonal de paginação são círculos `{rounded.full}`. Não existe `{rounded.xl}` ou maior em nenhum elemento — a marca evita tanto o agressivo (cantos retos) quanto o casual (pill de SaaS). O resultado lê como "premium contido", próximo do que escritórios de advocacia americanos como Wachtell ou Cravath fazem em web, mas com a paleta navy-bronze que é mais brasileira.

**Características-chave:**
- Duas cores de marca rigorosamente escopadas: `{colors.primary-deep}` (Navy) só aparece em superfícies fundo-cheio (header em scroll + banner CTA), `{colors.secondary}` (Bronze) carrega todos os CTAs, palavras-chave em headlines e o ícone do selo "FA". Não há gradiente em nenhum lugar do sistema.
- Tipografia inversa ao padrão do setor: **Playfair Display** (serifa) em headlines pesados, **Geist** (sans) em body — funciona como uma assinatura de "escritório que escreve, não que litiga".
- Selo circular "FA" flutuante: aparece sobre fotografias 4:3 em todas as 6 páginas como um carimbo de marca, sempre na posição inferior-esquerda da imagem, transbordando o canto.
- Headlines com palavras-chave em bronze inline: "Atuação jurídica com clareza, estratégia e responsabilidade" — onde "clareza, estratégia e responsabilidade" estão em `{colors.secondary}` dentro do mesmo h1. Esta é a técnica visual de hierarquia mais distintiva do sistema.
- Cards de análise pareados em duas tonalidades: `{component.analysis-card-warm}` (fundo bege bronze) lista o problema, `{component.analysis-card-cool}` (fundo azul-claro) lista a solução — sempre lado-a-lado em colunas iguais.
- Eyebrow padronizado: cada seção principal abre com um traço pequeno + label em `{typography.eyebrow}` bronze ("— Áreas de atuação", "— Sobre nós", "— FAQ") sinalizando categoria editorial.
- Construído sobre **Tailwind + shadcn/ui** — todos os tokens semânticos (`background`, `foreground`, `card`, `primary`, `secondary`, `destructive`, `muted`, `accent`, `border`, `input`, `ring`) mapeiam diretamente para a paleta Fontenele.
- Sistema **light-only**. Não há dark mode escopado neste release.

## Colors

### Marca
- **Primary Deep / Navy** (`{colors.primary-deep}` — #0e335e): A cor de assinatura quando há fundo cheio. Aparece exclusivamente em duas situações — o `{component.top-nav-scroll}` (header quando o usuário desce a página) e o `{component.cta-banner-deep}` (banner de chamada antes do footer com headline branca e botão bronze). Nunca usado em texto sobre fundo claro.
- **Primary** (`{colors.primary}` — #3482c6): O azul saturado intermediário, presente apenas em ícones de cards informativos sobre fundo `{colors.primary-soft}`. Não é usado em texto, botões ou superfícies amplas.
- **Primary Ink** (`{colors.primary-ink}` — #092242): Tom mais profundo do navy, usado pontualmente em headlines sobre fundo branco quando se quer um acento azul (não bronze) — uso raro, reservado a páginas sobre temas mais "duros" como Direito Público.
- **Primary Soft** (`{colors.primary-soft}` — #dbeafe): Azul-bebê claro, fundo do `{component.analysis-card-cool}` ("A análise jurídica permite:"). Lê como informativo/explicativo — distinto do Navy autoritário.
- **Secondary / Bronze** (`{colors.secondary}` — #bc6e3d): A cor de marca mais usada do sistema. Carrega todo `{component.button-primary}`, todas palavras-chave destacadas em headlines serifa, o ícone "FA" do selo, links de "Ver mais", e labels de formulário. É a única cor que aparece em todos os tipos de superfície.
- **Secondary Strong** (`{colors.secondary-strong}` — #914629): O bronze mais escuro do hover do `{component.button-primary}`. Aplicado também em estados de hover de cards de atenção.
- **Secondary Warm** (`{colors.secondary-warm}` — #f8ebe1): Bronze tinta clara — fundo do `{component.attention-card}` (alertas com ícone ⚠), do `{component.analysis-card-warm}` ("Muitas vezes esses contratos apresentam:"), e do `{component.button-secondary}` em estado default.
- **Secondary Soft** (`{colors.secondary-soft}` — #fcf6f2): Bronze quase imperceptível, usado como fundo de superfícies muito sutis (ex: hover state do selo invertido).

### Superfície
- **Canvas** (`{colors.canvas}` — #ffffff): O piso default de toda a página. Não há fundo cinza atrás de cards no sistema — cards descansam diretamente sobre branco em quase todos os contextos.
- **Surface Soft** (`{colors.surface-soft}` — #f8fafc): Slate-50, o tom mais leve disponível. Usado em fundos de seções quando se precisa de uma separação sutil sem usar hairline (raro no sistema atual).
- **Surface Muted** (`{colors.surface-muted}` — #f1f5f9): Slate-100, fundo da `{component.form-tab-inactive}` (tab "Etapa 1" quando "Etapa 2" está ativa).

### Texto
- **Ink** (`{colors.ink}` — #020617): Texto de headlines `{typography.h1}`–`{typography.h4}` quando NÃO está colorido em bronze, e texto de corpo curto enfático. Praticamente preto, mas não puro — slate-950.
- **Body** (`{colors.body}` — #334155): Slate-700, o tom de parágrafo padrão de `{typography.body}` e `{typography.p}`. Mais leve que `{colors.ink}` para conforto de leitura em texto longo.
- **Muted** (`{colors.muted}` — #64748b): Slate-500, usado em legendas, sub-titulos pequenos, e copyright no footer. Também na placeholder de inputs.
- **Muted Soft** (`{colors.muted-soft}` — #94a3b8): Slate-400, reservado para texto desabilitado ou metadados extremamente secundários (datas, breadcrumbs auxiliares).

### Hairlines & Bordas
- **Hairline** (`{colors.hairline}` — #e2e8f0): Slate-200, a borda 1px default. Usada em divisores de `{component.service-card}`, contornos de `{component.text-input}`, separação inferior do `{component.top-nav}`, e linhas das `{component.indication-row}`.
- **Hairline Soft** (`{colors.hairline-soft}` — #f1f5f9): Slate-100, divisor mais discreto. Usado entre linhas de FAQ e em listas longas onde o hairline default ficaria visualmente pesado.

### Semântica
- **Destructive** (`{colors.destructive}` — #dc2626): Mensagens de erro de validação, ícones de alerta crítico. Não aparece nas telas atuais mas é necessário para estados de formulário (vide Known Gaps).
- **Success** (`{colors.success}` — #16a34a): Mensagens de sucesso pós-submit de formulário. Mesmo verde que carrega o `{component.button-whatsapp}` — coincidência cromática conveniente: o verde de sucesso e o verde do WhatsApp compartilham o mesmo token, o que reduz ruído visual.
- **WhatsApp** (`{colors.whatsapp}` — #16a34a): Cor exclusiva dos links e botões que abrem WhatsApp ("Falar pelo WhatsApp"). Apesar de ter o mesmo hex de `{colors.success}`, é mantido como token nomeado distinto para semântica de produto.

### On-Surface
- **On Primary** (`{colors.on-primary}` — #ffffff): Texto branco sobre `{colors.primary-deep}` (o headline branco do `{component.cta-banner-deep}`).
- **On Secondary** (`{colors.on-secondary}` — #ffffff): Texto branco sobre todos os botões bronze.
- **On Dark** (`{colors.on-dark}` — #ffffff): Texto branco sobre o `{component.top-nav-scroll}` quando o nav está em estado scroll (fundo navy).

### Scrim
- **Scrim** (`{colors.scrim}` — #000000 a 50% de opacidade): Fundo de modal global — preview do dropdown do menu de Serviços em mobile (vide Responsive Behavior), e overlay sobre fotografias quando há texto branco direto sobre imagem.

## Typography

### Famílias

O sistema usa exatamente **três famílias**, cada uma com escopo bem definido:

- **Playfair Display** carrega 100% das headlines (`{typography.h1}` até `{typography.h4}`) e os tokens de display (`{typography.lead}`, `{typography.large}`). Substitui Contralto Big como família display oficial. Open-source, disponível no Google Fonts. Roda em pesos Black (900) para h1 e Semibold (600) para h2-h4. Fallbacks caem para Times New Roman e Georgia.

- **Geist** carrega 100% do body, navegação, formulários, botões e UI auxiliar (`{typography.p}`, `{typography.body}`, `{typography.body-medium}`, `{typography.button-md}`, `{typography.nav-link}`, `{typography.eyebrow}`, `{typography.muted}`, `{typography.small}`). Sans-serif geométrica neutra desenhada pela Vercel. Pesos usados: Regular (400) e Medium (500). Fallbacks caem para system-ui e -apple-system.

- **SF Mono** carrega exclusivamente o token `{typography.inline-code}` — usado em referências legais ou códigos de processo dentro de body (uso raro, mas previsto). Fallbacks: JetBrains Mono e Fira Code.

Não há quarta família. Não há fonte "alternativa de marca". As três famílias são suficientes para todo o sistema porque a hierarquia é carregada por **família × peso × tamanho**, não por variedade tipográfica.

### Hierarquia

| Token | Tamanho | Peso | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|
| `{typography.h1}` | 48px | 900 | 1.0 | -1.25px | Headline principal de cada página ("Atuação jurídica com clareza, estratégia e responsabilidade") |
| `{typography.h2}` | 36px | 600 | 1.0 | -0.75px | Headline de seção principal ("Atuação jurídica direcionada a cenários...") |
| `{typography.h3}` | 32px | 600 | 1.0 | -0.75px | Sub-headlines de seção ("Para quem essa atuação é indicada", "Dúvidas frequentes") |
| `{typography.h4}` | 28px | 600 | 1.0 | -0.5px | Títulos de cards de área ("Direito Bancário"), perguntas do FAQ |
| `{typography.lead}` | 28px | 400 | 1.0 | 0 | Frase de abertura sob headline ("Especialistas em Direito dos servidores...") |
| `{typography.large}` | 24px | 600 | 1.17 | 0 | Sub-títulos enfáticos em texto editorial |
| `{typography.p}` | 16px | 400 | 1.5 | 0 | Parágrafos correntes em corpo de texto |
| `{typography.body}` | 14px | 400 | 1.71 | 0 | Texto de descrição em cards (`{component.service-card}`, `{component.article-card}`) |
| `{typography.body-medium}` | 14px | 500 | 1.71 | 0 | Texto em destaque dentro de cards (labels de formulário) |
| `{typography.blockquote}` | 16px | 400 italic | 1.5 | 0 | Citações dentro de texto editorial (uso raro mas previsto) |
| `{typography.small}` | 14px | 500 | 1.0 | 0 | Endereço de email, microcopy enfático |
| `{typography.muted}` | 14px | 400 | 1.43 | 0 | Copyright, metadados, sub-labels |
| `{typography.inline-code}` | 14px | 600 | 1.43 | 0 | Referências legais ou números de processo |
| `{typography.button-md}` | 14px | 500 | 1.0 | 0 | Labels de botão padrão |
| `{typography.button-sm}` | 12px | 500 | 1.0 | 0 | Labels de botão secundário compacto |
| `{typography.nav-link}` | 14px | 500 | 1.0 | 0 | Links de top navigation |
| `{typography.eyebrow}` | 14px | 500 | 1.0 | 0 | Label "— Áreas de atuação" antes de cada seção |

### Princípios

A hierarquia é **rigidamente piramidal**: h1 só aparece uma vez por página (no hero), h2 abre seções editoriais, h3 abre sub-seções dentro de uma seção, h4 carrega títulos de cards individuais. Não há "h5" — abaixo de h4 a hierarquia salta para `{typography.lead}` ou direto para `{typography.body-medium}` em texto enfático.

A técnica visual mais distintiva do sistema é **palavras-chave coloridas inline em headlines serifa**. Em "Atuação jurídica direcionada a cenários que exigem **análise técnica, clareza e segurança** na tomada de decisão" — as palavras em negrito viram bronze (`{colors.secondary}`) sem mudar peso, tamanho ou família. Isso cria hierarquia interna no próprio headline: o leitor pega primeiro o ritmo geral em ink, depois fixa nos termos em bronze. É uma técnica que funciona porque a Playfair Display tem contraste alto entre traços finos e grossos — o bronze sobre serifa pesada lê como ouro sobre página, não como link.

Body roda em **Geist Regular 14px / line-height 1.71** propositalmente quieto. Nenhum sistema editorial-magazine usaria 14px para parágrafos primários — usaria 16-18px. A escolha de 14px aqui é deliberada: o site é **denso de informação**, com listas longas de "Para quem essa atuação é indicada" e "Situações que podem exigir análise", e o 14px cabe mais conteúdo por viewport sem forçar o usuário a rolar excessivamente.

### Nota sobre Substituição de Fontes
**Playfair Display** já é a substituição (oficial) de Contralto Big, que era a serifa licenciada original do MIV. Playfair é open-source via Google Fonts e mantém o caráter de "serifa transitional alta-contraste" da Contralto, com perda mínima de personalidade — Playfair tende a ser ligeiramente mais larga e com terminações mais clássicas que Contralto, mas a 48px no h1 a diferença é imperceptível para o leitor não-especialista.

**Geist** é open-source via Vercel/Google Fonts. Substitutos aceitáveis sem perda significativa: **Inter** (mais largo, ligeiramente menos geométrico) ou **DM Sans**. Evitar Roboto e Open Sans — destoam visualmente.

## Layout

### Sistema de Espaçamento
- **Unidade base:** 4px (com sub-passo de 2px para alinhamentos finos).
- **Tokens primários:** `{spacing.1}` 4px · `{spacing.2}` 8px · `{spacing.3}` 12px · `{spacing.4}` 16px · `{spacing.5}` 20px · `{spacing.6}` 24px · `{spacing.8}` 32px · `{spacing.10}` 40px · `{spacing.12}` 48px · `{spacing.16}` 64px · `{spacing.20}` 80px · `{spacing.24}` 96px · `{spacing.32}` 128px.
- **Padding vertical de seção:** `{spacing.20}` (80px) entre seções principais (hero → áreas, áreas → sobre, sobre → faq, faq → artigos, artigos → cta-banner). Mais aerado que SaaS típico, menos que magazine — calibrado para um site de leitura.
- **Padding interno de cards:** `{spacing.6}` (24px) em `{component.analysis-card-warm}`, `{component.analysis-card-cool}` e `{component.attention-card}`. `{spacing.4}` (16px) em rows compactas como `{component.indication-row}`.
- **Gutters de grid:** `{spacing.8}` (32px) entre cards de área no grid 2-up de "Áreas de atuação". `{spacing.6}` (24px) entre articles no grid 3-up de "Informação jurídica como base para boas decisões".

### Grid & Container
- **Largura máxima de conteúdo:** ~1280px centralizado, alinhada ao breakpoint `xl` do Tailwind. O conteúdo nunca ultrapassa esse limite mesmo em monitores ultrawide — a margem absorve o restante.
- **Grid hero (página de área):** 2 colunas — texto à esquerda (~50%) com h1, lead, button-primary; foto à direita (~50%) com selo "FA" flutuante na borda inferior-esquerda da foto, transbordando sobre o canvas.
- **Grid de áreas (homepage):** 2 colunas × 2 linhas (4 áreas total) — cada `{component.service-card}` ocupa 50% da largura com hairline divisor inferior em bronze quando hovered.
- **Grid de "Para quem":** 2 colunas — pares de `{component.indication-row}` com hairline divisor entre linhas.
- **Grid de análise (situação × solução):** 2 colunas iguais — `{component.analysis-card-warm}` à esquerda, `{component.analysis-card-cool}` à direita.
- **Grid de articles (footer editorial):** 3 colunas iguais — cada `{component.article-card}` com foto 4:3 + eyebrow + h4 + link "Ver mais".
- **Footer:** 1-row com logo + descrição à esquerda, contatos no meio, ícones sociais à direita. Copyright em `{typography.muted}` na linha de baixo.

### Filosofia de Whitespace
O sistema usa **80px verticais entre seções** mas **0 espaço entre fotos e canvas adjacente**. Fotos transbordam até a borda da viewport ou se encostam sem padding. O resultado: as seções respiram, mas as fotografias têm peso visual de capa de livro — a foto de "Davi Fontenele" (sócio) ocupa 50% horizontal sem padding lateral, encostando na borda esquerda. Essa decisão dá ao site o caráter "editorial premium" sem exigir tipografia ou cor adicional.

## Elevation

O sistema tem essencialmente **uma única camada de sombra** mais o estado plano padrão e os anéis de foco. Sombras vêm da escala shadcn/Tailwind disponível, mas só uma é efetivamente usada em superfícies visíveis.

- **Plano (sem sombra):** Hero, seções editoriais, cards de análise, footer, banner CTA — 95% das superfícies. A separação visual vem de hairlines e do contraste fundo branco × foto.
- **Card flutuante (`shadow-lg`):** `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`. Aplicado ao `{component.nav-dropdown}` (cardápio das áreas dentro do menu Serviços) e ao `{component.form-submit}` em hover. É a única sombra realmente perceptível no sistema.
- **Anel de foco — primary:** `0 0 0 4px {colors.primary-ink}, 0 0 0 2px {colors.canvas}` — anel duplo para acessibilidade, aparece em foco de teclado em botões primários.
- **Anel de foco — destructive:** mesma estrutura com `{colors.destructive}` no ring externo, usado em foco em campos com erro de validação (vide Known Gaps).
- **Scrim de modal:** `{colors.scrim}` renderizado a 50% de opacidade — pano de fundo do menu mobile e de qualquer overlay sobre fotografia.

Não há tiers progressivos de elevação. O sistema é deliberadamente plano — a profundidade vem de fotografia e do contraste navy × bronze × branco, não de sombras empilhadas.

## Components

### Top Navigation

**`top-nav`** — Superfície branca (`{colors.canvas}`), 80px de altura, hairline 1px na borda inferior. Logo Fontenele à esquerda (símbolo "FA" bronze + wordmark "FONTENELE" navy + sub-label "ADVOGADOS" muted), 4 links de navegação à direita ("Início / Sobre nós / Serviços / Contato"). O link "Serviços" tem chevron para baixo indicando dropdown. Estado default em fundo branco.

**`top-nav-scroll`** — Quando o usuário rola a página para baixo, o nav muda para `{colors.primary-deep}` (Navy) com texto branco. Logo mantém o "FA" bronze e o "FONTENELE" agora vira branco. Os underlines de link ativo seguem brancos. É a única transformação de estilo do header — não há blur, transparência ou redução de altura.

**`nav-link-active`** — Link da página atual. Em fundo branco: texto `{colors.ink}` com underline 1px bronze (`{colors.secondary}`) abaixo. Em fundo navy (scroll state): texto branco com underline branco abaixo.

**`nav-link-inactive`** — Texto `{colors.body}` em fundo branco, ou branco-translúcido em fundo navy. Sem underline. Vira `{colors.secondary}` no hover (em fundo branco) ou bronze leve (em fundo navy).

**`nav-dropdown`** — Cardápio que abre ao clicar em "Serviços". Painel branco com 4 áreas listadas (Direito Bancário, Direito do Consumidor, Direito Público, Consultoria), cada uma com ícone à esquerda (estilizado por área) e label em `{typography.nav-link}`. Borda 1px hairline, `{rounded.md}`, sombra `shadow-lg`. Posicionado abaixo do link "Serviços", alinhado à direita.

### Marca & Selo

**`selo-fa`** — Círculo `{rounded.full}` com fundo `{colors.primary-deep}` (Navy) e ícone "FA" em `{colors.secondary}` (bronze). Diâmetro ~96-120px (escala com a foto). Posicionado sempre na borda inferior-esquerda da fotografia hero, transbordando 30-40% sobre o canvas adjacente. É o selo de marca recorrente em todas as 6 páginas — funciona como assinatura visual.

**`selo-fa-hover`** — Estado de hover (raro, só ativa se o selo for clicável): inverte para fundo `{colors.secondary}` e ícone `{colors.secondary-soft}`. Cria a sensação de "carimbo bronze" pressionado.

**`arrow-pagination`** — Ícone de seta direcional usado em listagens horizontais (sliders de áreas relacionadas, paginação de articles). Default: seta navy sobre fundo `{colors.surface-muted}`. Hover: seta branca sobre `{colors.secondary}`.

### Botões

**`button-primary`** — Bronze sólido, texto branco, 14px Medium em Geist, `{rounded.lg}` (8px), 12×20px de padding, 44px de altura. Sempre acompanhado de ícone seta-diagonal "↗" à direita do label ("Falar com um especialista ↗"). É o CTA mais comum do sistema — aparece no hero, no fim de cada seção de área, e no banner CTA fundo-cheio.

**`button-primary-hover`** — Fundo flipa para `{colors.secondary-strong}` (#914629). Sem mudança de transform ou shadow.

**`button-secondary`** — Fundo `{colors.secondary-warm}` (bege bronze) com texto `{colors.secondary}` (bronze). Mesmas dimensões do primary. Aparece como "Saiba mais ↗" — usado quando há um primary próximo e se quer um segundo CTA menos prioritário.

**`button-secondary-hover`** — Fundo flipa para `{colors.secondary}` (bronze sólido) com texto branco. Vira essencialmente um button-primary em hover — uma decisão deliberada que ensina o usuário que ambos têm peso similar de ação.

**`button-tertiary`** — Texto `{colors.secondary}` puro, sem fundo, sem borda, com seta diagonal à direita ("Ver mais ↗"). Usado em rodapés de cards (`{component.service-card}`, `{component.article-card}`) e em links inline editoriais. Underline aparece no hover.

**`button-whatsapp`** — Estilo de link inline com texto `{colors.whatsapp}` (verde) e seta diagonal. Aparece sempre acompanhando um pré-texto explicativo ("Para um atendimento mais ágil, utilize o WhatsApp. **Falar pelo WhatsApp ↗**"). Não tem fundo nem borda — é puramente link colorido.

### Eyebrow Divider

**`eyebrow`** — Pequeno traço hifenizado (—) seguido de label em `{typography.eyebrow}` `{colors.secondary}`. Aparece como "— Áreas de atuação", "— Sobre nós", "— FAQ", "— Artigos jurídicos", "— Fale com a equipe". Funciona como categoria editorial e abre 100% das seções principais. Centralizado quando a seção tem texto centralizado, alinhado à esquerda quando a seção alinha à esquerda. Usa cerca de `{spacing.4}` (16px) de margem inferior antes do h2/h3.

### Cards de Área (homepage)

**`service-card`** — Linha horizontal sem fundo, sem borda, com hairline 1px `{colors.hairline}` na borda inferior. Layout: h4 ink (nome da área) à esquerda + descrição em `{typography.body}` muted abaixo + button-tertiary "Ver mais ↗" à direita. Padding vertical `{spacing.6}` (24px). Aparece em grid 2-up no homepage (4 áreas).

**`service-card-hover`** — A hairline inferior engrossa para 2px e flipa para `{colors.secondary}` (bronze). Nenhuma mudança em background ou texto — apenas o sublinhado. É um hover deliberadamente sutil, evitando o overdesign.

### Cards de Indicação

**`indication-row`** — Linha horizontal com ícone de check circular bronze à esquerda + texto em `{typography.body}` ink à direita. Padding vertical `{spacing.4}` (16px). Hairline `{colors.hairline}` 1px na borda inferior. Aparece em grid 2-colunas dentro da seção "Para quem essa atuação é indicada" — sempre 4 itens (2 linhas × 2 colunas).

### Cards de Análise

**`analysis-card-warm`** — Card com fundo `{colors.secondary-warm}` (bege bronze tinta clara), `{rounded.lg}`, padding `{spacing.6}` (24px). Contém uma frase de contexto + lista bullet (●) com 3-5 itens. Função: descrever o **problema** ou a **situação** que o cliente está enfrentando ("Muitas vezes, esses contratos apresentam: estruturas complexas, termos técnicos, condições que exigem interpretação"). Aparece sempre em grid pareado com `{component.analysis-card-cool}` à direita.

**`analysis-card-cool`** — Variação fria do anterior, fundo `{colors.primary-soft}` (azul claro), com ícone de lupa ⌕ no início da primeira linha. Função: descrever a **solução** ou o que a análise jurídica permite fazer ("A análise jurídica permite: compreender a lógica do contrato, identificar como os encargos são aplicados, avaliar impactos financeiros"). Mesma estrutura visual do warm, paleta diferente.

A pareção warm × cool em colunas adjacentes carrega narrativa: lado bege = "o que está acontecendo", lado azul = "o que o escritório faz sobre isso". É a metáfora visual mais didática do sistema.

### Card de Atenção

**`attention-card`** — Banner horizontal com fundo `{colors.secondary-warm}`, `{rounded.lg}`, padding `{spacing.4}` × `{spacing.6}` (16px × 24px). Ícone ⚠ à esquerda + texto `{typography.body}` ink. Usado para destacar alertas editoriais ("A atuação é orientada por processos que priorizam organização, previsibilidade e responsabilidade em cada etapa").

**`attention-card-hover`** — Estado de hover (quando o card é clicável, virando link): fundo flipa para `{colors.secondary}` (bronze sólido), texto e ícone viram branco. Não é uma sombra ou elevação — é uma inversão completa de paleta.

### FAQ Accordion

**`accordion-item`** — Linha de pergunta. Texto da pergunta em `{typography.h4}` peso 600, cor `{colors.secondary}` (bronze). Chevron (›) à direita rotaciona 90° quando expandido. Padding vertical `{spacing.5}` (20px). Hairline `{colors.hairline}` 1px na borda inferior. A escolha de pintar a pergunta em bronze (não em ink) é a decisão tipográfica mais ousada da seção — a pergunta lê como "convite editorial", não como "label de form".

**`accordion-content`** — Resposta expandida. Texto em `{typography.body}` cor `{colors.body}`. Padding `{spacing.5}` (20px) inferior antes da próxima linha. Aparece com transição de altura (não fade) ao expandir — comportamento padrão shadcn `Accordion`.

### Banner CTA Fundo-Cheio

**`cta-banner-deep`** — Faixa horizontal full-width com fundo `{colors.primary-deep}` (Navy), padding vertical `{spacing.16}` (64px), texto branco centralizado. Contém: eyebrow "— Fale com a equipe" em bronze claro, h2 branco em Playfair Display ("Se você busca orientação jurídica clara e responsável, nossa equipe está disponível..."), e button-primary bronze ("Entrar em contato pelo WhatsApp ↗"). É o único momento em que o Navy ocupa 100% da largura da viewport.

### Article Card (rodapé editorial)

**`article-card`** — Card vertical de blog/conteúdo. Foto 4:3 no topo (sem `{rounded.none}` na imagem — quadrada), eyebrow bronze ("— Direito Bancário") abaixo da foto, h4 ink (título do artigo, ex: "Entendendo contratos bancários e suas implicações"), button-tertiary "Ver mais ↗" no rodapé. Aparece em grid 3-up dentro da seção "Informação jurídica como base para boas decisões". Não tem borda nem fundo — descansa direto sobre o canvas.

### Formulário de Contato

**`form-tabs`** — Header de tabs em duas posições ("Etapa 1" / "Etapa 2"). Tab ativa: fundo `{colors.canvas}` (branco), texto `{colors.secondary}` (bronze), `{rounded.md}` no topo. Tab inativa: fundo `{colors.surface-muted}` (slate-100), texto `{colors.muted}`. Usadas para dividir o formulário em duas etapas: Nome+Telefone (etapa 1) → Email+Mensagem (etapa 2).

**`text-input`** — Campo de input padrão. Fundo branco, borda 1px `{colors.hairline}`, `{rounded.md}` (6px), padding 12×16px, altura 48px. Placeholder em `{colors.muted}`. Label acima do input em `{typography.body-medium}` `{colors.secondary}` (bronze) — uma decisão visual interessante: os labels dos campos são bronze, criando consistência cromática com os botões.

**`text-area`** — Mesmas regras visuais do `text-input`, mas com altura mínima ~120px (3-4 linhas) e sem altura fixa.

**`form-submit`** — Botão de envio do formulário. Fundo `{colors.secondary}` (bronze), texto branco, `{rounded.lg}`, altura 48px, **largura 100%** do container do form. Texto "Próximo ↗" na etapa 1 ou "Enviar formulário ↗" na etapa 2. Diferente do `{component.button-primary}` regular, este é full-width — sinalizando que é a ação primária da etapa.

**`form-label`** — Label acima de cada input. `{typography.body-medium}`, cor `{colors.secondary}` (bronze). Aparece como "Nome completo:", "Telefone:", "Email:", "Mensagem:". A escolha de bronze para labels (e não ink) é o que dá ao formulário sua identidade — é raro encontrar formulários com labels coloridas.

### Footer

**`footer`** — Superfície branca (mesma cor do canvas — não há contraste de fundo no footer), padding `{spacing.12}` × `{spacing.20}` (48×80px). Layout em 2 linhas:
- Linha 1: Logo Fontenele à esquerda + descrição curta em `{typography.body}` muted ("Especialistas em Direito dos servidores públicos..."), email e telefone no meio com ícones, ícones sociais (WhatsApp, Instagram, LinkedIn) à direita.
- Linha 2: Copyright "© 2026 Fontenele Advogados" em `{typography.muted}` `{colors.muted}` à esquerda.

Hairline `{colors.hairline}` 1px no topo do footer separando-o da seção anterior. Não há colunas com listas de links — é um footer "minimalista jurídico" deliberadamente mais editorial que SaaS.

**`contact-link`** — Linha com ícone + texto. Email ("contato@fonteneleadv.com.br") e telefone ("+55 DD 98888-8888") aparecem assim. Estado default: ícone e texto `{colors.body}`. Hover: ambos viram `{colors.secondary}`.

**`social-link`** — Ícone + label de rede social. Mesmo comportamento de hover do `{component.contact-link}`.

## Responsive Behavior

> **Nota importante:** As especificações mobile e tablet a seguir são **inferências baseadas no padrão Tailwind/shadcn** que o projeto utiliza. As telas atuais foram desenhadas em viewport desktop (~1440px) e a tradução para breakpoints menores ainda não foi validada em Figma. Vide Known Gaps.

| Nome | Largura | Mudanças principais |
|---|---|---|
| Mobile | < 640px (`sm`) | Top nav colapsa para logo + hamburger à direita; menu Serviços vira sheet full-screen com lista vertical; selo "FA" reduz para ~64px e fica abaixo da foto (não transborda); h1 reduz de 48px para 32px com letter-spacing -0.75px; cards de área `{component.service-card}` empilham 1-up; cards de análise `{component.analysis-card-warm}` × `{component.analysis-card-cool}` empilham 1-up (warm em cima, cool embaixo); banner CTA `{component.cta-banner-deep}` reduz padding vertical para 48px; footer empilha 1-coluna. |
| Tablet | 640–1024px (`sm`–`lg`) | Top nav mantém os 4 links de navegação mas o logo reduz; cards de área 2-up mantém; cards de análise mantêm 2-up; foto hero reduz para ~40% da largura; h1 fica em 40px; article cards do rodapé colapsam de 3-up para 2-up. |
| Desktop | 1024–1280px (`lg`–`xl`) | Layout completo descrito nas seções acima. h1 em 48px, cards 2-up, articles 3-up, foto hero ~50%. |
| Wide | > 1280px (`xl`+) | Container fica capado em 1280px centralizado; margem absorve o restante; tipografia não escala acima do desktop. |

### Touch Targets
- `{component.button-primary}` em 44px de altura — atende WCAG AA (mínimo 44×44px).
- `{component.form-submit}` em 48px — confortavelmente acima de WCAG AA.
- `{component.text-input}` em 48px — hit area generosa para mobile.
- Ícones de social no footer devem garantir 44×44px de hit area (pode usar padding extra invisível mesmo que o ícone visual seja menor).
- Chevron do `{component.accordion-item}` deve ter hit area de 44×44px em mobile, mesmo que o ícone visual seja 16×16px.

### Estratégia de Colapso
- Top nav abaixo de 640px: os 4 links viram sheet full-screen ao tocar no hamburger; o sheet usa fundo `{colors.canvas}` e os links viram `{typography.h4}` empilhados verticalmente.
- Grids 2-up colapsam para 1-up cleanly — nunca quebram para 1.5 colunas. Sempre redução inteira de colunas.
- Grids 3-up de articles colapsam para 2-up entre 640px e 1024px, depois para 1-up abaixo de 640px.
- O selo "FA" sobre foto hero NÃO deve manter a posição transbordando em mobile — vira um carimbo simples acima do título no mobile, ou é omitido.
- O banner CTA `{component.cta-banner-deep}` mantém o fundo navy em mobile mas reduz padding, headline para `{typography.h3}` (32px), e button para largura full do container.
- O `{component.form-tabs}` em mobile pode virar um stepper vertical (1 → 2) ao invés de tabs horizontais — depende do design final do formulário em mobile.

## Known Gaps

- **Telas mobile não desenhadas:** O sistema responsivo descrito acima é inferido a partir dos padrões Tailwind/shadcn aplicados ao projeto. As especificações de mobile e tablet precisam ser validadas em Figma antes de serem consideradas finais. Em particular: o comportamento exato do menu Serviços em sheet, a posição do selo "FA" sobre foto, e a estrutura do `{component.form-tabs}` em mobile.

- **Estados de formulário não documentados:** As telas atuais mostram apenas o estado default dos `{component.text-input}` e do `{component.form-submit}`. Os seguintes estados precisam ser desenhados para serem confiáveis em produção:
  - `text-input-focus`: borda `{colors.primary-ink}` 2px + ring 4px (provável padrão shadcn).
  - `text-input-error`: borda `{colors.destructive}` + helper text vermelho abaixo do input.
  - `text-input-disabled`: fundo `{colors.surface-muted}` + texto `{colors.muted-soft}`.
  - `form-submit-loading`: spinner ou texto "Enviando..." no botão.
  - `form-submit-disabled`: bronze a 50% de opacidade + cursor not-allowed.
  - `form-success`: mensagem pós-submit em `{colors.success}`.

- **Estados de loading e skeleton:** Não há skeletons documentados para nenhum card. Sugestão de implementação: pulse com `{colors.surface-soft}` em retângulos com `{rounded.md}`, animação Tailwind `animate-pulse`.

- **Empty states:** Sem definição visual para listas vazias (ex: FAQ sem resultados de busca, blog sem artigos). Padrão sugerido: ícone navy 48px + h4 ink + body muted + button-primary de ação.

- **Map view do contato:** A página "Fale com a Fontenele" tem um placeholder cinza identificado como "google maps". A integração final do mapa (estilo de tiles, cor do marker, controles) não está documentada — é uma decisão pendente de implementação.

- **Dark mode:** **Fora de escopo neste release.** O design system Fontenele opera em **light mode apenas**. Os tokens shadcn de dark (darkSlate, darkZinc) presentes no `design-tokens.tokens.json` não devem ser implementados sem decisão explícita de produto.

- **Estados de hover não documentados completamente:** Alguns componentes mostram default + hover (botões, cards de área, cards de atenção), mas outros têm hover não desenhado nas telas atuais — em particular: hover do `{component.article-card}` (provavelmente mudança de h4 para bronze + lift sutil) e hover dos `{component.indication-row}` (provavelmente background `{colors.surface-soft}`).

- **Tipografia mobile:** A tabela de hierarquia tipográfica acima reflete tamanhos desktop. As reduções para mobile (h1 de 48 → 32, h2 de 36 → 28, h3 de 32 → 24) são inferências baseadas em proporções comuns. Validação em Figma necessária.

- **Ícones por área:** O dropdown `{component.nav-dropdown}` mostra um ícone distinto para cada área (Direito Bancário, Direito do Consumidor, Direito Público, Consultoria), mas o sistema de ícones em si (família, peso de stroke, tamanho consistente) não foi extraído como token. Recomendação: padronizar em Lucide React (já incluso no shadcn) com stroke-width 1.5 e tamanho 20×20px.

- **Páginas internas além das 5 capturadas:** O sistema documentado cobre Home, 4 páginas de área (Bancário, Consumidor, Público, Consultoria) e Contato. Páginas potenciais ainda não desenhadas: Sobre nós dedicada (separada da seção Sobre da Home), página individual de artigo (post de blog), página de equipe com perfis de advogados, página de política de privacidade.
