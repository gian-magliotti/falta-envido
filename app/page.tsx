"use client";

import PointsBlock from "@/components/PointsBlock";
import { useGame } from "../components/GameContext";
import SubtractPointButton from "../components/SubtractPointButton";
import AddPointButton from "@/components/AddPointButton";
import WinnerScreen from "@/components/WinnerScreen";

export default function HomePage() {
  const { 
    leftPoints, rightPoints, style, 
    addLeft, addRight, subtractLeft, subtractRight,
    winner, reset 
  } = useGame();

  const getDisplayNumber = (points: number) => {
    if (points > 15) return points - 15;
    return points;
  };

  const renderVisualPoints = (totalPoints: number, side: string) => {
    const visualPoints = getDisplayNumber(totalPoints);

    return Array.from({ length: Math.ceil(visualPoints / 5) }).map((_, i) => (
      <PointsBlock 
        key={`${side}-${i}`} 
        count={Math.min(5, visualPoints - i * 5)} 
        style={style} 
      />
    ));
  };

  return (
    <div className="relative flex flex-col h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5e3a22] via-[#3a2416] to-[#1a0f08]">
      
      {/* PANTALLA DE GANADOR */}
      {winner && <WinnerScreen winner={winner} onReset={reset} />}

      {/* LÍNEA CENTRAL */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#deb887]/30 to-transparent pointer-events-none z-0" />

      {/* 1. TABLERO */}
      <div className="flex-1 overflow-y-auto px-2 py-2 scrollbar-hide relative z-10">
        
        <div className="flex justify-between max-w-md mx-auto w-full relative">
          
          {/* NOSOTROS */}
          <div className="flex flex-col items-center gap-4 w-1/2 pr-2">
            {/* CORREGIDO: Ahora muestra "1" en vez de "16" */}
            <span className="text-3xl font-serif font-bold text-[#deb887] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
              {getDisplayNumber(leftPoints)}
            </span>
            
            {renderVisualPoints(leftPoints, "left")}
            
            <div className="h-6" />
          </div>

          {/* ELLOS */}
          <div className="flex flex-col items-center gap-4 w-1/2 pl-2">
            {/* CORREGIDO: Ahora muestra "1" en vez de "16" */}
            <span className="text-3xl font-serif font-bold text-[#deb887] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
              {getDisplayNumber(rightPoints)}
            </span>
            
            {renderVisualPoints(rightPoints, "right")}
            
            <div className="h-6" />
          </div>
          
        </div>
      </div>

      {/* 2. BOTONERA */}
      <div className="shrink-0 py-6 relative z-10">
        <div className="max-w-md mx-auto flex w-full">
          {/* Botones Nosotros */}
          <div className="w-1/2 flex justify-center items-center border-r border-[#deb887]/10">
             <div className="flex items-center gap-4 transform scale-90 sm:scale-100">
                <SubtractPointButton onSubtract={() => !winner && leftPoints > 0 && subtractLeft()} />
                <AddPointButton onAdd={() => addLeft()} />
             </div>
          </div>
          {/* Botones Ellos */}
          <div className="w-1/2 flex justify-center items-center border-l border-[#deb887]/10">
             <div className="flex items-center gap-4 transform scale-90 sm:scale-100">
                <AddPointButton onAdd={() => addRight()} />
                <SubtractPointButton onSubtract={() => !winner && rightPoints > 0 && subtractRight()} />
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}