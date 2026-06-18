/**
 * Contenu des 5 pôles de services — rédigé en français, ton sobre et premium.
 * Source unique de vérité : les pages services consomment ces données.
 */

export type ServiceModule = {
  title: string;
  /** Texte descriptif (1 à 3 phrases). */
  body: string;
  /** Liste de points clés optionnelle. */
  points?: string[];
  /** Met en avant le module comme service signature. */
  signature?: boolean;
};

export type Service = {
  slug: string;
  /** Titre court pour la navigation et les cartes. */
  name: string;
  /** Accroche affichée sous le titre. */
  tagline: string;
  /** Résumé d'une phrase pour les cartes d'aperçu. */
  excerpt: string;
  /** Introduction longue en haut de la page service. */
  intro: string;
  /** Modules / modalités détaillés. */
  modules: ServiceModule[];
  /** Phrase de réassurance en bas de page. */
  reassurance: string;
};

export const services: Service[] = [
  {
    slug: "protection-rapprochee",
    name: "Protection Rapprochée",
    tagline: "Une présence maîtrisée, une tranquillité absolue.",
    excerpt:
      "Dispositifs de protection sur mesure pour dirigeants, personnalités et leurs proches.",
    intro:
      "Notre protection rapprochée repose sur l'anticipation, la discrétion et une maîtrise totale de chaque situation. Chaque dispositif est conçu après une analyse de risque rigoureuse et adapté au mode de vie de la personne protégée. L'objectif n'est pas de contraindre, mais de préserver la liberté de mouvement en toute sérénité.",
    modules: [
      {
        title: "Protection Professionnelle",
        body: "Un dispositif formel et protocolaire pour les diplomates, dirigeants et personnalités publiques. Coordination des déplacements, sécurisation des lieux et gestion des contacts, dans le respect des usages officiels.",
        points: [
          "Évaluation et planification des risques",
          "Sécurisation des sites et itinéraires",
          "Coordination protocolaire et logistique",
        ],
      },
      {
        title: "Protection en Tenue Civile",
        body: "Une vigilance constante sans signature visible. Nos agents s'intègrent naturellement à l'environnement de la personne protégée pour assurer une sécurité de tous les instants, sans rupture du quotidien.",
        points: [
          "Intégration discrète à l'environnement",
          "Surveillance permanente et réactive",
          "Préservation de la vie privée",
        ],
      },
      {
        title: "Protection Discrète des Proches",
        signature: true,
        body: "Notre service signature. Une surveillance invisible des personnes qui vous sont chères — notamment des enfants — dans leurs cadres privés et de loisirs : sorties, activités, voyages. Une sécurité présente sans jamais interférer avec la liberté et la spontanéité de chacun.",
        points: [
          "Veille discrète lors des sorties et activités",
          "Accompagnement protégé en voyage",
          "Respect total de l'autonomie et de l'intimité",
          "Comptes rendus confidentiels aux personnes habilitées",
        ],
      },
    ],
    reassurance:
      "Chaque mission est encadrée par un accord de confidentialité systématique. Nos agents sont sélectionnés, formés et tenus à une discrétion absolue.",
  },
  {
    slug: "enquetes-filatures",
    name: "Enquêtes & Filatures (service de détective)",
    tagline: "La vérité, établie avec rigueur et discrétion.",
    excerpt:
      "Détective privé : investigations familiales, commerciales et immobilières.",
    intro:
      "Nos enquêtes sont menées dans le strict respect du cadre légal, avec une méthode rigoureuse et une discrétion sans faille. Nous recueillons des éléments factuels, exploitables et documentés, pour vous permettre de décider en toute connaissance de cause.",
    modules: [
      {
        title: "Sphère Familiale",
        body: "Accompagnement des situations privées sensibles avec tact et confidentialité.",
        points: [
          "Conflits familiaux et contrôle de fréquentation",
          "Constats d'adultère",
          "Protection et localisation de mineurs",
        ],
      },
      {
        title: "Sphère Commerciale",
        body: "Protection des intérêts de l'entreprise face aux risques internes et externes.",
        points: [
          "E-réputation et veille",
          "Concurrence déloyale et espionnage industriel",
          "Arrêts de travail abusifs et travail dissimulé",
          "Vérifications de solvabilité",
        ],
      },
      {
        title: "Sphère Immobilière",
        body: "Vérifications approfondies pour sécuriser vos transactions et préserver vos actifs.",
        points: [
          "Vérifications préalables aux transactions",
          "Contrôle d'occupation et d'usage",
          "Sécurisation des actifs immobiliers",
        ],
      },
    ],
    reassurance:
      "Nos investigations respectent scrupuleusement la législation en vigueur. Les éléments recueillis sont traités en toute confidentialité, sous accord de non-divulgation.",
  },
  {
    slug: "transport-personnalite",
    name: "Transport avec Chauffeur privé pour Tout déplacement et transfert",
    tagline: "Le confort absolu, sous protection permanente.",
    excerpt:
      "Mobilité premium : déplacements sécurisés, point à point, en toute sérénité.",
    intro:
      "Le transport avec chauffeur privé allie l'exigence du confort à la rigueur de la sécurité. De votre point de départ à votre destination, chaque déplacement est planifié, sécurisé et exécuté par des chauffeurs-agents formés à la conduite de sûreté.",
    modules: [
      {
        title: "Mobilité Premium",
        body: "Des déplacements sécurisés de point A à point B, conjuguant confort absolu et protocoles de sécurité avancés. Véhicules haut de gamme, itinéraires étudiés et discrétion permanente.",
        points: [
          "Chauffeurs-agents formés à la conduite de sûreté",
          "Itinéraires planifiés et solutions de repli",
          "Véhicules premium et confidentialité",
          "Coordination avec votre dispositif de protection",
        ],
      },
    ],
    reassurance:
      "Vos déplacements demeurent strictement confidentiels. Aucun détail de trajet, d'horaire ou de destination n'est divulgué.",
  },
  {
    slug: "conciergerie",
    name: "Conciergerie",
    tagline: "Votre quotidien, orchestré avec exigence.",
    excerpt:
      "Gestion déléguée des besoins quotidiens, logistiques et administratifs.",
    intro:
      "Notre conciergerie prend en charge la gestion de votre quotidien afin de vous libérer l'esprit. Pensée pour une clientèle internationale exigeante, elle conjugue réactivité, anticipation et confidentialité.",
    modules: [
      {
        title: "Gestion Déléguée",
        body: "Une prise en charge complète de vos besoins quotidiens, logistiques et administratifs, partout où vous vous trouvez.",
        points: [
          "Organisation et logistique du quotidien",
          "Démarches administratives déléguées",
          "Coordination de prestataires de confiance",
          "Disponibilité adaptée aux fuseaux horaires",
        ],
      },
    ],
    reassurance:
      "Chaque demande est traitée avec la plus grande confidentialité, dans le respect de vos exigences et de votre intimité.",
  },
  {
    slug: "majordome",
    name: "Prestations de Majordome",
    tagline: "L'art de vivre, à son plus haut niveau.",
    excerpt:
      "Intendance, services domestiques et accès exclusif aux plus belles expériences.",
    intro:
      "Le majordome incarne l'excellence du service privé : intendance irréprochable, sens du détail et discrétion. Au-delà de la gestion domestique, nous ouvrons l'accès à un univers d'expériences d'exception.",
    modules: [
      {
        title: "Intendance & Services Domestiques",
        body: "Une gestion irréprochable de la maison : coordination du personnel, organisation des réceptions, supervision du quotidien et anticipation de vos besoins.",
        points: [
          "Coordination du personnel de maison",
          "Organisation de réceptions et d'événements privés",
          "Supervision et anticipation du quotidien",
        ],
      },
      {
        title: "Service d'Accès Exclusif",
        body: "Une porte ouverte sur l'art de vivre : réservations prioritaires, jets privés, location de yachts et accès à des événements de prestige.",
        points: [
          "Réservations prioritaires (restaurants, hôtels, suites)",
          "Affrètement de jets privés",
          "Location de yachts et expériences nautiques",
          "Accès à des événements de prestige",
        ],
      },
    ],
    reassurance:
      "Discrétion, fiabilité et excellence guident chacune de nos interventions, sous accord de confidentialité.",
  },
  {
    slug: "billetterie",
    name: "Prestation de Billetteries tout événement",
    tagline: "Un accès privilégié à tous vos événements.",
    excerpt:
      "Obtention et gestion de billets pour tout événement : spectacles, sport, galas et soirées privées.",
    intro:
      "Notre service de billetterie vous ouvre les portes des événements les plus convoités. Concerts, rencontres sportives, galas, défilés ou soirées privées : nous obtenons vos places, coordonnons la logistique et garantissons un accès fluide et discret, en France comme à l'international.",
    modules: [
      {
        title: "Accès & Réservations",
        body: "Obtention de billets et de places privilégiées pour tout type d'événement, y compris les plus difficiles d'accès. Loges, carrés VIP, premières et événements complets.",
        points: [
          "Spectacles, concerts et festivals",
          "Rencontres sportives et compétitions",
          "Galas, défilés et événements privés",
          "Loges privées et accès VIP",
        ],
      },
      {
        title: "Logistique & Accompagnement",
        body: "Une prise en charge de bout en bout : transport sécurisé, coordination des horaires et accompagnement sur place, en lien avec votre dispositif de protection si nécessaire.",
        points: [
          "Coordination des billets et des accès",
          "Transport et itinéraires sécurisés",
          "Accompagnement discret sur l'événement",
        ],
      },
    ],
    reassurance:
      "Vos demandes et votre présence aux événements demeurent strictement confidentielles, sous accord de non-divulgation.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
