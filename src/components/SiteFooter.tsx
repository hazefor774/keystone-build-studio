import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Senior network engineering & security consulting for healthcare, enterprise, and
            public-sector clients across Southern California.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/services", label: "Services" },
              { to: "/packages", label: "Packages" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-teal">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal" />
              <a className="hover:text-teal" href="mailto:hello@hermanstone.com">
                hello@hermanstone.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal" />
              Serving Southern California
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-muted px-2.5 py-1">SAM.gov Registered</span>
            <span className="rounded-full bg-muted px-2.5 py-1">NPI 1043191950</span>
            <span className="rounded-full bg-muted px-2.5 py-1">California Corp.</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© Herman Stone INC. California corporation, founded 2024.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-teal">Privacy</a>
            <a href="#" className="hover:text-teal">Capabilities Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}