interface Props {
  size?: number;
  className?: string;
}

export function KargoLogo({ size = 64, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Kargobridge logo"
    >
      {/* Globe circle (broken at top for arrow) */}
      <path d="M60 18 a42 42 0 1 0 42 42" />
      <path d="M18 60 a42 42 0 0 1 26 -39" />
      {/* Continent suggestion */}
      <path d="M52 38 q6 6 4 14 q-2 6 4 10 q6 4 4 12 q-2 6 6 10" />
      <path d="M68 44 q6 2 8 8" />
      {/* Upward arrow above globe */}
      <path d="M50 28 L50 6 M50 6 L44 12 M50 6 L56 12" />
      {/* Location pin top-right */}
      <circle cx="92" cy="22" r="7" />
      <path d="M92 29 L92 38" />
      {/* Airplane diagonal */}
      <path d="M28 84 L96 46" />
      <path d="M44 76 L40 64 M44 76 L36 80" />
      <path d="M70 62 L78 70 M70 62 L74 54" />
    </svg>
  );
}
