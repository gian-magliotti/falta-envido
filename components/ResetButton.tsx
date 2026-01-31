type Props = {
  onClick: () => void;
};

export default function ResetButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label="Reiniciar Partido"
      className="
        w-9 h-9
        flex items-center justify-center
        rounded-full
        border border-[#8b5a2b]
        bg-gradient-to-b from-[#4a2f1b] to-[#1a0f08]
        shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]
        text-[#deb887]
        hover:text-[#f5e6d3]
        hover:border-[#deb887]
        hover:shadow-[0_0_8px_rgba(222,184,135,0.2)]
        active:translate-y-[1px]
        active:shadow-none
        transition-all duration-200
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 drop-shadow-sm"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    </button>
  );
}