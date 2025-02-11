Héritage
====================

Cette notion d'héritage a été vue dans le chapitre **Relations** au travers des différents type de relations (Relations ou Héritage) possibles depuis le modeleur. 
Il est possible de créer un objet configuré héritier dans Simplicité. 

Les caractéristiques d'un objet Héritier sont  :
- L'objet est dans la même table que son père (l'objet dont il hérite) mais n'a pas le même nom logique
- L'objet hérite de tous les attributs de son père et auquel on pourra ajouter des attributs spécifiques
- L'objet hérite du comportement de son père avec surcharge possible
- L'objet hérite des mêmes contraintes que son père
- L'objet n'hérite pas des droits de son père
- L'objet hérite du diagramme d'état de son père mais les transitions d'états doivent être habilités sur l'objet Héritier

Un des Design pattern couramment utilisé dans Simplicité est de créer un objet héritier de `SimpleUser` (Table m_user).
Ainsi il sera possible de déléguer à un profil Administrateur applicatif la gestion des utilisateurs, de rajouter des attributs spécifiques à l'utilisateur (service, direction, département,etc.)

Exercice
====================

- Créez un objet héritier `TrnProductlowPrice` de l'objet `TrnProduct` dont le prix est compris entre 0 et 50 euros
- Ajoutez l'objet dans le menu
- Affichez la liste des produits dont le prix est inférieur à 50 euros sur la page d'accueil `TrnHome`
 
