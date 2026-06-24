import Link from "next/link";
import Image from "next/image";
import {
 ShieldCheck,
 Eye,
 Globe2,
 ArrowRight,
 AlertTriangle,
 BadgeCheck,
 ScrollText,
 Users,
 Quote,
 Plus,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { HomeHero } from "@/components/sections/home-hero";
import { ServiceTile } from "@/components/sections/service-tile";
import { PhotoBand } from "@/components/sections/photo-band";
import { CtaBand } from "@/components/sections/cta-band";
import { home } from "@/content/home";
import { services } from "@/content/services";
import { zones } from "@/content/zones";
import { faqCategories } from "@/content/faq";
import { ContactForm } from "@/app/contact/contact-form";
import { SERVICE_LABELS } from "@/app/contact/service-labels";

const pillarIcons = [ShieldCheck, Eye, Globe2];
const riskIcons = [AlertTriangle, Eye, ScrollText, ShieldCheck];
const trustIcons = [BadgeCheck, ScrollText, Users, Globe2];

export default function HomePage() {
 const faqPreview = faqCategories.flatMap((c) => c.items).slice(0, 5);

 return (
 <>
 <HomeHero />

 {/* 0. Service signature / premium — au-dessus des prestations */}
 <section className="relative overflow-hidden pt-20 pb-10 sm:py-28">
 <div
 aria-hidden
 className="absolute inset-0 bg-[radial-gradient(90%_90%_at_82%_15%,rgba(197,162,83,0.14),transparent_60%)]"
 />
 <Container className="relative">
 <div className="grid items-center gap-12 lg:grid-cols-2">
 <Reveal>
 <Eyebrow>{home.signature.eyebrow}</Eyebrow>
 <h2 className="mt-5 font-serif text-3xl font-medium leading-[1.1] sm:text-4xl md:text-5xl">
 <span className="text-gold-gradient">{home.signature.title}</span>
 </h2>
 <p className="mt-5 max-w-xl text-pretty leading-relaxed text-blanc/75">
 {home.signature.body}
 </p>
 <ul className="mt-7 space-y-3">
 {home.signature.points.map((pt) => (
 <li key={pt} className="flex items-start gap-3 text-blanc/85">
 <span
 aria-hidden
 className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-or"
 />
 {pt}
 </li>
 ))}
 </ul>
 <div className="mt-9">
 <Button
 href={home.signature.cta.href}
 size="lg"
 className="w-full sm:w-auto"
 >
 {home.signature.cta.label}
 </Button>
 </div>
 </Reveal>

 {/* Visuel premium — cliquable vers le service */}
 <Reveal delay={0.1}>
 <Link
 href={home.signature.cta.href}
 aria-label={home.signature.cta.label}
 className="group block"
 >
 <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-or/25 transition-all duration-500 group-hover:ring-or/50">
 <Image
 src="/photos/v3/signature-proches.jpg"
 alt={home.signature.title}
 fill
 sizes="(min-width: 1024px) 40vw, 100vw"
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 />
 <div
 aria-hidden
 className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/10 to-transparent"
 />
 </div>
 </Link>
 </Reveal>
 </div>
 </Container>
 </section>

 {/* 1. Services + zones d'intervention */}
 <section id="services" className="scroll-mt-24 pt-10 pb-24 sm:py-28">
 <Container>
 <SectionHeading
 centered
 eyebrow="Nos prestations"
 title="Services de protection et zones d'intervention"
 body={home.servicesSection.body}
 />
 <div className="mx-auto mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3">
 {services.map((s, i) => (
 <ServiceTile
 key={s.slug}
 slug={s.slug}
 name={s.name}
 excerpt={s.excerpt}
 index={i}
 />
 ))}
 </div>
 <div className="mt-20 text-center">
 <span className="text-xs font-medium uppercase tracking-[0.28em] text-or">
 Présence internationale
 </span>
 <h3 className="mt-3 font-serif text-2xl font-medium text-blanc sm:text-3xl">
 Nos zones d&apos;intervention
 </h3>
 </div>
 <Reveal>
 <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
 {zones.map((z) => (
 <span
 key={z.name}
 className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-blanc/75 ring-1 ring-or/20"
 >
 <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-or" />
 {z.name}
 </span>
 ))}
 </div>
 <div className="mt-8 flex justify-center">
 <Button href="/zones-d-action" variant="outline">
 Découvrir nos zones d&apos;intervention
 </Button>
 </div>
 </Reveal>
 </Container>
 </section>

 {/* 2. Les risques */}
 <section className=" bg-noir-soft py-24 sm:py-28">
 <Container>
 <SectionHeading
 eyebrow={home.risks.eyebrow}
 title={home.risks.title}
 body={home.risks.body}
 />
 <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {home.risks.items.map((item, i) => {
 const Icon = riskIcons[i] ?? AlertTriangle;
 return (
 <Reveal key={item.title} delay={i * 0.08}>
 <div className="flex h-full flex-col rounded-xl bg-noir p-6 transition-colors ">
 <Icon className="h-7 w-7 text-or" strokeWidth={1.4} />
 <h3 className="mt-5 text-base font-medium text-blanc">
 {item.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-blanc/60">
 {item.body}
 </p>
 </div>
 </Reveal>
 );
 })}
 </div>
 </Container>
 </section>

 {/* Bande visuelle — Saint-Tropez */}
 <PhotoBand
 src="/photos/v3/home-band-1.jpg"
 alt="Accompagnement discret d'un groupe dans les rues de Saint-Tropez"
 position="object-[center_30%]"
 />

 {/* 3. Agence haut de gamme, conçue pour rester invisible */}
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
 <div className="flex gap-4 rounded-lg bg-noir-soft p-5">
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

 {/* Bande visuelle — famille à Paris (Trocadéro) */}
 <PhotoBand
 src="/photos/v3/home-band-2.jpg"
 alt="Protection rapprochée d'une famille devant la tour Eiffel à Paris"
 position="object-[center_32%]"
 />

 {/* 4. Conformité / crédibilité (façon « agréée CNAPS ») */}
 <section className=" bg-noir-soft py-24 sm:py-28">
 <Container>
 <SectionHeading
 centered
 eyebrow={home.trust.eyebrow}
 title={home.trust.title}
 body={home.trust.body}
 />
 <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {home.trust.items.map((item, i) => {
 const Icon = trustIcons[i] ?? BadgeCheck;
 return (
 <Reveal key={item.title} delay={i * 0.08}>
 <div className="flex h-full flex-col items-center rounded-xl bg-noir p-7 text-center transition-colors ">
 <span className="flex h-12 w-12 items-center justify-center rounded-full ">
 <Icon className="h-6 w-6 text-or" strokeWidth={1.4} />
 </span>
 <h3 className="mt-5 text-base font-medium text-blanc">
 {item.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-blanc/60">
 {item.body}
 </p>
 </div>
 </Reveal>
 );
 })}
 </div>
 </Container>
 </section>

 {/* Bande visuelle — accompagnement scolaire à Marseille */}
 <PhotoBand
 src="/photos/v3/home-band-3.jpg"
 alt="Agent accompagnant un enfant à l'école dans une rue de Marseille"
 position="object-[center_45%]"
 />

 {/* 5. Témoignages */}
 <section className="py-24 sm:py-28">
 <Container>
 <SectionHeading
 centered
 eyebrow={home.testimonials.eyebrow}
 title={home.testimonials.title}
 />
 <div className="mt-14 grid gap-6 lg:grid-cols-3">
 {home.testimonials.items.map((t, i) => (
 <Reveal key={t.author + i} delay={i * 0.1}>
 <figure className="flex h-full flex-col rounded-xl bg-noir-soft p-8">
 <Quote className="h-8 w-8 text-or/50" />
 <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-blanc/85">
 « {t.quote} »
 </blockquote>
 <figcaption className="mt-6 pt-5">
 <span className="block text-sm font-medium text-blanc">
 {t.author}
 </span>
 <span className="text-xs uppercase tracking-[0.15em] text-or">
 {t.context}
 </span>
 </figcaption>
 </figure>
 </Reveal>
 ))}
 </div>
 </Container>
 </section>

 {/* 6. Processus / méthode */}
 <section className=" bg-noir-soft py-24 sm:py-28">
 <Container>
 <SectionHeading
 eyebrow={home.process.eyebrow}
 title={home.process.title}
 body={home.process.body}
 />
 <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {home.process.steps.map((step, i) => (
 <Reveal key={step.title} delay={i * 0.1}>
 <div className="relative h-full rounded-xl bg-noir p-7">
 <span className="font-serif text-4xl text-or/40">
 {String(i + 1).padStart(2, "0")}
 </span>
 <h3 className="mt-4 text-base font-medium text-blanc">
 {step.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-blanc/60">
 {step.body}
 </p>
 </div>
 </Reveal>
 ))}
 </div>
 </Container>
 </section>

 {/* 7. FAQ (aperçu) */}
 <section className="py-24 sm:py-28">
 <Container className="max-w-3xl">
 <SectionHeading
 centered
 eyebrow={home.faqPreview.eyebrow}
 title={home.faqPreview.title}
 body={home.faqPreview.body}
 className="mx-auto text-center"
 />
 <div className="mt-12 ">
 {faqPreview.map((item) => (
 <details key={item.q} className="group py-1">
 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium text-blanc transition-colors hover:text-or [&::-webkit-details-marker]:hidden">
 {item.q}
 <Plus
 aria-hidden
 className="h-5 w-5 shrink-0 text-or transition-transform duration-300 group-open:rotate-45"
 />
 </summary>
 <p className="pb-6 pr-9 leading-relaxed text-blanc/65">
 {item.a}
 </p>
 </details>
 ))}
 </div>
 <div className="mt-10 flex justify-center">
 <Button href={home.faqPreview.cta.href} variant="outline">
 {home.faqPreview.cta.label}
 </Button>
 </div>
 </Container>
 </section>

 {/* 7b. Demande de devis */}
 <section id="devis" className="scroll-mt-24 py-24 sm:py-28">
 <Container className="max-w-3xl">
 <SectionHeading
 centered
 eyebrow="Contact confidentiel"
 title="Demande de devis confidentielle"
 body="Chaque situation est unique. Décrivez votre besoin : nous revenons vers vous avec rigueur et discrétion."
 className="mx-auto text-center"
 />
 <Reveal>
 <div className="mt-12 rounded-2xl border border-or/25 bg-noir-soft p-6 shadow-[0_0_70px_-25px_rgba(197,162,83,0.35)] sm:p-10">
 <ContactForm serviceLabels={[...SERVICE_LABELS]} />
 </div>
 </Reveal>
 </Container>
 </section>

 {/* 8. Confidentialité */}
 <section className=" bg-noir-soft py-20">
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

 {/* 9. CTA final */}
 <CtaBand
 title={home.finalCta.title}
 body={home.finalCta.body}
 ctaLabel={home.finalCta.cta.label}
 ctaHref={home.finalCta.cta.href}
 />
 </>
 );
}
