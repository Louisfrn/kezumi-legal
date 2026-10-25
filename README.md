# Kezumi — pages légales

Site public statique distinct du dépôt privé de l’app iOS. Publication explicitement demandée par Louis sur GitHub Pages.

- Confidentialité FR : https://louisfrn.github.io/kezumi-legal/privacy/
- Conditions FR : https://louisfrn.github.io/kezumi-legal/terms/
- Assistance FR : https://louisfrn.github.io/kezumi-legal/support/
- Versions anglaises : mêmes chemins préfixés par `/en/`.

## Modifier et vérifier

Node 24.13.0 et pnpm 10.28.1, sans dépendance applicative :

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm preview
```

Textes FR/EN : `src/content.mjs`. Coordonnées de l’éditeur et URL : `src/site.mjs`. Style : `src/styles.css`. `scripts/build.mjs` génère `_site/`, ignoré par Git, avec les liens relatifs adaptés à GitHub Pages. `pnpm check` vérifie les fichiers, liens internes, langues, titres, coordonnées et absence de scripts externes.

La branche `main` publie via `.github/workflows/pages.yml` ; les PR exécutent les contrôles sans déployer. Créer une branche et une PR pour les modifications après le premier déploiement.

## Périmètre des textes

Rédigés d’après l’implémentation iOS inspectée le 25 octobre 2026 : session invitée/Apple Supabase, journal de progression synchronisé, cache SQLite, état Screen Time local, RevenueCat et paiements Apple. Les coordonnées publiques ont été fournies par Louis ; seule l’adresse corrigée d’Ivry-sur-Seine figure dans les fichiers. Les textes ne déclarent ni société, numéro d’immatriculation, médiateur désigné, automatisation d’effacement RevenueCat ni délai technique de sauvegarde non vérifié.

Avant distribution commerciale : vérifier le statut professionnel et les éventuelles mentions d’immatriculation / médiation applicables, les durées opérationnelles des journaux/sauvegardes et le processus manuel de suppression RevenueCat. Cette publication n’est pas une validation juridique ni une recette d’achat sur iPhone. Le contrat de licence standard Apple reste référencé ; ces pages ne configurent pas une EULA personnalisée dans App Store Connect.

Références officielles consultées pour la rédaction : [transparence CNIL](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence), [droits CNIL](https://www.cnil.fr/fr/respecter-les-droits-des-personnes), [information précontractuelle](https://www.service-public.gouv.fr/particuliers/vosdroits/F10483), [licence standard Apple](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), politiques et accords de traitement Supabase / RevenueCat liés depuis les pages, [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Assets

Le Kezu et l’icône sont les fichiers officiels inchangés de l’app. Les polices Fredoka et Plus Jakarta Sans sont servies localement ; leurs licences SIL Open Font License sont conservées dans `assets/licenses/`. Aucun cookie, formulaire, SDK d’analyse, script tiers ou appel vers le backend de l’app n’est ajouté au site.
