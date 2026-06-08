import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const caps = [
  {
    num: "01",
    title: "Full Stack Development",
    desc: "Production-grade web platforms built with modern, type-safe stacks.",
    tags: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    num: "02",
    title: "AI Solutions",
    desc: "From LLM workflows to retrieval systems and intelligent automation.",
    tags: ["LLMs", "RAG", "Automation", "Machine Learning"],
  },
  {
    num: "03",
    title: "Mobile Development",
    desc: "Cross-platform apps with native performance and shipping velocity.",
    tags: ["Flutter", "React Native"],
  },
  {
    num: "04",
    title: "Cloud & DevOps",
    desc: "Resilient infrastructure, automated pipelines, and zero-downtime delivery.",
    tags: ["AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    num: "05",
    title: "UI / UX Design",
    desc: "Design systems and product surfaces engineered for clarity and craft.",
    tags: ["Figma", "Design Systems"],
  },
  {
    num: "06",
    title: "Blockchain & Web3",
    desc: "Smart contracts, on-chain logic, and consumer-grade Web3 experiences.",
    tags: ["Smart Contracts", "Web3 Apps"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="A complete engineering stack, under one roof."
          description="Specialist teams across product, design, and engineering — composed around your problem, not the other way around."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {caps.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-background p-8 hover:bg-surface transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono text-muted-foreground">{c.num}</span>
                <span className="h-2 w-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
