interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, center, className = "" }: Props) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}