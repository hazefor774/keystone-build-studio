/**
 * Keystone monogram — the brand's signature geometric mark.
 * A stylized keystone (wedge at the crown of an arch) drawn in single-weight
 * line-work. Used as hero centerpiece, section divider, and watermark.
 */
interface Props {
  className?: string;
  /** Hairline stroke weight, defaults to 1.25 */
  strokeWidth?: number;
  /** Animate strokes drawing in on mount */
  animate?: boolean;
  /** Show fine accent details (arch curve, base rule) */
  detailed?: boolean;
  /** Override stroke color (defaults to currentColor) */
  color?: string;
}

export function KeystoneMonogram({
  className = "",
  strokeWidth = 1.25,
  animate = false,
  detailed = true,
  color = "currentColor",
}: Props) {
  const cls = animate ? "topo-line" : "";
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      {/* Arch curve — the implied opening below the keystone */}
      {detailed && (
        <path
          d="M 28 200 L 28 130 A 72 72 0 0 1 172 130 L 172 200"
          className={cls}
          style={animate ? { animationDelay: "0ms" } : undefined}
        />
      )}
      {/* Outer keystone wedge (tapered trapezoid at the crown) */}
      <path
        d="M 70 110 L 130 110 L 145 60 L 55 60 Z"
        className={cls}
        style={animate ? { animationDelay: "120ms" } : undefined}
      />
      {/* Inner keystone wedge — concentric hairline */}
      <path
        d="M 82 100 L 118 100 L 128 72 L 72 72 Z"
        className={cls}
        style={animate ? { animationDelay: "240ms" } : undefined}
      />
      {/* Vertical centre rule */}
      <line x1="100" y1="40" x2="100" y2="200" className={cls} style={animate ? { animationDelay: "360ms" } : undefined} />
      {/* Crown rule */}
      <line x1="40" y1="60" x2="160" y2="60" className={cls} style={animate ? { animationDelay: "480ms" } : undefined} />
      {/* Base rule */}
      {detailed && (
        <line x1="20" y1="200" x2="180" y2="200" className={cls} style={animate ? { animationDelay: "600ms" } : undefined} />
      )}
      {/* Tick marks at the spring line */}
      {detailed && (
        <>
          <line x1="28" y1="128" x2="36" y2="128" className={cls} style={animate ? { animationDelay: "660ms" } : undefined} />
          <line x1="164" y1="128" x2="172" y2="128" className={cls} style={animate ? { animationDelay: "660ms" } : undefined} />
        </>
      )}
    </svg>
  );
}

/** Small inline glyph for nav / dividers — just the keystone wedge. */
export function KeystoneGlyph({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M 12 30 L 28 30 L 32 14 L 8 14 Z" />
      <line x1="20" y1="6" x2="20" y2="34" />
    </svg>
  );
}