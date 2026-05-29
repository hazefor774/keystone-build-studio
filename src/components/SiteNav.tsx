import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" aria-label="Herman Stone INC — Home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-teal" }}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground/80 transition hover:text-teal"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="gradient-brand inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
          >
            Book a Call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
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
              className="gradient-brand mt-2 inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-semibold text-white"
            >
              Book a Call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}