Règles de gestion via contraintes
====================

Les **contraintes** sont des éléments de configuration qui s'appliquent à un objet métier et qui permettent d'exécuter des règles de gestion à la complexité limitée. On peut les traduire schématiquement en pseudo-code `SI conditions d'exécution réunies ALORS exécuter les impacts`

Configuration
---------------------------

Les conditions d'exécutions peuvent être de plusieurs types:
- **attribut:** un attribut de l'objet métier __de type booléen__ doit être vrai
- **expression:** le résultat du champ exécuté "expression" de la contrainte doit retourner "vrai"
- **méthode:** le résultat d'une méthode du script de l'objet métier doit retourner "vrai" (les scripts d'objet sont abordés à la prochaine leçon)

En plus de la condition d'exécution, une contrainte peut également être habilitée pour n'être exécutée que pour certains groupes d'utilisateurs.

Les impacts viennent surcharger les propriétés:
- de l'objet (copier, créer, modifier, etc.),
- d'un attribut de l'objet (modifiable, visible, obligatoire, etc.),
- de visibilité de certains éléments de l'objet (zone d'attributs, vue, action)

La propriété configurée sur l'impact prend comme valeur le résultat du champ exécuté "Expression" de l'impact, qui doit bien souvent retourner un booléen (pour les propriétés de type visible, copiable, modifiable, etc), mais ce peut aussi être une valeur (pour la valeur par défaut de l'attribut par exemple).

L’ordre des contraintes et des impacts a son importance: étant exécutés dans cet ordre, un impact peut en écraser un autre.

Fonctionnement : Back vs Front
---------------------------

Les contraintes, les impacts et leurs champs exécutés sont transformés en code JavaScript qui sera exécuté:
- sur le serveur dans le cas d'une **contrainte back-end**, par le moteur d'exécution Rhino à l'instar des champs calculés
- sur le navigateur dans le cas d'une **contrainte front-end**, par le moteur JavaScript du navigateur de l'utilisateur

Une contrainte front est **dynamique**, c'est-à-dire que l'utilisateur voit directement l'impact sur le formulaire (un champ qui disparaît / apparaît par exemple). Par contre, elle ne s'exécutera **que** sur le navigateur, c'est uniquement de l'expérience utilisateur. Par exemple, si vous rendez un champ obligatoire via une contrainte front uniquement, un utilisateur pourrait contourner la contrainte en utilisant la couche API ou en désactivant la contrainte via la console du navigateur.

Une contrainte back est une vraie règle de gestion, elle s'exécute sur le serveur lors de la préparation du formulaire, mais également lors de la validation des données envoyées par l'utilisateur. Celui-ci n'aura aucun moyen de contourner la règle. Une contrainte back, par contre, n'est pas dynamique.

Ceci étant dit, le grand avantage des contraintes par rapport aux règles de gestion via code, c'est qu'on peut les rendre **à la fois front et back**, pour assurer des règles de gestion sécurisées ET une interface utilisateur dynamique, sans avoir à coder ces règles sur les scripts front et les scripts back.

Exercice
====================

Implémenter la règle de gestion suivante: *La quantité de la commande n'est modifiable que si c'est une nouvelle commande ou une commande en cours*

- ajouter une nouvelle contrainte `TrnOrdConstraint-1` sur l'objet commande 
- ce sera une contrainte back-end non habilitée, de type expression avec pour valeur d'expression `true`, afin qu'elle s'exécute systématiquement pour tout le monde (pas de condition d'exécution)
- impacter la propriété "modifiable" de l'attribut `trnOrdQuantity` avec l'expression suivante:

```
[ISNEW] || [STATUS].equals("PROCESSING")
```

- vider le cache (ou simplement le cache de l'objet métier), et vérifier l'impact sur les commandes




