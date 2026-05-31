import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

/**
 * Animates a numeric prefix from 0 → target the first time the element
 * enters the viewport. Non-numeric suffix/prefix (e.g. "+", "%") is rendered
 * as plain text. Respects prefers-reduced-motion (framer-motion built-in).
 */
export function CountUp({
  value,
  duration = 1.2,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  // Parse "18+" → prefix="", num=18, suffix="+"; "~9k" → prefix="~", num=9, suffix="k"
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <span className={className}>{value}</span>;
  const [, prefix, numStr, suffix] = match;
  const target = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => {
    const n = decimals ? v.toFixed(decimals) : Math.round(v).toString();
    return `${prefix}${n}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, { duration, ease: [0.2, 0.7, 0.2, 1] });
    return () => controls.stop();
  }, [inView, mv, target, duration]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}