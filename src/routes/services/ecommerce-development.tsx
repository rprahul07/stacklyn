import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceData } from "@/components/velora/ServicePageTemplate";

const data: ServiceData = {
  title: "E-commerce Development",
  slug: "ecommerce-development",
  headline: "E-commerce Website & Online Store Development",
  tagline: "Online stores · Marketplaces · Shopify · Kerala, India",
  intro:
    "Stacklyn builds online stores and marketplaces that sell — fast product pages, a smooth mobile checkout, payment gateways, inventory, and order tracking. We set up Shopify stores when that fits, and build custom e-commerce platforms when you need more control.",
  whatIs:
    "E-commerce development is building the website or app where customers browse products, pay, and track orders, together with the back office that manages products, stock, orders, delivery, and returns. It ranges from a Shopify store set up for a brand to a custom multi-vendor marketplace.",
  whyItMatters:
    "Selling online through your own store means you keep the customer relationship and the margin that marketplaces take. But a slow site or a clumsy checkout loses buyers at the last step — so speed, mobile experience, and payment reliability matter more than anything else.",
  subServices: [
    "Custom E-commerce Websites",
    "Shopify Store Setup and Customisation",
    "Multi-vendor Marketplaces",
    "B2B Ordering Portals",
    "Payment Gateway Integration (Razorpay, Stripe, PayPal)",
    "Inventory and Order Management",
    "Shipping and Delivery Integration",
    "Mobile Shopping Apps",
    "WhatsApp Ordering and Notifications",
    "Store Speed and Conversion Optimisation",
  ],
  benefits: [
    {
      title: "Fast, Mobile-first Checkout",
      desc: "Most shoppers buy on their phones. We design checkout to be quick and simple on small screens.",
    },
    {
      title: "Reliable Payments",
      desc: "UPI, cards, wallets, and international payments through trusted gateways, with clear order confirmation.",
    },
    {
      title: "Easy to Manage",
      desc: "An admin panel to add products, change prices, run offers, and process orders without a developer.",
    },
    {
      title: "Inventory in Sync",
      desc: "Stock updates automatically across your store, warehouse, and other sales channels.",
    },
    {
      title: "Built to Be Found",
      desc: "SEO-friendly product and category pages, structured data, and fast loading for better rankings.",
    },
    {
      title: "Room to Grow",
      desc: "Add a mobile app, B2B pricing, multiple vendors, or new regions as the business grows.",
    },
  ],
  process: [
    {
      step: "Discovery",
      desc: "Products, customers, payments, shipping, and the right platform — Shopify or custom.",
    },
    {
      step: "Design",
      desc: "Store design focused on product presentation and a short path to checkout.",
    },
    {
      step: "Build",
      desc: "Store, admin, payments, and shipping integrations built with weekly previews.",
    },
    {
      step: "Products & Testing",
      desc: "Product import, test orders, payment and refund checks across devices.",
    },
    {
      step: "Launch",
      desc: "Go-live on your domain with analytics and conversion tracking set up.",
    },
    {
      step: "Grow",
      desc: "Ongoing improvements, new features, and support on a monthly plan.",
    },
  ],
  techStack: [
    "Shopify",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Razorpay",
    "Stripe",
    "PayPal",
    "Shiprocket",
    "WhatsApp Business API",
    "Algolia",
    "Cloudflare",
    "AWS",
    "Google Analytics",
  ],
  whyStacklyn: [
    {
      title: "Platform-neutral Advice",
      desc: "We recommend Shopify when it is enough and custom builds only when you need them.",
    },
    {
      title: "Conversion Focus",
      desc: "Page speed, trust signals, and checkout flow get as much attention as the visual design.",
    },
    {
      title: "Fixed-price Phases",
      desc: "Clear scope and cost before work starts.",
    },
    {
      title: "Full Integration",
      desc: "Payments, shipping, accounting, WhatsApp, and marketing tools connected properly.",
    },
    {
      title: "You Own the Store",
      desc: "Code, data, and customer list stay yours — no lock-in.",
    },
    {
      title: "Support After Launch",
      desc: "We stay on for updates, sale-season readiness, and new features.",
    },
  ],
  faqs: [
    {
      q: "How much does an e-commerce website cost?",
      a: "With Stacklyn, a Shopify store set up and customised for your brand typically costs $1,500–4,000. A custom e-commerce website usually costs $5,000–15,000, and a multi-vendor marketplace starts around $12,000, delivered in fixed-price phases.",
    },
    {
      q: "Shopify or a custom store — which should I choose?",
      a: "Shopify is quick to launch and ideal for most brands with standard products. A custom store makes sense for marketplaces, B2B pricing, complex product configuration, or when platform fees and limits start to cost more than a custom build.",
    },
    {
      q: "How long does it take to build an online store?",
      a: "A Shopify store takes 2–4 weeks. A custom e-commerce site takes 8–12 weeks. A marketplace is delivered in phases, with the first release in about 10–14 weeks.",
    },
    {
      q: "Which payment gateways do you integrate?",
      a: "Razorpay, Stripe, PayPal, PayU, Cashfree, and others, supporting UPI, cards, net banking, wallets, and international payments.",
    },
    {
      q: "Can you integrate shipping and delivery tracking?",
      a: "Yes. We integrate with shipping aggregators such as Shiprocket and courier APIs for automatic labels, tracking, and delivery updates to customers.",
    },
    {
      q: "Can you build a mobile shopping app too?",
      a: "Yes. We build iOS and Android shopping apps that share the same backend and products as your website.",
    },
    {
      q: "Will my store be SEO-friendly?",
      a: "Yes. We build fast product and category pages with clean URLs, structured data, and sitemaps so search engines can index your catalogue.",
    },
    {
      q: "Can you move my store from WooCommerce or another platform?",
      a: "Yes. We migrate products, customers, and orders and set up redirects so you keep your search rankings.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. Monthly support covers updates, fixes, new features, and preparing the store for high-traffic sale periods.",
    },
    {
      q: "How do I start?",
      a: "Tell us what you sell through the contact form, email rahulrp@stacklyn.in, or WhatsApp +91 95444 51720. We reply within 24 hours with next steps.",
    },
  ],
  relatedServices: [
    { name: "Web Application Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Next.js Development", href: "/services/nextjs-development" },
    { name: "Custom Software", href: "/services/custom-software-development" },
  ],
};

export const Route = createFileRoute("/services/ecommerce-development")({
  head: () => ({
    meta: [
      { title: "E-commerce Website & Online Store Development | Stacklyn India" },
      {
        name: "description",
        content:
          "Stacklyn builds online stores, Shopify sites, and marketplaces with fast mobile checkout, payment gateways, inventory, and delivery tracking. Fixed-price phases from Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "ecommerce website development India, ecommerce development company Kerala, online store development, Shopify developer India, marketplace development India, ecommerce app development, custom ecommerce website",
      },
      {
        property: "og:title",
        content: "E-commerce Website & Online Store Development | Stacklyn",
      },
      {
        property: "og:description",
        content:
          "Online stores, Shopify sites, and marketplaces built to convert. From Kerala, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "E-commerce Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "Online stores and marketplaces built to sell, from Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/services/ecommerce-development" }],
  }),
  component: () => <ServicePage data={data} />,
});
