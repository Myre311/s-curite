# Global Secure & Transport — Site vitrine

Site vitrine haut de gamme (Next.js 16 / App Router, TypeScript, Tailwind CSS v4,
Framer Motion). Thème luxe : noir profond, doré, blanc. Contenu en français,
structuré pour ajouter l'anglais plus tard.

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres scripts : `npm run build` (build production), `npm run start`, `npm run lint`.

## Où personnaliser (zones client)

| Quoi | Où |
| --- | --- |
| Coordonnées (tél., email, WhatsApp), URL, infos légales | `src/lib/site-config.ts` |
| Couleurs de marque | `src/app/globals.css` (`@theme`) **et** `tailwind.config.ts` |
| Logo | remplacer `public/logo.svg` |
| Photos | remplacer les `<MediaPlaceholder>` par `<Image>` (voir le commentaire dans `src/components/ui/media-placeholder.tsx`) |
| Textes | dossier `src/content/` (services, home, zones, segments, legal, navigation) |
| Envoi email du formulaire | `.env.example` → `.env.local` + activer le bloc dans `src/app/contact/actions.ts` |

## Reste à fournir par le client

- Logo officiel + charte (remplacer `public/logo.svg`).
- Vraies photographies (remplacer les placeholders).
- Coordonnées réelles : téléphone, WhatsApp, email, adresse, SIRET, autorisation CNAPS.
- Clé `RESEND_API_KEY` (et `CONTACT_TO_EMAIL`) pour l'envoi réel des demandes.

## Déploiement Vercel

Importer le dépôt sur Vercel. Définir les variables d'environnement
(`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) et mettre à jour `siteConfig.url`.
