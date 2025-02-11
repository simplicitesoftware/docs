Diagramme d'états
====================

Un objet peut avoir des états qui apportent les fonctionnalités suivantes
- via le menu, accès direct à des listes filtrées par états
- transitions d'état habitables (par exemple il est possible de n'habiliter que l'administrateur à faire les retours arrière)
- actions/traitements en réponse à un événement (transition, paramètres saisis, etc)

Pour pouvoir créer un état, il faut respecter les pré-requis suivants:
- l'objet doit posséder un attribut de type énuméré simple (qui portera l'état)
- cet attribut doit être obligatoire
- l'objet ne doit pas déjà avoir un état

Exercice : création de l'état de la commande
---------------------------

- utiliser le template editor pour ajouter à la commande un attribut **obligatoire** de type énuméré simple `trnOrdState`
- une fois ajouté, modifier l'attribut pour éditer la liste de valeur et créer les différentes options (chaque option a un code et une traduction)
- les pré-requis étant validés, le processus d'ajout de diagramme d'états devient disponible sur la définition de l'objet Commande :
    1. choix de l'attribut d'objet portant l'état (dans ce cas, il n'y en a qu'un: trnOrdState)
    2. choix des transitions possibles entre les différents états
    3. choix des groupes pouvant effectuer les transitions choisies (attribuer toutes les transitions au groupe `TRN_ADMIN`)
    4. traduction des actions : à chaque transition d'état est associée une traduction qui sera le texte affiché sur le bouton permettant de passer d'un état à l'autre
    5. Aller sur la paramétrage de la liste de valeurs TRN_ORD_STATE ou depuis le template editor pour ajouter la barre d'états sur l'IHM.
- vider le cache (*car des habilitations ont été modifiées*) et tester les transitions d'état
