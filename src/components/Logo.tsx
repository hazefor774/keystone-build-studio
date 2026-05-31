/**
 * Herman Stone INC — definitive brand mark.
 *
 * One mark only. Two angled bars forming an A-arch — teal left, green right —
 * paired with the wordmark. Replaces all earlier marks (keystone monogram,
 * topology hero, arch backdrop).
 */

type Variant = "default" | "reversed";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  variant?: Variant;
  /** Stacked lockup for footer / hero. Defaults to horizontal. */
  stacked?: boolean;
}

export function Logo({
  className = "",
  showWordmark = true,
  variant = "default",
  stacked = false,
}: LogoProps) {
  const wordmarkColor = variant === "reversed" ? "text-[#F2EFE8]" : "text-ink";
  const incColor = variant === "reversed" ? "text-green" : "text-green";

  if (stacked) {
    return (
      <div className={`flex flex-col items-start gap-3 ${className}`}>
        <ArchMark className="h-12 w-auto" variant={variant} />
        {showWordmark && (
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-display tracking-[0.16em] text-[0.78rem] leading-none ${wordmarkColor}`}
              style={{ fontFamily: "var(--font-wordmark)" }}
            >
              HERMAN STONE
            </span>
            <span
              className={`font-display text-[0.55rem] tracking-[0.2em] ${incColor}`}
              style={{ fontFamily: "var(--font-wordmark)" }}
            >
              INC
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ArchMark className="h-9 w-auto shrink-0" variant={variant} />
      {showWordmark && (
        <div className="flex items-baseline gap-1.5 border-l border-[var(--hair)] pl-3">
          <span
            className={`tracking-[0.14em] text-[0.82rem] leading-none ${wordmarkColor}`}
            style={{ fontFamily: "var(--font-wordmark)", fontWeight: 700 }}
          >
            HERMAN STONE
          </span>
          <span
            className={`text-[0.55rem] tracking-[0.22em] ${incColor}`}
            style={{ fontFamily: "var(--font-wordmark)", fontWeight: 700 }}
          >
            INC
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * The A-arch mark on its own — two angled bars meeting at the crown.
 * Use everywhere the brand needs a glyph (favicon, nav, footer, watermark).
 *
 * When `animated`, the two strokes draw in on mount via framer-motion. The
 * fill is added on completion so the static state is always the solid mark.
 */
import { motion } from "framer-motion";

export function ArchMark({
  className = "",
  variant = "default",
  animated = false,
}: {
  className?: string;
  variant?: Variant;
  animated?: boolean;
}) {
  const left = variant === "reversed" ? "#5CC6CD" : "#0E8A94";
  const right = variant === "reversed" ? "#7FD49A" : "#3AAE5F";
  if (!animated) {
    return (
      <svg viewBox="0 0 64 56" className={className} aria-hidden="true">
        <path d="M6 50 L30 8 L24 8 L0 50 Z" fill={left} />
        <path d="M58 50 L34 8 L40 8 L64 50 Z" fill={right} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden="true">
      <motion.path
        d="M6 50 L30 8 L24 8 L0 50 Z"
        fill={left}
        stroke={left}
        strokeWidth={1}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{ pathLength: 1, fillOpacity: 1 }}
        transition={{
          pathLength: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] },
          fillOpacity: { duration: 0.4, delay: 0.7 },
        }}
      />
      <motion.path
        d="M58 50 L34 8 L40 8 L64 50 Z"
        fill={right}
        stroke={right}
        strokeWidth={1}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{ pathLength: 1, fillOpacity: 1 }}
        transition={{
          pathLength: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 },
          fillOpacity: { duration: 0.4, delay: 0.85 },
        }}
      />
    </svg>
  );
}

/**
 * Single-color outline arch — for use as a low-opacity watermark on dark
 * anchor sections or as a section-divider glyph. Strokes only, no fill.
 */
export function ArchOutline({
  className = "",
  strokeWidth = 1,
  color = "currentColor",
}: {
  className?: string;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 56"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="miter"
    >
      <path d="M6 50 L30 8 L24 8 L0 50 Z" />
      <path d="M58 50 L34 8 L40 8 L64 50 Z" />
    </svg>
  );
}