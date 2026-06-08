import { createFileRoute } from "@tanstack/react-router";
import { HirePage, type HireData } from "@/components/velora/HirePageTemplate";

const data: HireData = {
  role: "Next.js Developer",
  slug: "hire-nextjs-developer",
  headline: "Hire Next.js Developers from India — Full-Stack React Experts",
  tagline: "Next.js 15 · App Router · SSR · TypeScript · Kerala, India",
  intro:
    "Hire senior Next.js developers from Stacklyn, Kerala, India. Our Next.js engineers build production-grade applications with App Router, Server Components, SSR, and TypeScript — SaaS products, marketing sites, and enterprise platforms for global clients.",
  skills: [
    "Next.js 15", "React 19", "TypeScript", "App Router",
    "Server Components", "Server Actions", "Edge Runtime",
    "Tailwind CSS", "Prisma", "Drizzle ORM", "PostgreSQL",
    "Vercel", "AWS", "Cloudflare",
    "Auth.js", "Clerk", "NextAuth",
    "Stripe", "Sanity", "Contentful",
    "SEO Optimization", "Core Web Vitals",
  ],
  benefits: [
    { title: "App Router Experts", desc: "Up-to-date on Next.js 15, React Server Components, Server Actions, and edge deployment — not stuck on old patterns." },
    { title: "SEO-Optimized Development", desc: "We configure metadata API, structured data, sitemaps, and Core Web Vitals for every Next.js project by default." },
    { title: "Full-Stack Capability", desc: "Our Next.js developers handle both frontend (React) and backend (API routes, Server Actions, database) — one engineer, complete solution." },
    { title: "Deployment Expertise", desc: "Experienced with Vercel, AWS (Lambda@Edge, ECS), and Cloudflare deployment for Next.js applications." },
    { title: "India-Based Cost", desc: "Senior Next.js developers at India rates — a fraction of US/UK market rates for equivalent expertise." },
    { title: "Fast Delivery", desc: "Start within 3 business days. Weekly demo reviews to ensure we're building the right thing." },
  ],
  engagementModels: [
    { name: "Project-Based", desc: "Fixed scope for complete Next.js apps, SaaS products, or marketing sites.", price: "From ₹2L" },
    { name: "Monthly Retainer", desc: "Dedicated Next.js developer for ongoing full-stack development, 80+ hours/month.", price: "₹85K–1.2L/mo" },
    { name: "Hourly Consulting", desc: "Architecture reviews, performance audits, or Next.js migration consulting.", price: "₹3–5K/hr" },
  ],
  process: [
    { step: "Requirements", desc: "Share your project requirements, designs, and technical constraints." },
    { step: "Architecture Review", desc: "We propose rendering strategy, routing structure, and data fetching patterns." },
    { step: "Proposal", desc: "Detailed proposal with scope, timeline, and engineer profile within 48 hours." },
    { step: "Development Kickoff", desc: "Project setup and first working features within 48 hours of contract." },
  ],
  techStack: [
    "Next.js 15", "React 19", "TypeScript", "Tailwind CSS",
    "App Router", "Server Components", "Server Actions",
    "Prisma", "PostgreSQL", "Supabase",
    "Vercel", "Cloudflare", "AWS",
    "Clerk", "Stripe", "Sanity",
  ],
  faqs: [
    { q: "Why hire a Next.js developer from India?", a: "Indian Next.js developers offer world-class skills at significantly lower rates than US/UK developers. Stacklyn's engineers are trained on the latest Next.js App Router and can deliver production-grade applications fast." },
    { q: "What is the cost of hiring a Next.js developer from Stacklyn?", a: "Monthly retainers start at ₹85,000 (~$1,000 USD) for part-time engagement. Full-time dedicated Next.js developers cost ₹1–1.2 lakh/month. Project-based work starts at ₹2 lakh." },
    { q: "Does Stacklyn use the Next.js App Router?", a: "Yes. All new Next.js projects use the App Router with React Server Components and Server Actions. We do not use the deprecated Pages Router for new projects." },
    { q: "Can Stacklyn build a Next.js SaaS product?", a: "Yes. SaaS development with Next.js is a core Stacklyn specialization — multi-tenancy, Stripe subscriptions, auth, dashboards, and API routes all in one Next.js project." },
    { q: "Does Stacklyn handle Next.js SEO optimization?", a: "Yes. SEO is built into every Stacklyn Next.js project: metadata API, canonical URLs, OpenGraph, structured data (JSON-LD), sitemaps, and Core Web Vitals optimization." },
    { q: "Can Stacklyn deploy Next.js on AWS instead of Vercel?", a: "Yes. We deploy Next.js on AWS ECS, Lambda@Edge, or EC2 for clients who need more control or have existing AWS infrastructure." },
    { q: "Does Stacklyn do Next.js migrations from Pages Router to App Router?", a: "Yes. We migrate existing Next.js Pages Router apps to the App Router incrementally, minimizing disruption to your production application." },
    { q: "What database does Stacklyn use with Next.js?", a: "We use PostgreSQL with Prisma ORM for most Next.js projects. Supabase is recommended for rapid MVP development. Drizzle ORM is an alternative for performance-critical queries." },
    { q: "Does Stacklyn integrate Stripe with Next.js?", a: "Yes. Stripe integration (subscriptions, one-time payments, webhooks) with Next.js is a common service. We implement checkout, billing portal, and invoice management." },
    { q: "How do I hire a Next.js developer from Stacklyn?", a: "Contact us at veenaprasad@stacklyn.in or WhatsApp +91 99617 46849. Describe your project and we'll send a proposal within 24 hours." },
  ],
  relatedHire: [
    { name: "Hire React Developer", href: "/hire-react-developer" },
    { name: "Hire Node.js Developer", href: "/hire-nodejs-developer" },
    { name: "Hire MERN Developer", href: "/hire-mern-developer" },
    { name: "Hire Backend Developer", href: "/hire-backend-developer" },
    { name: "Hire AI Developer", href: "/hire-ai-developer" },
  ],
  relatedServices: [
    { name: "Next.js Development", href: "/services/nextjs-development" },
    { name: "React Development", href: "/services/react-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
  ],
};

export const Route = createFileRoute("/hire-nextjs-developer")({
  head: () => ({
    meta: [
      { title: "Hire Next.js Developers from India | Stacklyn — Kerala" },
      { name: "description", content: "Hire senior Next.js developers from Stacklyn, Kerala, India. App Router, SSR, SSG, SaaS products, TypeScript. Senior engineers, 24h response." },
      { name: "keywords", content: "hire Next.js developer India, Next.js developer Kerala, hire Next.js developer freelance India, Next.js App Router developer India" },
      { property: "og:title", content: "Hire Next.js Developers from India | Stacklyn" },
      { property: "og:description", content: "Senior Next.js developers from Kerala. App Router, SSR, TypeScript. Production-grade delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/hire-nextjs-developer" }],
  }),
  component: () => <HirePage data={data} />,
});
