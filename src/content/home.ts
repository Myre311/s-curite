/** Contenu de la page d'accueil. */

export const home = {
  hero: {
    eyebrow: "Protection privée & services de prestige",
    title: "Sécurité, discrétion et excellence",
    titleAccent: "partout dans le monde.",
    subtitle:
      "Global Secure & Transport accompagne dirigeants, familles et personnalités exigeantes avec une maîtrise totale et une confidentialité absolue.",
    primaryCta: { label: "Demande de devis confidentielle", href: "/contact" },
    secondaryCta: { label: "Découvrir nos services", href: "#services" },
  },

  value: {
    eyebrow: "Notre engagement",
    title: "La tranquillité d'esprit, élevée au rang d'art.",
    body: "Nous concevons des dispositifs sur mesure, pensés pour préserver votre liberté autant que votre sécurité. Notre approche conjugue rigueur opérationnelle, élégance du service et discrétion sans faille.",
    pillars: [
      {
        title: "Discrétion absolue",
        body: "Chaque mission est couverte par un accord de confidentialité systématique.",
      },
      {
        title: "Maîtrise totale",
        body: "Anticipation, analyse de risque et exécution irréprochable à chaque instant.",
      },
      {
        title: "Standards internationaux",
        body: "Les mêmes exigences d'excellence, dans chaque juridiction où nous opérons.",
      },
    ],
  },

  servicesSection: {
    eyebrow: "Nos pôles d'excellence",
    title: "Cinq expertises, une même exigence.",
    body: "De la protection rapprochée à l'art de vivre, nous couvrons l'ensemble de vos besoins de sécurité et de service.",
  },

  zonesSection: {
    eyebrow: "Présence internationale",
    title: "Une rigueur identique, partout.",
    body: "Nous opérons sur les places où l'exigence est la plus haute, avec les mêmes standards de professionnalisme et de discrétion.",
    cta: { label: "Voir nos zones d'action", href: "/zones-d-action" },
  },

  confidentiality: {
    title: "Votre confidentialité est notre fondation.",
    body: "Chaque collaboration débute par un accord de non-divulgation (NDA) systématique. Vos informations, vos déplacements et vos missions demeurent strictement protégés.",
    cta: { label: "Notre politique de confidentialité", href: "/confidentialite" },
  },

  finalCta: {
    title: "Échangeons en toute confidentialité.",
    body: "Confiez-nous votre besoin. Nous vous répondons avec rigueur, discrétion et sens du détail.",
    cta: { label: "Demande de devis confidentielle", href: "/contact" },
  },
} as const;
