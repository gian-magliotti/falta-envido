"use client";

type Props = {
  winner: "left" | "right";
  onReset: () => void;
};

export default function WinnerScreen({ winner, onReset }: Props) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-500">
      
      {/* Tarjeta de Ganador */}
      <div className="
        relative w-[90%] max-w-sm p-8
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5e3a22] via-[#3a2416] to-[#1a0f08]
        border-2 border-[#deb887]
        shadow-[0_0_50px_rgba(222,184,135,0.2)]
        text-center
        flex flex-col gap-6
        rounded-sm
      ">
        {/* Decoración Esquinas */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#deb887]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#deb887]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#deb887]" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#deb887]" />

        <h2 className="text-[#deb887]/60 font-serif tracking-[0.3em] uppercase text-sm">
          ¡Partido Terminado!
        </h2>

        <div className="flex flex-col gap-2">
          <span className="text-[#f5e6d3] font-serif text-xl">Ganaron</span>
          <span className="text-5xl font-serif font-bold text-[#deb887] drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] uppercase">
            {winner === "left" ? "Nosotros" : "Ellos"}
          </span>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#deb887]/50 to-transparent" />

        {/* Botón Revancha */}
        <button
          onClick={onReset}
          className="
            mt-2 px-8 py-3
            bg-[#deb887] text-[#3a2416]
            font-serif font-bold tracking-widest uppercase text-lg
            border-2 border-[#8b5a2b]
            shadow-[0_4px_0_#8b5a2b]
            active:shadow-none active:translate-y-[4px]
            hover:bg-[#f5e6d3]
            transition-all
          "
        >
          ¡Revancha!
        </button>
      </div>

    </div>
  );
}