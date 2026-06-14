import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/brand-mark";
import { services } from "@/content/services";
import { zones } from "@/content/zones";
import { footerNav } from "@/content/navigation";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-or/15 bg-noir-soft">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marque + confidentialité */}
          <div>
            <BrandMark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-blanc/60">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-blanc/45">
              Chaque mission est couverte par un accord de confidentialité
              (NDA) systématique.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="text-xs uppercase tracking-[0.2em] text-or">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-blanc/70 transition-colors hover:text-or"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zones */}
          <nav aria-label="Zones d'action">
            <h2 className="text-xs uppercase tracking-[0.2em] text-or">
              Zones d&apos;action
            </h2>
            <ul className="mt-4 space-y-2.5">
              {zones.map((z) => (
                <li key={z.name} className="text-sm text-blanc/70">
                  {z.name}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-or">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="flex items-center gap-2.5 text-blanc/70 transition-colors hover:text-or"
                >
                  <Phone className="h-4 w-4 shrink-0 text-or" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-blanc/70 transition-colors hover:text-or"
                >
                  <Mail className="h-4 w-4 shrink-0 text-or" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-blanc/70 transition-colors hover:text-or"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-or" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-blanc/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-or" />
                {siteConfig.legal.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-or/10 pt-8 text-xs text-blanc/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legal.company}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerNav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-or"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/confidentialite"
              className="transition-colors hover:text-or"
            >
              Confidentialité &amp; Mentions légales
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
