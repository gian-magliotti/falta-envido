"use client";

import Image from "next/image";

type CardSymbolProps = {
  type: "linea" | "basto" | "espada" | "copa" | "oro";
  size?: number;
  rotate?: number;
  className?: string;
};

export default function CardSymbol({
  type,
  size = 24,
  rotate = 0,
  className = "",
}: CardSymbolProps) {
  if (type === "linea") return null;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <Image
        src={`/cards/${type}.png`}
        alt={type}
        fill
        sizes="33vw"
        className="object-contain drop-shadow-sm"
        priority={false}
      />
    </div>
  );
}