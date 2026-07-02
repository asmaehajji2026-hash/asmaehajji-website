# 2 · Déployer sur Vercel

**Temps :** ~20 minutes
**Coût :** Gratuit (plan Hobby Vercel suffit largement)

---

## Étape 1 — Installer Node.js (si pas déjà fait)

1. Va sur [https://nodejs.org](https://nodejs.org)
2. Télécharge la version LTS (recommandée)
3. Installe avec les options par défaut
4. Vérifie dans le terminal :

```bash
node --version
npm --version
```

---

## Étape 2 — Créer un compte GitHub (si pas déjà fait)

1. Va sur [https://github.com](https://github.com)
2. Sign up avec ton email pro
3. Vérifie ton email

---

## Étape 3 — Créer le repo GitHub

1. Sur GitHub.com → bouton vert **New** (ou [https://github.com/new](https://github.com/new))
2. Repository name : `asmaehajji-website`
3. Description : `Site web bilingue — Asmae Hajji, protection, retraite et patrimoine`
4. Visibilité : **Public** ou **Private** (les deux fonctionnent avec Vercel)
5. Ne coche aucune case d'initialisation (README, .gitignore, license) — tu as déjà tout
6. Clique **Create repository**

Garde l'onglet GitHub ouvert.

---

## Étape 4 — Pousser le code local sur GitHub

Ouvre un terminal dans le dossier du projet :

```bash
cd "C:\Users\boukh_2njb9wx\OneDrive\Documents\Claude\Projects\CLAUDE\asmaehajji\asmaehajji-website"

git init
git add .
git commit -m "Initial commit — Asmae Hajji website v1"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/asmaehajji-website.git
git push -u origin main
```

Remplace `TON_USERNAME` par ton vrai username GitHub.

Si Git te demande de t'authentifier, utilise un **Personal Access Token** :
- GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
- Donne-lui la permission `repo`
- Copie le token (affiché une seule fois) et utilise-le comme mot de passe

---

## Étape 5 — Créer un compte Vercel

1. Va sur [https://vercel.com/signup](https://vercel.com/signup)
2. Clique **Continue with GitHub**
3. Autorise Vercel à accéder à ton compte GitHub

---

## Étape 6 — Importer le projet dans Vercel

1. Sur le dashboard Vercel, clique **Add New…** → **Project**
2. Trouve `asmaehajji-website` dans la liste → **Import**
3. Configuration :
   - **Framework Preset :** Next.js (détecté automatiquement)
   - **Root Directory :** laisser tel quel
   - **Build Command :** laisser `next build`
   - **Output Directory :** laisser tel quel
   - **Environment Variables :** pour l'instant, aucune
4. Clique **Deploy**

Vercel construit le site en 1-2 minutes. Tu obtiens une URL temporaire du type `asmaehajji-website-abc123.vercel.app`. Le site fonctionne déjà.

---

## Étape 7 — Ajouter la variable d'environnement (optionnel mais recommandé)

1. Vercel dashboard → ton projet → **Settings** → **Environment Variables**
2. Ajoute :

| Nom | Valeur | Environnements |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://asmaehajji.com` | Production, Preview, Development |

3. Sauvegarde
4. Va dans **Deployments** → dernier déploiement → **Redeploy**

---

## Étape 8 — Brancher le domaine `asmaehajji.com`

1. Vercel → ton projet → **Settings** → **Domains**
2. Tape `asmaehajji.com` → **Add**
3. Vercel te donne des enregistrements DNS à créer, généralement :
   - Type `A` pour `asmaehajji.com` → `76.76.21.21`
   - Type `CNAME` pour `www.asmaehajji.com` → `cname.vercel-dns.com`
4. Va dans Cloudflare (voir `DOMAIN-SETUP.md`) et ajoute ces enregistrements
5. Sauvegarde
6. Reviens sur Vercel → après quelques minutes, le statut passe à **Valid Configuration**

Le HTTPS (certificat SSL) est généré automatiquement par Vercel.

---

## ✅ Quand cette étape est terminée

Tu as :
- [x] Le code sur GitHub
- [x] Le site déployé sur Vercel
- [x] Le domaine `asmaehajji.com` qui pointe vers ton site
- [x] HTTPS actif automatiquement

Test : va sur `https://asmaehajji.com` dans ton navigateur.

---

## Modifier le site plus tard

1. Édite les fichiers localement
2. `git add . && git commit -m "Update" && git push`
3. Vercel redéploie automatiquement en 30 secondes
