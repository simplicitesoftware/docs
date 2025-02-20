Personnalisation des styles
====================

Thème et styles de thème
---------------------------

Un thème est un objet qui permet de définir le logo et les couleurs principales de l'interface. Il est possible d'ajouter une feuille de style personnalisée au format LESS ou CSS au thème, qui s'appliquera globalement.

Le thème doit être associé à un scope.

Styles d'objet
---------------------------

Il est possible de définir une feuille de styles spécifique à un objet métier en ajoutant une ressource de type "Style CSS" (format LESS ou CSS) nommée `STYLES`.

Styles d'attributs
---------------------------

Les styles d'attributs sont un élément de configuration permettant d'ajouter une classe CSS à un attribut

Icônes d'item de liste
---------------------------

Particulièrement utile dans le cas des listes utilisées dans les diagrammes d'états, il est possible d'attributer une icône à chaque item de liste


Exercice
====================

- Créer un thème "base claire" avec une icône personnalisée
- Attribuer ce thème au scope créé automatiquement par le processus de création de module
- Attribuer une couleur à chaque état de la commande
    - via les styles d'attributs pour le fond (afin d'utiliser les classes CSS)
    - via les items de liste pour les icônes

*Pour éviter les fautes de frappe lors de la saisie de noms d'attributs ou de codes de liste, il est conseillé d'utiliser la fonction "copier" du modeleur*
