import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { firm } from "@/lib/firm-config";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--hair)] bg-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 py-12 sm:py-16 lg:py-20 md:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-md">
          <Logo stacked className="mb-1" />
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
              <a className="link-underline" href={`mailto:${firm.email}`}>
                {firm.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-ink-soft">
              <Phone className="h-3.5 w-3.5" />
              <a className="link-underline" href="tel:+12132929002">{firm.phone}</a>
            </li>
            <li className="flex items-start gap-2 text-ink-soft">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span>{firm.address}</span>
            </li>
          </ul>
          <div className="mt-8 space-y-1.5 font-mono-label text-[10px] text-ink-soft">
            <p>SAM.gov Registered</p>
            <p>California Corporation</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--hair)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 sm:px-8 py-6 font-mono-label text-[10px] text-ink-soft sm:flex-row">
          <span>
            © Herman Stone INC · California Corporation · {firm.address} · Tel {firm.phone}
          </span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
            <Link to="/ccpa" className="hover:text-ink">CCPA</Link>
            <Link to="/capabilities" className="hover:text-ink">Capabilities Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}