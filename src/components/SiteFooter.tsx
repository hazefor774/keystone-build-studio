import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/herman-stone-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--hair)] bg-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-20 md:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-md">
          <img src={logo} alt="Herman Stone INC" className="h-12 w-auto" />
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
              { to: "/perspectives", label: "Perspectives" },
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