Listes liées
====================

L'objet liste liée permet de changer dynamiquement les valeurs possibles d'un champ énuméré selon la valeur d'un autre champ énuméré.

Plutôt que de définir plusieurs attributs de type énuméré et de conditionner leur visibilité par rapport à la valeur d'un autre attribut, on préfèrera paramétrer une liste liée.

Ce mécanisme est présent au niveau du socle Simplicité. Le fait de pouvoir présenter différents **Type de recherches** pour un attribut selon le **Type d'attribut** est rendu possible grâce à une liste liée.

Le paramétrage se fait ainsi :
- Sélection d'un attribut de type énuméré portant la liste de valeurs conditionnantes
- Sélection du code de liste qui va conditionner
- Sélection de l'attribut cible qui va porter les différentes listes de valeurs
- Sélection de la liste de valeurs qui va être visible dans l'attribut cible


Exercice
====================

- Créez un attribut de type énuméré `Type d'expédition` dans l'objet `TrnOrder` avec les valeurs `Lettre | Colis`
- Créez un attribut de type énuméré `Sous-type d'expédition` dans l'objet `TrnOrder` avec les valeurs `Lettre verte | Lettre avec AC`
- Créez une liste de valeurs `TRNORDEXPEDSOUSTYPECOLIS` avec les valeurs `Colis 24h | Colis 1 semaine`
- Créez l'objet liste liée qui affiche la liste de valeurs `TRNORDEXPEDSOUSTYPECOLIS` dans le champ `Sous-type d'expédition` de l'objet `TrnOrder` si le type d'expédition est `Colis`
