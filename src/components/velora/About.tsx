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
    <section className="py-24 md:py-32">
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
      </div>
    </section>
  );
}
