Liens virtuels
==================

Un lien virtuel permet d'accéder à des données liées à un objet métier sans avoir à parcourir le modèle métier.

Le principe est de créer une relation "virtuelle" entre deux objet métiers.
Cette relation n'a pas de colonne physique et donc ne donne pas lieu à la création d'une clé étrangère dans la table fille.
Les données sont récupérées à l'aide d'une requête SQL portée par la relation entre les deux objets.

Par exemple, pour consulter la liste des clients d'un fournisseur on renseignera un filtre spécifique à la relation d'objets entre Fournisseur et Client.

```sql
t.row_id in (select c.row_id from trn_client c
left join trn_order o on o.trn_ord_cli_id = c.row_id
left join trn_product p on o.trn_ord_prod_id = p.row_id
left join trn_supplier s on p.trn_prod_sup_id = s.row_id
where s.row_id = [row_id]
)
```

Dans cet exemple on souhaite récupérer les row_id de la table **trn_client**, ici l'alias t désigne la table de l'objet lié (TrnClient).
On effectue donc un parcours du modèle en sélectionnant d'abord les commandes des clients, puis les produits de chaque commande et enfin le fournisseur de chaque produit pour filtrer sur l'identifiant du fournisseur sur lequel on se trouve. Ici **[row_id]** est une expression qui récupère le row_id du record que l'on consulte.

Exercice
=================
- Créer un attribut sans colonne physique et l'associer à l'objet **Client** en spécifiant l'objet lié **Fournisseur**. Cette action va créer la relation entre vos deux objets.
- Renseignez un filtre sur la relation permettant de consulter la liste des produits d'un fournisseur ayant fait l'objet d'une commande expédiée.
<div class="warning">À partir de la version 6, renseignez SQL spécifique. L'attribut Filtres permet de trier, filtrer la liste liée</div>

*Pour éviter les fautes de frappe lors de la saisie de noms d'attributs ou de codes de liste, il est conseillé d'utiliser la fonction "copier" du modeler*
