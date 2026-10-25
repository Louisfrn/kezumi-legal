import { links, site } from "./site.mjs";

const contact = `<a href="mailto:${site.publisher.email}">${site.publisher.email}</a>`;
const publisher = `<strong>${site.publisher.name}</strong><br>${site.publisher.address}<br>${contact}`;
const link = (url, label) => `<a href="${url}">${label}</a>`;
const section = (id, title, html) => ({ id, title, html });

export const content = {
  fr: {
    home: {
      title: "Les informations utiles, au même endroit.",
      intro:
        "Confidentialité, abonnement et utilisation de Kezumi. Des réponses accessibles avant de commencer et à tout moment dans l’app.",
      eyebrow: "Kezumi · Informations légales",
      privacy:
        "Comprendre les données utilisées par Kezumi, leur conservation et tes droits.",
      terms:
        "Retrouver les règles d’utilisation et le fonctionnement des abonnements.",
      support: "Gérer ton abonnement, supprimer ton compte ou nous contacter.",
    },
    privacy: {
      title: "Politique de confidentialité",
      intro:
        "Tes progrès servent à apprendre. Voici les données utilisées pour faire fonctionner Kezumi et les moyens de garder la main.",
      summary:
        "Les données de protection Screen Time restent sur ton iPhone. Le compte et la progression utilisent Supabase ; les droits d’abonnement sont vérifiés avec Apple et RevenueCat. Aucune publicité ni suivi publicitaire n’est intégré à la version décrite ici.",
      sections: [
        section(
          "responsable",
          "1. Qui est responsable des données ?",
          `<p>L’éditeur de Kezumi et responsable du traitement décrit dans cette politique est :</p><address>${publisher}</address><p>Cette politique couvre l’app iOS Kezumi, sa version de développement Kezumi DEV et ces pages d’information. Les environnements DEV et PROD sont séparés. Dernière mise à jour : 25 octobre 2026.</p>`,
        ),
        section(
          "donnees",
          "2. Les données utilisées dans l’app",
          `<div class="table-scroll"><table><caption>Données, utilisation et emplacement principal</caption><thead><tr><th>Données</th><th>Pourquoi ?</th><th>Où ?</th></tr></thead><tbody>
          <tr><td>Identifiant technique de compte invité ; puis identifiant de compte, informations de connexion Apple, nom et adresse e-mail si fournis par Apple, y compris une adresse de relais privé.</td><td>Créer une session, associer Apple au compte et retrouver la progression. Un invité est pseudonyme, pas nécessairement anonyme.</td><td>iPhone, Apple et Supabase.</td></tr>
          <tr><td>Questions répondues, choix, réussite, sessions, dates et crédits XP ; statistiques et maîtrise calculées à partir de ces événements.</td><td>Sauvegarder les réponses, éviter les doubles crédits et synchroniser la progression.</td><td>SQLite sur l’iPhone et Supabase pour le journal synchronisé.</td></tr>
          <tr><td>Catalogue en cache, sujets sélectionnés, difficulté, préférences et quiz en cours avec son pool figé.</td><td>Fonctionner hors ligne et reprendre une session interrompue.</td><td>iPhone. Le checkpoint du quiz et les préférences locales ne sont pas le journal synchronisé.</td></tr>
          <tr><td>Jetons opaques des apps choisies dans le sélecteur Apple, autorisation Screen Time, horaires, pauses, accès temporaires et journal technique local.</td><td>Appliquer la protection et vérifier le déblocage/reblocage.</td><td>iPhone et extensions Screen Time, via un espace local partagé. Ces jetons et la liste des apps protégées ne sont pas envoyés à Supabase ou RevenueCat par Kezumi.</td></tr>
          <tr><td>Identifiant de compte Kezumi, produit acheté, transactions, état de l’essai, échéance et droits ; informations techniques reçues par le SDK (appareil, système, langue et pays du store notamment).</td><td>Valider les achats, afficher les offres, restaurer les droits et prévenir la fraude.</td><td>Apple et RevenueCat ; cache de droits sur l’iPhone.</td></tr>
          <tr><td>Adresse IP, requêtes et traces techniques de service ; messages et coordonnées envoyés volontairement au support.</td><td>Acheminer les requêtes, sécuriser les services et traiter les demandes.</td><td>Prestataires techniques concernés et messagerie de l’éditeur.</td></tr>
        </tbody></table></div><p>Kezumi ne reçoit pas ton numéro de carte bancaire ni ton mot de passe Apple. Le nom et l’e-mail du compte ne sont pas transmis à RevenueCat par cette intégration. La démo ne crédite pas de progression réelle. Aucune fonction de génération IA ou d’import PDF n’est proposée dans cette version.</p>`,
        ),
        section(
          "finalites",
          "3. Finalités et bases juridiques",
          `<ul><li><strong>Fournir l’app, la connexion, les quiz, la synchronisation et les droits d’abonnement :</strong> exécution du service demandé et du contrat.</li><li><strong>Sécurité, prévention des abus, diagnostic nécessaire et réponse aux demandes générales :</strong> intérêt légitime à exploiter et protéger le service ; tu peux exercer ton droit d’opposition selon ta situation.</li><li><strong>Obligations comptables, preuve de transactions ou réponse à une demande légale :</strong> respect des obligations applicables.</li></ul><p>Les autorisations iOS Screen Time et notifications sont des choix système distincts. Tu peux les refuser ou les retirer dans les réglages iOS ; certaines fonctions ne pourront alors plus fonctionner. Une autorisation iOS ne constitue pas à elle seule un consentement général à tout traitement.</p>`,
        ),
        section(
          "prestataires",
          "4. Destinataires et transferts",
          `<p>L’éditeur et les prestataires nécessaires au service accèdent aux données dans la limite de leur rôle :</p><ul><li><strong>Supabase :</strong> authentification, stockage du compte et du journal de progression. Les projets sont configurés dans la région européenne eu-west-1. ${link(links.supabasePrivacy, "Confidentialité")} · ${link(links.supabaseDpa, "Accord de traitement des données")}.</li><li><strong>RevenueCat :</strong> gestion technique des achats et droits, validation et statistiques d’abonnement. ${link(links.revenuecatPrivacy, "Confidentialité")} · ${link(links.revenuecatDpa, "Accord de traitement des données")}.</li><li><strong>Apple :</strong> connexion Apple, services Screen Time, App Store et paiements, selon ses propres règles. ${link(links.applePrivacy, "Confidentialité Apple")}.</li></ul><p>La région européenne de la base ne signifie pas que tous les traitements de tous les prestataires restent dans l’Union européenne. Le support, les transactions et certains sous-traitants peuvent impliquer des traitements hors de l’Espace économique européen. Les accords de traitement des prestataires décrivent leurs garanties, dont les clauses contractuelles types lorsqu’elles sont applicables. Tu peux nous contacter pour des informations sur ces garanties.</p><p>Aucune vente de données ni intégration publicitaire n’est mise en place. Les données peuvent aussi être communiquées lorsque la loi l’exige ou pour défendre un droit dans un litige.</p>`,
        ),
        section(
          "conservation",
          "5. Conservation",
          `<ul><li><strong>Compte et progression :</strong> conservés tant que le compte existe pour permettre la continuité de l’apprentissage, y compris après expiration de l’abonnement ; supprimés du service actif lors d’une suppression de compte confirmée.</li><li><strong>Données locales :</strong> conservées selon la fonction, les actions de suppression et les règles iOS. Le journal de progression est retiré lors d’une déconnexion réussie ; les préférences de protection peuvent rester sur l’appareil. Le journal Screen Time est borné aux 80 événements locaux les plus récents.</li><li><strong>Données d’achat :</strong> conservées pendant la gestion des droits et le traitement d’éventuelles réclamations, sous réserve des obligations des acteurs du paiement. Le bouton de suppression de compte ne supprime pas automatiquement le dossier RevenueCat ou les archives Apple : contacte-nous pour faire traiter une demande d’effacement de ces données.</li><li><strong>Support et traces techniques :</strong> conservation limitée au traitement de la demande, aux besoins de sécurité ou de preuve correspondants ; les traces et sauvegardes des prestataires suivent aussi leurs politiques de rétention. Les sauvegardes ne sont pas effacées instantanément lors d’une suppression de compte.</li></ul><p>Aucune purge automatique liée à une simple inactivité du compte n’est actuellement annoncée. Tu peux demander les précisions de conservation applicables à tes données ou leur suppression à ${contact}.</p>`,
        ),
        section(
          "droits",
          "6. Tes choix et tes droits",
          `<p>Selon la réglementation applicable, tu peux demander l’accès, la rectification, l’effacement, la limitation, la portabilité et t’opposer à certains traitements. Pour exercer ces droits, écris à ${contact}. Une vérification proportionnée de ton identité peut être nécessaire ; n’envoie pas ton mot de passe, ton reçu d’achat complet ou des documents d’identité sans demande justifiée.</p><p>Tu peux supprimer le compte depuis <strong>Réglages → Compte → Supprimer mon compte Kezumi</strong>. Si tu n’as plus accès à l’app, utilise l’e-mail de contact. Une suppression serveur non confirmée est signalée dans l’app ; un effacement uniquement local ne vaut pas confirmation d’effacement distant.</p><p><strong>La suppression du compte ne résilie pas l’abonnement Apple.</strong> Gère-le séparément dans ${link(links.appleSubscriptions, "les abonnements de l’App Store")}. Pour les droits d’achat encore détenus par RevenueCat, adresse aussi ta demande à l’éditeur.</p><p>Nous répondons aux demandes dans les délais légaux, en principe sous un mois, avec information si une prolongation légale est nécessaire. Tu peux adresser une réclamation à ${link(links.cnil, "la CNIL")} ou à l’autorité de protection des données compétente.</p>`,
        ),
        section(
          "securite",
          "7. Sécurité et utilisateurs mineurs",
          `<p>Les échanges avec les services distants utilisent HTTPS. L’accès aux données de progression est limité au compte concerné par des règles serveur. Ces mesures ne rendent pas un appareil ou un service infaillible : protège ton iPhone et ton compte Apple.</p><p>Kezumi n’est pas conçu spécifiquement pour collecter les données de jeunes enfants. Si tu es mineur, utilise le service avec les autorisations parentales et les conditions d’âge requises dans ton pays et par Apple. Contacte-nous si des données d’enfant ont été traitées sans l’autorisation requise.</p>`,
        ),
        section(
          "site",
          "8. Ces pages web et les changements de politique",
          `<p>Ce site statique est hébergé par <strong>GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis)</strong>. Il n’intègre aucun outil de mesure d’audience, publicité, formulaire de suivi ou cookie ajouté par Kezumi. Les polices et images sont servies depuis le même site. L’hébergeur reçoit néanmoins les données techniques nécessaires à la visite, dont l’adresse IP et des journaux de requêtes, selon ${link(links.githubPrivacy, "sa politique de confidentialité")}.</p><p>En cas de changement significatif, cette politique sera mise à jour et la date sera modifiée ; une information complémentaire dans l’app pourra être apportée si nécessaire. Pour toute question : ${contact}.</p>`,
        ),
      ],
    },
    terms: {
      title: "Conditions d’utilisation",
      intro:
        "Les règles pour apprendre avec Kezumi, gérer ton abonnement et garder le contrôle de la protection de tes apps.",
      summary:
        "Un quiz réussi peut autoriser temporairement une app que tu as choisie. Les formules mensuelle et annuelle donnent les mêmes droits. Tu peux toujours désactiver la protection et gérer ton compte sans abonnement actif.",
      sections: [
        section(
          "editeur",
          "1. Éditeur et portée",
          `<address>${publisher}</address><p>Ces conditions décrivent l’utilisation de Kezumi sur iPhone, y compris sa version de développement. Elles complètent le ${link(links.appleEula, "contrat de licence standard Apple")} et les ${link(links.appleTerms, "conditions des services Apple")} applicables aux achats App Store, sans remplacer les droits impératifs du consommateur. Dernière mise à jour : 25 octobre 2026.</p>`,
        ),
        section(
          "service",
          "2. Ce que propose Kezumi",
          `<p>Kezumi propose des quiz de micro-apprentissage et une protection des applications choisies via les API Screen Time d’Apple. Réussir un défi permet de demander un accès temporaire à l’app sélectionnée ; l’accès et le reblocage dépendent de la confirmation d’iOS, des autorisations et des contraintes du système.</p><p>Le catalogue, les quiz et les fonctions d’apprentissage effectivement affichés dans l’app constituent le service proposé. Les fonctions de génération IA et d’import PDF ne sont pas incluses dans la version décrite ici. Les contenus sont destinés à l’apprentissage général et peuvent comporter des erreurs : signale-les au support.</p><p>La démonstration est explicitement simulée et ne débloque pas réellement une app. Les versions DEV et TestFlight sont des versions de test susceptibles de comporter des défauts et ne constituent pas une garantie de disponibilité de toutes les fonctions d’une version publique.</p>`,
        ),
        section(
          "compte",
          "3. Compte et utilisation individuelle",
          `<p>Une session invitée permet de découvrir l’app et de conserver une progression technique. La connexion avec Apple est requise avant l’achat ou la restauration d’un abonnement. Conserve l’accès au compte Kezumi utilisé lors de l’achat et au compte Apple correspondant.</p><p>Les droits sont personnels au compte Kezumi d’origine. Une restauration sur un autre appareil doit utiliser ce même compte ; un autre compte Kezumi ne reçoit pas automatiquement un abonnement existant sur le même compte Apple. La formule n’est pas une offre multiposte ou d’équipe.</p><p>Respecte les droits sur les contenus et les règles du service ; n’essaie pas d’accéder aux données d’un autre compte ou de perturber les services. Les mineurs doivent disposer des autorisations exigées par la loi locale et les règles Apple ; les achats sont effectués sous la responsabilité du titulaire du compte Apple.</p>`,
        ),
        section(
          "abonnements",
          "4. Abonnements, prix et essai",
          `<p>Les deux formules donnent les mêmes droits : accès au catalogue, quiz illimités et fonctions de protection disponibles dans l’app.</p><ul><li><strong>Mensuel :</strong> prix de référence en France de 3,99 € par mois, renouvelé chaque mois jusqu’à résiliation.</li><li><strong>Annuel :</strong> prix de référence en France de 19,99 € pour une année, facturé en une fois à l’avance et renouvelé annuellement jusqu’à résiliation.</li></ul><p>Le prix local, la devise, la période, les taxes et les éventuelles offres applicables sont ceux affichés par l’App Store avant confirmation. Ils peuvent varier selon le pays ou la date ; le montant présenté dans la feuille Apple fait foi pour l’achat concerné. La formule mensuelle n’impose pas un engagement de douze mois.</p><p>Un essai gratuit de trois jours peut être proposé uniquement si cette offre existe et si Apple confirme l’éligibilité. À la fin de l’essai, l’abonnement est facturé au tarif annoncé sauf résiliation dans le délai indiqué par Apple. Aucun essai n’est garanti à une personne l’ayant déjà consommé. Il n’existe pas d’offre gratuite permanente pour les quiz réels et l’activation de la protection.</p>`,
        ),
        section(
          "paiement",
          "5. Paiement, renouvellement et résiliation",
          `<p>Apple traite le paiement sur ton compte Apple. L’abonnement se renouvelle automatiquement jusqu’à résiliation. Pour éviter le prochain prélèvement, désactive le renouvellement avant l’échéance et respecte le délai indiqué par Apple, notamment au moins 24 heures avant la fin d’un essai ou de la période en cours.</p><p>Tu peux gérer ou résilier depuis Kezumi → Réglages → Abonnement → Gérer dans l’App Store, ou depuis ${link(links.appleSubscriptions, "la gestion des abonnements Apple")}. Après résiliation, les droits restent disponibles jusqu’à la fin de la période payée ou de l’essai, sous réserve d’un remboursement, d’une révocation ou d’une autre décision du store.</p><p>Une demande d’achat en attente, annulée ou non confirmée ne crée pas de droit Premium. Les éventuels changements de tarif sont présentés et appliqués selon les règles Apple et les obligations légales.</p>`,
        ),
        section(
          "expiration",
          "6. Restauration et perte des droits",
          `<p>« Restaurer les achats » vérifie un abonnement existant ; cette action ne déclenche pas un nouvel achat et ne réactive pas un abonnement expiré. Elle peut nécessiter une connexion réseau et l’accès aux comptes d’origine.</p><p>Sans droit valide, les quiz réels et leur reprise ainsi que l’activation ou la reprise de protection sont indisponibles. Les sujets, l’historique et les réglages de compte restent accessibles. Quand une réponse récente confirme la perte des droits, Kezumi demande à iOS de suspendre la protection. Le réabonnement ne la réactive pas automatiquement.</p><p>Hors ligne, les droits déjà connus ne sont utilisés que jusqu’à l’échéance connue. Une erreur réseau seule n’est pas une confirmation d’expiration. La suspension à l’instant exact de l’expiration n’est pas garantie si l’app est fermée ou hors réseau. Tu peux toujours désactiver manuellement la protection, indépendamment de l’abonnement.</p>`,
        ),
        section(
          "suppression",
          "7. Compte, données et suppression",
          `<p>La ${'<a href="../privacy/">politique de confidentialité</a>'} décrit les données utilisées et tes droits. La suppression de compte se demande dans Réglages → Compte ; une solution par e-mail existe si tu ne peux plus accéder à l’app.</p><p><strong>Supprimer l’app ou le compte ne résilie pas l’abonnement Apple.</strong> Résilie séparément dans l’App Store. La suppression du compte d’origine peut aussi empêcher la restauration sur un nouveau compte. Les données d’achat encore conservées par RevenueCat ne sont pas automatiquement effacées par le bouton de suppression : contacte l’éditeur pour les demandes correspondantes.</p>`,
        ),
        section(
          "garanties",
          "8. Fonctionnement, garanties et remboursements",
          `<p>Screen Time est un outil d’accompagnement volontaire. Kezumi ne garantit ni une réduction chiffrée du temps d’écran, ni un résultat pédagogique, ni un blocage infaillible. Les restrictions peuvent être affectées par les permissions, les changements iOS, la fermeture de l’app ou un défaut technique. Un message d’erreur ne doit pas être interprété comme une confirmation de protection ou de déblocage.</p><p>Les mises à jour peuvent corriger les défauts ou faire évoluer le service. Les changements substantiels ne suppriment pas les droits légaux ni les garanties applicables aux contenus et services numériques. Si le service ne fonctionne pas comme annoncé, contacte ${contact}.</p><p>Les demandes de remboursement d’un achat App Store peuvent être présentées à ${link(links.appleRefund, "Apple via reportaproblem.apple.com")}. Les droits légaux de rétractation, leurs éventuelles exceptions et les garanties du consommateur restent applicables selon le pays, les conditions d’achat et les consentements expressément recueillis ; le simple usage de Kezumi ne constitue pas une renonciation générale à ces droits.</p>`,
        ),
        section(
          "droit",
          "9. Contact et règlement des difficultés",
          `<p>Pour une réclamation, un problème d’achat ou une demande relative au compte : ${contact}. Décris le problème et ta version de l’app sans transmettre ton mot de passe Apple, les clés privées ou un reçu contenant des informations inutiles.</p><p>Ces conditions n’écartent aucune protection obligatoire du pays de résidence du consommateur et n’imposent pas une juridiction exclusive qui le priverait de ses droits. Les possibilités de recours amiable, de médiation lorsqu’elle est applicable et de saisine des juridictions compétentes restent ouvertes.</p><p>Les coordonnées de l’éditeur figurent en tête de page. Ce site d’information est hébergé par GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.</p>`,
        ),
      ],
    },
    support: {
      title: "Assistance",
      intro:
        "Une question sur ton compte, un achat ou la protection de tes apps ?",
      summary: `Écris directement à ${site.publisher.email}. N’envoie jamais de mot de passe Apple, de clé privée ou de donnée bancaire.`,
      sections: [
        section(
          "contact",
          "Contacter l’éditeur",
          `<p>${contact}</p><address>${publisher}</address><p>Pour nous aider : indique la version de Kezumi, ton modèle d’iPhone, la version iOS, les étapes rencontrées et le message affiché. Masque les données personnelles inutiles dans les captures.</p>`,
        ),
        section(
          "abonnement",
          "Gérer un abonnement",
          `<p>Ouvre Réglages → Abonnement dans Kezumi ou ${link(links.appleSubscriptions, "les abonnements de l’App Store")}. Pour un remboursement, consulte ${link(links.appleRefund, "le service Apple dédié")}.</p><p>Pour restaurer un achat, reconnecte le compte Kezumi d’origine et utilise « Restaurer les achats ».</p>`,
        ),
        section(
          "supprimer",
          "Supprimer un compte ou exercer un droit",
          `<p>Ouvre Réglages → Compte → Supprimer mon compte Kezumi. Sans accès à l’app, écris à l’adresse de contact avec l’objet « Suppression de compte Kezumi » ou « Données personnelles Kezumi ». Nous vérifierons le compte concerné de façon proportionnée.</p><p>La suppression du compte ne résilie pas Apple et ne supprime pas automatiquement les données d’achat RevenueCat. Signale aussi ces données si ta demande les concerne. Les détails figurent dans la politique de confidentialité.</p>`,
        ),
        section(
          "protection",
          "Désactiver la protection",
          `<p>La désactivation est accessible dans les réglages de protection Kezumi, même sans abonnement actif. Tu peux aussi retirer l’autorisation Screen Time de Kezumi dans les réglages iOS. Si une action n’est pas confirmée, vérifie l’état réel de la protection sur ton iPhone.</p>`,
        ),
      ],
    },
  },
  en: {
    home: {
      title: "The useful information, in one place.",
      intro:
        "Privacy, subscriptions and using Kezumi. Information you can read before getting started and find again at any time in the app.",
      eyebrow: "Kezumi · Legal information",
      privacy: "Understand the data Kezumi uses, retention and your rights.",
      terms: "Read the rules for using Kezumi and how subscriptions work.",
      support: "Manage a subscription, delete your account or contact us.",
    },
    privacy: {
      title: "Privacy policy",
      intro:
        "Your progress helps you learn. Here is the data used to operate Kezumi and how you can stay in control.",
      summary:
        "Screen Time protection data stays on your iPhone. Accounts and progress use Supabase; subscription access is verified with Apple and RevenueCat. The version described here includes no advertising or advertising tracking.",
      sections: [
        section(
          "controller",
          "1. Who is responsible?",
          `<p>The publisher of Kezumi and controller of the processing described here is:</p><address>${publisher}</address><p>This policy covers the Kezumi iOS app, its Kezumi DEV development variant and these information pages. DEV and PROD environments are separate. Last updated: October 25, 2026.</p>`,
        ),
        section(
          "data",
          "2. Data used in the app",
          `<div class="table-scroll"><table><caption>Data, purpose and main location</caption><thead><tr><th>Data</th><th>Why?</th><th>Where?</th></tr></thead><tbody>
          <tr><td>Technical guest identifier; then account ID, Apple sign-in information, name and email when provided by Apple, including a private relay address.</td><td>Create a session, link Apple and recover progress. A guest is pseudonymous, not necessarily anonymous.</td><td>iPhone, Apple and Supabase.</td></tr>
          <tr><td>Answered questions, selected choices, correctness, sessions, dates and XP credits; statistics and mastery derived from these events.</td><td>Save answers, prevent duplicate credits and sync progress.</td><td>SQLite on the iPhone and Supabase for synced progress events.</td></tr>
          <tr><td>Cached catalog, selected topics, difficulty, preferences and saved quiz with its fixed question pool.</td><td>Work offline and resume interrupted sessions.</td><td>iPhone. The quiz checkpoint and local preferences are separate from synced progress events.</td></tr>
          <tr><td>Opaque tokens for apps chosen in Apple's picker, Screen Time permission, schedules, pauses, temporary access and local technical events.</td><td>Apply protection and verify temporary access and blocking.</td><td>iPhone and Screen Time extensions in shared local storage. Kezumi does not send these tokens or the protected-app list to Supabase or RevenueCat.</td></tr>
          <tr><td>Kezumi account ID, purchased product, transactions, trial status, expiry and access; technical information received by the SDK, including device, system, language and store country.</td><td>Validate purchases, display offers, restore access and prevent fraud.</td><td>Apple and RevenueCat; cached access on the iPhone.</td></tr>
          <tr><td>IP address, requests and technical service logs; messages and contact details voluntarily sent to support.</td><td>Route requests, secure services and respond to enquiries.</td><td>Relevant providers and the publisher's email service.</td></tr>
        </tbody></table></div><p>Kezumi does not receive your card number or Apple password. This integration does not send your account name or email to RevenueCat. The demo does not award real progress. This version provides no AI-generation or PDF-import feature.</p>`,
        ),
        section(
          "purposes",
          "3. Purposes and legal bases",
          `<ul><li><strong>Providing the app, sign-in, quizzes, sync and subscription access:</strong> performing the service and contract you request.</li><li><strong>Security, abuse prevention, necessary diagnostics and general support:</strong> legitimate interests in operating and protecting the service; you may object where applicable to your circumstances.</li><li><strong>Accounting duties, transaction evidence and legal requests:</strong> compliance with applicable legal obligations.</li></ul><p>Screen Time and notification permissions are separate iOS choices. You can refuse or withdraw them in iOS settings, which may prevent the relevant features from working. An iOS permission alone is not general consent to all processing.</p>`,
        ),
        section(
          "providers",
          "4. Recipients and international processing",
          `<p>The publisher and providers access data as needed for their respective roles:</p><ul><li><strong>Supabase:</strong> authentication, account and progress-event storage. The projects use the European eu-west-1 region. ${link(links.supabasePrivacy, "Privacy")} · ${link(links.supabaseDpa, "Data processing agreement")}.</li><li><strong>RevenueCat:</strong> purchase and access management, validation and subscription statistics. ${link(links.revenuecatPrivacy, "Privacy")} · ${link(links.revenuecatDpa, "Data processing agreement")}.</li><li><strong>Apple:</strong> Sign in with Apple, Screen Time services, App Store and payments, under its own rules. ${link(links.applePrivacy, "Apple privacy")}.</li></ul><p>A European database region does not mean that every provider processes all data only within the EU. Support, transactions and subprocessors may involve processing outside the European Economic Area. Provider data-processing agreements describe safeguards, including standard contractual clauses where applicable. Contact us for information about those safeguards.</p><p>No data sale or advertising integration is implemented. Disclosure may also be necessary to comply with law or defend rights in a dispute.</p>`,
        ),
        section(
          "retention",
          "5. Retention",
          `<ul><li><strong>Account and progress:</strong> retained while the account exists to maintain learning continuity, including after subscription expiry; removed from the active service when account deletion is confirmed.</li><li><strong>Local data:</strong> retained according to the feature, deletion actions and iOS rules. Progress events are removed on a successful sign-out; protection preferences may remain on the device. The Screen Time journal is limited to the latest 80 local events.</li><li><strong>Purchase data:</strong> retained to manage access and resolve related claims, subject to payment actors' obligations. Account deletion does not automatically erase RevenueCat's customer record or Apple's archives: contact us to request erasure of those data.</li><li><strong>Support and technical logs:</strong> retained as needed to resolve the enquiry, address security issues or preserve relevant evidence; provider logs and backups also follow their retention policies. Backups are not erased instantly when an account is deleted.</li></ul><p>No automatic account purge based solely on inactivity is currently announced. Ask about retention applicable to your data, or request deletion, at ${contact}.</p>`,
        ),
        section(
          "rights",
          "6. Your choices and rights",
          `<p>Depending on applicable law, you may request access, correction, erasure, restriction or portability and object to certain processing. Contact ${contact} to exercise your rights. Proportionate account verification may be required; do not send passwords, a full purchase receipt or identity documents without a justified request.</p><p>You can delete your account in <strong>Settings → Account → Delete my Kezumi account</strong>. If you cannot access the app, use our contact email. The app reports unconfirmed server deletion; local-only erasure is not confirmation of remote deletion.</p><p><strong>Deleting the account does not cancel an Apple subscription.</strong> Manage it separately in ${link(links.appleSubscriptions, "App Store subscriptions")}. Requests about purchase data still held by RevenueCat should also be sent to the publisher.</p><p>We respond within statutory time limits, normally within one month, and explain if a legally permitted extension is needed. You may complain to ${link(links.cnil, "the CNIL")} or your competent data-protection authority.</p>`,
        ),
        section(
          "security",
          "7. Security and minors",
          `<p>Connections to remote services use HTTPS. Server-side access rules restrict progress data to the relevant account. These measures do not make devices or services infallible: protect your iPhone and Apple account.</p><p>Kezumi is not specifically designed to collect young children's data. Minors must meet applicable local and Apple age and parental-permission requirements. Contact us if a child's data has been processed without the required permission.</p>`,
        ),
        section(
          "website",
          "8. This website and policy updates",
          `<p>This static site is hosted on <strong>GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States)</strong>. Kezumi adds no analytics, advertising, tracking forms or cookies. Fonts and images are served by this site. The host still receives technical visit data, including IP addresses and request logs, under ${link(links.githubPrivacy, "its privacy statement")}.</p><p>Material changes will be reflected in this policy and its updated date; additional in-app notice may be provided where needed. Questions: ${contact}.</p>`,
        ),
      ],
    },
    terms: {
      title: "Terms of use",
      intro:
        "The rules for learning with Kezumi, managing your subscription and staying in control of app protection.",
      summary:
        "Passing a quiz can grant temporary access to an app you selected. Monthly and annual plans provide the same access. You can always disable protection and manage your account without an active subscription.",
      sections: [
        section(
          "publisher",
          "1. Publisher and scope",
          `<address>${publisher}</address><p>These terms describe using Kezumi on iPhone, including its development variant. They supplement ${link(links.appleEula, "Apple's standard end-user license agreement")} and ${link(links.appleTerms, "Apple's service terms")} for App Store purchases, without overriding mandatory consumer rights. Last updated: October 25, 2026.</p>`,
        ),
        section(
          "service",
          "2. The service",
          `<p>Kezumi provides short learning quizzes and protection for selected apps using Apple's Screen Time APIs. Passing a challenge allows you to request temporary access to the chosen app; access and blocking depend on iOS confirmation, permissions and system constraints.</p><p>The catalog, quizzes and learning features actually displayed in the app define the offered service. AI generation and PDF imports are not included in this version. Learning content is general information and may contain errors; please report them to support.</p><p>The demo is explicitly simulated and does not unlock an app. DEV and TestFlight builds are test versions which may have defects and do not guarantee availability of every feature in a public release.</p>`,
        ),
        section(
          "account",
          "3. Account and individual use",
          `<p>A guest session lets you explore and retain technical progress. Sign in with Apple is required before purchasing or restoring a subscription. Retain access to the original Kezumi account used for the purchase and the associated Apple account.</p><p>Access belongs to the original Kezumi account. Use that account to restore on another device; a different Kezumi account does not automatically acquire an existing purchase under the same Apple account. The plan is individual, not a multiseat or team offer.</p><p>Respect content rights and service rules; do not access another account's data or disrupt services. Minors must have permissions required by local law and Apple rules; the Apple account holder is responsible for purchases.</p>`,
        ),
        section(
          "plans",
          "4. Plans, pricing and trials",
          `<p>Both plans provide the same access: the catalog, unlimited quizzes and app-protection features available in the app.</p><ul><li><strong>Monthly:</strong> reference price in France of €3.99 per month, renewing monthly until cancelled.</li><li><strong>Annual:</strong> reference price in France of €19.99 for one year, paid in full up front and renewing annually until cancelled.</li></ul><p>The local price, currency, period, taxes and eligible offers are displayed by the App Store before confirmation. They may vary by country and date; the amount shown in Apple's purchase sheet applies to your purchase. The monthly plan has no twelve-month commitment.</p><p>A three-day free trial may be offered only if that offer exists and Apple confirms eligibility. After the trial, billing starts at the disclosed price unless cancelled within Apple's required deadline. No trial is guaranteed after a previous one has been used. There is no permanent free plan for real quizzes and enabling protection.</p>`,
        ),
        section(
          "billing",
          "5. Billing, renewal and cancellation",
          `<p>Apple bills your Apple account. Subscriptions renew automatically until cancelled. To avoid the next charge, disable renewal before expiry and observe Apple's stated deadline, including at least 24 hours before a trial or current period ends.</p><p>Manage or cancel in Kezumi → Settings → Subscription → Manage in the App Store, or in ${link(links.appleSubscriptions, "Apple's subscription settings")}. After cancellation, access continues until the paid period or trial ends, subject to refunds, revocation or other store decisions.</p><p>A pending, cancelled or unconfirmed purchase grants no new Premium access. Price changes follow Apple's rules and applicable legal requirements.</p>`,
        ),
        section(
          "access",
          "6. Restoration and loss of access",
          `<p>Restore Purchases checks an existing subscription; it does not initiate a new purchase or reactivate an expired subscription. Network access and the original accounts may be required.</p><p>Without valid access, real quizzes and their saved sessions, enabling protection and resuming protection are unavailable. Topics, history and account settings remain accessible. When a recent response confirms loss of access, Kezumi asks iOS to suspend protection. Resubscribing does not automatically reactivate restrictions.</p><p>Offline access uses previously known rights only until their known expiry. A network error alone is not confirmed expiry. Protection cannot be guaranteed to stop at the exact expiry time while the app is closed or offline. You can always disable it manually, independently of subscription status.</p>`,
        ),
        section(
          "deletion",
          "7. Account and data deletion",
          `<p>The <a href="../privacy/">privacy policy</a> explains data use and your rights. Request account deletion in Settings → Account, or by email if you can no longer access the app.</p><p><strong>Deleting the app or account does not cancel an Apple subscription.</strong> Cancel separately in the App Store. Deleting the original account may also prevent restoration to a new account. The account-deletion button does not automatically erase purchase data still held by RevenueCat; contact the publisher about those requests.</p>`,
        ),
        section(
          "rights",
          "8. Operation, guarantees and refunds",
          `<p>Screen Time protection is a voluntary support tool. Kezumi does not guarantee a measured reduction in screen time, a learning outcome or infallible blocking. Permissions, iOS changes, app closure and technical defects can affect restrictions. An error message is not confirmation of protection or temporary access.</p><p>Updates may fix defects or evolve the service. Material changes do not remove statutory rights or applicable digital-content and service guarantees. If the service does not work as described, contact ${contact}.</p><p>You may request an App Store refund through ${link(links.appleRefund, "reportaproblem.apple.com")}. Statutory withdrawal rights, lawful exceptions and consumer guarantees remain applicable according to your country, purchase terms and expressly obtained consents; simply using Kezumi is not a blanket waiver of those rights.</p>`,
        ),
        section(
          "contact",
          "9. Contact and disputes",
          `<p>For complaints, purchase issues or account requests: ${contact}. Describe the issue and app version without sending Apple passwords, private keys or unnecessary receipt information.</p><p>These terms do not remove mandatory protections in a consumer's country of residence or impose an exclusive court that would deprive you of your rights. Amicable resolution, mediation where applicable and competent courts remain available.</p><p>Publisher details are provided at the top of this page. These information pages are hosted by GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States.</p>`,
        ),
      ],
    },
    support: {
      title: "Support",
      intro:
        "Questions about your account, a purchase or protecting your apps?",
      summary: `Email ${site.publisher.email}. Never send an Apple password, private key or banking information.`,
      sections: [
        section(
          "contact",
          "Contact the publisher",
          `<p>${contact}</p><address>${publisher}</address><p>Please include your app version, iPhone model, iOS version, the steps taken and any error message. Hide unnecessary personal information in screenshots.</p>`,
        ),
        section(
          "subscription",
          "Manage a subscription",
          `<p>Open Settings → Subscription in Kezumi or ${link(links.appleSubscriptions, "App Store subscriptions")}. For a refund, use ${link(links.appleRefund, "Apple's refund service")}.</p><p>To restore a purchase, sign in to the original Kezumi account and select Restore Purchases.</p>`,
        ),
        section(
          "deletion",
          "Delete an account or exercise your rights",
          `<p>Open Settings → Account → Delete my Kezumi account. Without app access, email us with the subject “Kezumi account deletion” or “Kezumi personal data”. We will verify the account proportionately.</p><p>Account deletion does not cancel Apple billing or automatically erase RevenueCat purchase records. Mention those records if your request covers them. See the privacy policy for details.</p>`,
        ),
        section(
          "protection",
          "Disable protection",
          `<p>Protection settings in Kezumi remain available without an active subscription. You can also withdraw Kezumi's Screen Time permission in iOS settings. If an action is not confirmed, check the actual protection state on your iPhone.</p>`,
        ),
      ],
    },
  },
};
