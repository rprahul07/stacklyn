import { useEffect, useRef, useState } from "react";

type Node = { id: string; x: number; y: number; label: string; r: number };

const NODES: Node[] = [
  { id: "core", x: 50, y: 50, label: "Core", r: 7 },
  { id: "api", x: 22, y: 28, label: "API", r: 5 },
  { id: "ai", x: 78, y: 24, label: "AI", r: 5 },
  { id: "db", x: 18, y: 72, label: "DB", r: 5 },
  { id: "cloud", x: 82, y: 74, label: "Cloud", r: 5 },
  { id: "web", x: 50, y: 12, label: "Web", r: 4 },
  { id: "mobile", x: 50, y: 88, label: "Mobile", r: 4 },
  { id: "edge", x: 8, y: 50, label: "Edge", r: 4 },
  { id: "auth", x: 92, y: 50, label: "Auth", r: 4 },
];

const EDGES: [string, string][] = [
  ["core", "api"], ["core", "ai"], ["core", "db"], ["core", "cloud"],
  ["core", "web"], ["core", "mobile"], ["core", "edge"], ["core", "auth"],
  ["api", "db"], ["ai", "cloud"], ["web", "api"], ["mobile", "auth"],
  ["edge", "db"], ["cloud", "auth"],
];

export function NetworkVisual() {
  const ref = useRef<SVGSVGElement | null>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50, active: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        active: true,
      });
    };
    const onLeave = () => setMouse((m) => ({ ...m, active: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const findNode = (id: string) => NODES.find((n) => n.id === id)!;

  // Apply subtle cursor pull
  const nodes = NODES.map((n) => {
    if (!mouse.active) return n;
    const dx = mouse.x - n.x;
    const dy = mouse.y - n.y;
    const dist = Math.hypot(dx, dy);
    const pull = Math.max(0, 1 - dist / 35) * 2.2;
    return { ...n, x: n.x + (dx / (dist || 1)) * pull, y: n.y + (dy / (dist || 1)) * pull };
  });

  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-surface to-background border border-border shadow-card" />
      <div className="absolute inset-6 rounded-2xl grid-bg opacity-60" style={{ maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)" }} />

      <svg ref={ref} viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.55 0.24 263)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 263)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.24 263)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.78 0.12 255)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="22" fill="url(#coreGlow)" />

        {EDGES.map(([a, b], i) => {
          const na = nodes.find((n) => n.id === a)!;
          const nb = nodes.find((n) => n.id === b)!;
          return (
            <g key={i}>
              <line
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke="url(#edgeGrad)" strokeWidth="0.25"
              />
              <line
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke="oklch(0.55 0.24 263)" strokeWidth="0.18"
                strokeOpacity="0.6"
                className="dash-flow"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          );
        })}

        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={n.r * 0.6} fill="oklch(0.55 0.24 263)" opacity="0.15" />
            <circle
              cx={n.x} cy={n.y} r={n.r * 0.32}
              fill={n.id === "core" ? "oklch(0.55 0.24 263)" : "white"}
              stroke="oklch(0.55 0.24 263)" strokeWidth="0.3"
            />
            <text
              x={n.x} y={n.y - n.r * 0.6 - 0.5}
              textAnchor="middle" fontSize="2" fill="oklch(0.5 0.03 257)"
              fontWeight={500}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Floating spec chip */}
      <div className="absolute -left-3 top-8 rounded-lg border border-border bg-background shadow-elegant px-3 py-2 text-xs">
        <div className="text-muted-foreground">uptime</div>
        <div className="font-semibold tracking-tight">99.99%</div>
      </div>
      <div className="absolute -right-3 bottom-10 rounded-lg border border-border bg-background shadow-elegant px-3 py-2 text-xs">
        <div className="text-muted-foreground">latency</div>
        <div className="font-semibold tracking-tight text-primary">42ms</div>
      </div>
    </div>
  );
}
