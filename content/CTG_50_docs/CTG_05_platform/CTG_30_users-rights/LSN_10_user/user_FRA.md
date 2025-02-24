Gestion des droits
====================

La configuration minimale pour manipuler une application est la suivante:
- un module pour contenir la configuration
- un objet métier et ses attributs pour manipuler listes et formulaires
- un domaine (menu) pour pouvoir naviguer vers l'objet
- un utilisateur ayant les droits d'accéder au domaine et à l'objet

Les trois premiers points sont couverts par les chapitres précédents, l'objet de celui-ci est d'exposer le fonctionnement des droits, et de créer un utilisateur pour tester la configuration réalisée jusqu'ici.

Concepts
---------------------------

Les utilisateurs appartiennent à des groupes. Il y a une relation N:N entre l'utilisateur et le groupe (un utilisateur peut appartenir à N groupes, et un groupe contenir N utilisateurs). L'objet de relation entre l'utilisateur et le groupe s'appelle une **responsabilité**. Celle-ci peut être active ou non et avoir une date de début et une date de fin.

Les objets métiers mettent à disposition des fonctions:
- les **fonctions CRUD (Create / Read / Update / Delete)** définissent des types d'accès aux objets
- les **fonctions d'action** définissent des accès à des actions particulières (via un bouton par exemple)

On habilite les groupes à des fonctions. Il y a donc une relation N:N entre le groupe et la fonction, que l'on appelle **habilitation**.

Enfin, les **profils** permettent d'imbriquer des groupes dans d'autres groupes.

<div class="warning">Attention, toute modification d'**habilitation** doit donner lieu à un vidage du cache pour être prise en compte par la plateforme.</div>

*Cela est expliqué plus en détail plus en avant, Simplicité maintient en cache un certain nombre d'informations pour des raisons de performances, dont l'ensemble du modèle de droits qui est coûteux à calculer, d'où la nécessité de vider le cache lorsqu'on modifie les habilitations. En revanche, si l'on ne modifie que les responsabilités, il suffit que l'utilisateur se re-connecte pour que ses nouveaux droits soient pris en compte.*
