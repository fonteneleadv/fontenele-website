import { Navigate } from "react-router-dom";
import { RootLayout } from "./components/layout/root-layout";
import { sanityClient } from "./lib/sanity";
import ComponentLibrary from "./pages/ComponentLibrary";
import Home from "./pages/Home";
import About from "./pages/About";
import AdministrativeLaw from "./pages/servicos/AdministrativeLaw";
import ConsumerLaw from "./pages/servicos/ConsumerLaw";
import ConstitutionalLaw from "./pages/servicos/ConstitutionalLaw";
import Consulting from "./pages/servicos/Consulting";
import Contact from "./pages/Contact";
import Blog, { loader as blogLoader } from "./pages/Blog";
import BlogPost, { loader as blogPostLoader } from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiesPolicy from "./pages/CookiesPolicy";
const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, Component: Home },
      { path: "sobre-nos", Component: About },
      { path: "servicos/direito-administrativo", Component: AdministrativeLaw },
      { path: "servicos/direito-bancario", element: <Navigate to="/servicos/direito-administrativo" replace /> },
      { path: "servicos/direito-do-consumidor", Component: ConsumerLaw },
      { path: "servicos/direito-constitucional", Component: ConstitutionalLaw },
      { path: "servicos/direito-institucional", element: <Navigate to="/servicos/direito-constitucional" replace /> },
      { path: "servicos/direito-publico", element: <Navigate to="/servicos/direito-constitucional" replace /> },
      { path: "servicos/consultoria", Component: Consulting },
      { path: "contato", Component: Contact },
      { path: "blog", Component: Blog, loader: blogLoader },
      {
        path: "blog/:slug",
        Component: BlogPost,
        loader: blogPostLoader,
        // Enumera os slugs no build para pré-renderizar um .html por artigo.
        getStaticPaths: async () => {
          const slugs = await sanityClient.fetch(
            `*[_type == "post" && defined(slug.current)].slug.current`
          );
          return slugs.map((slug) => `blog/${slug}`);
        },
      },
      { path: "politica-de-privacidade", Component: PrivacyPolicy },
      { path: "termos-de-uso", Component: TermsOfUse },
      { path: "politica-de-cookies", Component: CookiesPolicy },
      { path: "components", Component: ComponentLibrary },
    ],
  },
];

export default routes;
