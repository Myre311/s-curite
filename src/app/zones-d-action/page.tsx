import type { Metadata } from "next";
import { MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { zones, zonesPage } from "@/content/zones";

export const metadata: Metadata = {
 title: "Zones d'action",
 description: zonesPage.intro,
};

export default function ZonesPage() {
 return (
 <>
 <PageHero
 eyebrow={zonesPage.eyebrow}
 title={zonesPage.title}
 intro={zonesPage.intro}
 />

 <section className="py-20 sm:py-24">
 <Container>
 <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
 {zones.map((z, i) => (
 <Reveal key={z.name} delay={i * 0.06}>
 <article className="group">
 {/* Photo de la ville (placeholder doré — à remplacer par une vraie
 photo : <Image src="/photos/zones/<ville>.jpg" fill className="object-cover" />) */}
 <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-or/15 transition-all duration-500 group-hover:ring-or/45">
 <div
 aria-hidden
 className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_0%,rgba(197,162,83,0.22),transparent_55%),linear-gradient(160deg,#1b1b20,#0a0a0b)] transition-transform duration-700 group-hover:scale-105"
 />
 <MapPin
 aria-hidden
 className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-or/35"
 strokeWidth={1}
 />
 </div>
 {/* Texte EN DESSOUS de la photo */}
 <div className="mt-4">
 <span className="text-[10px] uppercase tracking-[0.22em] text-or">
 {z.region}
 </span>
 <h2 className="mt-1 font-serif text-2xl font-medium text-blanc sm:text-3xl">
 {z.name}
 </h2>
 <p className="mt-2.5 text-sm leading-relaxed text-blanc/65">
 {z.body}
 </p>
 </div>
 </article>
 </Reveal>
 ))}
 </div>

 <Reveal>
 <div className="mt-12 flex items-start gap-4 rounded-lg bg-noir-soft p-6">
 <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-or" />
 <p className="text-sm leading-relaxed text-blanc/75">
 {zonesPage.reassurance}
 </p>
 </div>
 </Reveal>
 </Container>
 </section>

 <CtaBand
 title="Où que vous soyez, la même exigence vous accompagne."
 ctaLabel="Demande de devis confidentielle"
 />
 </>
 );
}
