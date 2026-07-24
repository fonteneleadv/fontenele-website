// Gera dist/sitemap.xml após o build SSG. Lê os slugs do blog no Sanity (server-side, sem CORS).
import { createClient } from "@sanity/client";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://www.fonteneleadv.com.br";
const distDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");

// Rotas estáticas indexáveis — espelha o includedRoutes do vite.config
// (sem /components e sem os redirects).
const staticPaths = [
  "/",
  "/sobre-nos",
  "/servicos/direito-administrativo",
  "/servicos/direito-do-consumidor",
  "/servicos/direito-constitucional",
  "/servicos/consultoria",
  "/contato",
  "/blog",
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/politica-de-cookies",
];

let posts = [];
try {
  const client = createClient({
    projectId: "mlz8g3kf",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-05-18",
  });
  posts = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }`
  );
} catch (err) {
  console.warn(
    "[sitemap] falha ao buscar posts do Sanity; gerando só rotas estáticas:",
    err.message
  );
}

const entries = [
  ...staticPaths.map((loc) => ({ loc })),
  ...posts.map((p) => ({ loc: `/blog/${p.slug}`, lastmod: p.publishedAt })),
];

const body = entries
  .map(({ loc, lastmod }) => {
    const date = lastmod ? new Date(lastmod).toISOString().slice(0, 10) : null;
    return `  <url>\n    <loc>${SITE}${loc}</loc>${
      date ? `\n    <lastmod>${date}</lastmod>` : ""
    }\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(resolve(distDir, "sitemap.xml"), xml, "utf8");
console.log(`[sitemap] ${entries.length} URLs -> dist/sitemap.xml`);
