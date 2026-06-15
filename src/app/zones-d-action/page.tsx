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
 <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
 {zones.map((z, i) => (
 <Reveal key={z.name} delay={i * 0.06}>
 <article className="group relative h-full overflow-hidden rounded-xl bg-[radial-gradient(130%_130%_at_75%_0%,rgba(197,162,83,0.12),transparent_55%),linear-gradient(160deg,#161519,#0c0c0e)] p-7 ring-1 ring-or/15 transition-all duration-500 hover:ring-or/45">
 {/* En-tête : nom + région */}
 <div className="flex items-center gap-2.5">
 <MapPin className="h-4 w-4 shrink-0 text-or" />
 <span className="text-[10px] uppercase tracking-[0.2em] text-or">
 {z.region}
 </span>
 </div>
 <h2 className="mt-3 font-serif text-2xl font-medium text-blanc sm:text-3xl">
 {z.name}
 </h2>
 <div aria-hidden className="mt-4 h-px w-12 bg-or/40" />
 <p className="mt-4 text-sm leading-relaxed text-blanc/70">
 {z.body}
 </p>
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
