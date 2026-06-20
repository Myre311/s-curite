/**
 * Contenu de la page FAQ. Centralisé pour faciliter un futur passage à l'anglais.
 */

export const faqPage = {
  eyebrow: "Questions fréquentes",
  title: "Tout ce que vous devez savoir",
  intro:
    "Discrétion, méthode et réactivité. Voici les réponses aux questions les plus fréquentes sur nos prestations. Pour toute demande spécifique, chaque échange reste strictement confidentiel.",
};

export type FaqItem = { q: string; a: string };
export type FaqCategory = { title: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    title: "Confidentialité & fonctionnement",
    items: [
      {
        q: "Comment garantissez-vous la confidentialité ?",
        a: "La discrétion est au cœur de notre métier. Chaque mission est couverte par un accord de non-divulgation (NDA) systématique. Les informations relatives à nos clients et à leurs missions sont cloisonnées, et nos communications sensibles transitent par des canaux sécurisés.",
      },
      {
        q: "Comment se déroule une première prise de contact ?",
        a: "Vous nous contactez par téléphone, WhatsApp ou via le formulaire de demande de devis. Nous organisons un entretien confidentiel afin de comprendre votre besoin, évaluer le contexte et définir un dispositif sur-mesure. Aucune information n'est conservée sans votre accord.",
      },
      {
        q: "Quel est le délai d'intervention ?",
        a: "Notre organisation est pensée pour la réactivité. Selon la nature de la prestation et la zone concernée, un dispositif peut être déployé rapidement. Pour les situations urgentes, contactez-nous directement par téléphone.",
      },
      {
        q: "Comment sont sélectionnés vos agents ?",
        a: "Nos intervenants sont recrutés et formés en continu pour garantir un professionnalisme et une discrétion irréprochables, notamment pour les missions en tenue civile. Les protocoles d'intervention sont standardisés pour offrir la même rigueur à Marseille, Paris, Londres et partout dans le monde.",
      },
    ],
  },
  {
    title: "Protection & enquêtes",
    items: [
      {
        q: "Quelle est la différence entre protection professionnelle et tenue civile ?",
        a: "La protection professionnelle est un dispositif formel et protocolaire, adapté aux diplomates, dirigeants et personnalités publiques. La protection en tenue civile privilégie la discrétion : l'agent s'intègre naturellement dans votre environnement tout en maintenant une vigilance constante.",
      },
      {
        q: "En quoi consiste la « protection discrète des proches » ?",
        a: "C'est notre service signature : une surveillance invisible de vos proches, notamment vos enfants, dans des cadres privés ou de loisirs (sorties, voyages). L'objectif est d'assurer leur sécurité sans jamais interférer avec leur liberté ni leur intimité.",
      },
      {
        q: "Vos enquêtes et filatures sont-elles légales ?",
        a: "Nos investigations s'inscrivent dans le cadre réglementaire des activités de sécurité privée et d'enquête de chaque juridiction. Elles couvrent les sphères familiale, commerciale et immobilière. Les éléments réglementaires sont fournis à titre informatif et l'usage des conclusions relève de la responsabilité du client.",
      },
    ],
  },
  {
    title: "Transport, conciergerie & couverture",
    items: [
      {
        q: "Dans quelles zones intervenez-vous ?",
        a: "Nous opérons sur les hubs majeurs : Marseille, la Côte d'Azur (French Riviera), les stations de ski, Paris, Marrakech, Dubaï et Londres, avec les mêmes standards de rigueur dans chaque juridiction.",
      },
      {
        q: "Que comprennent la conciergerie et les prestations de majordome ?",
        a: "La conciergerie gère vos besoins quotidiens, logistiques et administratifs. Les prestations de majordome couvrent l'intendance et un service d'accès exclusif : réservations prioritaires, jets privés, location de yachts et accès à des événements de prestige.",
      },
      {
        q: "Comment obtenir un devis ?",
        a: "Chaque situation étant unique, nos prestations sont établies sur-mesure. Faites une demande de devis confidentielle via le formulaire de contact, par téléphone ou WhatsApp : nous revenons vers vous avec une proposition adaptée.",
      },
    ],
  },
];
