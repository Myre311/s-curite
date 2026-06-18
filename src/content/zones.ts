/** Zones d'action — contenu centralisé. */

export type Zone = {
  name: string;
  region: string;
  body: string;
};

export const zones: Zone[] = [
  {
    name: "Marseille",
    region: "France",
    body: "Notre ancrage historique. Une connaissance fine du territoire et de ses enjeux, au service d'une protection réactive et discrète.",
  },
  {
    name: "French Riviera",
    region: "Côte d'Azur",
    body: "De Saint-Tropez à Monaco, un savoir-faire adapté aux résidences d'exception, aux événements privés et à la vie nautique.",
  },
  {
    name: "Stations de ski",
    region: "Alpes",
    body: "Sécurité et logistique pour vos séjours en altitude, en station comme lors des déplacements de montagne.",
  },
  {
    name: "Paris",
    region: "France",
    body: "La capitale et ses exigences : déplacements protégés, sécurisation d'événements et accompagnement de personnalités.",
  },
  {
    name: "Marrakech",
    region: "Afrique du Nord",
    body: "Une présence dédiée pour vos séjours, résidences et déplacements : protection, logistique et discrétion aux standards internationaux.",
  },
  {
    name: "Dubaï",
    region: "Émirats arabes unis",
    body: "Sécurité et accompagnement haut de gamme aux Émirats : déplacements protégés, résidences et événements, dans le respect des cadres locaux.",
  },
  {
    name: "Londres",
    region: "Royaume-Uni",
    body: "Opérations conformes aux licences de sécurité britanniques, au service d'une clientèle internationale.",
  },
];

export const zonesPage = {
  eyebrow: "Présence internationale",
  title: "Une présence d'exception, des standards inébranlables.",
  intro:
    "Où que vous soyez, nous appliquons la même rigueur opérationnelle et la même discrétion. Nos dispositifs s'adaptent aux cadres réglementaires de chaque juridiction, sans jamais transiger sur l'excellence.",
  reassurance:
    "Dans chaque zone, nos interventions respectent les cadres réglementaires applicables (CNAPS en France, licences de sécurité au Royaume-Uni, et cadres réglementaires locaux à l'international). La conformité administrative finale relève de la responsabilité du client et du contexte de la mission.",
};
