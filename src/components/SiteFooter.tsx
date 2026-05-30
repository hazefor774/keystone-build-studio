import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--hair)] bg-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-20 md:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" stroke="var(--ink)" strokeWidth="1.5" aria-hidden="true">
              <path d="M 12 30 L 28 30 L 32 14 L 8 14 Z" />
              <line x1="20" y1="6" x2="20" y2="34" stroke="var(--teal)" />
            </svg>
            <span
              className="text-[13px] font-bold uppercase tracking-[0.24em] text-ink"
              style={{ fontFamily: "var(--font-wordmark)" }}
            >
              Herman Stone <span className="text-ink-soft">INC</span>
            </span>
          </div>
          <p
            className="mt-6 text-lg leading-relaxed text-ink-soft"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A boutique advisory practice in senior network engineering and security — serving
            healthcare, enterprise, and public-sector clients across Southern California.
          </p>
        </div>
        <div>
          <h3 className="font-mono-label text-[10px] text-ink-soft">Navigate</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            {[
              { to: "/services", label: "Services" },
              { to: "/packages", label: "Engagements" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Perspectives" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono-label text-[10px] text-ink-soft">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-ink-soft" />
              <a className="link-underline" href="mailto:hello@hermanstone.com">
                hello@hermanstone.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-ink-soft">
              <MapPin className="h-3.5 w-3.5" />
              Serving Southern California
            </li>
          </ul>
          <div className="mt-8 space-y-1.5 font-mono-label text-[10px] text-ink-soft">
            <p>SAM.gov Registered</p>
            <p>NPI 1043191950</p>
            <p>California Corporation</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--hair)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 py-6 font-mono-label text-[10px] text-ink-soft sm:flex-row">
          <span>© Herman Stone INC · 2024 · California Corporation</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Capabilities Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}