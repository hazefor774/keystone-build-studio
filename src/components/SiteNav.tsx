import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--ink-900)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Wordmark */}
        <Link to="/" aria-label="Herman Stone INC — Home" className="group flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M6 34 L20 6 L34 34" stroke="var(--teal-lit)" strokeWidth="2" />
            <path d="M13 34 L20 20 L27 34" stroke="var(--green)" strokeWidth="2" />
          </svg>
          <span
            className="text-[15px] font-bold uppercase tracking-[0.18em] text-text"
            style={{ fontFamily: "var(--font-wordmark)" }}
          >
            Herman&nbsp;Stone
            <span className="ml-2 text-[10px] tracking-[0.3em] text-teal-lit">INC</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-teal-lit" }}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative font-mono-label text-[11px] text-muted-foreground transition-colors hover:text-text"
            >
              <span className="mr-1.5 text-ink-600">{String(i).padStart(2, "0")}</span>
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-teal-lit transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Book&nbsp;a&nbsp;Call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-text/80 hover:text-teal-lit lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-ink-900 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-teal-lit" }}
                activeOptions={{ exact: l.to === "/" }}
                className="border-b border-[var(--line)] py-3 font-mono-label text-xs text-muted-foreground hover:text-text"
              >
                <span className="mr-2 text-ink-600">{String(i).padStart(2, "0")}</span>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 justify-center">
              Book&nbsp;a&nbsp;Call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}