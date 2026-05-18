import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("@fontenele:cookies-accepted");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("@fontenele:cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-[100] py-4 px-4 md:px-8 animate-in slide-in-from-bottom-full duration-500">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

        <div className="text-body text-sm md:text-base text-gray-600 flex-1 text-center md:text-left">
          Utilizamos cookies essenciais e tecnologias semelhantes para melhorar a sua experiência no site e analisar nosso tráfego. Ao continuar navegando, você concorda com a nossa{" "}
          <Link to="/politica-de-cookies" className="text-secondary hover:underline font-medium">
            Política de Cookies
          </Link>.
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <Button onClick={handleAccept} className="w-full md:w-auto">
            Aceitar e fechar
          </Button>
        </div>

      </div>
    </div>
  );
}
