Arborescences
====================

![treeview screenshot](treeview.png)

Un arbre est une manière classique d'organiser des données, qui est largement utilisée aussi bien en algorithmique qu'en interface utilisateur. Dans les modèles de données, il est très courant d'avoir une série d'objets liés que l'on souhaite visualiser de cette manière. Simplicité propose un composant Arborescence (ou Vue arborescente) pour faciliter et rendre rapide la mise en place et la visualisation de telles structures.

La structure de l'arbre est définie en configurant :  
- Quel type de nœuds il contient.
- Comment les connexions entre les nœuds sont établies.

Il existe trois façons de configurer les nœuds :  

| **Manual** | **Automatic (links only)** | **Automatic (all)** |  
|---|---|---|
| Les nœuds possibles et la manière dont ils sont connectés (par des relations directes 1/N, N/N, **ou indirectes**) sont configurés de manière explicite. | La plateforme calcule les noeuds connectés en fonction des relations du modèle de données (1/N, N/N) | Ce mode fonctionne comme le précédent, mais il affiche en plus les actions disponibles, les objets externes, les raccourcis, les processus et les sous-arbres |

<div class="warning">Les relations réflexives sont également parcourues, mais il est parfois conseillé de créer des objets dédiés à un niveau donné : les objets sans parent d'abord, puis leurs enfants, sinon tous les objets se retrouvent sur l'objet supérieur. Le parcours récursif peut être coûteux en performance lorsqu'il y a de nombreux niveaux et de nombreuses branches (si les listes sont paginées ou non).</div>

Configurer un arbre automatique 
---------------------------

- Allez dans le menu **Interface / Tree views** (**Interface/Arborescences**)
- créer un nouveau treeview
    - lui donner un nom
    - fixer "Rechercher automatiquement les objets enfants" à `Tous` ou `Liens seulement`
    - enregistrer
- créer un noeud racine
    - niveau : `1`
    - noeud parent : aucun
    - business object : choisissez votre objet racine
    - sauvegarder
- vider le cache

Pour essayer le treeview, ouvrez le formulaire pour un objet racine, vous trouverez le treeview listé avec les autres actions.

Configurer un arbre manuel
---------------------------

- créer un treeview de type manuel
- créer un noeud racine, comme expliqué pour l'arbre automatique (ordre `1`)
- créer un noeud connecté :
    - niveau : `1-1`
    - nœud parent : nœud racine (niveau 1)
    - business object : choisir l'objet connecté
    - joined field : choisir la clé étrangère (sur l'objet racine ou l'objet cible, selon la direction de la relation)

A propos du niveau
---------------------------

Le niveau d'un noeud doit être soit un nombre unique pour le noeud racine, soit `<niveau_du_noeud_parent>-<niveau_entre_les_noeuds_frères>` pour tout autre noeud. Pour les arbres complexes, l'idée est d'obtenir une structure de ce type : 

- `1` : nœud racine
    - `1-1` : premier objet enfant
        - `1-1-1` : premier objet petit-enfant
        - `1-1-2` : deuxième objet petit-enfant
    - `1-2` : deuxième objet enfant
    - etc.

**Il ne peut y avoir plus d'un noeud racine**

Exercise
====================

Créer un arbre **Manuel** permettant de voir ce qui suit :

- la racine étant une commande spécifique
    - le client étant un enfant
        - toutes les commandes du client étant des petits-enfants
    - le produit étant un enfant
        - le fournisseur étant un petit-enfant
        - toutes les commandes du produit étant des petits-enfants
