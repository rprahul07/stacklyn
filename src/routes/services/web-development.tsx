import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceData } from "@/components/velora/ServicePageTemplate";

const data: ServiceData = {
  title: "Web Application Development",
  slug: "web-development",
  headline: "Web Application & Website Development Company",
  tagline: "Websites · Web apps · Portals · Kerala, India",
  intro:
    "Stacklyn builds fast, secure websites and web applications for businesses of every size — customer portals, booking and ordering systems, dashboards, admin panels, and company websites that bring in enquiries. One senior team handles design, development, hosting, and support.",
  whatIs:
    "Web application development is building software that runs in the browser — anything from a company website with a contact form to a full customer portal, booking system, or internal tool used by hundreds of staff. Unlike a template website, a web application has its own logic, database, and user accounts, so it can run real parts of your business.",
  whyItMatters:
    "Your website is usually the first thing a customer sees, and a slow or outdated one costs you enquiries. A well-built web application goes further: it replaces spreadsheets, phone calls, and manual follow-ups with a system your customers and staff can use any time, from any device, without installing anything.",
  subServices: [
    "Business and Company Websites",
    "Custom Web Applications",
    "Customer and Vendor Portals",
    "Booking, Ordering, and Appointment Systems",
    "Admin Panels and Dashboards",
    "Progressive Web Apps (PWA)",
    "Website Redesign and Migration",
    "API Development and Third-party Integrations",
    "SEO-ready, Fast-loading Builds",
    "Hosting, Maintenance, and Support",
  ],
  benefits: [
    {
      title: "Built Around Your Business",
      desc: "No forcing your process into a template. Pages, workflows, and user roles are designed around how you actually work.",
    },
    {
      title: "Fast and Search-friendly",
      desc: "Server-rendered pages, optimised images, and clean markup so your site loads quickly and can be found on Google.",
    },
    {
      title: "Works on Every Device",
      desc: "Responsive layouts that work on phones, tablets, and desktops — most of your visitors are on mobile.",
    },
    {
      title: "Secure by Default",
      desc: "HTTPS, secure authentication, role-based access, input validation, and regular dependency updates.",
    },
    {
      title: "Easy to Update",
      desc: "An admin panel or CMS so your team can change content, prices, and listings without calling a developer.",
    },
    {
      title: "Ready to Grow",
      desc: "Start with a website, add a portal or booking system later — the architecture is built to extend, not to be rewritten.",
    },
  ],
  process: [
    {
      step: "Discovery",
      desc: "We learn your business, customers, and goals, and agree on pages, features, and integrations.",
    },
    {
      step: "Proposal",
      desc: "A fixed-price scope with timeline, broken into phases you approve before we start.",
    },
    {
      step: "Design",
      desc: "Wireframes and visual design for key pages and flows, reviewed with you before development.",
    },
    {
      step: "Development",
      desc: "Weekly builds on a staging link so you see real progress and give feedback early.",
    },
    {
      step: "Testing & Launch",
      desc: "Cross-browser and mobile testing, speed checks, SEO setup, and a smooth go-live on your domain.",
    },
    {
      step: "Support",
      desc: "Hosting, backups, security updates, and new features on an optional monthly plan.",
    },
  ],
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Headless CMS",
    "Stripe",
    "Razorpay",
    "AWS",
    "Vercel",
    "Cloudflare",
    "Docker",
    "GitHub Actions",
  ],
  whyStacklyn: [
    {
      title: "Senior Engineers, Directly",
      desc: "You talk to the people building your site, not an account manager relaying messages.",
    },
    {
      title: "Fixed-price Phases",
      desc: "You know the cost and timeline before work starts. No open-ended hourly bills.",
    },
    {
      title: "Weekly Demos",
      desc: "A working staging link every week, so there are no surprises at launch.",
    },
    {
      title: "Performance Focus",
      desc: "We care about page speed and Core Web Vitals because they affect both rankings and conversions.",
    },
    {
      title: "You Own Everything",
      desc: "Source code, domain, hosting accounts, and content are yours from day one.",
    },
    {
      title: "Long-term Support",
      desc: "We stay on after launch for updates, fixes, and new features as your business grows.",
    },
  ],
  faqs: [
    {
      q: "How much does a website or web application cost?",
      a: "With Stacklyn, a business website typically starts around $1,500. Custom web applications such as portals, booking systems, or dashboards usually cost $4,000–15,000 depending on features and integrations. Larger platforms are delivered in fixed-price phases. You get a written fixed-price quote after a free discovery call.",
    },
    {
      q: "How long does it take to build a website or web app?",
      a: "A business website takes 3–5 weeks. A custom web application takes 6–12 weeks for the first release, depending on scope. You see a working staging version every week.",
    },
    {
      q: "What is the difference between a website and a web application?",
      a: "A website mainly presents information — services, pages, a contact form. A web application has its own logic and data: user accounts, bookings, orders, dashboards, or workflows. Many businesses start with a website and add web application features later.",
    },
    {
      q: "Will my website be SEO-friendly?",
      a: "Yes. We build with server-side rendering, clean URLs, fast loading, structured data, sitemaps, and proper meta tags, so search engines can crawl and index your pages. Content and link building are separate, ongoing activities.",
    },
    {
      q: "Can I update the website content myself?",
      a: "Yes. We add an admin panel or a headless CMS so your team can edit text, images, products, and listings without touching code.",
    },
    {
      q: "Do you redesign existing websites?",
      a: "Yes. We redesign and rebuild outdated or slow websites, migrate content, keep your existing URLs or set up redirects, and preserve your search rankings during the move.",
    },
    {
      q: "Can you integrate payments, WhatsApp, or my CRM?",
      a: "Yes. We integrate payment gateways (Razorpay, Stripe, PayPal), WhatsApp, email, CRMs such as Zoho or HubSpot, accounting tools, maps, and any service with an API.",
    },
    {
      q: "Do you provide hosting and maintenance?",
      a: "Yes. We can host your site on AWS, Vercel, or Cloudflare and look after backups, uptime monitoring, security updates, and small changes on a monthly plan.",
    },
    {
      q: "Do I own the code and the domain?",
      a: "Yes. The source code, domain, and hosting accounts are in your name. At handover you receive the repository, documentation, and access to everything.",
    },
    {
      q: "How do I start a web project with Stacklyn?",
      a: "Send your requirements through the contact form, email rahulrp@stacklyn.in, or WhatsApp +91 95444 51720. We reply within 24 hours and send a fixed-price proposal after a short discovery call.",
    },
  ],
  relatedServices: [
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "E-commerce Development", href: "/services/ecommerce-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "Next.js Development", href: "/services/nextjs-development" },
  ],
};

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Web Application & Website Development Company in Kerala | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn builds fast, SEO-ready websites and custom web applications — portals, booking systems, dashboards, and admin panels. Fixed-price phases, senior engineers in Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "web development company Kerala, web application development India, website development company Kochi, custom web app development, web portal development, website redesign India, web developers Kerala",
      },
      {
        property: "og:title",
        content: "Web Application & Website Development | Stacklyn",
      },
      {
        property: "og:description",
        content:
          "Websites, web apps, portals, and dashboards built by senior engineers in Kerala, India. Fixed-price phases.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Web Application Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "Fast, secure websites and web applications from Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/services/web-development" }],
  }),
  component: () => <ServicePage data={data} />,
});
