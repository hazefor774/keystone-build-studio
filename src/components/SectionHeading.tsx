import { Kicker } from "./Kicker";

interface Props {
  eyebrow?: string;
  index?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, index, title, subtitle, center, className = "" }: Props) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && <Kicker index={index} label={eyebrow} className={center ? "" : ""} />}
      <h2 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}