import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote:
      "Stacklyn shipped what felt like a year of roadmap in a single quarter. The engineering quality is exceptional.",
    name: "Priya N.",
    role: "Founder, EdTech Startup",
  },
  {
    quote:
      "They behave like a co-founding engineering team — opinionated, fast, and deeply technical.",
    name: "Arjun M.",
    role: "CTO, B2B SaaS",
  },
  {
    quote:
      "The most thoughtful collaborators we've worked with. Architecture decisions paid off as we scaled.",
    name: "Sara K.",
    role: "Head of Product",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams who care about craft."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={it.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-background p-7 hover:-translate-y-1 transition-transform"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="currentColor" aria-hidden>
                <path d="M7 7h4v4H7c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-4c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" />
              </svg>
              <blockquote className="mt-4 text-foreground leading-relaxed">"{it.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary-soft" />
                <div>
                  <div className="text-sm font-semibold">{it.name}</div>
                  <div className="text-xs text-muted-foreground">{it.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
