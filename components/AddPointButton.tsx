type AddPointButtonProps = {
  onAdd: () => void;
};

export default function AddPointButton({ onAdd }: AddPointButtonProps) {
  return (
    <button
      onClick={onAdd}
      className="
        w-16 h-16
        rounded-full
        
        /* Gradiente rico: Madera rojiza */
        bg-gradient-to-b from-[#5c3a21] to-[#2a160a]
        
        /* Borde dorado brillante */
        border-2 border-[#deb887]
        
        /* Texto */
        text-[#f5e6d3] text-3xl font-serif font-bold 
        
        /* Sombras 3D profundas */
        shadow-[0_4px_0_#1a0f08,0_6px_6px_rgba(0,0,0,0.6)]
        
        /* Interacción */
        hover:translate-y-[2px] hover:shadow-[0_2px_0_#1a0f08,0_4px_4px_rgba(0,0,0,0.6)] hover:border-[#f5e6d3]
        active:translate-y-[4px] active:shadow-none
        
        transition-all duration-150
        cursor-pointer
        flex items-center justify-center
        select-none
      "
      aria-label="Agregar punto"
    >
      +
    </button>
  );
}