import logoUrl from "@/assets/kargo-logo.png";

interface Props {
  size?: number;
  className?: string;
  showWordmark?: boolean;
}

export function KargoLogo({ size = 64, className = "", showWordmark = false }: Props) {
  // The uploaded asset includes both the mark and a favicon preview. We crop to
  // just the mark using object-position + a clipped container.
  return (
    <span
      className={`inline-block overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-label="Kargobridge logo"
    >
      <img
        src={logoUrl}
        alt="Kargobridge Logistics"
        draggable={false}
        style={{
          width: size * (showWordmark ? 3.6 : 3.6),
          height: "auto",
          maxWidth: "none",
          // Position to the logo mark area of the source image
          objectFit: "none",
          objectPosition: showWordmark ? "28% 42%" : "26% 38%",
          transform: "translate(0,0)",
        }}
      />
    </span>
  );
}
