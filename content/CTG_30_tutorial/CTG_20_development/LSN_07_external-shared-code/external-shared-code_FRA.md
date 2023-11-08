Code partagé
====================

Les codes partagés (menu V5 **Configuration/Code partagé**,menu V6 **Objet métier/Utilisation code partagé**) permettent de créer du code utilisable depuis différents objets.  

Ils ont différentes utilisations, notamment:  
* Permettre de créer de nouvelles classes Java et donc créer des outils spécifiques.  
* Compléter le comportement de certaines classes du socle (classe héritant d'ObjectDB) et notamment celle d'authentification PlatformHooks.  
* Mettre ne place des tests unitaires  
* Créer des codes SQL spécifiques pour une reprise de données par exemple.  


Exercice
====================
Mettre en place un test unitaire qui vérifie le bon fonctionnement de l'incrémentation du stock.