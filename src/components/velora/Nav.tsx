import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/#capabilities", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Technology" },
  { href: "/#process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/full-stack-development", label: "Full Stack Development" },
  { href: "/services/mern-development", label: "MERN Stack" },
  { href: "/services/nodejs-development", label: "Node.js Development" },
  { href: "/services/react-development", label: "React Development" },
  { href: "/services/nextjs-development", label: "Next.js Development" },
  { href: "/services/ai-development", label: "AI Development" },
  { href: "/services/mvp-development", label: "MVP Development" },
  { href: "/services/backend-development", label: "Backend Development" },
  { href: "/services/custom-software-development", label: "Custom Software" },
];

const industryLinks = [
  { href: "/industries/oil-gas-software", label: "Oil & Gas" },
  { href: "/industries/mining-software", label: "Mining" },
  { href: "/industries/construction-software", label: "Construction" },
  { href: "/industries/epc-engineering-software", label: "EPC & Engineering" },
  { href: "/industries/manufacturing-software", label: "Manufacturing" },
  { href: "/industries/logistics-supply-chain-software", label: "Logistics & Supply Chain" },
  { href: "/industries/marine-shipping-software", label: "Marine & Shipping" },
  { href: "/industries/renewable-energy-software", label: "Renewable Energy" },
  { href: "/industries/facility-management-software", label: "Facility Management" },
  { href: "/industries/field-service-management-software", label: "Field Service" },
  { href: "/industries/hse-compliance-software", label: "HSE & Compliance" },
  { href: "/industries/workforce-management-software", label: "Workforce Management" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

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
        <a href="/" className="inline-flex items-center group" aria-label="Stacklyn home">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground" aria-label="Main navigation">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="/#capabilities" className="hover:text-foreground transition-colors flex items-center gap-1">
              Services
              <svg className="h-3 w-3 opacity-60" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 rounded-xl border border-border bg-background shadow-card p-2">
                {serviceLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <a href="/industries" className="hover:text-foreground transition-colors flex items-center gap-1">
              Industries
              <svg className="h-3 w-3 opacity-60" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[30rem] rounded-xl border border-border bg-background shadow-card p-2">
                <div className="grid grid-cols-2 gap-x-1">
                  {industryLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
                <a
                  href="/industries"
                  className="mt-1 block rounded-lg border-t border-border px-3 pt-3 pb-2 text-sm font-medium text-primary hover:bg-surface transition-colors"
                >
                  All industries →
                </a>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 h-9 text-sm font-medium hover:bg-navy transition-colors"
        >
          Start a project
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
