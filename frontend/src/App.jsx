import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibrary from "./pages/ComponentLibrary";
import Home from "./pages/Home";
import About from "./pages/About";
import BankingLaw from "./pages/servicos/BankingLaw";
import ConsumerLaw from "./pages/servicos/ConsumerLaw";
import PublicLaw from "./pages/servicos/PublicLaw";
import Consulting from "./pages/servicos/Consulting";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/servicos/direito-bancario" element={<BankingLaw />} />
        <Route path="/servicos/direito-do-consumidor" element={<ConsumerLaw />} />
        <Route path="/servicos/direito-publico" element={<PublicLaw />} />
        <Route path="/servicos/consultoria" element={<Consulting />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}
