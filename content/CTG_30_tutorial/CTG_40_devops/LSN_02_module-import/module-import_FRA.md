Export et import de module
====================

Pour déployer une application, il faut exporter le(s) module(s) nécessaires de l'instance de développement et les installer sur l'instance de cible. C'est à cela que servent les exports et imports de modules. L'export consiste en un export XML de la configuration Simplicité et de l'exemple des fichiers ressources associés à la configuration (logo, fichiers java, CSS, JavaScript, dataset, etc.).

L'export peut se faire :
- par génération sur la plateforme d'un fichier zip à télécharger
- par utilisation des mécanismes GIT
- par appel à la couche io (en ligne de commande avec `curl`), pour télécharger le même fichier zip

L'import peut se faire : 
- par upload du fichier zip via le formulaire du module
- par utilisation des mécanismes GIT
- par appel à la couche io (en ligne de commande avec `curl`), pour uploader le même fichier zip
- en renseignant le fichier importspec au format json ou yaml (cas des images docker spécifique).

S'il ne s'agit pas d'une création de module, mais d'une mise à jour (une v2 par exemple), il est possible que *des éléments de configuration aient été supprimés*. C'est pour cela que la plateforme réalise une comparaison (diff) entre l'existant et l'importé pour supprimer ces objets fantôme.

<div class="warning">Attention, le diff n'est fait <strong>que</strong> si l'on passe par la fonctionnalité d'import de module et pas par la fonctionnalité plus basique d'import XML classique.</div>

Exercice
====================

Méthode classique
---------------------------

- [instance A] Exporter le module au format zip
- [instance B] importer le module au format zip (la première fois, le diff est inutile, on peut passer par l'import XML classique)
- [instance B] Consulter la supervision d'imports pour vérifier que l'import s'est bien déroulé
- [instance B] Vider le cache et tester l'import 
- [instance B] Supprimer le module 

Méthode git
---------------------------

- tester l'import du module de Démo via l'appstore
- vider le cache
- observer la configuration du module et la référence au repository GitHub
