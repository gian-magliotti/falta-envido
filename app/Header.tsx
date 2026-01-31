"use client";

import StyleSelector from "@/components/StyleSelector";
import { useGame } from "../components/GameContext";
import ResetButton from "@/components/ResetButton";

export default function Header() {
  const {
    style,
    setStyle,
    reset,
    leftPoints,  
    rightPoints, 
  } = useGame();

  const isLeftBuenas = leftPoints > 15;
  const isRightBuenas = rightPoints > 15;

  return (
    <header className="relative w-full z-50 shadow-[0_4px_15px_rgba(0,0,0,0.6)] select-none">
      
      {/* FONDO TIPO MADERA */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5e3a22] via-[#3a2416] to-[#1a0f08]" />
      
      {/* Borde inferior decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8b5a2b]" />
      <div className="absolute bottom-[2px] left-0 right-0 h-[1px] bg-[#3a1d12]" />

      <div className="relative">

        {/* --- FILA SUPERIOR --- */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#ffffff]/5">
          <ResetButton onClick={reset} />

          <div className="text-center">
            <h1 className="text-xl font-serif font-black tracking-[0.25em] text-[#deb887] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
              FALTA ENVIDO
            </h1>
            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#deb887]/40 to-transparent mt-1" />
          </div>

          <StyleSelector value={style} onChange={setStyle} />
        </div>

        {/* --- FILA INFERIOR: MARCADORES --- */}
        <div className="flex justify-between px-6 py-3 gap-6">
          
          {/* NOSOTROS */}
          <div className="flex flex-col items-center w-1/2">
            <span className="text-[10px] font-serif tracking-[0.2em] text-[#deb887]/70 mb-1.5 uppercase font-bold drop-shadow-sm">
              Nosotros
            </span>

            <div
              className={`
                w-full py-1 rounded-sm text-xs font-serif font-bold tracking-widest
                text-center uppercase border transition-all duration-300 shadow-md
                ${
                  isLeftBuenas
                    ? "bg-[#f5e6d3] text-[#2a180e] border-[#c49a6c] shadow-[inset_0_0_10px_rgba(139,90,43,0.2)]"
                    : "bg-[#2a180e]/60 text-[#8b5a2b] border-[#4a2f1b] shadow-inner"
                }
              `}
            >
              {isLeftBuenas ? "Buenas" : "Malas"}
            </div>
          </div>

          {/* SEPARADOR */}
          <div className="w-[1px] bg-gradient-to-b from-transparent via-[#deb887]/20 to-transparent" />

          {/* ELLOS */}
          <div className="flex flex-col items-center w-1/2">
            <span className="text-[10px] font-serif tracking-[0.2em] text-[#deb887]/70 mb-1.5 uppercase font-bold drop-shadow-sm">
              Ellos
            </span>

            <div
              className={`
                w-full py-1 rounded-sm text-xs font-serif font-bold tracking-widest
                text-center uppercase border transition-all duration-300 shadow-md
                ${
                  isRightBuenas
                    ? "bg-[#f5e6d3] text-[#2a180e] border-[#c49a6c] shadow-[inset_0_0_10px_rgba(139,90,43,0.2)]"
                    : "bg-[#2a180e]/60 text-[#8b5a2b] border-[#4a2f1b] shadow-inner"
                }
              `}
            >
              {isRightBuenas ? "Buenas" : "Malas"}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}