import { createFileRoute } from "@tanstack/react-router";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";
import { Nav } from "@/components/velora/Nav";
import { Footer } from "@/components/velora/Footer";
import { blogPostPath, blogPosts, formatPostDate } from "@/data/blog";

const BASE_URL = "https://stacklyn.in";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BASE_URL}/blog#blog`,
  "name": "Stacklyn Blog",
  "description":
    "Practical guides on oil and gas software, permit to work, HSE, ICV reporting, software costs, and outsourcing development to India.",
  "url": `${BASE_URL}/blog`,
  "publisher": { "@type": "Organization", "@id": `${BASE_URL}/#organization`, "name": "Stacklyn", "url": BASE_URL },
  "blogPost": blogPosts.map((post) => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "url": `${BASE_URL}${blogPostPath(post.slug)}`,
    "datePublished": post.datePublished,
    "description": post.metaDescription,
  })),
};

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Oil & Gas Software, HSE, ICV & Outsourcing Guides | Stacklyn" },
      {
        name: "description",
        content:
          "Practical guides for oil and gas and industrial companies: permit to work systems, UAE ICV certificates, what custom HSE software costs, and how to outsource development to India.",
      },
      {
        name: "keywords",
        content:
          "permit to work guide, UAE ICV certificate guide, oil and gas software cost, HSE software cost, outsource software development India, oil and gas software blog",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/blog` },
      { property: "og:title", content: "Stacklyn Blog — Oil & Gas Software, HSE, ICV & Outsourcing Guides" },
      {
        property: "og:description",
        content: "Practical guides on permit to work, ICV certificates, software costs, and outsourcing to India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <SchemaMarkup schema={blogSchema} />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li className="opacity-40">/</li>
            <li className="text-foreground font-medium">Blog</li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Guides for Oil &amp; Gas and Industrial Teams</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Plain answers on permit to work systems, in-country value certificates, what custom software costs, and how to
          work with a development team in India.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={blogPostPath(post.slug)}
              className="group rounded-2xl border border-border bg-background p-7 hover:border-primary/40 hover:bg-surface transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="font-medium text-primary">{post.category}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                <span aria-hidden>·</span>
                <span>{post.readMinutes} min read</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.metaDescription}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">Read the guide →</span>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-10 text-center">
          <h2 className="text-2xl font-semibold">Have a project in mind?</h2>
          <p className="mt-3 text-muted-foreground">
            Get a ballpark price in two minutes, or talk to our engineers directly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/tools/software-cost-estimator"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-11 text-sm font-medium hover:bg-primary-deep transition-colors"
            >
              Estimate your project cost
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 h-11 text-sm font-medium hover:bg-surface transition-colors"
            >
              Send an enquiry
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
