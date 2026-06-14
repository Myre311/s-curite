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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z, i) => (
              <Reveal key={z.name} delay={i * 0.06}>
                <article className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl border border-or/15 transition-all duration-500 hover:border-or/50">
                  {/* Fond image (placeholder doré — à remplacer par une photo du lieu) */}
                  <div
                    aria-hidden
                    className="absolute inset-0 scale-100 bg-[radial-gradient(120%_120%_at_70%_0%,rgba(197,162,83,0.20),transparent_55%),linear-gradient(160deg,#17171a,#0a0a0b)] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-noir via-noir/55 to-transparent"
                  />
                  {/* Contenu */}
                  <div className="relative p-7">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 text-or" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-or">
                        {z.region}
                      </span>
                    </div>
                    <h2 className="mt-2 font-serif text-3xl font-medium text-blanc">
                      {z.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-blanc/70">
                      {z.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex items-start gap-4 rounded-lg border border-or/15 bg-noir-soft p-6">
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
