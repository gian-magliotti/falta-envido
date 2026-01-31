import CardSymbol from "./CardSymbol";
import { Style } from "./GameContext";

type Props = {
  count: number; 
  style: Style;
};

const symbolPositions = ["tl", "tr", "bl", "br", "center"] as const;
const rotationMap: Record<string, number> = {
  espada: 45,
  basto: -15,
  copa: 0,
  oro: 0,
};

export default function PointsBlock({ count, style }: Props) {
  if (count <= 0) return null;

  if (style === "linea") {
    return (
      <div className="relative w-20 h-20 m-1 flex items-center justify-center">
        
        {/* 1. Pared Izquierda (Vertical) */}
        {count >= 1 && (
          <div className="absolute left-1 top-1 bottom-1 w-[4px] bg-[#f5e6d3] rounded-full shadow-sm animate-point-in" />
        )}
        
        {/* 2. Pared Superior (Horizontal) */}
        {count >= 2 && (
          <div className="absolute top-1 left-1 right-1 h-[4px] bg-[#f5e6d3] rounded-full shadow-sm animate-point-in" />
        )}

        {/* 3. Pared Derecha (Vertical) */}
        {count >= 3 && (
          <div className="absolute right-1 top-1 bottom-1 w-[4px] bg-[#f5e6d3] rounded-full shadow-sm animate-point-in" />
        )}

        {/* 4. Pared Inferior (Horizontal) */}
        {count >= 4 && (
          <div className="absolute bottom-1 left-1 right-1 h-[4px] bg-[#f5e6d3] rounded-full shadow-sm animate-point-in" />
        )}

        {/* 5. Diagonal (Centro) */}
        {count >= 5 && (
          <div className="absolute inset-0 flex items-center justify-center">
             {/* Diagonal rotada */}
             <div className="w-[110%] h-[4px] bg-[#f5e6d3] rounded-full -rotate-45 shadow-sm animate-point-in origin-center" />
          </div>
        )}
      </div>
    );
  }

  const symbolSize = 24;

  return (
    <div className="relative w-20 h-20 m-1 flex items-center justify-center">
      {symbolPositions.slice(0, count).map((pos, idx) => (
        <SymbolPoint 
          key={idx} 
          pos={pos} 
          type={style as Exclude<Style, "linea">} 
          size={symbolSize} 
        />
      ))}
    </div>
  );
}

function SymbolPoint({
  pos,
  type,
  size,
}: {
  pos: typeof symbolPositions[number];
  type: Exclude<Style, "linea">;
  size: number;
}) {
  const posClass = {
    tl: "absolute top-0 left-0",
    tr: "absolute top-0 right-0",
    bl: "absolute bottom-0 left-0",
    br: "absolute bottom-0 right-0",
    center: "absolute inset-0 flex items-center justify-center",
  } as const;

  const rotation = rotationMap[type] || 0;

  return (
    <div className={`${posClass[pos]} animate-point-in`}>
      <CardSymbol type={type} size={size} rotate={rotation} />
    </div>
  );
}