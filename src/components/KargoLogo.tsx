import markUrl from "@/assets/kargo-mark.png";
import fullUrl from "@/assets/kargo-full.png";

interface Props {
  size?: number;
  className?: string;
  showWordmark?: boolean;
}

export function KargoLogo({ size = 64, className = "", showWordmark = false }: Props) {
  const src = showWordmark ? fullUrl : markUrl;
  const style = showWordmark
    ? { height: size, width: "auto" as const }
    : { height: size, width: size };
  return (
    <img
      src={src}
      alt="Kargobridge Logistics"
      draggable={false}
      className={className}
      style={style}
    />
  );
}
