import { useEffect, useState } from "react";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Technology" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold text-sm shadow-elegant">
            V
            <span className="absolute -right-0.5 -bottom-0.5 h-1.5 w-1.5 rounded-full bg-primary-soft ring-2 ring-background" />
          </span>
          <span className="font-semibold tracking-tight text-foreground">Stacklyn</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 h-9 text-sm font-medium hover:bg-navy transition-colors"
        >
          Start a project
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
