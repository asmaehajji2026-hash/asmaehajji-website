# 1 · Acheter le nom de domaine — `asmaehajji.com`

**Temps :** ~10 minutes
**Coût :** ~$10-15 USD par an pour un `.com`

---

## Où acheter le domaine

Tu as choisi **Cloudflare Registrar**. C'est un excellent choix :
- Prix coûtant (pas de markup)
- DNS rapide inclus
- Pas de publicité
- Gestion simple

---

## Étape 1 — Créer un compte Cloudflare

1. Va sur [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Crée un compte avec ton email pro
3. Vérifie ton email

---

## Étape 2 — Acheter `asmaehajji.com`

1. Dans le dashboard Cloudflare, clique **Add a site** ou **Registrar** → **Register domains**
2. Cherche `asmaehajji.com`
3. Si le domaine est disponible, ajoute-le au panier
4. Remplis tes informations de contact
5. Procède au paiement

**Important :** Cloudflare peut proposer des services additionnels (pages, workers, etc.). Pour l'instant, tu n'as besoin que du domaine.

---

## Étape 3 — Configurer les DNS pour Vercel

Cette étape se fait **après** le déploiement initial sur Vercel (voir `DEPLOY.md`).

1. Dans Vercel → ton projet → **Settings** → **Domains**
2. Ajoute `asmaehajji.com`
3. Vercel te donne les enregistrements DNS à créer. Typiquement :

| Type | Nom | Cible / Valeur |
|---|---|---|
| A | `asmaehajji.com` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

4. Dans Cloudflare :
   - Va dans ton site → **DNS** → **Records**
   - Supprime les enregistrements existants pour `asmaehajji.com` et `www` s'il y en a
   - Ajoute les deux enregistrements ci-dessus
5. Sauvegarde

---

## Étape 4 — Désactiver le proxy Cloudflare (important)

Par défaut, Cloudflare active le proxy orange 🟠 sur les enregistrements A et CNAME. Pour Vercel, il faut le désactiver :

1. Dans Cloudflare DNS, clique sur l'icône 🟠 orange à côté de chaque enregistrement
2. Elle doit devenir grise ⚪
3. Sauvegarde

Vercel gère lui-même le CDN, le SSL et la performance. Laisser le proxy Cloudflare activé peut créer des conflits.

---

## Étape 5 — Attendre la propagation

La propagation DNS prend généralement :
- **5 à 30 minutes** dans la majorité des cas
- Jusqu'à **24 heures** dans le pire des cas

Tu peux vérifier avec [https://dnschecker.org](https://dnschecker.org) en cherchant `asmaehajji.com`.

---

## ✅ Quand cette étape est terminée

Tu as :
- [x] `asmaehajji.com` acheté à ton nom
- [x] Les enregistrements DNS configurés pour Vercel
- [x] Le proxy Cloudflare désactivé

→ Passe maintenant à **`docs/DEPLOY.md`** pour déployer le site.
