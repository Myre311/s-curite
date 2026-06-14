import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function ServiceCard({
 name,
 excerpt,
 href,
 index = 0,
 featured,
}: {
 name: string;
 excerpt: string;
 href: string;
 index?: number;
 featured?: boolean;
}) {
 return (
 <Reveal delay={index * 0.08}>
 <Link
 href={href}
 className={cn(
 "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-7 transition-all duration-300",
 featured
 ? "bg-gradient-to-br from-or/10 to-transparent"
 : "bg-noir-soft hover:bg-noir-elevated",
 )}
 >
 {/* Halo doré au survol */}
 <span
 aria-hidden
 className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-or/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
 />
 <div>
 <h3 className="text-xl font-medium text-blanc">{name}</h3>
 <p className="mt-3 text-sm leading-relaxed text-blanc/65">
 {excerpt}
 </p>
 </div>
 <span className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-or">
 En savoir plus
 <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
 </span>
 </Link>
 </Reveal>
 );
}
