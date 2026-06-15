import { siteConfig } from "@/lib/site-config";

/** Contenu de la page Confidentialité & Mentions légales. */

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

export const legalSections: LegalSection[] = [
  {
    id: "confidentialite",
    title: "Engagement de confidentialité",
    paragraphs: [
      "La confidentialité est au cœur de notre métier. Chaque collaboration débute par la signature d'un accord de non-divulgation (NDA) systématique, qui protège l'ensemble des informations échangées : identités, déplacements, dispositifs et éléments de mission.",
      "Nos collaborateurs sont sélectionnés, formés et tenus contractuellement à une discrétion absolue, y compris après la fin de la mission.",
    ],
  },
  {
    id: "donnees",
    title: "Protection des données personnelles (RGPD)",
    paragraphs: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés », nous collectons et traitons vos données personnelles uniquement dans le cadre du traitement de votre demande et de l'exécution de nos prestations.",
      "Les données transmises via le formulaire de contact (nom, email, téléphone, message) sont utilisées exclusivement pour vous recontacter et étudier votre besoin. Elles ne sont jamais cédées à des tiers à des fins commerciales.",
    ],
    items: [
      "Finalité : traitement de votre demande et exécution des prestations.",
      "Durée de conservation : limitée à la durée nécessaire au traitement, puis archivage légal.",
      "Vos droits : accès, rectification, effacement, opposition et portabilité.",
      `Pour exercer vos droits : ${siteConfig.contact.email}.`,
    ],
  },
  {
    id: "cadres-reglementaires",
    title: "Cadres réglementaires (note informative)",
    paragraphs: [
      "Les activités de sécurité privée et d'investigation sont encadrées par des réglementations spécifiques à chaque juridiction.",
    ],
    items: [
      "France : activités soumises au contrôle du CNAPS (Conseil National des Activités Privées de Sécurité) et aux dispositions du Code de la sécurité intérieure.",
      "Royaume-Uni : prestations exercées dans le respect des licences de sécurité applicables.",
      "Maroc : interventions conduites dans le respect des cadres réglementaires locaux en vigueur.",
    ],
  },
  {
    id: "mentions-legales",
    title: "Mentions légales",
    paragraphs: [
      `Éditeur du site : ${siteConfig.legal.company}.`,
      `Adresse : ${siteConfig.legal.address}.`,
      `Hébergement : ${siteConfig.legal.host}.`,
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des éléments techniques strictement nécessaires au bon fonctionnement du site peuvent être mobilisés.",
    ],
  },
];

export const legalPage = {
  eyebrow: "Confidentialité & cadre légal",
  title: "Confidentialité & mentions légales",
  intro:
    "La discrétion est notre première exigence. Cette page détaille nos engagements de confidentialité, le traitement de vos données personnelles et les cadres réglementaires applicables.",
  disclaimer:
    "Document fourni à titre informatif. Les informations marquées comme provisoires seront complétées par les coordonnées et références officielles de la société.",
};
