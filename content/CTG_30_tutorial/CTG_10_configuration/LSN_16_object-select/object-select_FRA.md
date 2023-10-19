Objet select
====================

Un objet "select" est un objet Simplicité dont le contenu de la table est basé sur le résultat d'une requête SQL.   
Le nom de sa table sera **select**.  
Il permet de générer une requête SQL de type select et d’obtenir un résultat dans une liste. 
Cette liste tout comme les listes d'objets standards sera paginée.
Il faudra associer autant d’attributs à l’objet select que de colonnes retournées par la requête select.
Il est possible de mettre sa requête directement dans le paramétrage de l'objet métier dans le **Filtre** ou bien   
la requête se définit dans le postLoad de l’objet en utilisant **setSearchSpec("select...")**.
L'objet select est bien sûr en lecture seule pour tous les profils utilisateurs.

<div class="warning">Attention, un objet select ne doit pas avoir d'attributs timestamp. (Paramétrage de l'objet :Timestamp=None) ou bien il faut prévoir dans la requête de ramener les attributs</div>


Exercice
====================

- Créer un object select pour afficher toutes les adresses, codes postaux, villes et pays des clients de la table `trn_client` qui ont passé plus de 10 commandes.

