import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "Flutter", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Express", "NestJS"] },
  { title: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { title: "Cloud", items: ["AWS", "Azure", "Docker"] },
  { title: "AI", items: ["OpenAI", "LangChain", "Vector DBs"] },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="A constellation of modern tools."
          description="We pick the right tool for the job — proven where it matters, modern where it pays off."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-background p-6"
            >
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {g.title}
              </div>
              <ul className="mt-5 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center justify-between text-sm font-medium text-foreground py-2 border-b border-border last:border-b-0 group cursor-default"
                  >
                    <span>{it}</span>
                    <span className="text-muted-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">in-house</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
