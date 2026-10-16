import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const caps = [
  {
    num: "01",
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    desc: "Software built around how your business actually works — portals, internal tools, workflow systems, and integrations.",
    tags: ["Business Software", "Portals", "Integrations", "APIs"],
  },
  {
    num: "02",
    title: "Web Application Development",
    href: "/services/web-development",
    desc: "Fast, secure web apps and business websites — customer portals, booking systems, dashboards, and admin panels.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    num: "03",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "iOS and Android apps from one codebase, with the backend, admin panel, and store launch handled for you.",
    tags: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    num: "04",
    title: "AI & Automation",
    href: "/ai-automation",
    desc: "AI chatbots, WhatsApp automation, AI agents, and document processing that take repetitive work off your team.",
    tags: ["AI Chatbots", "AI Agents", "WhatsApp", "RAG"],
  },
  {
    num: "05",
    title: "SaaS & MVP Development",
    href: "/services/mvp-development",
    desc: "Take a product idea to a launched SaaS or MVP — subscriptions, user roles, and an architecture that scales.",
    tags: ["SaaS", "MVP", "Stripe", "Multi-tenant"],
  },
  {
    num: "06",
    title: "ERP, CRM & Business Software",
    href: "/services/erp-crm-development",
    desc: "Custom ERP, CRM, inventory, billing, and HR systems that replace spreadsheets and fit your process.",
    tags: ["ERP", "CRM", "Inventory", "Billing", "HRMS"],
  },
  {
    num: "07",
    title: "E-commerce Development",
    href: "/services/ecommerce-development",
    desc: "Online stores and marketplaces with payments, inventory, delivery tracking, and a mobile-friendly checkout.",
    tags: ["Shopify", "Custom Stores", "Razorpay", "Stripe"],
  },
  {
    num: "08",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Product design, design systems, and redesigns that make your software easy to use and good to look at.",
    tags: ["Figma", "Prototypes", "Design Systems"],
  },
  {
    num: "09",
    title: "Industry Software",
    href: "/industries",
    desc: "Domain software for construction, logistics, healthcare, manufacturing, oil and gas, education, and more.",
    tags: ["Construction", "Logistics", "Healthcare", "Manufacturing"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="A complete software team, under one roof."
          description="Whatever you need built — web, mobile, AI, or business software — one senior team designs, builds, launches, and supports it."
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
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                <a href={c.href} className="hover:text-primary transition-colors">
                  {c.title}
                </a>
              </h3>
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
