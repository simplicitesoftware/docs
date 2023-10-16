Mapping
====================

Un mapping permet de ramener/copier des champs par valeur (et non par référence) d'un objet A vers un objet B. 


Dans quel cas utilise t'on un mapping ?
- Lorsque la relation entre 2 objets n'est pas possible ou qu'elle n'a pas de sens
- Lorsque l'on souhaite effectuer une copie par valeur
- Pour afficher une liste de valeurs sans devoir persister les données de la liste dans la base (appel de service par exemple)

Le mapping utilise une instance particulière de l'objet.
Le hook **initDataMapSelect** permet de surcharger le comportement standard du Datamap.


Exercice
====================

- Allez dans l'AppStore et installez le module ISO Countries ainsi que son dataset
- Créer un attribut `trnCliCountry` dans l'objet `TrnClient`
- Créer un mapping `TRNCOUNTRYDM` qui mappe l'attribut source `trnCliCountry` avec l'attribut `isoCtyName` de l'objet ISOCountry de type `Out` (Sortant)  
- Vérifier le résultat sur le formulaire du client et dans la base de données