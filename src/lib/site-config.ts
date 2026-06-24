/**
 * ============================================================================
 *  CONFIGURATION CENTRALE DU SITE — GLOBAL SECURE & TRANSPORT
 * ============================================================================
 *
 *  >>> ZONE À PERSONNALISER PAR LE CLIENT <<<
 *
 *  Toutes les coordonnées, liens et informations de marque sont centralisés
 *  ici. Remplacez les valeurs marquées « PLACEHOLDER » par les vraies données.
 *
 *  - Logo            : remplacer le fichier /public/logo.svg
 *  - Coordonnées     : champs `contact` ci-dessous
 *  - Email d'envoi   : variables d'environnement (voir .env.example)
 * ============================================================================
 */

export const siteConfig = {
  /** Nom commercial complet, utilisé dans le wordmark et le SEO. */
  name: "GLOBAL SECURE & TRANSPORT",
  /** Nom court (header / mobile). */
  shortName: "GS&T",
  /** Baseline / slogan principal. */
  tagline: "Sécurité, discrétion et excellence, partout dans le monde.",
  /** Description SEO par défaut. */
  description:
    "Société de protection privée et de services de prestige : protection rapprochée, enquêtes & filatures, transport avec chauffeur privé, conciergerie et majordome. Discrétion absolue, standards d'excellence internationaux.",
  /** URL de production (à mettre à jour avant déploiement). */
  url: "https://global-secure-transport.vercel.app", // ⚠️ remplacer par le domaine final une fois connecté (ex. https://www.globalsecuretransport.com)

  /**
   * COORDONNÉES — PLACEHOLDERS.
   * Remplacez par les vraies coordonnées fournies par le client.
   */
  contact: {
    /** Email de contact affiché et destinataire des demandes de devis. */
    email: "contact@global-secure-transport.com",
    /** Téléphone affiché (format international lisible). */
    phoneDisplay: "+33 7 64 30 44 00",
    /** Téléphone au format tel: (chiffres + indicatif, sans espaces). */
    phoneHref: "+33764304400",
    /** Numéro WhatsApp au format international sans « + » ni espaces. */
    whatsapp: "33764304400",
    /** Message pré-rempli pour l'ouverture de WhatsApp. */
    whatsappMessage:
      "Bonjour, je souhaite échanger en toute confidentialité au sujet de vos prestations.",
  },

  /** Réseaux sociaux (laisser vide pour masquer un lien). */
  social: {
    linkedin: "", // PLACEHOLDER
    instagram: "", // PLACEHOLDER
  },

  /** Informations légales — PLACEHOLDERS à compléter. */
  legal: {
    company: "GLOBAL SECURE & TRANSPORT", // PLACEHOLDER raison sociale
    legalForm: "SAS", // PLACEHOLDER
    siret: "000 000 000 00000", // PLACEHOLDER
    address: "246 rue Paradis, 13006 Marseille, France",
    cnaps: "AUT-000-0000-00-00-00000000000", // PLACEHOLDER autorisation CNAPS
    publicationDirector: "Direction de la publication à compléter", // PLACEHOLDER
    host: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
  },
} as const;

/** Lien WhatsApp prêt à l'emploi (avec message pré-rempli). */
export function whatsappUrl(): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  const msg = encodeURIComponent(siteConfig.contact.whatsappMessage);
  return `${base}?text=${msg}`;
}
