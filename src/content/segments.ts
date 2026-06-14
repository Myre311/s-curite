/** Contenu des pages Particuliers & Professionnels. */

export type SegmentHighlight = {
  title: string;
  body: string;
  href: string;
};

export const particuliers = {
  eyebrow: "Pour les particuliers",
  title: "La sérénité, pour vous et vos proches.",
  intro:
    "Pour les familles et les personnalités, nous concevons des dispositifs sur mesure qui protègent sans contraindre. Notre priorité : préserver votre liberté, votre intimité et votre tranquillité d'esprit.",
  highlights: [
    {
      title: "Protection des proches",
      body: "Notre service signature : une surveillance invisible de vos proches, notamment des enfants, dans leurs cadres privés et de loisirs — sans interférer avec leur liberté.",
      href: "/services/protection-rapprochee",
    },
    {
      title: "Conciergerie & majordome",
      body: "La gestion déléguée de votre quotidien et l'accès à un art de vivre d'exception, partout dans le monde.",
      href: "/services/conciergerie",
    },
    {
      title: "Enquêtes privées",
      body: "Des investigations familiales menées avec tact, rigueur et confidentialité, dans le strict respect du cadre légal.",
      href: "/services/enquetes-filatures",
    },
  ] as SegmentHighlight[],
  reassurance:
    "Chaque mission est couverte par un accord de confidentialité systématique.",
};

export const professionnels = {
  eyebrow: "Pour les professionnels",
  title: "Protéger vos dirigeants, vos intérêts, vos actifs.",
  intro:
    "Pour les entreprises et leurs dirigeants, nous déployons des dispositifs de sécurité, d'investigation et de logistique à la hauteur des enjeux. Discrétion, fiabilité et excellence opérationnelle.",
  highlights: [
    {
      title: "Protection rapprochée des dirigeants",
      body: "Des dispositifs formels ou en tenue civile pour vos dirigeants et personnalités, en France comme à l'international.",
      href: "/services/protection-rapprochee",
    },
    {
      title: "Enquêtes commerciales",
      body: "E-réputation, concurrence déloyale, espionnage industriel, travail dissimulé, solvabilité : nous protégeons vos intérêts.",
      href: "/services/enquetes-filatures",
    },
    {
      title: "Logistique & transport",
      body: "Mobilité premium et sécurisée pour vos dirigeants et invités, avec une coordination irréprochable.",
      href: "/services/transport-personnalite",
    },
  ] as SegmentHighlight[],
  reassurance:
    "Toutes nos interventions sont encadrées par un accord de non-divulgation et menées dans le respect de la législation.",
};
