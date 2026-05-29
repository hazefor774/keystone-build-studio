import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { StatusDot } from "./Kicker";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--line)] bg-ink-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M6 34 L20 6 L34 34" stroke="var(--teal-lit)" strokeWidth="2" />
              <path d="M13 34 L20 20 L27 34" stroke="var(--green)" strokeWidth="2" />
            </svg>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em] text-text"
              style={{ fontFamily: "var(--font-wordmark)" }}
            >
              Herman Stone <span className="text-teal-lit">INC</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Senior network engineering & security consulting for healthcare, enterprise, and
            public-sector clients across Southern California.
          </p>
        </div>
        <div>
          <h3 className="font-mono-label text-[11px] text-teal-lit">// Navigate</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              { to: "/services", label: "Services" },
              { to: "/packages", label: "Packages" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="font-mono-label text-[11px] hover:text-teal-lit">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono-label text-[11px] text-teal-lit">// Channel</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
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
          </ul>
          <div className="mt-5 flex flex-wrap gap-2 font-mono-label text-[10px] text-muted-foreground">
            <span className="border border-[var(--line)] px-2 py-1">SAM.gov</span>
            <span className="border border-[var(--line)] px-2 py-1">NPI 1043191950</span>
            <span className="border border-[var(--line)] px-2 py-1">CA Corp</span>
          </div>
        </div>
      </div>
      {/* Terminal status bar */}
      <div className="border-t border-[var(--line)] bg-ink-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 font-mono-label text-[10px] text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-4">
            <StatusDot label="System nominal" />
            <span className="hidden sm:inline">© HSI · CA Corp · 2024</span>
          </div>
          <div className="flex items-center gap-4">
            <span>UPTIME 99.99%</span>
            <a href="#" className="hover:text-teal-lit">Privacy</a>
            <a href="#" className="hover:text-teal-lit">Capabilities</a>
          </div>
        </div>
      </div>
    </footer>
  );
}