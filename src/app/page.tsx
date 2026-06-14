import Link from "next/link";
import { ShieldCheck, Eye, Globe2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { HomeHero } from "@/components/sections/home-hero";
import { ServiceTile } from "@/components/sections/service-tile";
import { CtaBand } from "@/components/sections/cta-band";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { home } from "@/content/home";
import { services } from "@/content/services";
import { zones } from "@/content/zones";

const pillarIcons = [ShieldCheck, Eye, Globe2];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Proposition de valeur */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow={home.value.eyebrow}
              title={home.value.title}
              body={home.value.body}
            />
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {home.value.pillars.map((p, i) => {
                const Icon = pillarIcons[i] ?? ShieldCheck;
                return (
                  <Reveal key={p.title} delay={i * 0.1}>
                    <div className="flex gap-4 rounded-lg border border-or/15 bg-noir-soft p-5">
                      <Icon className="h-6 w-6 shrink-0 text-or" />
                      <div>
                        <h3 className="text-base font-medium text-blanc">
                          {p.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-blanc/60">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Aperçu des services */}
      <section id="services" className="scroll-mt-24 py-24 sm:py-28">
        <Container>
          <SectionHeading
            centered
            eyebrow={home.servicesSection.eyebrow}
            title={home.servicesSection.title}
            body={home.servicesSection.body}
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceTile
                key={s.slug}
                slug={s.slug}
                name={s.name}
                excerpt={s.excerpt}
                index={i}
                featured={s.slug === "protection-rapprochee"}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Zones d'action */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <MediaPlaceholder
                  aspectRatio="4 / 3"
                  label="Visuel — présence internationale"
                />
              </Reveal>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow={home.zonesSection.eyebrow}
                title={home.zonesSection.title}
                body={home.zonesSection.body}
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                  {zones.map((z) => (
                    <li
                      key={z.name}
                      className="flex items-center gap-2.5 text-blanc/80"
                    >
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-or" />
                      {z.name}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={home.zonesSection.cta.href} variant="outline">
                    {home.zonesSection.cta.label}
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Bande confidentialité */}
      <section className="border-y border-or/15 bg-noir-soft py-20">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl font-medium text-blanc sm:text-3xl">
              {home.confidentiality.title}
            </h2>
            <p className="mt-4 leading-relaxed text-blanc/70">
              {home.confidentiality.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href={home.confidentiality.cta.href}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm uppercase tracking-[0.15em] text-or transition-colors hover:text-or-clair"
            >
              {home.confidentiality.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title={home.finalCta.title}
        body={home.finalCta.body}
        ctaLabel={home.finalCta.cta.label}
        ctaHref={home.finalCta.cta.href}
      />
    </>
  );
}
