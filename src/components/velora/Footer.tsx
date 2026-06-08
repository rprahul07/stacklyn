export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold text-sm">V</span>
            <span className="font-semibold tracking-tight">Stacklyn</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Innovation in Motion. Building scalable software, intelligent systems, and digital experiences for the next generation of businesses.
          </p>
        </div>

        <FooterCol title="Services" items={["Full Stack", "AI Solutions", "Mobile", "Cloud & DevOps", "UI/UX", "Blockchain"]} />
        <FooterCol title="Studio" items={["Projects", "Technologies", "Process", "Contact"]} />
        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Contact</div>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="text-foreground font-medium">Veena Prasad</li>
            <li>
              <a href="mailto:veenaprasad@stacklyn.in" className="hover:text-primary transition-colors">
                veenaprasad@stacklyn.in
              </a>
            </li>
            <li>
              <a href="tel:+919961746849" className="hover:text-primary transition-colors">
                +91 99617 46849
              </a>
            </li>
            <li>
              <a href="https://wa.me/919961746849" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Stacklyn. All rights reserved.</div>
          <div>Crafted with intention.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs font-semibold uppercase tracking-wider text-foreground">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="hover:text-primary transition-colors">{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
