import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Engagements" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hair)] bg-[color-mix(in_oklab,var(--bone)_92%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Wordmark */}
        <Link to="/" aria-label="Herman Stone INC — Home" className="group flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="var(--ink)" strokeWidth="1.5" aria-hidden="true">
            <path d="M 12 30 L 28 30 L 32 14 L 8 14 Z" />
            <line x1="20" y1="6" x2="20" y2="34" stroke="var(--teal)" />
          </svg>
          <span
            className="text-[14px] font-bold uppercase tracking-[0.22em] text-ink"
            style={{ fontFamily: "var(--font-wordmark)" }}
          >
            Herman&nbsp;Stone
            <span className="ml-2 text-[10px] tracking-[0.3em] text-ink-soft">INC</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-ink after:scale-x-100" }}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-[13px] text-ink-soft transition-colors hover:text-ink after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-green after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label === "Blog" ? "Perspectives" : l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Book&nbsp;a&nbsp;scoping&nbsp;call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-ink/80 hover:text-teal-deep lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--hair)] bg-bone lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-8 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: l.to === "/" }}
                className="border-b border-[var(--hair)] py-4 text-base text-ink-soft hover:text-ink"
              >
                {l.label === "Blog" ? "Perspectives" : l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 justify-center">
              Book&nbsp;a&nbsp;scoping&nbsp;call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}