export function ArchBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="archG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0E8A94" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#3AAE5F" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <path d="M150 560 L600 60 L1050 560 L990 560 L600 130 L210 560 Z" fill="url(#archG)" />
      <path d="M350 560 L600 280 L850 560 L820 560 L600 320 L380 560 Z" fill="url(#archG)" />
    </svg>
  );
}