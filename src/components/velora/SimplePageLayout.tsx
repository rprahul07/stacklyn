import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { SchemaMarkup } from "./SchemaMarkup";

interface SimplePageLayoutProps {
  title: string;
  eyebrow: string;
  intro?: string;
  lastUpdated?: string;
  schema?: object;
  children: ReactNode;
}

/** Layout for text pages such as About, Privacy Policy, and Terms. */
export function SimplePageLayout({ title, eyebrow, intro, lastUpdated, schema, children }: SimplePageLayoutProps) {
  return (
    <div className="bg-background text-foreground">
      {schema && <SchemaMarkup schema={schema} />}
      <Nav />
      <main className="pt-32 pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li className="opacity-40">/</li>
              <li className="text-foreground font-medium">{title}</li>
            </ol>
          </nav>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{eyebrow}</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">{title}</h1>
          {intro && <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
          {lastUpdated && <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>}
          <div className="mt-12 space-y-5 text-muted-foreground leading-relaxed [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-foreground">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
