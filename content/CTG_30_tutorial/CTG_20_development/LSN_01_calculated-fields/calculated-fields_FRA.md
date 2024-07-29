Introduction
====================

Une application n'est pas uniquement composée d'un modèle de données et des autres éléments de configurations évoqués dans la première partie du tutoriel. La majeure partie de la valeur ajoutée réside dans les services offerts **autour** de ce modèle. Nous allons étudier comment il est possible:

- de personnaliser le comportement de l'objet via des règles de gestion
- d'exporter et d'importer des données
- de connecter votre application à d'autres systèmes
- d'étendre à l'infini les fonctionnalités de l'application

Champs calculés par expression
====================

Le type de personnalisation le plus simple est le champ calculé. Il s'agit d'un champ dont la valeur dépendra **d'autres champs du même objet métier**. Dans certains cas, il peut être utile de ramener des champs d'objets liés uniquement pour servir à des champs calculés. Par exemple, dans l'exercice, nous allons calculer le prix total de la commande en multipliant le prix du produit par le nombre d'items commandés. Il faudra donc que le prix du produit soit *ramené sur la commande pour que la valeur soit disponible*.

Persistance
---------------------------

Un champ calculé peut être persistant ou non, selon que le champ ait un nom physique ou non. En effet, s'il n'y a pas de nom physique, alors il n'y a pas de colonne associée dans la base de données, et Simplicité calculera alors la valeur à chaque affichage. S'il y a un nom physique, alors Simplicité stockera le résultat du calcul dans la base à chaque sauvegarde de l'objet métier.

L'avantage du champ non persistant est qu'il n'y a pas à se préoccuper de le maintenir à jour, dans notre exemple en cas de mise à jour du prix du produit, puisqu'il est calculé à chaque affichage.

Les inconvénients des champs non persistants sont justement leur calcul à chaque affichage, qui peut s'avérer coûteux pour l'affichage ou l'export d'une liste (en particulier si c'est un calcul complexe), mais également leur indisponibilité pour les fonctionnalités d'agrégation de données (sommes en liste, group by en liste, tableaux croisés, etc.) car elles sont faites par requêtes SQL.

Expressions Simplicité
---------------------------

Un certain nombre de champs de paramétrage, tel que le champ *Expression calculée* de l'attribut, sont des **champs exécutés**. Avant de les utiliser, il est intéressant de comprendre leur fonctionnement.

Les contenu de ces champs exécutés est exécuté côté serveur grâce à la librairie Rhino, qui est une implémentation de JavaScript (ES6) écrite en Java. Rhino permet d'exécuter des scripts dans une application Java sans les compiler au préalable. Étant exécutés sur le serveur, les scripts ont cependant accès à toute l'API Java Simplicité.

Avant l'exécution par Rhino, Simplicité effectue également un pré-traitement des champs exécutés pour transcrire les expressions Simplicité (syntaxe entre crochets) en code JavaScript.

Certaines expressions sont disponibles dans tous les champs exécutés, d'autres ne le sont que dans des champs exécutés spécifiques.

Attention donc à bien distinguer les éléments suivants:
- **champ exécuté:** champ de certains objets de configuration qui donne lieu à une exécution Rhino et donne accès à toute l'API Simplicité
- **expression Simplicité:** syntaxe Simplicité transformée en code javascript pour simplifier le contenu des champs exécutés
- **expression calculée:** c'est un *champ exécuté* de l'objet de configuration "Attribut" qui permet de calculer automatiquement la valeur de l'attribut

Exercice
====================

- Si ce n'est pas déjà fait, ramener le prix du produit dans la commande (*NB: lorsque vous oubliez de ramener un champ lors du processus de création de relation, il est toujours possible de la ramener par la suite, en configurant l'attribut d'objet manuellement, ou plus simplement en utilisant le template editor*)
- Ajouter un champ `trnOrdTotal` à la commande
- En faire un champ calculé **persistant** (*si le prix du produit change par la suite, on ne veut pas impacter les commandes déjà passées*), en lecture seule, avec l'expressions suivante:

```
[VALUE:trnPrdPrice]*[VALUE:trnOrdQuantity]
```

- vérifier le fonctionnement en sauvegardant une commande (pour un champ calculé persistant, le calcul se fait **à la sauvegarde**)
