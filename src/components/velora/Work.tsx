import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    name: "LenientTree",
    kind: "Enterprise Learning Platform",
    blurb: "Scalable architecture, modern frontend, and cloud-native deployment for a fast-growing learning organization.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    accent: "from-primary/15 to-primary/0",
  },
  {
    name: "ONES Coaching",
    kind: "Educational Platform",
    blurb: "Student engagement features, performance optimization, and a responsive design system built for scale.",
    stack: ["React", "Express", "MongoDB", "Docker"],
    accent: "from-primary-soft/30 to-primary/0",
  },
  {
    name: "Alumni Network",
    kind: "Community Platform",
    blurb: "End-to-end authentication, social networking primitives, and a clean, opinionated database architecture.",
    stack: ["Next.js", "Auth.js", "Postgres", "Azure"],
    accent: "from-navy/10 to-primary/0",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeading
            eyebrow="Featured Work"
            title="Products shipped, outcomes delivered."
            description="A selection of recent engagements across education, community, and enterprise platforms."
          />
          <a href="#contact" className="text-sm font-medium text-primary hover:text-primary-deep">
            All case studies →
          </a>
        </div>

        <div className="mt-16 space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative grid lg:grid-cols-12 gap-8 items-stretch rounded-2xl border border-border bg-background overflow-hidden hover:shadow-card transition-shadow"
            >
              <div className={`relative lg:col-span-5 min-h-[260px] bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ProjectGlyph index={i} />
                </div>
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/85 border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Case Study · 0{i + 1}
                </div>
              </div>
              <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center">
                <div className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  {p.kind}
                </div>
                <h3 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">{p.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-surface border border-border px-2.5 py-1 text-xs font-medium text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read the case study
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGlyph({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 200 200" className="h-48 w-48 opacity-90">
      <defs>
        <linearGradient id={`pg-${index}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.24 263)" />
          <stop offset="100%" stopColor="oklch(0.78 0.12 255)" />
        </linearGradient>
      </defs>
      {index === 0 && (
        <>
          <rect x="30" y="40" width="140" height="20" rx="4" fill="white" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
          <rect x="30" y="70" width="90" height="80" rx="4" fill="white" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
          <rect x="130" y="70" width="40" height="80" rx="4" fill={`url(#pg-${index})`} />
          <circle cx="150" cy="110" r="6" fill="white" />
        </>
      )}
      {index === 1 && (
        <>
          <circle cx="100" cy="100" r="62" fill="none" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" strokeDasharray="3 5" />
          <circle cx="100" cy="100" r="20" fill={`url(#pg-${index})`} />
          <circle cx="162" cy="100" r="5" fill="oklch(0.55 0.24 263)" />
          <circle cx="38" cy="100" r="5" fill="oklch(0.55 0.24 263)" />
        </>
      )}
      {index === 2 && (
        <>
          {[
            [100, 50], [50, 100], [150, 100], [100, 150], [70, 70], [130, 130],
          ].map(([x, y], k) => (
            <g key={k}>
              <line x1="100" y1="100" x2={x} y2={y} stroke="oklch(0.55 0.24 263)" strokeWidth="1" opacity="0.5" />
              <circle cx={x} cy={y} r="7" fill="white" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
            </g>
          ))}
          <circle cx="100" cy="100" r="10" fill={`url(#pg-${index})`} />
        </>
      )}
    </svg>
  );
}
