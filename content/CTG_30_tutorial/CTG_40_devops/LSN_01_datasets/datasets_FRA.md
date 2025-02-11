Jeux de données
====================

Lorsqu'on installe un module, il est souvent utile de fournir un jeu de données de test.

Pour transférer des données d'une instance à l'autre, la première méthode qui vient à l'esprit est l'export de la base ou d'une sous-partie de la base. C'est **l'export technique**. Le problème qui peut survenir dans les export techniques **partiels** est le suivant
- si un objet A exporté fait référence à un objet B non exporté
- l'export SQL de la table de l'objet A contiendra donc la clef technique de l'objet B
- lors de l'import sur une autre instance, cette clef technique peut ne pas du tout correspondre à ce qu'était l'objet B dans l'instance originelle.

C'est pour cela qu'existe **l'export fonctionnel**, qui est un export qui contient **uniquement les données fonctionnelles**, et non les données techniques comme les ID. Lorsqu'il est importé, Simplicité va *rechercher l'ID de l'objet lié à partir de sa clef fonctionnelle*, et réaliser la relation. Pour que cela fonctionne, il faut évidemment que l'objet A contienne bien en tant que champs ramenés tous les champs de la clef fonctionnelle de l'objet B auquel il est lié, sinon l'objet B ne peut pas être trouvé pour faire la liaison.

Un export par objet est disponible sur les listes en tant que designer (menu plus > export > export Simplicité), mais pour créer un véritable jeu de données, la plateforme offre la possibilité de les générer automatiquement. Pour ce faire, il faut comprendre que l'ordre d'import est primordial. Il est en effet impossible d'importer les produits avant les fournisseurs. Dans des cas de modèles complexes (relations circulaires), il est compliqué pour la plateforme de déterminer l'ordre d'import. Certains objets peuvent ne pas avoir de sens dans un dataset (on peut décider de ne pas inclure les historiques par exemple). C'est pour ces raisons qu'il est nécessaire de configurer manuellement cet ordre.

Exercice
====================

- paramétrer l'ordre d'export pour le client, le produit et le fournisseur (on ignore la commande)
- vérifier que le produit contient bien la clef fonctionnelle du fournisseur
- aller à la définition du module et générer un dataset en utilisant l'action "Exporter les données" : le jeu de données est généré dans l'objet dédié en panel
- observer le contenu
- supprimer toutes les données des objets, et importer le dataset
