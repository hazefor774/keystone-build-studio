interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "reversed";
}

export function Logo({ className = "", showWordmark = true, variant = "default" }: LogoProps) {
  const wordmarkColor = variant === "reversed" ? "text-white" : "text-ink";
  const incColor = variant === "reversed" ? "text-[#A7F3D0]" : "text-green";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Mark className="h-8 w-auto shrink-0" variant={variant} />
      {showWordmark && (
        <div className="flex items-baseline gap-1.5 border-l border-border pl-3">
          <span
            className={`font-display font-bold tracking-[0.04em] text-[1.05rem] leading-none ${wordmarkColor}`}
          >
            HERMAN STONE
          </span>
          <span className={`font-display font-bold text-[0.6rem] tracking-wider ${incColor}`}>
            INC
          </span>
        </div>
      )}
    </div>
  );
}

export function Mark({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "reversed";
}) {
  // Keystone arch: two angled bars forming an A/arch, teal left, green right
  const left = variant === "reversed" ? "#A7F3D0" : "#0E8A94";
  const right = variant === "reversed" ? "#FFFFFF" : "#3AAE5F";
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden="true">
      <path d="M6 50 L30 8 L24 8 L0 50 Z" fill={left} />
      <path d="M58 50 L34 8 L40 8 L64 50 Z" fill={right} />
    </svg>
  );
}