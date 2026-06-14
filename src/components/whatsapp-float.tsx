import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";

/** Bouton WhatsApp flottant discret (doré), présent sur tout le site. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="group fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full border border-or/40 bg-noir-elevated text-or shadow-[0_8px_30px_-6px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 hover:border-or hover:bg-or hover:text-noir focus-visible:scale-105 lg:flex"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-noir-elevated px-3 py-1.5 text-xs text-blanc/90 opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Contact confidentiel
      </span>
    </a>
  );
}
