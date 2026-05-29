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
    <div className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-5 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-8 sm:py-4">
        {/* Logo + wordmark */}
        <Link to="/" aria-label="Herman Stone INC — Home" className="group flex items-center gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M8 32L20 8L32 32" stroke="var(--teal)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 32L20 20L26 32" stroke="var(--green)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold uppercase tracking-tight text-foreground sm:text-lg">
              Herman Stone
            </span>
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-green/90">
              Consulting Inc
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-[13px] font-medium text-muted-foreground transition-colors hover:text-teal"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="gradient-brand hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(14,138,148,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(14,138,148,0.4)] active:translate-y-0 active:scale-95 sm:inline-flex"
          >
            Book a Call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-foreground/70 hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-border/60 bg-background/95 p-3 shadow-lg backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-teal" }}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="gradient-brand mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
            >
              Book a Call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}