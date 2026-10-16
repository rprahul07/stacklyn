const items = [
  "Custom Software",
  "Web Applications",
  "Mobile Apps",
  "AI & Automation",
  "SaaS Platforms",
  "ERP & CRM",
  "E-commerce",
  "UI/UX Design",
  "Cloud & DevOps",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="border-y border-border bg-surface/60 py-8 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-12 px-6 text-muted-foreground">
            <span className="text-sm font-medium tracking-wide uppercase">{it}</span>
            <span className="h-1 w-1 rounded-full bg-primary/60" />
          </div>
        ))}
      </div>
    </section>
  );
}
