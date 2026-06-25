import { Logo } from "./Logo";

const services = [
  { label: "Full Stack Development", href: "/services/full-stack-development" },
  { label: "MERN Stack", href: "/services/mern-development" },
  { label: "Node.js Development", href: "/services/nodejs-development" },
  { label: "React Development", href: "/services/react-development" },
  { label: "Next.js Development", href: "/services/nextjs-development" },
  { label: "AI Development", href: "/services/ai-development" },
  { label: "MVP Development", href: "/services/mvp-development" },
  { label: "Backend Development", href: "/services/backend-development" },
  { label: "Custom Software", href: "/services/custom-software-development" },
];

const hireDev = [
  { label: "Hire Node.js Developer", href: "/hire-nodejs-developer" },
  { label: "Hire React Developer", href: "/hire-react-developer" },
  { label: "Hire Next.js Developer", href: "/hire-nextjs-developer" },
  { label: "Hire MERN Developer", href: "/hire-mern-developer" },
  { label: "Hire AI Developer", href: "/hire-ai-developer" },
  { label: "Hire Backend Developer", href: "/hire-backend-developer" },
];

const company = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Technology", href: "/#stack" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-3">
          <a href="/" className="inline-flex items-center" aria-label="Stacklyn home">
            <Logo />
          </a>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Custom software development company in Kerala, India. Building scalable web apps, AI solutions, and MVPs for global clients.
          </p>
          <div className="mt-5 flex flex-col gap-1.5 text-sm text-muted-foreground">
            <a href="mailto:veenaprasad@stacklyn.in" className="hover:text-primary transition-colors">veenaprasad@stacklyn.in</a>
            <a href="tel:+919961746849" className="hover:text-primary transition-colors">+91 99617 46849</a>
            <a href="https://wa.me/919961746849" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Services</div>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hire Developers */}
        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Hire Developers</div>
          <ul className="mt-4 space-y-2">
            {hireDev.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Company</div>
          <ul className="mt-4 space-y-2">
            {company.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Contact</div>
            <div className="mt-3 text-sm font-medium text-foreground">Veena Prasad</div>
            <div className="text-xs text-muted-foreground">Co-Founder · Stacklyn</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Stacklyn. All rights reserved. Registered in Kerala, India.</div>
          <div className="flex gap-4">
            <span>Custom Software Development</span>
            <span>·</span>
            <span>Kerala, India</span>
            <span>·</span>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
