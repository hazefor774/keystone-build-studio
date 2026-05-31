import { Kicker } from "./Kicker";

const items = [
  {
    n: "I.",
    title: "Senior-only delivery",
    body: "Our principal engineer leads every engagement. No juniors learning on your network.",
  },
  {
    n: "II.",
    title: "Written SOW on every engagement",
    body: "Scope, assumptions, and limits documented before work begins. Authorized and scoped only.",
  },
  {
    n: "III.",
    title: "Change control with rehearsed rollback",
    body: "Every cut is lab-rehearsed against a matching configuration. The back-out plan exists before the cutover.",
  },
  {
    n: "IV.",
    title: "ISO-9001-style documentation",
    body: "Diagrams, run-books, peer-review records, and a structured evidence pack as a deliverable.",
  },
];

export function MethodologyBlock({ kickerIndex = "—" }: { kickerIndex?: string }) {
  return (
    <div>
      <Kicker index={kickerIndex} label="How we work" />
      <h2
        className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Rigor is the credibility.
      </h2>
      <ul className="mt-14 grid gap-px bg-[var(--hair)] sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.n} className="bg-paper p-10">
            <span
              className="text-2xl italic text-ink-soft"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {it.n}
            </span>
            <h3
              className="mt-5 text-2xl font-medium tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {it.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">{it.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}