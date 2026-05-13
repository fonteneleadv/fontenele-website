import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibrary from "./pages/ComponentLibrary";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}
