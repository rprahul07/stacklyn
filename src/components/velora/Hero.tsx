import { NetworkVisual } from "./NetworkVisual";

// Above-the-fold content renders fully visible on the server, without entrance animations:
// the hero text is the page's Largest Contentful Paint element, so fading it in after
// JavaScript loads delayed LCP to 5+ seconds on mobile.
export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Serving the UAE, Saudi Arabia, Qatar, Oman &amp; worldwide
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05]">
            Oil &amp; Gas, Industrial &amp; AI Software
            <br />
            <span className="text-primary">for the Gulf and Beyond.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Stacklyn builds custom software for oil and gas, industrial, and growing businesses — digital permit to
            work, HSE, ICV reporting, operations dashboards, and AI automation. Senior engineers in Kerala, India,
            fixed-price phases, and a reply within 24 hours.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors"
            >
              Start Your Project
              <span aria-hidden>→</span>
            </a>
            <a
              href="/markets"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              Gulf Oil &amp; Gas Software
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-md gap-6 text-sm">
            {[
              ["10+", "Projects"],
              ["100%", "Satisfaction"],
              ["24h", "Response"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-semibold tracking-tight text-foreground">{n}</div>
                <div className="text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <NetworkVisual />
        </div>
      </div>
    </section>
  );
}
