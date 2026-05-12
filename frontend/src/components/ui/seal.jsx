import { cn } from "@/lib/utils";

export function Seal({ className }) {
  // O texto extraído do Figma (3 repetições para não sobrepor)
  const text = "Fontenele - Fontenele - Fontenele - ";

  return (
    <div className={cn("relative group flex items-center justify-center w-48 h-48", className)}>
      {/* 1. Círculo de Fundo (Troca de cor suave) */}
      <div className="absolute inset-0 rounded-full bg-primary-deep transition-colors duration-700 group-hover:bg-secondary shadow-lg" />

      {/* 2. Texto Rotativo (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]"
        viewBox="0 0 128 128"
      >
        <defs>
          {/* Caminho com raio de 51, centralizado no viewBox de 128x128, conforme arquivo Figma */}
          <path
            id="circlePath"
            d="M 64, 64 m -51, 0 a 51,51 0 1,1 102,0 a 51,51 0 1,1 -102,0"
          />
        </defs>
        <text className="fill-[#2466A5] transition-colors duration-700 group-hover:fill-primary-deep text-[8px] font-medium uppercase tracking-[0.24em]">
          <textPath xlinkHref="#circlePath" startOffset="0%" textLength="310" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>

      {/* 3. Logo Central (Estático) extraído do Figma */}
      <div className="absolute inset-0 transition-colors duration-700 text-secondary group-hover:text-primary-deep">
        <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M46.4264 37.5215H60.8343C61.0945 38.1652 61.3784 39.6771 61.3323 40.3695C60.2612 41.8999 50.0324 38.2081 50.0295 43.6864C50.0255 51.5435 49.7883 59.7719 49.9871 67.6175L58.3891 67.635C58.0901 68.7898 57.7975 69.5713 57.3784 70.6773C55.051 70.6681 52.3058 70.592 50.0139 70.7601C49.864 74.5234 49.973 78.7907 49.9767 82.5935C49.1152 82.5936 47.1923 82.6449 46.4264 82.4931V37.5215Z" fill="currentColor"/>
          <path d="M67.203 45.9735C67.9538 45.9761 69.5797 45.9357 70.2616 46.01L77.3367 74.4712L80.1482 85.5633C80.5122 87.044 81.0728 89.0334 81.3333 90.4783H77.6571C76.598 86.7858 75.8482 82.9281 74.9225 79.1948C74.7902 78.662 74.6626 78.0956 74.578 77.555C71.95 77.3257 67.0214 77.482 64.2203 77.4841C64.4269 76.3147 64.5692 75.4122 64.6853 74.2243C68.1344 74.3293 73.8561 75.2145 72.4672 69.7003C72.1857 68.5832 71.9263 67.4294 71.681 66.302L68.6461 52.5091C68.2325 50.662 67.3792 47.6899 67.203 45.9735Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}
