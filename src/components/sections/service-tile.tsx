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

const ICONS: Record<string, LucideIcon> = {
 "protection-rapprochee": ShieldCheck,
 "enquetes-filatures": Search,
 "transport-personnalite": Car,
 conciergerie: ConciergeBell,
 majordome: Crown,
};

/**
 * Carré de service — visuel carré (photo) + titre EN DESSOUS (style rj2m).
 *
 * Le visuel utilise un dégradé doré placeholder. Pour une vraie photo,
 * remplacer le bloc `Fond` par :
 * <Image src="/photos/<slug>.jpg" alt="" fill className="object-cover" />
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

 return (
 <Reveal delay={index * 0.07}>
 <Link href={`/services/${slug}`} className="group block">
 {/* Visuel carré */}
 <div className="relative aspect-square overflow-hidden rounded-xl transition-all duration-500 ">
 {/* Fond (placeholder doré — à remplacer par une photo) */}
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
 </div>

 {/* Titre + texte EN DESSOUS */}
 <h3 className="mt-4 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-blanc transition-colors group-hover:text-or">
 {name}
 <ArrowUpRight className="h-4 w-4 text-or opacity-0 transition-all duration-300 group-hover:opacity-100" />
 </h3>
 <p className="mt-1.5 text-sm leading-relaxed text-blanc/55">{excerpt}</p>
 </Link>
 </Reveal>
 );
}
