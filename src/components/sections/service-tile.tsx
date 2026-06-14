import Link from "next/link";
import {
  ShieldCheck,
  Search,
  Car,
  ConciergeBell,
  Crown,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "protection-rapprochee": ShieldCheck,
  "enquetes-filatures": Search,
  "transport-personnalite": Car,
  conciergerie: ConciergeBell,
  majordome: Crown,
};

/**
 * Carré de service — image de fond + titre superposé (style éditorial premium).
 *
 * Le fond utilise un dégradé doré + monogramme (placeholder). Pour une vraie
 * photo, remplacer le bloc `Fond` par :
 *   <Image src="/photos/<slug>.jpg" alt="" fill className="object-cover" />
 */
export function ServiceTile({
  slug,
  name,
  excerpt,
  index = 0,
  featured,
}: {
  slug: string;
  name: string;
  excerpt: string;
  index?: number;
  featured?: boolean;
}) {
  const Icon = ICONS[slug] ?? ShieldCheck;

  return (
    <Reveal delay={index * 0.07}>
      <Link
        href={`/services/${slug}`}
        className={cn(
          "group relative flex aspect-square flex-col justify-end overflow-hidden rounded-xl border p-6 transition-all duration-500",
          featured
            ? "border-or/45 hover:border-or"
            : "border-or/15 hover:border-or/50",
        )}
      >
        {/* Fond (placeholder doré — à remplacer par une photo) */}
        <div
          aria-hidden
          className="absolute inset-0 scale-100 bg-[radial-gradient(120%_120%_at_75%_0%,rgba(197,162,83,0.22),transparent_55%),linear-gradient(160deg,#17171a,#0a0a0b)] transition-transform duration-700 group-hover:scale-110"
        />
        {/* Voile sombre bas pour lisibilité */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent"
        />
        {/* Icône filigrane */}
        <Icon
          aria-hidden
          className="absolute right-5 top-5 h-12 w-12 text-or/25 transition-all duration-500 group-hover:text-or/40"
          strokeWidth={1}
        />
        {/* Contenu */}
        <div className="relative">
          <h3 className="font-serif text-2xl font-medium leading-tight text-blanc">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-blanc/65 line-clamp-2">
            {excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-or">
            Découvrir
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
