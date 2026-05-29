export function TopologyHero({ className = "" }: { className?: string }) {
  // Nodes
  const nodes: Array<{ id: string; x: number; y: number; r?: number; label?: string }> = [
    { id: "core", x: 320, y: 220, r: 8, label: "CORE" },
    { id: "n1", x: 80, y: 80, r: 5, label: "BR-01" },
    { id: "n2", x: 80, y: 360, r: 5, label: "BR-02" },
    { id: "n3", x: 560, y: 80, r: 5, label: "DC-01" },
    { id: "n4", x: 560, y: 360, r: 5, label: "AZ-WEST" },
    { id: "n5", x: 200, y: 220, r: 4 },
    { id: "n6", x: 440, y: 220, r: 4 },
  ];
  const links = [
    ["core", "n1"], ["core", "n2"], ["core", "n3"], ["core", "n4"],
    ["n5", "core"], ["n6", "core"], ["n1", "n3"], ["n2", "n4"],
  ];
  const find = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <svg
      viewBox="0 0 640 440"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1FB6C4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1FB6C4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="linkG" x1="0" x2="1">
          <stop offset="0%" stopColor="#1FB6C4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3AAE5F" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Faint frame */}
      <rect x="0.5" y="0.5" width="639" height="439" fill="none" stroke="rgba(31,182,196,0.12)" />
      <text x="10" y="20" fill="#7F9A98" fontSize="10" fontFamily="IBM Plex Mono" letterSpacing="2">
        TOPOLOGY · LIVE
      </text>
      <text x="540" y="20" fill="#7F9A98" fontSize="10" fontFamily="IBM Plex Mono" letterSpacing="2">
        642 NODES
      </text>

      {/* Glow under core */}
      <circle cx="320" cy="220" r="120" fill="url(#coreGlow)" />

      {/* Links with animated packets */}
      {links.map(([a, b], i) => {
        const A = find(a);
        const B = find(b);
        const id = `path-${i}`;
        return (
          <g key={i}>
            <path
              id={id}
              d={`M${A.x} ${A.y} L${B.x} ${B.y}`}
              stroke="url(#linkG)"
              strokeWidth="1"
              fill="none"
              className="topo-line"
              style={{ animationDelay: `${i * 120}ms` }}
            />
            <circle r="2.5" fill="#1FB6C4">
              <animateMotion
                dur={`${4 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.6}s`}
              >
                <mpath href={`#${id}`} />
              </animateMotion>
            </circle>
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={(n.r || 4) + 4} fill="#0E1F22" stroke="#1FB6C4" strokeOpacity="0.4" />
          <circle cx={n.x} cy={n.y} r={n.r || 4} fill={n.id === "core" ? "#1FB6C4" : "#3AAE5F"} />
          {n.label && (
            <text
              x={n.x + 14}
              y={n.y + 3}
              fill="#7F9A98"
              fontSize="9"
              fontFamily="IBM Plex Mono"
              letterSpacing="1.5"
            >
              {n.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}