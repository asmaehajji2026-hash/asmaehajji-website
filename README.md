# Asmae Hajji · Naya's Wealth Website

Site web bilingue (FR/EN) pour Asmae Hajji, Financial Mindset Coach et représentante Experior en Floride.

**Stack :** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Vercel hosting · Domaine `.com`

**Identité visuelle :** emerald `#0F5C4A`, gold `#D4A24C`, warm cream `#F7F2E8`, deep plum `#5B2C4D` — Playfair Display + Montserrat + Great Vibes.

---

## Démarrage local

1. Installer Node.js (LTS) : https://nodejs.org
2. Ouvrir un terminal dans ce dossier :

```bash
cd asmaehajji/asmaehajji-website
npm install
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) (redirige vers `/fr`).

---

## Mise en ligne — l'ordre à suivre

1. **`docs/DOMAIN-SETUP.md`** — acheter `asmaehajji.com` sur Cloudflare
2. **`docs/DEPLOY.md`** — créer GitHub, Vercel, déployer le code
3. Brancher le domaine sur Vercel (étape finale du DEPLOY.md)

---

## Structure du projet

```
asmaehajji-website/
├── app/
│   ├── layout.tsx              ← Polices, Analytics, SEO de base
│   ├── page.tsx                ← Redirection vers /fr
│   ├── fr/page.tsx             ← Page française
│   ├── en/page.tsx             ← Page anglaise
│   ├── globals.css             ← Design system
│   ├── opengraph-image.tsx     ← Image de partage social
│   └── components/             ← Toutes les sections du site
├── public/
│   ├── asmae-photo.jpg
│   └── favicon.svg
├── lib/
│   └── translations.ts         ← Traductions FR/EN
├── docs/
│   ├── DEPLOY.md
│   └── DOMAIN-SETUP.md
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

---

## Maintenance

Pour modifier le contenu : éditer `lib/translations.ts` (textes FR/EN) ou les composants dans `app/components/`. Chaque section est un fichier indépendant.

Pour modifier les couleurs/polices : `tailwind.config.ts` + `globals.css`.

Modifier → `git add . && git commit -m "..." && git push` → Vercel redéploie automatiquement.

---

## À personnaliser avant le lancement

- [ ] Lien Calendly dans `app/components/FinalCTA.tsx` (actuellement `https://calendly.com/asmaehajji`)
- [ ] Capture de performance dans `app/components/PreuveSociale.tsx` (optionnel)
- [ ] Métadonnées dans `app/fr/page.tsx` et `app/en/page.tsx`
- [ ] Instagram confirmé : `@asmae-hajji`
