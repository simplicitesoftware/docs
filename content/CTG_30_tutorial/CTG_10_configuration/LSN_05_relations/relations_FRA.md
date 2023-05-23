Création des relations
====================

Concepts
---------------------------

La définition d'une relation 1:N permet de lier deux objets métiers entre eux. Si on prend l'exemple du fournisseur et du produit, il y a 1 fournisseur pour N produits. Cette section présente ce que fait le moteur Simplicité avec le paramétrage des objets, attributs, et relations.

### Clef technique de l'objet métier

À partir de la définition des noms physiques d'objet et d'attribut, une table et une colonne sont créées dans la base de données. En réalité, dès la création d'un objet métier, 5 colonnes par défaut sont créées, les **champs techniques**. On peut le vérifier en testant une requête SQL via le raccourci "Accès BDD" comme vu au chapitre précédent:

```
select * from trn_supplier;
```

On obtient les colonnes suivantes:

| row\_id | created\_dt | created\_by | updated\_dt | updated\_by | trn\_sup\_code |
|---------|-------------|-------------|-------------|-------------|----------------|
|         |             |             |             |             |                |

La colonne `row_id` est ce que l'on nomme la **clef technique**. Elle est générée et gérée par le socle, **il est donc inutile de créer des attributs ID** pour vos objets.

Ces 5 colonnes ne sont pas destinés à être visibles de l'utilisateur.

### Clef fonctionnelle de l'objet métier

La clef fonctionnelle est un ensemble de champs définissant l'unicité **fonctionnelle** de l'objet métier, elle permet donc d'identifier de façon unique un record sur la base de ses données métier. Ainsi, si on décide que la clef fonctionnelle du client est composée de son nom et de son prénom, alors on ne pourra pas avoir deux clients ayant le même nom+prénom. 

**Tout objet métier doit avoir une clef fonctionnelle**. *En l'absence de clef, Simplicité n'autorisera la création que d'un seul record, qui aura pour clef fonctionnelle "vide". Le second record, ayant aussi pour clef fonctionnelle "vide", déclenchera une erreur car la clef fonctionnelle existe déjà.*

### Clef étrangère

Une relation entre deux objets est portée:
- physiquement, par **une colonne dans la table de l'objet référençant**, pointant vers la colonne `row_id` de l'objet référencé
- en termes de configuration, par:
    - un attribut de type Internal ID/Clé technique (créé automatiquement lors de la création de la relation), 
    - un attribut d'objet liant l'attribut à l'objet, et renseignant
        - l'objet référencé dans "Objet lié"
        - "champ référence" vide

### Champs ramenés

Lorsqu'il y a une relation 1:N entre deux objets, il devient possible d'ajouter des champs ramenés à l'objet référençant. Dans notre exemple, il est possible d'afficher des informations du fournisseur sur le formulaire du produit.

Il existe trois façons de ramener des champs: 
- lors de la création de la relation entre deux objets
- en utilisant le template editor
- en créant manuellement un attribut d'objet correctement paramétré

Le champ ramené est porté:
- physiquement, par l'objet référencé
- en termes de configuration par un attribut d'objet liant **l'attribut de l'objet référencé** à **l'objet référençant**, et renseignant:
    - l'objet référencé dans "Objet lié"
    - la clef étrangère utilisée dans "champ référence"

Exercice
---------------------------

- Créer les relations suivantes, en ramenant systématiquement la clef fonctionnelle de l'objet référencé:
    - Fournisseur <-1:N- Produit
    - Produit <-1:N- Commande
    - Client <-1:N- Commande
- Éditer le formulaire de la commande comme présenté sur [cette image](#IMG_CLICK_formation_029.png) et utiliser l'option dédiée pour ramener un nouveau champ d'un objet référencé ( Bouton "+" sur le template editor > Nom de l'objet référencé > )
