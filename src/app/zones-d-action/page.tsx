import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
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
 {/* Photo de la ville */}
 <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-or/15 transition-all duration-500 group-hover:ring-or/45">
 <Image
 src={z.photo}
 alt={z.name}
 fill
 sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 />
 <div
 aria-hidden
 className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent"
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
