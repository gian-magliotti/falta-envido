"use client";

export default function Footer() {
  return (
    <footer className="
        w-full h-8 flex items-center justify-center
        /* Fondo madera (Gradiente) */
        bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#5e3a22] via-[#3a2416] to-[#1a0f08]
        /* Borde superior dorado */
        border-t border-[#8b5a2b] shadow-[0_-4px_15px_rgba(0,0,0,0.5)]
        text-[#deb887]/60 text-[10px] tracking-[0.2em] font-serif select-none uppercase font-bold
        z-50
      "
    >
      Se juega hasta que uno se levanta
    </footer>
  );
}