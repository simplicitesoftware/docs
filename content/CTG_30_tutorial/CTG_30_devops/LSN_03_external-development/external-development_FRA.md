Développement externe
====================

Comme vu au chapitre précédent, un module peut s'exporter et s'importer via un endpoint GIT. L'export via ce endpoint résulte en un projet [Maven](https://maven.apache.org/what-is-maven.html) qui permet :

- de réaliser les développements Java en local, en profitant des fonctionnalités d'**auto-complétion et refactoring** des IDE modernes
- de faire du **debug pas à pas**
- d'exécuter des **analyses de code** avec des outils comme Sonar
- d'exécuter les **tests unitaires** avec JUnit

Pré-requis
---------------------------

Il est nécessaire pour pouvoir utiliser ces fonctionnalités d'avoir un environnement de développement local Java fonctionnel. Pour cette leçon, nous proposons l'utilisation de Visual Studio Code, et les pré-requis sont donc l'installation de :
- Visual Studio Code
- l'extension "Java extension pack" de VS Code
- Git

Création & clone du repository GIT
---------------------------

1. Création
    - depuis la définition du module (Administration > Module), cliquer sur l'action "Git Repository" : cela a pour conséquence la création d'un répertoire sur le filesystem et initie un repository GIT vide
    - saisir un message de commit ("init" par exemple) et cliquer sur l'action "Commit" : cela crée le premier export de module dans le repository et crée le commit associé
2. Clone
    - depuis la page du repository git, copier l'URL du repository
    - dans les paramètres système de la plateforme, rechercher le paramètre `EAI:designer` qui contient le mot de passe d'accès aux endpoints /git et /io. Copier le mot de passe
    - avec ces informations cloner le repository localement

En ouvrant le repository cloné avec VS Code et l'extension "Java extension Pack", les dépendances du projet sont téléchargées (cela prend un peu de temps la première fois), et les fonctionnalités de JavaDoc et d'auto-complétion sont automatiquement intégrées.