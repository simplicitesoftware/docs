Modèle Template 
====================

Les modèles template sont paramétrables depuis le Menu **Modèle/Modèle template**.  
Ils permettent de créer des templates spécifiques pour un usage de modèle métier, par exemple un modèle template permettant de créer des commandes via le modeleur.  

Le paramétrage consiste à désigner un Nom et un Type de modèle. 

Une fois le modèle template créé, il convient de paramétrer les objets du modèle ainsi que les liens : 
- saisir les objets et leur type ainsi que leurs styles dans le modeleur
- saisir les liens entre objets ainsi que leurs styles (Trait - lien simple, Flèche - Référence, ..etc.), définir les atrributs liens origine et cible
Pour information, les liens virtuels peuvent aussi s'afficher.

Le modèle métier utilise une instance particulière de l'objet.

La liste des hooks est décrite [ici](/lesson/docs/core/modeler-code-hooks).



Exercice
====================

Faire un modèle template afin de permettre la saisie des commandes via modeler
(Une commande est un lien entre un produit et un client)



