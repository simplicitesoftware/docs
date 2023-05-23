Vues
====================

Une vue est un assemblage de composants qui peut servir:
- de page d'accueil de domaine,
- de page d'accueil de groupe,

Les composants principaux sont:
- des recherches prédéfinies,
- des tableaux croisés,
- des objets externes (objets particuliers permettant, entre autres, de créer des composants spécifiques à insérer dans les vues)

Scopes
---------------------------

Lorsqu'un utilisateur a de nombreux groupes de droits, il est souvent utile de lui offrir un moyen de limiter ses droits. Un administrateur de l'application peut par exemple vouloir qu'en temps normal l'application se comporte comme s'il était un utilisateur classique. C'est pour cette raison qu'il est possible d'activer ou de désactiver les responsabilités d'un utilisateurs avec le système de "scopes", qui permettent de faire ces changements de casquette.

Un scope est une page d'accueil de groupe qui définit un certains nombres de groupes actifs. Lorsque l'utilisateur utilisera ce scope, seuls ces groupes restent actifs.

En tant que designer, il est facile de tester cette fonctionnalité avec les scopes déjà disponibles:
- Application design
- Operation / Exploitation
- Gestion des droits et utilisateurs
- Simplicité Administrator (scope joker où tous les groupes sont actifs)
- etc.


Exercice
====================

- créer une nouvelle vue `TrnHome`
- y définir deux zones
    - la liste des commandes en cours via une recherche prédéfinie
    - le tableau croisé dynamique précédemment paramétré
- définir cette vue en tant que page d'accueil du domaine Training (veiller à ce que le domaine affiche la page d'accueil)
- vider le cache et vérifier la présence de la page d'accueil
