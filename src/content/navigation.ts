/**
 * Navigation centralisée. Structure prête pour l'ajout futur de l'anglais
 * (dupliquer ce fichier en `navigation.en.ts` et brancher un sélecteur).
 */

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const mainNav: NavGroup[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Nos services",
    href: "/#services",
    children: [
      {
        label: "Protection Rapprochée",
        href: "/services/protection-rapprochee",
        description: "Diplomates, dirigeants, personnalités et proches.",
      },
      {
        label: "Enquêtes & Filatures",
        href: "/services/enquetes-filatures",
        description: "Détective privé : familial, commercial, immobilier.",
      },
      {
        label: "Transport de Personnalité",
        href: "/services/transport-personnalite",
        description: "Mobilité premium et sécurisée, point à point.",
      },
      {
        label: "Conciergerie",
        href: "/services/conciergerie",
        description: "Gestion déléguée du quotidien et de la logistique.",
      },
      {
        label: "Prestations de Majordome",
        href: "/services/majordome",
        description: "Intendance et accès exclusif à l'art de vivre.",
      },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** Liens secondaires (pied de page) — pages conservées hors menu principal. */
export const footerNav: NavLink[] = [
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
  { label: "Zones d'action", href: "/zones-d-action" },
  { label: "FAQ", href: "/faq" },
];

/** Liens utilisés dans le pied de page. */
export const footerLegalNav: NavLink[] = [
  { label: "Confidentialité & Mentions légales", href: "/confidentialite" },
  { label: "Contact", href: "/contact" },
];
