Création d'objet métier
====================

Concepts
---------------------------

L'objet métier est la pierre angulaire de toute configuration, c'est autour de lui que se concentrent la plupart des fonctionnalités offertes par la plateforme:
- recherche
- listes
- formulaires
- scripts
- publications
- etc.

À partir de la configuration de l'objet métier, la plateforme créera une table dans la base de données, et offrira à l'utilisateur les fonctionnalités classiques de manipulation de données: création, suppression, modification, copie, modification en masse, suppression en masse, fusion, etc. Chaque objet métier peut porter des règles de gestion qui permettent de contrôler finement son comportement, c'est le sujet de la seconde partie de la formation.

L'ensemble des objets de configuration et les relations qu'ils ont les uns avec les autres forment ce que l'on appelle le **méta-modèle**. Il y a toujours de nombreuses façons de naviguer et d'obtenir un même résultat dans l'application, c'est donc la compréhension du méta-modèle qui permet de s'orienter dans la configuration d'une application. Si le méta-modèle est le manuel de configuration, l'objet métier est le chapitre premier car c'est à lui que sont reliés la majorité des autres objets de configuration.

Outil de configuration : Modeler
---------------------------

Pour faciliter la visualisation des objets métiers et de leurs attributs, Simplicité met à disposition un outil nommé *Modeler*. Le modeleur exploite la configuration réalisée pour afficher ces informations sous forme visuelle *et manipulable*. Il est ainsi possible d'accéder à des fonctionnalités de Simplicité depuis le Modeler, et notamment la création d'objet métier. Une partie entière sera consacrée au modeleur en fin de formation.

Pour accéder au processus de création d'objet métier (par ailleurs accessible via Administration > Objet Métier > Assistant de création):
1. cliquer sur le bouton d'accès aux diagrammes dans la coin supérieur droit de l'interface. Un popup vide s'affiche; il n'y a actuellement aucun modèle configuré dans votre module.
2. saisir les informations suivantes dans le formulaire de création:
    - template name: **ModelBusinessObject** *(ne pas confondre avec ModelObject, moins riche en fonctionnalités)*
    - name: **ModelTraining**
    - type: **SVG**
    - module: **Training**
3. cliquer sur "Créer", pour créer le nouveau modèle et l'ouvrir dans une nouvelle fenêtre. *(le modeleur étant un bon outil de navigation, il est utile de le conserver ouvert dans un moniteur adjacent)*
4. réaliser un clic secondaire (clic droit) au centre du modèle, et choisir l'option "Créer un objet métier". Cela démarre l'assistant de création dans la fenêtre de travail principale.

Exercice: Création de l'objet métier via l'assistant de création
---------------------------

Pour créer l'objet métier, les étapes suivantes se succèdent:
1. Configuration de l'objet métier
    - nom logique: **TrnSupplier** - *utilisé pour désigner l'objet métier, nommer la classe Java associée, etc.
    - nom physique: **trn_supplier** - *utilisé pour créer une table dans la BDD. Certains objets peuvent ne pas avoir de table, notamment dans le cas des objets webservice (dont les données sont obtenues à partir d'un service tiers)*
    - préfixe: **sup** - *utiliser pour assurer les conventions syntaxiques, et aider à la saisie d'attributs par exemple*
2. Traduction de l'objet métier (par défaut l'anglais et le français sont proposés). 
    - **Fournisseur|Fournisseurs** *NB: l'utilisation du "|" permet la saisie du pluriel*
3. Saisie des responsabilités: quels groupes ont quels types de droits sur l'objet
4. Ajout à un domaine: *permet de sélectionner à la suite de quel objet le nouvel objet sera ajouté dans le menu. il est possible de passer cette étape si l'objet ne doit pas être accessible via le menu*
