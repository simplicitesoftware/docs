Création du module
====================

Simplicité se configure via des **objets de configuration** qui permettent de décrire l'application. Ces objets de configuration comprennent les objets métier, les attributs de ces objets, les templates d'objet, les actions réalisables sur ces objets, etc. **Tous les objets de configuration vont appartenir à un module, qui est l'unité d'export**. Les développeurs développent leur application sur une instance de développement, et exportent le module pour l'installer sur une instance de production par exemple.

Il faut dissocier la notion d'application et la notion de module. Le module est en effet l'unité d'export, mais une application peut être composée de différents modules: un ERP peut ainsi être composé d'un module RH, d'un module CRM et d'un module Gestion de projet qui suivent chacun leurs propres cycles de développement. Dans le cas étudié sur cette formation, tout le paramétrage est réalisé au sein d'un seul module.

Toute configuration commence donc par la création d'un module. Pour faciliter le démarrage, un process de création de module est proposé sur la page d'accueil, qui permet de créer non seulement un module, mais aussi des groupes de droits, un domaine (menu), et un scope.

L'ensemble des objets de configuration et les relations qu'ils ont les uns avec les autres forme ce que l'on appelle le **méta-modèle**. Il y a toujours de nombreuses façons de naviguer et d'obtenir un même résultat dans l'application, c'est donc la compréhension du méta-modèle qui permet de s'orienter dans la configuration d'une application. Cette formation a pour objet de présenter et d'expliquer ce méta-modèle.

Exercice
---------------------------

Démarrer le process qui se compose de différentes étapes:

- Création du module
    - nom: **Training**
    - préfixe: **trn** *(le préfixe permet d'appliquer automatiquement des conventions syntaxiques au nommage de vos objets)*
- Création d'un groupe de droits
    - nom: **SUPERADMIN** *(si vous avez bien saisi le préfixe à l'étape précédente, la plateforme vous proposera un nom de groupe respectant les conventions)*
- Création d'un domaine (menu)
    - nom: **TrnDomain**
- Création d'un scope: *le scope permet de définir différentes "casquettes" d'utilisateurs. Par exemple un administrateur pourra utiliser sa casquette "utilisateur standard", ou bien changer de scope via le composant dédié et utiliser sa casquette "administrateur" lui permettant d'effectuer toutes les opérations.*
    - icône: cliquer sur la loupe et choisir une icône pour ce scope
