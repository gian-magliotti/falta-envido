"use client";

import { useState } from "react";
import type { Style } from "./GameContext";

type Props = {
  value: Style;
  onChange: (v: Style) => void;
};

export default function StyleSelector({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const options: Style[] = ["linea", "basto", "espada", "copa", "oro"];

  const renderSymbol = (style: Style) => {
    if (style === "linea") {
      return <div className="w-8 h-[3px] bg-white rounded-full" />;
    }
    return <img src={`/cards/${style}.png`} alt={style} className="w-8 h-8 object-contain" />;
  };

  return (
    <div className="relative inline-block">
      {/* Botón principal */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center justify-center
          w-10 h-10
          bg-gradient-to-b from-[#4b2f1c] to-[#2a180e]
          border border-[#8b5a2b]
          rounded-full
          shadow-inner shadow-black/40
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-[#c49a6c]
          overflow-hidden
        "
      >
        {renderSymbol(value)}
      </button>

      {/* Menú desplegable */}
      {open && (
        <div
          className="
            absolute mt-2 right-0
            bg-[#3a2416] border border-[#8b5a2b]
            rounded-lg shadow-lg shadow-black/50
            flex flex-col gap-1 p-2 z-50
          "
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full
                hover:bg-[#4b2f1c]
                transition-colors
              "
            >
              {renderSymbol(opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
