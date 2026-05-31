import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

// Mirrors the client-side schema in src/routes/contact.tsx — re-validated
// server-side so we never trust the browser payload.
const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  pkg: z.string().max(80),
  message: z.string().trim().min(10).max(2000),
  // Honeypot — bots fill this; humans don't see it.
  company_website: z.string().max(200).optional().or(z.literal("")),
  // Timestamp set on form mount; submissions faster than ~2s are bot-likely.
  startedAt: z.number().int().positive(),
});

// Best-effort in-memory rate limit (per Worker isolate). 5 submissions per
// IP per rolling 60s. Not a hard guarantee — for stricter limits add a KV
// or database-backed counter.
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;
const ipHits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
}

export type ContactResult =
  | { ok: true }
  | { ok: false; code: "validation" | "ratelimit" | "config" | "delivery"; message: string };

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }): Promise<ContactResult> => {
    // Honeypot — silently succeed so bots don't probe for the failure mode.
    if (data.company_website && data.company_website.trim().length > 0) {
      return { ok: true };
    }

    // Time-to-submit — anything under ~2s is almost certainly a bot.
    const elapsed = Date.now() - data.startedAt;
    if (elapsed < 2000) {
      return { ok: true };
    }

    // Rate limit per IP (best-effort).
    const ip = (() => {
      try {
        return getRequestIP({ xForwardedFor: true }) ?? "unknown";
      } catch {
        return "unknown";
      }
    })();
    if (rateLimited(ip)) {
      return {
        ok: false,
        code: "ratelimit",
        message: "Too many requests. Please try again in a minute.",
      };
    }

    // TODO(hsi-v5): set FORMSPREE_ID in project env (server-only secret).
    const formspreeId = process.env.FORMSPREE_ID;
    if (!formspreeId) {
      return {
        ok: false,
        code: "config",
        message: "Contact delivery is not yet configured.",
      };
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || "",
          engagement: data.pkg,
          message: data.message,
          _subject: `New inquiry — ${data.company} (${data.pkg})`,
        }),
      });
      if (!res.ok) {
        return {
          ok: false,
          code: "delivery",
          message: `Delivery failed (${res.status}).`,
        };
      }
      return { ok: true };
    } catch (err) {
      console.error("contact delivery error", err);
      return { ok: false, code: "delivery", message: "Network error during delivery." };
    }
  });