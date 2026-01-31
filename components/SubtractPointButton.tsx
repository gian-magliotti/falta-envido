type SubtractPointButtonProps = {
  onSubtract: () => void;
};

export default function SubtractPointButton({ onSubtract }: SubtractPointButtonProps) {
  return (
    <button
      onClick={onSubtract}
      className="
        w-12 h-12
        rounded-full
        
        /* Madera oscura */
        bg-gradient-to-b from-[#3a2618] to-[#150b05]
        
        /* Borde bronce */
        border-2 border-[#deb887]
        
        /* Texto */
        text-[#deb887] text-xl font-serif font-bold
        
        /* Sombras */
        shadow-[0_3px_0_#0f0502,0_4px_4px_rgba(0,0,0,0.5)]
        
        /* Interacción */
        hover:translate-y-[2px] hover:shadow-[0_1px_0_#0f0502] hover:text-[#deb887] hover:border-[#deb887]
        active:translate-y-[3px] active:shadow-none
        
        transition-all duration-150
        cursor-pointer
        flex items-center justify-center
        select-none
      "
      aria-label="Restar punto"
    >
      −
    </button>
  );
}