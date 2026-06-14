import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { faqPage, faqCategories } from "@/content/faq";

export const metadata: Metadata = {
 title: "FAQ — Questions fréquentes",
 description: faqPage.intro,
 robots: { index: true, follow: true },
};

export default function FaqPage() {
 // Données structurées (SEO) — schéma FAQPage.
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqCategories.flatMap((c) =>
 c.items.map((it) => ({
 "@type": "Question",
 name: it.q,
 acceptedAnswer: { "@type": "Answer", text: it.a },
 })),
 ),
 };

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />

 <PageHero
 eyebrow={faqPage.eyebrow}
 title={faqPage.title}
 intro={faqPage.intro}
 />

 <section className="py-20 sm:py-24">
 <Container className="max-w-3xl">
 <div className="space-y-16">
 {faqCategories.map((cat) => (
 <Reveal key={cat.title}>
 <div>
 <h2 className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-or">
 <span aria-hidden className="h-px w-8 bg-or/50" />
 {cat.title}
 </h2>
 <div className="mt-6 ">
 {cat.items.map((item) => (
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
 </div>
 </Reveal>
 ))}
 </div>

 {/* CTA confidentiel */}
 <Reveal>
 <div className="mt-20 rounded-xl bg-noir-soft p-8 text-center sm:p-12">
 <h2 className="text-2xl font-medium text-blanc">
 Une autre question ?
 </h2>
 <p className="mx-auto mt-3 max-w-xl leading-relaxed text-blanc/65">
 Chaque situation est unique et traitée avec une confidentialité
 absolue. Échangeons sur votre besoin.
 </p>
 <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
 <Button href="/contact" size="lg">
 Demande de devis confidentielle
 </Button>
 </div>
 </div>
 </Reveal>
 </Container>
 </section>
 </>
 );
}
