import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { services, getService } from "@/content/services";

/**
 * Nombre de photos disponibles par service, dans /public/photos/<slug>-<i>.jpg
 * (un visuel par module, dans l'ordre des modules de services.ts).
 */
const SERVICE_PHOTO_COUNTS: Record<string, number> = {
 "protection-rapprochee": 3,
 "enquetes-filatures": 3,
 "transport-personnalite": 1,
 conciergerie: 1,
};

export function generateStaticParams() {
 return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
 props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
 const { slug } = await props.params;
 const service = getService(slug);
 if (!service) return {};
 return {
 title: service.name,
 description: service.excerpt,
 openGraph: { title: service.name, description: service.excerpt },
 };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
 const { slug } = await props.params;
 const service = getService(slug);
 if (!service) notFound();

 return (
 <>
 <PageHero
 eyebrow={service.tagline}
 title={service.name}
 intro={service.intro}
 />

 <section className="py-20 sm:py-24">
 <Container>
 <div className="space-y-16">
 {service.modules.map((mod, i) => (
 <Reveal key={mod.title}>
 <article
 className={
 "grid gap-8 lg:grid-cols-2 lg:items-center" +
 (mod.signature
 ? " rounded-2xl bg-gradient-to-br from-or/10 to-transparent p-6 sm:p-10"
 : "")
 }
 >
 <div className={i % 2 === 1 ? "lg:order-2" : ""}>
 <h2 className="text-2xl font-medium text-blanc sm:text-3xl">
 {mod.title}
 </h2>
 <p className="mt-4 leading-relaxed text-blanc/70">
 {mod.body}
 </p>
 {mod.points ? (
 <ul className="mt-6 space-y-3">
 {mod.points.map((pt) => (
 <li key={pt} className="flex items-start gap-3">
 <Check className="mt-0.5 h-5 w-5 shrink-0 text-or" />
 <span className="text-blanc/80">{pt}</span>
 </li>
 ))}
 </ul>
 ) : null}
 </div>
 <div className={i % 2 === 1 ? "lg:order-1" : ""}>
 <MediaPlaceholder
 aspectRatio="4 / 3"
 label={`Visuel — ${mod.title}`}
 src={
 i < (SERVICE_PHOTO_COUNTS[service.slug] ?? 0)
 ? `/photos/${service.slug}-${i}.jpg`
 : undefined
 }
 alt={`${service.name} — ${mod.title}`}
 />
 </div>
 </article>
 </Reveal>
 ))}
 </div>

 {/* Réassurance */}
 <Reveal>
 <div className="mt-16 flex items-start gap-4 rounded-lg bg-noir-soft p-6">
 <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-or" />
 <p className="text-sm leading-relaxed text-blanc/75">
 {service.reassurance}
 </p>
 </div>
 </Reveal>

 <div className="mt-12">
 <Link
 href="/#services"
 className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-or transition-colors hover:text-or-clair"
 >
 <ArrowLeft className="h-4 w-4" />
 Tous nos services
 </Link>
 </div>
 </Container>
 </section>

 <CtaBand
 title="Discutons de votre besoin, en toute confidentialité."
 body="Chaque dispositif est conçu sur mesure. Contactez-nous pour une étude personnalisée."
 ctaLabel="Demande de devis confidentielle"
 />
 </>
 );
}
