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
        bg-gradient-to-b from-[#3a2618] to-[#150b05]
        border-2 border-[#deb887]
        text-[#deb887] text-xl font-serif font-bold
        shadow-[0_3px_0_#0f0502,0_4px_4px_rgba(0,0,0,0.5)]
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