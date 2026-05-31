import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

/**
 * Scroll-triggered reveal built on framer-motion. Content is always rendered
 * in the DOM — opacity/translate are pure motion state, not CSS-locked,
 * so even if the viewport trigger doesn't fire content remains visible.
 * Honors prefers-reduced-motion automatically (framer-motion handles it).
 */

const ease = [0.2, 0.7, 0.2, 1] as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const staggerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

type RevealProps = {
  as?: "div" | "section" | "ul" | "ol";
  className?: string;
  children: ReactNode;
  /** When true, children animate with a stagger. Wrap each child in <RevealItem>. */
  stagger?: boolean;
  amount?: number;
  id?: string;
};

export function Reveal({
  as = "div",
  className = "",
  children,
  stagger = false,
  amount = 0.2,
  id,
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={stagger ? staggerVariants : revealVariants}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps = {
  as?: "div" | "li" | "article";
  className?: string;
  children: ReactNode;
};

export function RevealItem({ as = "div", className = "", children }: RevealItemProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={revealVariants}>
      {children}
    </MotionTag>
  );
}