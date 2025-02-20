Tableaux croisés dynamiques
====================

Les tableaux croisés permettent de croiser des informations au niveau d'un objet selon des attributs de cet objet. Les tableaux se configurent en choisissant les axes suivants:
- les attributs servant de colonnes
- les attributs servant de lignes
- les attributs servant de valeurs

On ne peut utiliser que des attributs propres à l'objet ou des attributs ramenés sur l'objet.

S'il n'y a pas d'axe "valeur", alors la plateforme effectue un dénombrement.

Les tableaux croisés offrent de nombreuses options aux utilisateurs:
- affichage ou non des axes présentés
- interversion des axes (lignes <-> colonnes)
- filtrage des données utilisées (à noter que le tableau croisé utilise les filtres déjà actifs sur l'objet si une recherche a été réalisée)
- réalisation de graphes
- exports CSV, Excel, JSON (ce dernier peut aussi être obtenu par webservice)

Exercice
====================

Créer un tableau croisé qui synthétise le nombre de commande par produit, fournisseur (colonnes) et par état.

- via le template editor, ramener l'id et le nom du fournisseur sur la commande depuis l'objet produit
- dans Interface > Tableaux croisés, créer un nouveau tableau croisé `TrnTcOrders`
- créer deux axes "colonnes" (fournisseur et produit) et un axe "ligne" (état). 
- vider le cache et constater la présence du tableau croisé accessible depuis la liste des commandes  