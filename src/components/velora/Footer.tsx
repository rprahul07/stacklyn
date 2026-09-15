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

const industries = [
  { label: "Oil & Gas Software", href: "/industries/oil-gas-software" },
  { label: "Mining Software", href: "/industries/mining-software" },
  { label: "Construction Software", href: "/industries/construction-software" },
  { label: "EPC & Engineering", href: "/industries/epc-engineering-software" },
  { label: "Manufacturing Software", href: "/industries/manufacturing-software" },
  { label: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain-software" },
  { label: "Marine & Shipping", href: "/industries/marine-shipping-software" },
  { label: "Renewable Energy", href: "/industries/renewable-energy-software" },
  { label: "Facility Management", href: "/industries/facility-management-software" },
  { label: "Field Service Management", href: "/industries/field-service-management-software" },
  { label: "HSE & Compliance", href: "/industries/hse-compliance-software" },
  { label: "Workforce Management", href: "/industries/workforce-management-software" },
  { label: "Healthcare", href: "/industries/healthcare-software" },
  { label: "Fintech & BFSI", href: "/industries/fintech-software" },
  { label: "E-commerce & Retail", href: "/industries/ecommerce-retail-software" },
  { label: "EdTech & Education", href: "/industries/edtech-software" },
  { label: "Insurance", href: "/industries/insurance-software" },
  { label: "Real Estate & PropTech", href: "/industries/proptech-real-estate-software" },
];

const aiAutomation = [
  { label: "AI Chatbot Development", href: "/ai-automation/ai-chatbot-development" },
  { label: "WhatsApp AI Chatbot & Automation", href: "/ai-automation/whatsapp-ai-chatbot" },
  { label: "Malayalam AI Chatbot & Voice Bot", href: "/ai-automation/malayalam-ai-chatbot" },
  { label: "AI Agent Development", href: "/ai-automation/ai-agent-development" },
  { label: "RAG & Private Knowledge Base AI", href: "/ai-automation/rag-knowledge-base-ai" },
  { label: "AI Voice Agents & Call Automation", href: "/ai-automation/ai-voice-agent" },
  { label: "Business Process Automation", href: "/ai-automation/business-process-automation" },
  { label: "n8n, Make & Zapier Automation", href: "/ai-automation/n8n-automation-agency" },
  { label: "Tally & GST Automation", href: "/ai-automation/tally-gst-automation" },
  { label: "AI Document Processing & Invoice Automation", href: "/ai-automation/invoice-document-ai" },
  { label: "CRM & Sales Automation", href: "/ai-automation/crm-sales-automation" },
  { label: "HR & Recruitment Automation", href: "/ai-automation/hr-recruitment-automation" },
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
            <a href="mailto:rahulrp@stacklyn.in" className="hover:text-primary transition-colors">rahulrp@stacklyn.in</a>
            <a href="tel:+919544451720" className="hover:text-primary transition-colors">+91 95444 51720</a>
            <a href="https://wa.me/919544451720" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>

        {/* Services + Hire Developers */}
        <div className="md:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Services</div>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-foreground">Hire Developers</div>
          <ul className="mt-4 space-y-2">
            {hireDev.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="md:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Industries</div>
          <ul className="mt-4 space-y-2">
            {industries.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* AI & Automation */}
        <div className="md:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">AI &amp; Automation</div>
          <ul className="mt-4 space-y-2">
            {aiAutomation.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
            <li>
              <a href="/ai-automation" className="text-sm font-medium text-primary hover:underline">All AI solutions →</a>
            </li>
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
            <div className="mt-3 text-sm font-medium text-foreground">Rahul R P</div>
            <div className="text-xs text-muted-foreground">Founder & CEO · Stacklyn</div>
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
