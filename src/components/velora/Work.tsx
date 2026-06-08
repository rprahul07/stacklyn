import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    name: "LenientTree",
    kind: "Enterprise Learning Platform",
    blurb: "Scalable architecture, modern frontend, and cloud-native deployment for a fast-growing learning organization.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    accent: "from-primary/15 to-primary/0",
    url: "https://lenienttree.com",
  },
  {
    name: "ONES Coaching",
    kind: "Educational Platform",
    blurb: "Student engagement features, performance optimization, and a responsive design system built for scale.",
    stack: ["React", "Express", "MongoDB", "Docker"],
    accent: "from-primary-soft/30 to-primary/0",
    url: "https://www.onescoaching.com/",
  },
  {
    name: "Alumni Network",
    kind: "Community Platform",
    blurb: "End-to-end authentication, social networking primitives, and a clean, opinionated database architecture.",
    stack: ["Next.js", "Auth.js", "Postgres", "Azure"],
    accent: "from-navy/10 to-primary/0",
    url: "https://www.onescoaching.com/",
  },
  {
    name: "ThinkerRoot Ideathon 2025",
    kind: "Innovation Platform",
    blurb: "A one of a kind hackathon designed to nurture core innovation. Empowering developers, thinkers, and creators to build impactful solutions.",
    stack: ["React", "Node.js", "Vercel", "PostgreSQL"],
    accent: "from-primary/20 to-primary-soft/10",
    url: "https://thinker-root-2025.vercel.app/",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Products shipped, outcomes delivered."
          description="A selection of recent engagements across education, community, and enterprise platforms."
        />

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
              <div className={`relative lg:col-span-5 min-h-[280px] bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full max-w-[260px] rounded-xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-background/80 backdrop-blur-sm border-b border-border">
                      <span className="h-2 w-2 rounded-full bg-red-400/80" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                      <span className="h-2 w-2 rounded-full bg-green-400/80" />
                      <span className="ml-2 flex-1 rounded bg-surface border border-border px-2 py-0.5 text-[9px] text-muted-foreground truncate">
                        {p.url.replace("https://", "")}
                      </span>
                    </div>
                    <div className="bg-background/60 backdrop-blur-sm flex items-center justify-center py-2">
                      <ProjectGlyph index={i} />
                    </div>
                  </div>
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
                <div className="mt-8">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-deep transition-colors"
                  >
                    View Work
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
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
    <svg viewBox="0 0 200 160" className="h-32 w-full opacity-90">
      <defs>
        <linearGradient id={`pg-${index}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.24 263)" />
          <stop offset="100%" stopColor="oklch(0.78 0.12 255)" />
        </linearGradient>
      </defs>
      {index === 0 && (
        <>
          <rect x="30" y="20" width="140" height="16" rx="4" fill="white" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
          <rect x="30" y="46" width="90" height="80" rx="4" fill="white" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
          <rect x="130" y="46" width="40" height="80" rx="4" fill={`url(#pg-${index})`} />
          <circle cx="150" cy="86" r="6" fill="white" />
        </>
      )}
      {index === 1 && (
        <>
          <circle cx="100" cy="80" r="55" fill="none" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
          <circle cx="100" cy="80" r="35" fill="none" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" strokeDasharray="3 5" />
          <circle cx="100" cy="80" r="18" fill={`url(#pg-${index})`} />
          <circle cx="155" cy="80" r="5" fill="oklch(0.55 0.24 263)" />
          <circle cx="45" cy="80" r="5" fill="oklch(0.55 0.24 263)" />
        </>
      )}
      {index === 2 && (
        <>
          {[
            [100, 30], [50, 80], [150, 80], [100, 130], [65, 50], [135, 110],
          ].map(([x, y], k) => (
            <g key={k}>
              <line x1="100" y1="80" x2={x} y2={y} stroke="oklch(0.55 0.24 263)" strokeWidth="1" opacity="0.5" />
              <circle cx={x} cy={y} r="7" fill="white" stroke="oklch(0.55 0.24 263)" strokeWidth="1.2" />
            </g>
          ))}
          <circle cx="100" cy="80" r="10" fill={`url(#pg-${index})`} />
        </>
      )}
      {index === 3 && (
        <>
          <circle cx="100" cy="72" r="38" fill="none" stroke="oklch(0.55 0.24 263)" strokeWidth="1.5" />
          <circle cx="100" cy="72" r="38" fill={`url(#pg-${index})`} opacity="0.15" />
          <circle cx="100" cy="72" r="18" fill={`url(#pg-${index})`} opacity="0.8" />
          <line x1="88" y1="114" x2="112" y2="114" stroke="oklch(0.55 0.24 263)" strokeWidth="2" strokeLinecap="round" />
          <line x1="91" y1="122" x2="109" y2="122" stroke="oklch(0.55 0.24 263)" strokeWidth="2" strokeLinecap="round" />
          <line x1="94" y1="130" x2="106" y2="130" stroke="oklch(0.55 0.24 263)" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="34" x2="100" y2="24" stroke="oklch(0.78 0.12 255)" strokeWidth="2" strokeLinecap="round" />
          <line x1="128" y1="44" x2="135" y2="37" stroke="oklch(0.78 0.12 255)" strokeWidth="2" strokeLinecap="round" />
          <line x1="72" y1="44" x2="65" y2="37" stroke="oklch(0.78 0.12 255)" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
