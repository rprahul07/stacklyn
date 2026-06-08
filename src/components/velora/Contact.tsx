import { motion } from "framer-motion";
import { useState, useRef } from "react";

const projectTypes = ["Web App", "Mobile App", "AI Solution", "Cloud / DevOps", "SaaS Product", "Other"];
const budgets = ["< ₹2L", "₹2L – ₹5L", "₹5L – ₹15L", "₹15L+"];

const CONTACT_EMAIL = "veenaprasad@stacklyn.in";
const CONTACT_PHONE = "+91 99617 46849";
const CONTACT_PHONE_RAW = "919961746849";
const CONTACT_PERSON = "Veena Prasad";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const type = String(fd.get("type") || "");
    const budget = String(fd.get("budget") || "");
    const timeline = String(fd.get("timeline") || "");
    const description = String(fd.get("description") || "");

    const subject = `New project inquiry — ${name}${company ? ` (${company})` : ""}`;
    const body = [
      `Hi ${CONTACT_PERSON},`,
      ``,
      `You have a new project inquiry via stacklyn.in:`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Project Type: ${type}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      ``,
      `Project Description:`,
      description,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-balance"
          >
            Let's build something <span className="text-primary">exceptional.</span>
          </motion.h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Tell us about your project. Your inquiry comes straight to my inbox — I respond personally, usually within 24 hours.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-background px-5 py-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Contact Person</div>
            <div className="mt-1 text-base font-semibold text-foreground">{CONTACT_PERSON}</div>
<<<<<<< HEAD
            <div className="text-xs text-muted-foreground">Co-Founder · STACKLYN</div>
=======
            <div className="text-xs text-muted-foreground">Co-Founder · Stacklyn</div>
>>>>>>> fdf87caec5575d664952f1d0909b2725d7a76506
          </div>

          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1 text-sm font-medium text-foreground">{CONTACT_EMAIL}</div>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="mt-1 text-sm font-medium text-foreground">{CONTACT_PHONE}</div>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_PHONE_RAW}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="mt-1 text-sm font-medium text-foreground">{CONTACT_PHONE}</div>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Response within 24 hours
          </div>
        </div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 rounded-2xl border border-border bg-background p-8 shadow-card"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            <Field label="Company" name="company" placeholder="Acme Inc." required={false} />
            <Select label="Project Type" name="type" options={projectTypes} />
            <Select label="Budget" name="budget" options={budgets} />
            <Field label="Timeline" name="timeline" placeholder="e.g. Q3 2026" required={false} />
          </div>
          <div className="mt-5">
            <label htmlFor="description" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
              placeholder="Tell us about the problem you're solving, your users, and what success looks like."
            />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-muted-foreground">
              Submitting opens your email app and sends this directly to {CONTACT_EMAIL}.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-11 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors"
            >
              {submitted ? "Email opened ✓" : "Send Inquiry"}
              {!submitted && <span aria-hidden>→</span>}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required = true,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 h-11 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <select
        id={name} name={name} required
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 h-11 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
