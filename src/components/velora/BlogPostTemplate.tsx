import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FAQ } from "./FAQ";
import { SchemaMarkup } from "./SchemaMarkup";
import { trackLead } from "@/lib/analytics";
import { blogPostPath, formatPostDate, type BlogPost } from "@/data/blog";

const BASE_URL = "https://stacklyn.in";

function headingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildSchema(post: BlogPost) {
  const url = `${BASE_URL}${blogPostPath(post.slug)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        "headline": post.title,
        "description": post.metaDescription,
        "datePublished": post.datePublished,
        "dateModified": post.dateModified,
        "articleSection": post.category,
        "keywords": post.keywords,
        "inLanguage": "en",
        "mainEntityOfPage": url,
        "image": `${BASE_URL}/og-image.png`,
        "author": { "@type": "Organization", "@id": `${BASE_URL}/#organization`, "name": "Stacklyn", "url": BASE_URL },
        "publisher": {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          "name": "Stacklyn",
          "logo": { "@type": "ImageObject", "url": `${BASE_URL}/favicon.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": url },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": post.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      },
    ],
  };
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const whatsappHref = `https://wa.me/919544451720?text=${encodeURIComponent(
    `Hi Stacklyn, I read your article "${post.title}" and would like to discuss a project.`,
  )}`;

  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={buildSchema(post)} />
      <Nav />

      <main className="pt-32 pb-12 md:pt-40">
        <article className="mx-auto max-w-3xl px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li className="opacity-40">/</li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li className="opacity-40">/</li>
              <li className="text-foreground font-medium">{post.category}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-medium text-primary">{post.category}</span>
            <time dateTime={post.dateModified}>Updated {formatPostDate(post.dateModified)}</time>
            <span aria-hidden>·</span>
            <span>{post.readMinutes} min read</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.1]">{post.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{post.dek}</p>

          <aside className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6" aria-label="Short answer">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Short answer</div>
            <p className="mt-2 text-base text-foreground leading-relaxed">{post.shortAnswer}</p>
          </aside>

          <nav aria-label="Contents" className="mt-10 rounded-2xl border border-border bg-surface/60 p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">In this guide</div>
            <ol className="mt-3 space-y-1.5 text-sm list-decimal pl-5">
              {post.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${headingId(section.heading)}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 id={headingId(section.heading)} className="scroll-mt-28 text-2xl md:text-3xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="mt-4 text-muted-foreground leading-relaxed">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-2 list-disc pl-6 text-muted-foreground leading-relaxed">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} scope="col" className="px-4 py-3 text-left font-semibold text-foreground">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, r) => (
                        <tr key={r} className="border-t border-border">
                          {row.map((cell, c) => (
                            <td key={c} className="px-4 py-3 align-top text-muted-foreground">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <div className="mt-16 rounded-2xl border border-border bg-surface/60 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Need this built for your operation?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Stacklyn builds custom oil and gas, industrial, and AI automation software. Tell us what you need and we
              reply within 24 hours, or get a ballpark price in two minutes with our free cost estimator.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackLead("whatsapp")}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-11 text-sm font-semibold hover:bg-[#1ebe5b] transition-colors"
              >
                Discuss on WhatsApp <span aria-hidden>→</span>
              </a>
              <a
                href="/tools/software-cost-estimator"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 h-11 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                Estimate your project cost
              </a>
            </div>
          </div>
        </article>

        <FAQ items={post.faqs} title="Frequently Asked Questions" includeSchema={false} />

        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Related</div>
            <div className="flex flex-wrap gap-3">
              {post.related.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {link.name} →
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
