import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  ["Discovery", "Understand the problem, audience, and constraints."],
  ["Strategy", "Define scope, architecture, and a clear delivery plan."],
  ["Design", "Craft interfaces, flows, and a coherent design system."],
  ["Development", "Build in iterative cycles with continuous reviews."],
  ["Testing", "Automated and manual QA across critical user paths."],
  ["Deployment", "Ship to production with CI/CD and observability."],
  ["Growth", "Iterate, measure, and scale with confidence."],
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from idea to impact."
        />

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-6 hidden md:block h-px bg-border" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {steps.map(([title, desc], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
