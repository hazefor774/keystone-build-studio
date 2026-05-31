import { useEffect, useState } from "react";
import { firm } from "@/lib/firm-config";

const STORAGE_KEY = "hsi:analytics-consent:v1";
type Choice = "accepted" | "declined";

/**
 * Privacy-respecting consent banner. Analytics are loaded only after
 * explicit consent. Choice is persisted in localStorage.
 */
export function ConsentBanner() {
  const [choice, setChoice] = useState<Choice | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Choice | null;
    if (stored === "accepted" || stored === "declined") {
      setChoice(stored);
      if (stored === "accepted") loadAnalytics();
    }
  }, []);

  if (!firm.plausibleDomain) return null;
  if (choice) return null;

  const decide = (c: Choice) => {
    setChoice(c);
    window.localStorage.setItem(STORAGE_KEY, c);
    if (c === "accepted") loadAnalytics();
  };

  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl border border-[var(--hair)] bg-paper p-5 shadow-lg sm:p-6"
    >
      <p className="text-sm leading-relaxed text-ink">
        We use privacy-respecting analytics to understand which pages are useful. No
        cookies, no cross-site tracking, no personal data. See our{" "}
        <a href="/privacy" className="link-underline">
          privacy policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => decide("accepted")} className="btn-primary">
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => decide("declined")}
          className="text-sm uppercase tracking-[0.16em] text-ink-soft hover:text-ink"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

function loadAnalytics() {
  if (typeof document === "undefined") return;
  if (!firm.plausibleDomain) return;
  if (document.querySelector("script[data-plausible]")) return;
  const s = document.createElement("script");
  s.defer = true;
  s.setAttribute("data-domain", firm.plausibleDomain);
  s.setAttribute("data-plausible", "1");
  s.src = "https://plausible.io/js/script.js";
  document.head.appendChild(s);
}