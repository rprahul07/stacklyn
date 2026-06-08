import { createFileRoute } from "@tanstack/react-router";
import { HirePage, type HireData } from "@/components/velora/HirePageTemplate";

const data: HireData = {
  role: "React Developer",
  slug: "hire-react-developer",
  headline: "Hire React Developers from India — Expert Frontend Engineers",
  tagline: "Senior React engineers · TypeScript · Kerala, India",
  intro:
    "Hire experienced React developers from Stacklyn, Kerala, India. Our React engineers build high-quality SPAs, SaaS frontends, dashboards, and component libraries with React 19, TypeScript, and Tailwind CSS for global clients.",
  skills: [
    "React 19", "TypeScript", "Next.js", "Vite",
    "Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion",
    "TanStack Query", "Zustand", "Redux Toolkit",
    "React Hook Form", "Zod",
    "REST API Integration", "GraphQL",
    "Jest", "Vitest", "React Testing Library", "Playwright",
    "Storybook", "Accessibility (ARIA)",
  ],
  benefits: [
    { title: "React Specialists", desc: "React is our primary frontend technology. Our developers are up-to-date with React 19, Server Components, and the latest hooks." },
    { title: "TypeScript Experts", desc: "All our React code is TypeScript. Type-safe props, events, and state — maintainable codebases from day one." },
    { title: "Design-Faithful Implementation", desc: "We implement designs pixel-perfectly with attention to spacing, typography, animations, and responsive behavior." },
    { title: "Performance Focus", desc: "Code splitting, lazy loading, memo optimization, and bundle analysis are standard practices, not afterthoughts." },
    { title: "India-Based Cost Advantage", desc: "Senior React developers at Kerala, India rates — 50–70% less than US/UK equivalent talent." },
    { title: "Fast Onboarding", desc: "Start within 1–3 days. We review your existing codebase, understand your design system, and contribute from day one." },
  ],
  engagementModels: [
    { name: "Project-Based", desc: "Fixed scope and price for complete React frontend projects.", price: "From ₹1.5L" },
    { name: "Monthly Retainer", desc: "Dedicated React developer for ongoing UI development, 80+ hours/month.", price: "₹75K–1.1L/mo" },
    { name: "Hourly Consulting", desc: "Code reviews, performance audits, or targeted React consulting.", price: "₹3–5K/hr" },
  ],
  process: [
    { step: "Share Requirements", desc: "Tell us about your product, design files, and stack." },
    { step: "Technical Assessment", desc: "We review designs, existing code, and requirements within 24 hours." },
    { step: "Proposal", desc: "Receive proposal with scope, timeline, pricing, and developer profile." },
    { step: "Start Building", desc: "Kickoff and first PR within 48 hours of contract signing." },
  ],
  techStack: [
    "React 19", "TypeScript", "Next.js", "Vite",
    "Tailwind CSS", "shadcn/ui", "Radix UI",
    "TanStack Query", "Zustand", "React Hook Form",
    "Jest", "Vitest", "Playwright", "Storybook",
  ],
  faqs: [
    { q: "Why hire a React developer from India?", a: "India has a large pool of highly skilled React developers at rates significantly below US/UK market rates. Stacklyn's React developers are senior-level with TypeScript expertise, production experience, and strong communication skills." },
    { q: "What is the cost of hiring a React developer from Stacklyn?", a: "React developer retainers start at ₹75,000/month (~$900 USD). Full-time dedicated React developers cost ₹1–1.1 lakh/month. Project-based work starts at ₹1.5 lakh for defined-scope frontend projects." },
    { q: "Does Stacklyn use TypeScript for React development?", a: "Yes. TypeScript is mandatory for all Stacklyn React projects. This ensures type safety, better tooling, and long-term maintainability of your frontend codebase." },
    { q: "Can Stacklyn work from existing Figma designs?", a: "Yes. We implement React components directly from Figma designs, maintaining pixel-perfect fidelity, consistent spacing, and responsive behavior across breakpoints." },
    { q: "Does Stacklyn build React Native apps as well?", a: "Yes. We build React Native apps alongside or separately from React web apps. Shared business logic and API calls reduce duplication." },
    { q: "What state management does Stacklyn use in React?", a: "We use Zustand for client state and TanStack Query for server state. Simple projects use React Context. We recommend the right approach based on your application's complexity." },
    { q: "Can Stacklyn integrate third-party services into React apps?", a: "Yes. Common integrations: authentication (Clerk, Auth0), payments (Stripe), analytics (Mixpanel, PostHog), maps, customer support (Intercom), and custom backend APIs." },
    { q: "Does Stacklyn write tests for React components?", a: "Yes. We write component tests with React Testing Library, visual tests with Storybook, and E2E tests with Playwright for critical user flows." },
    { q: "How does Stacklyn handle responsive design in React?", a: "All React applications are mobile-first and fully responsive. We use Tailwind CSS breakpoints and test on multiple screen sizes during development." },
    { q: "How do I start hiring a React developer from Stacklyn?", a: "Email veenaprasad@stacklyn.in or WhatsApp +91 99617 46849. Share your project requirements and we'll send a proposal within 24 hours." },
  ],
  relatedHire: [
    { name: "Hire Node.js Developer", href: "/hire-nodejs-developer" },
    { name: "Hire Next.js Developer", href: "/hire-nextjs-developer" },
    { name: "Hire MERN Developer", href: "/hire-mern-developer" },
    { name: "Hire AI Developer", href: "/hire-ai-developer" },
    { name: "Hire Backend Developer", href: "/hire-backend-developer" },
  ],
  relatedServices: [
    { name: "React Development", href: "/services/react-development" },
    { name: "Next.js Development", href: "/services/nextjs-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
  ],
};

export const Route = createFileRoute("/hire-react-developer")({
  head: () => ({
    meta: [
      { title: "Hire React Developers from India | Stacklyn — Kerala" },
      { name: "description", content: "Hire expert React developers from Stacklyn, Kerala, India. React 19, TypeScript, Tailwind CSS, SaaS frontends, dashboards. Senior engineers, fast delivery." },
      { name: "keywords", content: "hire React developer India, React developer Kerala, hire React.js developer India, React frontend developer India, dedicated React developer India" },
      { property: "og:title", content: "Hire React Developers from India | Stacklyn" },
      { property: "og:description", content: "Senior React developers from Kerala, India. React 19, TypeScript, Tailwind. Fast onboarding." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/hire-react-developer" }],
  }),
  component: () => <HirePage data={data} />,
});
