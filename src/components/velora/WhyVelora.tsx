import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const rows = [
  ["Direct founder communication", true, false],
  ["Modern, type-safe tech stack", true, false],
  ["Faster delivery cycles", true, false],
  ["Scalable, cloud-native architecture", true, false],
  ["AI-first product thinking", true, false],
  ["Transparent roadmaps & weekly demos", true, false],
];

export function WhyVelora() {
  return (
    <section className="py-24 md:py-32 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
<<<<<<< HEAD
          eyebrow="Why STACKLYN"
=======
          eyebrow="Why Stacklyn"
>>>>>>> fdf87caec5575d664952f1d0909b2725d7a76506
          title="The difference is in the engineering."
          description="A focused team that operates like an extension of yours — without the agency overhead."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-border bg-background overflow-hidden shadow-elegant"
        >
          <div className="grid grid-cols-12 px-6 md:px-8 py-4 border-b border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="col-span-6">Capability</div>
<<<<<<< HEAD
            <div className="col-span-3 text-center text-primary">STACKLYN</div>
=======
            <div className="col-span-3 text-center text-primary">Stacklyn</div>
>>>>>>> fdf87caec5575d664952f1d0909b2725d7a76506
            <div className="col-span-3 text-center">Traditional Agencies</div>
          </div>
          {rows.map(([label, v, t], i) => (
            <div
              key={String(label)}
              className={`grid grid-cols-12 items-center px-6 md:px-8 py-4 text-sm ${
                i % 2 === 0 ? "bg-background" : "bg-surface/40"
              } border-b border-border last:border-b-0`}
            >
              <div className="col-span-6 font-medium text-foreground">{label}</div>
              <div className="col-span-3 text-center">
                {v ? <Check on /> : <span className="text-muted-foreground">—</span>}
              </div>
              <div className="col-span-3 text-center">
                {t ? <Check on /> : <span className="text-muted-foreground">—</span>}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Check({ on }: { on?: boolean }) {
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
        on ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
      }`}
    >
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
