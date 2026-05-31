import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { Kicker, StatusDot } from "@/components/Kicker";
import { firm } from "@/lib/firm-config";
import { submitContact } from "@/lib/api/contact.functions";

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

const engagementOptions = [
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
  const submit = useServerFn(submitContact);
  const startedAtRef = useRef<number>(Date.now());
  const [honeypot, setHoneypot] = useState("");
  useEffect(() => {
    // Reset on mount so the timestamp reflects the actual page view.
    startedAtRef.current = Date.now();
  }, []);
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
      const res = await submit({
        data: {
          ...result.data,
          phone: result.data.phone ?? "",
          company_website: honeypot,
          startedAt: startedAtRef.current,
        },
      });
      if (res.ok) {
        toast.success("Thanks — we'll be in touch within one business day.");
        setForm({ name: "", company: "", email: "", phone: "", pkg: "HSI-001", message: "" });
        setHoneypot("");
        startedAtRef.current = Date.now();
      } else {
        toast.error(`Couldn't send — email us at ${firm.email}`);
      }
    } catch (err) {
      console.error(err);
      toast.error(`Couldn't send — email us at ${firm.email}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-8 pb-16 pt-28">
          <Kicker index="—" label="Contact" />
          <h1
            className="mt-6 max-w-[22ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&rsquo;s <span className="italic text-teal-deep">scope your project.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Send a note, or grab a slot on the calendar. A thirty-minute scoping call is the
            fastest path to clarity.
          </p>
          <div className="mt-8">
            <StatusDot label="Responding within one business day" />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--hair)]">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid gap-20 lg:grid-cols-[1.2fr_1fr]">
            <form onSubmit={onSubmit} data-form="contact-form">
              {/* Honeypot — visually hidden from humans, harvested by bots. */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                <label>
                  Company website
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </label>
              </div>
              <Kicker index="01" label="Send a note" />
              <h2
                className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tell us about the work.
              </h2>
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
                <Field label="Engagement / interest" error={errors.pkg}>
                  <select
                    value={form.pkg}
                    onChange={(e) => onChange("pkg", e.target.value)}
                    className="field-input"
                  >
                    {engagementOptions.map((o) => (
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
                className="btn-primary mt-12 w-full justify-center sm:w-auto"
              >
                {submitting ? "Sending…" : "Request a scoped proposal"} <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>

            <div>
              <Kicker index="02" label="Or book directly" />
              <h2
                className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A thirty-minute scoping call.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                We&rsquo;ll discuss your environment, the highest-risk areas, and which
                engagement fits.
              </p>
              {firm.calendlyUrl ? (
                <>
                  <div className="mt-8 overflow-hidden border border-[var(--hair)] bg-paper">
                    <iframe
                      src={firm.calendlyUrl}
                      title="Book an intro call"
                      className="h-[620px] w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-sm text-ink-soft">
                    Trouble seeing the calendar? Email{" "}
                    <a href={`mailto:${firm.email}`} className="link-underline">
                      {firm.email}
                    </a>{" "}
                    directly.
                  </p>
                </>
              ) : (
                <div className="mt-8 border border-[var(--hair)] bg-paper p-10">
                  <p
                    className="text-xl font-medium leading-snug tracking-tight text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Booking opens shortly.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    Email{" "}
                    <a href={`mailto:${firm.email}`} className="link-underline">
                      {firm.email}
                    </a>{" "}
                    to grab a slot — we&rsquo;ll reply within one business day.
                  </p>
                </div>
              )}

              <ul className="mt-12 space-y-4 border-t border-[var(--hair)] pt-8 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-ink-soft" />
                  <a className="link-underline" href={`mailto:${firm.email}`}>
                    {firm.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-ink-soft">
                  <MapPin className="h-4 w-4" />
                  Serving Southern California
                </li>
                <li className="flex items-center gap-3 text-ink-soft">
                  <Calendar className="h-4 w-4" />
                  Response within one business day
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 border-t border-[var(--hair)] pt-10">
            <TrustBadges />
          </div>
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
      <span className="mb-1 block font-mono-label text-[10px] text-ink-soft">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}