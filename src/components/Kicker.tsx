interface Props {
  index?: string;
  label: string;
  className?: string;
}

export function Kicker({ index, label, className = "" }: Props) {
  return (
    <p className={`font-mono-label text-[11px] text-ink-soft ${className}`}>
      {index && (
        <>
          <span className="text-ink">{index}</span>
          <span className="mx-2 opacity-50">—</span>
        </>
      )}
      <span>{label}</span>
    </p>
  );
}

export function StatusDot({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="status-dot" />
      {label && (
        <span className="font-mono-label text-[10px] text-muted-foreground">{label}</span>
      )}
    </span>
  );
}

export function CornerTicks() {
  return (
    <>
      <span className="tick-bl" />
      <span className="tick-br" />
    </>
  );
}