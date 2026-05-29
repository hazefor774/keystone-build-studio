import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Calendar } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { Kicker, StatusDot } from "@/components/Kicker";
import { ArrowRight } from "lucide-react";

const searchSchema = z.object({
  pkg: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact — Herman Stone INC" },
      { name: "description", content: "Scope your project with a 30-minute intro call, or send a note. Senior network engineering and security consulting." },
      { property: "og:title", content: "Contact — Herman Stone INC" },
      { property: "og:description", content: "Let's scope your project." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(150),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  pkg: z.string().max(80),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const packageOptions = [
  { value: "HSI-001", label: "HSI-001 — Readiness Audit" },
  { value: "HSI-002", label: "HSI-002 — Segmentation Sprint" },
  { value: "HSI-003", label: "HSI-003 — Hybrid Cloud Baseline" },
  { value: "HSI-004", label: "HSI-004 — ZTNA / Admin Access" },
  { value: "HSI-005", label: "HSI-005 — SIEM Starter" },
  { value: "HSI-006", label: "HSI-006 — AI Guardrails" },
  { value: "HSI-007", label: "HSI-007 — MSP White-Label" },
  { value: "Other", label: "Other / not sure yet" },
];

function Contact() {
  const { pkg } = useSearch({ from: "/contact" });
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    pkg: pkg ?? "HSI-001",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      // TODO: wire to Supabase or Formspree.
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Thanks — we'll be in touch within one business day.");
      setForm({ name: "", company: "", email: "", phone: "", pkg: "HSI-001", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-24">
          <Kicker index="//" label="Contact" />
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl">
            Let's <span className="text-gradient-brand">scope your project.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground sm:text-lg">
            Send a note, or grab a slot on the calendar.
          </p>
          <div className="mt-6">
            <StatusDot label="Responding within 1 business day" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={onSubmit}
            data-form="contact-form"
            className="tech-card p-8"
          >
            <span className="tick-bl" />
            <span className="tick-br" />
            <Kicker index="//" label="Transmit" />
            <h2 className="mt-3 text-2xl font-bold">Send a note</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  className="field-input"
                  autoComplete="name"
                />
              </Field>
              <Field label="Company" error={errors.company}>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => onChange("company", e.target.value)}
                  className="field-input"
                  autoComplete="organization"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  className="field-input"
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone (optional)" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => onChange("phone", e.target.value)}
                  className="field-input"
                  autoComplete="tel"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Package / interest" error={errors.pkg}>
                  <select
                    value={form.pkg}
                    onChange={(e) => onChange("pkg", e.target.value)}
                    className="field-input"
                  >
                    {packageOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message" error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    rows={5}
                    className="field-input resize-y"
                    placeholder="What's the environment, the timeline, and what's pushing on you right now?"
                  />
                </Field>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary mt-8 w-full justify-center sm:w-auto"
            >
              {submitting ? "Sending…" : "Transmit"} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>

          <div className="space-y-6">
            <div className="tech-card p-8">
              <span className="tick-bl" />
              <span className="tick-br" />
              <Kicker index="//" label="Direct line" />
              <h2 className="mt-3 text-2xl font-bold">Or book a 30-minute intro call.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We'll discuss your environment, the highest-risk areas, and which package fits.
              </p>
              <div className="mt-6 overflow-hidden border border-[var(--line)] bg-ink-900">
                <iframe
                  src="https://calendly.com/hermanstone/intro"
                  title="Book an intro call"
                  className="h-[620px] w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 font-mono-label text-[10px] text-muted-foreground">
                Trouble seeing the calendar? Email{" "}
                <a href="mailto:hello@hermanstone.com" className="text-teal-lit hover:underline">
                  hello@hermanstone.com
                </a>{" "}
                directly.
              </p>
            </div>

            <div className="tech-card p-8">
              <span className="tick-bl" />
              <span className="tick-br" />
              <h3 className="font-mono-label text-[11px] text-teal-lit">// Channels</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-lit" />
                  <a className="hover:text-teal-lit" href="mailto:hello@hermanstone.com">
                    hello@hermanstone.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-lit" />
                  Serving Southern California
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-teal-lit" />
                  Response within 1 business day
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <TrustBadges />
        </div>
      </section>

    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono-label text-[10px] text-teal-lit">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}