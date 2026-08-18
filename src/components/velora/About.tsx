import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "h", label: "Average Response" },
  { value: 8, suffix: "", label: "Core Capabilities" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Stacklyn"
          title="Engineering solutions that scale."
          description="Stacklyn transforms ideas into production-ready digital products using modern technologies and proven engineering practices — end-to-end, with the rigor of an in-house team."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 rounded-2xl border border-border bg-background p-8 md:p-10 grid md:grid-cols-12 gap-8 items-start"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="md:col-span-1 flex-shrink-0">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl select-none">
              R
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Founder</div>
            <h3 className="text-xl font-semibold text-foreground" itemProp="name">Rahul R P</h3>
            <div className="text-sm text-muted-foreground mb-3" itemProp="jobTitle">Founder &amp; CEO · Stacklyn</div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl" itemProp="description">
              Rahul R P is the Founder and CEO of Stacklyn — a custom software development and AI engineering studio based in Kerala, India.
              A hands-on full stack engineer with deep expertise in React, Next.js, Node.js, TypeScript, and AI/LLM application development,
              he personally leads architecture, product scoping, and delivery on every Stacklyn engagement.
              Rahul has shipped 10+ production software products across SaaS, edtech, fintech, and AI for clients globally.
              He holds a degree from Cochin University of Science and Technology (CUSAT).
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "TypeScript", "AI / LLM", "Cloud Architecture"].map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <a
              href="mailto:rahulrp@stacklyn.in"
              itemProp="email"
              className="group flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm hover:border-primary/40 transition-colors"
            >
              <span className="text-primary">✉</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">rahulrp@stacklyn.in</span>
            </a>
            <a
              href="tel:+919544451720"
              itemProp="telephone"
              className="group flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm hover:border-primary/40 transition-colors"
            >
              <span className="text-primary">☏</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">+91 95444 51720</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rahulrp07/"
              target="_blank"
              rel="noreferrer"
              itemProp="sameAs"
              className="group flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm hover:border-primary/40 transition-colors"
            >
              <span className="text-primary">in</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">linkedin.com/in/rahulrp07</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

