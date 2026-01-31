"use client";

import { createContext, useContext, useState } from "react";

export type Style = "linea" | "basto" | "espada" | "copa" | "oro";
export type Winner = "left" | "right" | null;

type GameContextType = {
  style: Style;
  setStyle: (s: Style) => void;
  leftPoints: number;
  rightPoints: number;
  winner: Winner;
  addLeft: () => void;
  addRight: () => void;
  subtractLeft: () => void;
  subtractRight: () => void;
  reset: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

const WIN_POINTS = 30;

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState<Style>("linea");
  const [leftPoints, setLeftPoints] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [winner, setWinner] = useState<Winner>(null);

  // Lógica simplificada: Sumar hasta 30
  const addLeft = () => {
    if (winner) return; // Si ya ganó alguien, no sumar más
    setLeftPoints((prev) => {
      const next = prev + 1;
      if (next >= WIN_POINTS) {
        setWinner("left");
        return WIN_POINTS;
      }
      return next;
    });
  };

  const addRight = () => {
    if (winner) return;
    setRightPoints((prev) => {
      const next = prev + 1;
      if (next >= WIN_POINTS) {
        setWinner("right");
        return WIN_POINTS;
      }
      return next;
    });
  };

  const subtractLeft = () => {
    if (winner) return; // Opcional: impedir restar si ya terminó
    setLeftPoints((p) => Math.max(0, p - 1));
  };

  const subtractRight = () => {
    if (winner) return;
    setRightPoints((p) => Math.max(0, p - 1));
  };

  const reset = () => {
    setLeftPoints(0);
    setRightPoints(0);
    setWinner(null);
  };

  return (
    <GameContext.Provider
      value={{
        style,
        setStyle,
        leftPoints,
        rightPoints,
        winner,
        addLeft,
        addRight,
        subtractLeft,
        subtractRight,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame debe usarse dentro de GameProvider");
  return ctx;
}