Qualité du logiciel, tests, logs, debug
===================================

Ce n'est pas spécifique à Simplicité, mais nous allons évoquer les différents moyens d'assurer la qualité du logiciel.

Qualité du code
---------------------------

S'agissant de la seconde partie du tutoriel, et concernant une utilisation avancée de la plateforme, les **tests unitaires** avec JUnit et l'**analyse de qualité de code** avec Sonar sont abordés dans la documentation.

Tests fonctionnels
---------------------------

Les tests fonctionnels peuvent bien entendu se faire manuellement comme au chapitre précédent et ce sera la méthode préférée tout au long du tutoriel car la plus directe. Il est cependant possible d'automatiser ces tests:
- en testant la UI avec des outils de type Sélénium
- en testant l'API

<div class="success">En ce qui concerne les tests manuels, il est conseillé de se connecter sur une fenêtre de navigation privée pour éviter les croisements entre la session utilisateur de test et la session designer.</div>

Logs applicatifs
---------------------------

Les logs applicatifs sont à la fois un outil d'assurance qualité (il est conseillé de monitorer les logs et de traiter tous les warnings et les erreurs) et de débug.

Ils sont disponibles:
- dans la console JS du navigateur si l'utilisateur connecté est designer
- via l'URL `/ui/logs` qu'il est possible d'ouvrir dans un autre onglet

Débug
---------------------------

Pour poser un diagnostic sur une anomalie, les deux stratégies principales sont:
- observation des logs pendant la reproduction de l'anomalie
- le débug pas à pas, qui fait partie des utilisations avancées de la plateforme

Parfois, que ce soit par un problème de paramétrage, des requêtes spécifiques ou n autres raisons, on peut suspecter une erreur ou un problème de construction des requêtes SQL. Pour tester les requêtes:
- si une requête SQL échoue elle sera selon toute vraisemblance dans les logs
- si ce n'est pas un échec mais une requête par exemple mal construite qui ne retourne aucun résultat, il peut être utile d'activer le paramètre système `LOG_SQL_USER` (Administration > Paramètre Système) pour forcer l'écriture de toutes les requêtes dans les logs. Veiller à désactiver cette option une fois la requête récupérée, car ce mode est très verbeux et va saturer rapidement l'espace dédié aux logs.
- tester la requête via l'outil DBAccess (scope "Opérations" > Home > Actions > Database Access ou accès direct via l'URL `/ui/ext/DBAccess`)

Exercice : enrichissement du modèle
====================

Compléter le modèle en créant les objets Product, Client et Order ainsi que l'ensemble de leurs attributs comme présenté dans les chapitres précédents:
- les attributs obligatoires sont indiqués en rouge
- les attributs constituant la clef fonctionnelle de l'objet sont en gras
- ne pas hésiter à tester les différents types d'attributs et à enrichir le modèle proposé
- attention à bien respecter les règles de nommage (NB: l'anglais sera utilisé dans ce tutoriel pour les nommage).

<div class="info">Dans les chapitres suivants, les relations entre ces objets seront créées et les attributs seront utilisés pour appliquer des règles de gestion.</div>

Après chaque création d'objet et ajout de ses attributs:
- vider le cache pour que les responsabilités créées soient prises en compte
- tester fonctionnellement le formulaire de chaque objet avec l'utilisateur usertest (nav. privée) et créer des données
- pendant ces tests, vérifier l'absence d'erreurs dans les logs
- pendant ces tests, analyser les colonnes et lignes créées dans la base en utilisant DBAccess et des requêtes SQL basiques de type `select * from trn_supplier`

<div class="info">En suivant le contenu de la base, vous remarquerez que Simplicité gère automatiquement 5 champs techniques en plus des champs paramétrés: `row_id, created_dt, created_by, updated_dt, updated_by`. Le prochain chapitre reviendra en détail sur la différence entre clef technique (`row_id`) et clef fonctionnelle (code fournisseur, nom+prénom client, etc.)</div>

Support
====================

Pour rappel, en cas de difficultés, la communauté de designers Simplicité est active sur http://community.simplicite.io
