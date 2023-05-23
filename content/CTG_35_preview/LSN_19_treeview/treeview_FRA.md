Arborescence - Treeview
====================

Les arborescences ou Treeview sont paramétrables depuis le Menu **Interface / Arborescence** 
L'Arborescence ou Treeview permet de lister différents objets métier selon une liste arborescente.  
Le paramétrage se construit de 3 façons :  
- **Manuel** : le paramétrage des noeuds est manuel et strictement interprété. 
- **Tout** :  Si seul le premier noeud est paramétré, les autres noeuds sont interprétés par la plateforme par les liens 1,N ou N,N en suivant les foreign-keys du 1er noeud. L'arborescence affiche également les actions spécifiques paramétrées sur les noeuds, les objets externes en lien, les raccourcis et les processus métier relatifs, les sous-arbres.
- **Relations uniquement **: L'arbre est interprété par la plateforme, les actions spécifiques sur les noeuds, les objets externes, raccourcis, processus et sous-arbres ne sont pas affichés.

Une arborescence peut s’afficher dans un écran splitté en 2 (arborescence/formulaire de l'objet racine), ou dans le menu via un objet externe en spécifiant la donnée racine (rowid).

La vue arborescente permet : 
- De définir un arbre entre différents objets métier en suivant un chemin de foreing-keys : lien direct père/fils, ou via N,N, ou via lien un virtuel ou faire des jointures particulières (sans passer par la clé, mais par un autre attribut une date par exemple…)
- d'afficher en arbre des clés fonctionnelles , ajouter des actions ou des styles/décorations...
- d'être appelée par API JSON get/save pour récupérer l’arbre et le mettre à jour sans UI ou pour faire des publications spécifiques.

L'arborescence utilise une instance particulière de l'objet.
Les hooks **getImageTree**, **getStyleTree** permettent de modifier le style standard du treeview.

<div class="warning">Les relations réflexives sont également parcourues, mais il est parfois conseillé de créer des objets dédiés à un niveau donné : les objets sans parent d’abord puis leurs enfants, sinon tous les objets se retrouvent sur l’objet supérieur.
Attention le parcours récursif peut être coûteux en performances lorqu'il y a de nombreux niveaux et de nombreuses branches (si les listes sont paginées ou non).</div>


Exercice
====================

- Créer une arborescence de type **Manuel** pour le fournisseur `TrnSupplierTreeview` avec comme noeuds ses produits et les commandes sur ses produits.

