import Link from "next/link";
import Image from "next/image";
import {
 ShieldCheck,
 Search,
 Car,
 ConciergeBell,
 Crown,
 Ticket,
 ArrowUpRight,
 type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const ICONS: Record<string, LucideIcon> = {
 "protection-rapprochee": ShieldCheck,
 "enquetes-filatures": Search,
 "transport-personnalite": Car,
 conciergerie: ConciergeBell,
 majordome: Crown,
 billetterie: Ticket,
};

/** Slugs disposant d'une photo dans /public/photos/<slug>-0.jpg. */
const PHOTOS = new Set<string>([
 "protection-rapprochee",
 "enquetes-filatures",
 "transport-personnalite",
 "conciergerie",
]);

/**
 * Position de cadrage (object-position) par slug pour le carré d'accueil.
 * protection-rapprochee : décalage à droite pour conserver le client ET l'agent
 * (sinon l'agent à droite était coupé en un bout disgracieux).
 */
const TILE_OBJECT_POS: Record<string, string> = {
 "protection-rapprochee": "object-[70%_center]",
};

/**
 * Carré de service — visuel carré (photo) + titre EN DESSOUS (style rj2m).
 *
 * Si une photo existe pour le slug (cf. PHOTOS), on l'affiche en `object-cover`
 * avec un voile sombre pour la lisibilité ; sinon on retombe sur le dégradé
 * doré + icône.
 */
export function ServiceTile({
 slug,
 name,
 excerpt,
 index = 0,
}: {
 slug: string;
 name: string;
 excerpt: string;
 index?: number;
 featured?: boolean;
}) {
 const Icon = ICONS[slug] ?? ShieldCheck;
 const hasPhoto = PHOTOS.has(slug);

 return (
 <Reveal delay={index * 0.07}>
 <Link href={`/services/${slug}`} className="group block">
 {/* Visuel carré */}
 <div className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-or/15 transition-all duration-500 group-hover:ring-or/45">
 {hasPhoto ? (
 <>
 <Image
 src={`/photos/${slug}-0.jpg`}
 alt={name}
 fill
 sizes="(min-width: 1024px) 33vw, 50vw"
 className={`object-cover ${TILE_OBJECT_POS[slug] ?? "object-center"} transition-transform duration-700 group-hover:scale-110`}
 />
 {/* Voile sombre pour la lisibilité + accent doré au survol */}
 <div
 aria-hidden
 className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/15 to-transparent"
 />
 </>
 ) : (
 <>
 {/* Fond (placeholder doré) */}
 <div
 aria-hidden
 className="absolute inset-0 scale-100 bg-[radial-gradient(120%_120%_at_75%_0%,rgba(197,162,83,0.22),transparent_55%),linear-gradient(160deg,#1b1b20,#0a0a0b)] transition-transform duration-700 group-hover:scale-110"
 />
 <div
 aria-hidden
 className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent"
 />
 <Icon
 aria-hidden
 className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-or/30 transition-all duration-500 group-hover:scale-110 group-hover:text-or/45"
 strokeWidth={0.9}
 />
 </>
 )}
 </div>

 {/* Titre + texte EN DESSOUS */}
 <h3 className="mt-3 flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase leading-snug tracking-[0.1em] text-blanc transition-colors group-hover:text-or sm:mt-4 sm:text-sm sm:tracking-[0.12em]">
 {name}
 <ArrowUpRight className="hidden h-4 w-4 text-or opacity-0 transition-all duration-300 group-hover:opacity-100 sm:inline" />
 </h3>
 <p className="mt-1.5 hidden text-sm leading-relaxed text-blanc/55 sm:block">{excerpt}</p>
 </Link>
 </Reveal>
 );
}
