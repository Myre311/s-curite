import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "./contact-form";
import { SERVICE_LABELS } from "./service-labels";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
 title: "Contact confidentiel",
 description:
 "Contactez Global Secure & Transport pour une demande de devis confidentielle. Téléphone, email et WhatsApp.",
};

export default function ContactPage() {
 return (
 <>
 <PageHero
 eyebrow="Contact confidentiel"
 title="Échangeons en toute discrétion."
 intro="Confiez-nous votre besoin. Nous étudions chaque demande avec rigueur et confidentialité, et vous répondons dans les meilleurs délais."
 />

 <section className="py-20 sm:py-24">
 <Container>
 <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
 {/* Formulaire */}
 <Reveal>
 <div className="rounded-2xl bg-noir-soft/50 p-6 sm:p-8">
 <h2 className="mb-6 text-2xl font-medium text-blanc">
 Demande de devis
 </h2>
 <ContactForm serviceLabels={[...SERVICE_LABELS]} />
 </div>
 </Reveal>

 {/* Coordonnées directes */}
 <Reveal delay={0.1}>
 <div className="space-y-8">
 <div>
 <h2 className="text-xl font-medium text-blanc">
 Contact direct
 </h2>
 <p className="mt-2 text-sm leading-relaxed text-blanc/65">
 Pour toute demande urgente, joignez-nous directement.
 </p>
 </div>

 <ul className="space-y-4">
 <li>
 <a
 href={`tel:${siteConfig.contact.phoneHref}`}
 className="group flex items-center gap-4 rounded-lg bg-noir-soft p-4 transition-colors "
 >
 <span className="flex h-11 w-11 items-center justify-center rounded-full bg-or/10 text-or">
 <Phone className="h-5 w-5" />
 </span>
 <span>
 <span className="block text-xs uppercase tracking-[0.15em] text-blanc/45">
 Téléphone
 </span>
 <span className="text-blanc transition-colors group-hover:text-or">
 {siteConfig.contact.phoneDisplay}
 </span>
 </span>
 </a>
 </li>
 <li>
 <a
 href={whatsappUrl()}
 target="_blank"
 rel="noopener noreferrer"
 className="group flex items-center gap-4 rounded-lg bg-noir-soft p-4 transition-colors "
 >
 <span className="flex h-11 w-11 items-center justify-center rounded-full bg-or/10 text-or">
 <MessageCircle className="h-5 w-5" />
 </span>
 <span>
 <span className="block text-xs uppercase tracking-[0.15em] text-blanc/45">
 WhatsApp
 </span>
 <span className="text-blanc transition-colors group-hover:text-or">
 Discussion confidentielle
 </span>
 </span>
 </a>
 </li>
 <li>
 <a
 href={`mailto:${siteConfig.contact.email}`}
 className="group flex items-center gap-4 rounded-lg bg-noir-soft p-4 transition-colors "
 >
 <span className="flex h-11 w-11 items-center justify-center rounded-full bg-or/10 text-or">
 <Mail className="h-5 w-5" />
 </span>
 <span>
 <span className="block text-xs uppercase tracking-[0.15em] text-blanc/45">
 Email
 </span>
 <span className="break-all text-blanc transition-colors group-hover:text-or">
 {siteConfig.contact.email}
 </span>
 </span>
 </a>
 </li>
 </ul>

 <div className="flex items-start gap-3 rounded-lg bg-gradient-to-br from-or/10 to-transparent p-5">
 <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-or" />
 <p className="text-sm leading-relaxed text-blanc/75">
 Toute prise de contact est strictement confidentielle et
 couverte par un accord de non-divulgation systématique.
 </p>
 </div>
 </div>
 </Reveal>
 </div>
 </Container>
 </section>
 </>
 );
}
