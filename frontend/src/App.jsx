import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibrary from "./pages/ComponentLibrary";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}
