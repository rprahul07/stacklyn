import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LeadCTA } from "../components/velora/LeadCTA";

const BASE_URL = "https://stacklyn.in";

const DEFAULT_TITLE = "Stacklyn — Custom Software, Industrial & AI Development | India, GCC & US";
const DEFAULT_DESCRIPTION =
  "Stacklyn builds custom software, industrial systems, and AI automation for companies in India, the GCC, Europe, and the US — web apps, SaaS platforms, MVPs, and AI agents, engineered in Kerala, India.";

/**
 * Structured-data only: this bio feeds the Person entity in JSON-LD and is never
 * rendered into visible page content.
 */
const FOUNDER_BIO =
  "Rahul R P is the Founder and CEO of Stacklyn, a custom software development and AI engineering studio based in Kerala, India. " +
  "A hands-on full stack engineer with deep expertise in React, Next.js, Node.js, TypeScript, cloud infrastructure, and AI/LLM application development, " +
  "Rahul personally leads product scoping, architecture, and delivery on every Stacklyn engagement — partnering directly with " +
  "founders and product teams from the first discovery call through production launch. " +
  "He has built and shipped 10+ production software products across SaaS, edtech, fintech, and AI domains for clients in India, the US, the UAE, and Singapore. " +
  "Rahul holds a degree from Cochin University of Science and Technology (CUSAT), Kerala.";

/**
 * Canonical entity graph, emitted on every page.
 *
 * This is the single definition of the #organization, #website and #rahul-rp
 * nodes. Page-level schema must *reference* these by @id rather than redefining
 * them — two nodes sharing an @id on one page is a conflict, and Google picks a
 * winner unpredictably.
 */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "Stacklyn",
      alternateName: "Stacklyn Software",
      url: BASE_URL,
      description:
        "Stacklyn is a custom software development company in Kerala, India, providing full stack development, AI solutions, SaaS development, and startup MVP development for startups and enterprises globally.",
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/favicon.png`,
        width: 512,
        height: 512,
      },
      image: { "@id": `${BASE_URL}/#logo` },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-95444-51720",
          email: "rahulrp@stacklyn.in",
          contactType: "sales",
          areaServed: [
            "IN",
            "AE",
            "SA",
            "QA",
            "OM",
            "KW",
            "BH",
            "US",
            "GB",
            "DE",
            "IE",
            "NO",
            "SE",
            "DK",
            "FI",
            "NL",
            "AU",
            "CA",
            "SG",
          ],
          availableLanguage: ["English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kerala",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "10.8505", longitude: "76.2711" },
      areaServed: [
        "IN",
        "AE",
        "SA",
        "QA",
        "OM",
        "KW",
        "BH",
        "US",
        "GB",
        "CA",
        "AU",
        "NO",
        "SG",
        "Worldwide",
      ],
      priceRange: "$$",
      currenciesAccepted: "USD, INR",
      paymentAccepted: "Bank Transfer, Wire Transfer",
      serviceType: [
        "Full Stack Development",
        "MERN Stack Development",
        "Node.js Development",
        "React Development",
        "Next.js Development",
        "AI Application Development",
        "SaaS Development",
        "Startup MVP Development",
        "Custom Software Development",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          ["Full Stack Development", "full-stack-development"],
          ["MERN Stack Development", "mern-development"],
          ["AI Application Development", "ai-development"],
          ["MVP Development", "mvp-development"],
          ["Custom Software Development", "custom-software-development"],
        ].map(([name, slug]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            url: `${BASE_URL}/services/${slug}`,
          },
        })),
      },
      founder: { "@id": `${BASE_URL}/#rahul-rp` },
      employee: { "@id": `${BASE_URL}/#rahul-rp` },
      sameAs: ["https://www.linkedin.com/company/stacklyn", "https://twitter.com/stacklyn"],
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#rahul-rp`,
      name: "Rahul R P",
      givenName: "Rahul",
      familyName: "R P",
      jobTitle: "Founder & CEO",
      description: FOUNDER_BIO,
      email: "rahulrp@stacklyn.in",
      telephone: "+91-95444-51720",
      nationality: { "@type": "Country", name: "India" },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/favicon.png`,
      worksFor: { "@id": `${BASE_URL}/#organization` },
      knowsAbout: [
        "Software Engineering",
        "AI Development",
        "Backend Development",
        "MERN Stack",
        "Cloud Architecture",
        "Node.js",
        "React",
        "Next.js",
        "TypeScript",
        "SaaS Development",
        "Startup MVP Development",
        "Full Stack Development",
        "LLM Application Development",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Cochin University of Science and Technology",
        alternateName: "CUSAT",
      },
      sameAs: ["https://www.linkedin.com/in/rahulrp07/"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Stacklyn",
      description: DEFAULT_DESCRIPTION,
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Go home
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0F4CFF" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: "Stacklyn" },
      { name: "publisher", content: "Stacklyn" },
      { name: "language", content: "English" },
      { name: "geo.region", content: "IN-KL" },
      { name: "geo.placename", content: "Kerala, India" },
      // Site-wide fallbacks. Every real page overrides these in its own head();
      // they exist so a route that ships without meta can never render untitled
      // or with an empty snippet in search results.
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Stacklyn" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Stacklyn — custom software and AI engineering" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@stacklyn" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: `${BASE_URL}/og-image.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // ── Inter font — display=swap eliminates FOIT; latin subset keeps payload small
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&subset=latin",
      },
      // ── Resource hints — reduces DNS + TLS handshake latency for third-parties
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
      { rel: "dns-prefetch", href: "https://wa.me" },
      // ── Icons
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      // ── Canonical entity graph (Organization + Person + WebSite) on every page.
      // Page-level schema references these nodes by @id instead of redefining them.
      {
        type: "application/ld+json",
        children: JSON.stringify(siteSchema),
      },
      // After a deploy, an open tab can request code chunks that no longer exist.
      // Reload once to pick up the new version; the 10s guard prevents a reload loop.
      {
        children: `window.addEventListener("vite:preloadError", function (event) {
  try {
    var key = "stacklyn-chunk-reload";
    if (Date.now() - Number(sessionStorage.getItem(key) || 0) < 10000) return;
    sessionStorage.setItem(key, String(Date.now()));
  } catch (e) { return; }
  event.preventDefault();
  window.location.reload();
});`,
      },
      // Google Analytics 4 on every page — production builds only, so local dev visits aren't recorded.
      // gtag() queues events immediately; the 170 KB library loads after the page is idle or on first
      // interaction, because loading it up front added ~600 ms of blocking time on mobile.
      ...(import.meta.env.PROD
        ? [
            {
              children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KJDV28CTWL');
(function () {
  var loaded = false;
  function load() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=G-KJDV28CTWL";
    document.head.appendChild(s);
  }
  ["scroll", "pointerdown", "keydown", "touchstart"].forEach(function (e) {
    window.addEventListener(e, load, { once: true, passive: true });
  });
  window.addEventListener("load", function () {
    if ("requestIdleCallback" in window) requestIdleCallback(load, { timeout: 4000 });
    else setTimeout(load, 3000);
  });
})();`,
            },
          ]
        : []),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <LeadCTA />
    </QueryClientProvider>
  );
}
