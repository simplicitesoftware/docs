Historisation
====================

Il est possible d'activer très simplement deux types d'historisation sur les objets métier: le journal des modification et la table historique.

Suivi des modifications
---------------------------

Le suivi des modifications permet de logger toutes les activités faites sur l'objet (qui, quel changements, à quelle heure). Pour l'activer, il faut:
- s'assurer que le paramètre système `LOG_ACTIVITY` soit bien activé ("database": true), ce qui est le cas par défaut.
- cocher l'option "Data history: Change log" dans le paramétrage de l'objet métier.

<div class="error">Actuellement, il faut manuellement créer une fonction sur l'objet système "RedoLog" pour donner accès aux changelog aux utilisateurs finaux.Veiller à supprimer les filtres de modules pour ajouter cette fonction. </div>

Table historique
---------------------------

La table historique permet d'historiser l'ensemble ou partie d'un objet dans une table *ad hoc*.

L'activation de l'historique aura pour effet la création d'un objet "Historic" (par exemple `TrnProductHistoric`) dans le même module que l'objet métier, avec tous les attributs de l'objet à historiser, plus:
- une référence au record créateur
- la date d'historisation
- le login du user

Une fonction lecture seule est créée sur cet objet historique, qu'il faut habiliter pour pouvoir le voir. L'objet n'est pas automatiquement ajouté au modèle, mais il est possible de l'ajouter manuellement.

C'est la présence ou non d'un attribut dans l'objet historique qui détermine quels changements provoquent une historisation. Par exemple si on supprime l'attribut d'objet "description" de l'objet `TrnProductHistoric`, non seulement la description n'apparaîtra pas dans la "photographie" prise à un instant t, mais la modification de la description n'aura pas pour effet de créer une nouvelle ligne dans l'historique.



Exercice : Suivi des modifications de la commande
====================

- cocher l'option "Data History: Change log" dans le paramétrage de la commande
- donner accès aux utilisateurs à l'objet `RedoLog`
    - retirer la visibilité de module pour avoir accès à l'objet RedoLog (Suppression filtre de modules)
    - copier la fonction `RedoLog-RD` pour créer une fonction `RedoLog-R` de type lecture seule **dans le module Training**
    - associer le groupe `TRN_SUPERADMIN` à cette fonction
- vider le cache et vérifier l'apparition du journal des modifications
