import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  type: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().optional(),
  description: z.string().min(1),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(ContactSchema)
  .handler(async ({ data }) => {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("[contact] Missing GOOGLE_SCRIPT_URL env var");
      throw new Error("Contact form not configured.");
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("[contact] Google Script error:", res.status, await res.text());
      throw new Error("Failed to submit form.");
    }

    const json = await res.json() as { ok: boolean; error?: string };
    if (!json.ok) {
      console.error("[contact] Script returned error:", json.error);
      throw new Error("Failed to submit form.");
    }

    return { ok: true };
  });
