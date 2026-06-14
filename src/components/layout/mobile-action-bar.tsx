import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

/**
 * Barre d'actions rapides fixée en bas (mobile uniquement) — inspirée des
 * sites de sécurité (accès direct appel / WhatsApp / contact).
 */
export function MobileActionBar() {
  const itemClass =
    "flex flex-col items-center justify-center gap-1 py-2.5 text-or transition-colors active:bg-or/15";
  const labelClass =
    "text-[11px] font-medium uppercase tracking-wide text-blanc/85";

  return (
    <nav
      aria-label="Actions rapides"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-or/20 bg-noir/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <a href={`tel:${siteConfig.contact.phoneHref}`} className={itemClass}>
        <Phone className="h-5 w-5" />
        <span className={labelClass}>Appeler</span>
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`${itemClass} border-x border-or/15`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className={labelClass}>WhatsApp</span>
      </a>
      <Link href="/contact" className={itemClass}>
        <Mail className="h-5 w-5" />
        <span className={labelClass}>Contact</span>
      </Link>
    </nav>
  );
}
