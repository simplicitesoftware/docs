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

Exercice: Création d'un utilisateur de test
---------------------------

1. Vider le cache (menu en haut à droite > vider le cache > toutes les sessions et serveur ([ <kbd>Alt</kbd>+<kbd>C</kbd>+<kbd>C</kbd> ])
2. Scope "Gestion des droits" > Domaine "Habilitation" > Utilisateurs > Tout voir > Créer
3. Créer un utilisateur de test "usertest", et copier le mot de passe qui s'affiche lors de la création
4. Cliquer sur le bouton "Activer" pour le rendre actif
5. Dans l'onglet "Responsabilité", cliquer sur le bouton "Associer", et sélectionner le groupe **TRN_SUPERADMIN** dans la fenêtre qui s'affiche.
6. Se reconnecter en tant que "usertest"
7. Vérifier l'accès à l'objet Supplier

Félicitations! Vous avez créé une application!



Pour approfondir : Création d'un utilisateur "lecture seule"
---------------------------
* Créer un utilisateur "lecteur" associé à un groupe **TRN_READONLY** habilité à un domaine **TrnDomainReadOnly** dans lequel l'utilisateur accède à la liste des **Fournisseurs** en lecture seule.
