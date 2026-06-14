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

  risks: {
    eyebrow: "Pourquoi anticiper",
    title: "Les risques de se déplacer sans protection.",
    body: "L'exposition d'un dirigeant, d'une personnalité ou d'une famille se gère en amont. Sans dispositif, chaque déplacement devient une vulnérabilité.",
    items: [
      {
        title: "Exposition publique",
        body: "Apparitions, sorties et événements rendent vos déplacements prévisibles et observables.",
      },
      {
        title: "Déplacements sensibles",
        body: "Trajets, hôtels et lieux inconnus multiplient les angles morts et les imprévus.",
      },
      {
        title: "Données personnelles",
        body: "Adresses, habitudes et entourage circulent plus qu'on ne le croit, en ligne comme hors ligne.",
      },
      {
        title: "Protection des proches",
        body: "Enfants et famille évoluent souvent sans couverture, là où ils sont les plus vulnérables.",
      },
    ],
  },

  trust: {
    eyebrow: "Une exigence encadrée",
    title: "Des opérations conformes, des équipes formées.",
    body: "Nos interventions respectent les cadres réglementaires de chaque juridiction et reposent sur des agents sélectionnés et formés en continu.",
    items: [
      {
        title: "Cadre réglementaire",
        body: "CNAPS en France, licences de sécurité au Royaume-Uni, cadres spécifiques au Maroc.",
      },
      {
        title: "NDA systématique",
        body: "Chaque mission est couverte par un accord de non-divulgation.",
      },
      {
        title: "Agents d'élite",
        body: "Recrutement rigoureux et formation continue pour une discrétion irréprochable.",
      },
      {
        title: "Standards uniformes",
        body: "La même rigueur à Marseille, Paris, Londres ou au Maroc.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Ils nous font confiance",
    title: "Ce que pensent nos clients.",
    items: [
      {
        quote:
          "Une présence que l'on oublie, une sécurité que l'on ne quitte jamais. Exactement ce que nous recherchions pour notre famille.",
        author: "Famille privée",
        context: "Côte d'Azur",
      },
      {
        quote:
          "Discrétion totale et anticipation parfaite lors de nos déplacements. Un véritable partenaire de confiance.",
        author: "Dirigeant",
        context: "Groupe international",
      },
      {
        quote:
          "La protection de mes enfants, assurée sans jamais empiéter sur leur liberté. Irréprochable.",
        author: "Cliente privée",
        context: "Paris",
      },
    ],
  },

  process: {
    eyebrow: "Notre méthode",
    title: "Comment se déroule une mise en place.",
    body: "Une approche structurée, confidentielle, pensée pour votre tranquillité d'esprit.",
    steps: [
      {
        title: "Prise de contact confidentielle",
        body: "Un premier échange protégé pour comprendre votre situation et vos attentes.",
      },
      {
        title: "Analyse de risque",
        body: "Évaluation rigoureuse de l'exposition, des déplacements et de l'environnement.",
      },
      {
        title: "Dispositif sur-mesure",
        body: "Un plan adapté à votre mode de vie — visible et formel, ou totalement discret.",
      },
      {
        title: "Déploiement & suivi",
        body: "Mise en œuvre par des agents d'élite, ajustée en continu à chaque mission.",
      },
    ],
  },

  faqPreview: {
    eyebrow: "Questions fréquentes",
    title: "Vous avez des questions ?",
    body: "Confidentialité, déroulé des missions, zones couvertes — retrouvez les réponses essentielles.",
    cta: { label: "Consulter la FAQ", href: "/faq" },
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
