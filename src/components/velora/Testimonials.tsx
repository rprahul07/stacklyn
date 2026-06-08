import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const item = {
  quote:
    "Stacklyn transformed our vision into a robust, scalable learning platform that our users love. Their engineering quality, speed of delivery, and deep technical insight made them feel less like a vendor and more like a co-founding team.",
  name: "Augustine Vadakumchery",
  role: "CEO, LenientTree",
};

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams who care about craft."
        />
        <div className="mt-16 flex justify-center">
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-background p-8 md:p-10 max-w-2xl w-full hover:-translate-y-1 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="currentColor" aria-hidden>
              <path d="M7 7h4v4H7c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-4c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" />
            </svg>
            <blockquote className="mt-5 text-lg text-foreground leading-relaxed">"{item.quote}"</blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center text-primary-foreground font-semibold text-sm">
                AV
              </div>
              <div>
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
