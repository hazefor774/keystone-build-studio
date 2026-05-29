/**
 * Editorial fine-line topology rendered as quiet art — single-weight strokes,
 * no animation gimmicks. Sits on the bone canvas as an abstract supporting mark.
 */
export function TopologyHero({ className = "" }: { className?: string }) {
  const nodes: Array<{ id: string; x: number; y: number; label?: string }> = [
    { id: "core", x: 320, y: 220, label: "Core" },
    { id: "n1", x: 80, y: 90, label: "Branch" },
    { id: "n2", x: 80, y: 350, label: "Branch" },
    { id: "n3", x: 560, y: 90, label: "Data Center" },
    { id: "n4", x: 560, y: 350, label: "Azure West" },
  ];
  const links: Array<[string, string]> = [
    ["core", "n1"], ["core", "n2"], ["core", "n3"], ["core", "n4"],
    ["n1", "n3"], ["n2", "n4"],
  ];
  const find = (id: string) => nodes.find((n) => n.id === id)!;
  const stroke = "rgba(20,32,31,0.45)";
  const accent = "var(--teal-deep)";

  return (
    <svg viewBox="0 0 640 440" className={`h-full w-full ${className}`} aria-hidden="true">
      {/* hairline frame */}
      <rect x="0.5" y="0.5" width="639" height="439" fill="none" stroke="rgba(20,32,31,0.10)" />

      {/* Editorial labels */}
      <text x="16" y="26" fill="rgba(20,32,31,0.55)" fontSize="9.5" fontFamily="Spline Sans Mono" letterSpacing="2">
        FIG. 01 — NETWORK ARCHITECTURE
      </text>
      <text x="500" y="26" fill="rgba(20,32,31,0.55)" fontSize="9.5" fontFamily="Spline Sans Mono" letterSpacing="2">
        HSI · 2024
      </text>

      {/* Links */}
      {links.map(([a, b], i) => {
        const A = find(a); const B = find(b);
        return (
          <line
            key={i}
            x1={A.x} y1={A.y} x2={B.x} y2={B.y}
            stroke={stroke} strokeWidth="0.75"
            className="topo-line"
            style={{ animationDelay: `${i * 140}ms` }}
          />
        );
      })}

      {/* Nodes — small filled dots with serif-feel labels */}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.id === "core" ? 5 : 3.5} fill={n.id === "core" ? accent : "var(--ink)"} />
          <circle cx={n.x} cy={n.y} r={n.id === "core" ? 11 : 8} fill="none" stroke={n.id === "core" ? accent : stroke} strokeOpacity={n.id === "core" ? 0.4 : 0.3} />
          {n.label && (
            <text
              x={n.x} y={n.y + 28}
              textAnchor="middle"
              fill="rgba(20,32,31,0.6)"
              fontSize="10"
              fontFamily="Fraunces"
              fontStyle="italic"
            >
              {n.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}