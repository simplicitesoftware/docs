Création de l'attribut
====================

Concepts
---------------------------

Si l'objet a un formulaire, l'attribut sera un champ de ce formulaire. La configuration de l'attribut permet de déterminer s'il est ou non obligatoire, son type (texte, nombre, énuméré simple ou multiple, etc.).

L'attribut a, comme l'objet métier, un nom logique et un nom physique. Comme pour l'objet, le nom logique servira à faire référence à l'attribut dans les règles de gestion, dans le code, et respectera donc la syntaxe des attributs de classe Java. Similairement à l'objet aussi, le nom physique servira à créer une colonne dans la table de l'objet métier. Un attribut peut ne pas avoir de nom physique, c'est la cas par exemple des champs qui sont purement calculés, et ne nécessitant pas d'être persistés (enregistrés en base).

À ce stade, il est important d'introduire une notion fondamentale du méta-modèle: l'**attribut d'objet**. L'attribut peut être utilisé par de nombreux objets: on peut par exemple imaginer un champ "commentaire" présent dans les 300 objets de l'application. Si à un moment donné il nous faut modifier la taille de ce champ pour pouvoir saisir des commentaires plus longs, il est possible de le faire au niveau d'un seul attribut, plutôt que d'aller modifier les 300 attributs commentaires de nos 300 objets métier. De même un attribut peut ne pas être rattaché à un objet (attribut de stockage pour un traitement de tâche planifiée, attribut pour un processus,etc).
Cette notion se traduit dans le méta-modèle par une **relation N/N entre l'attribut et l'objet métier**, et qui dit relation N/N, dit objet de relation. Dans Simplicité, cet objet de relation entre l'objet et l'attribut s'appelle l'attribut d'objet. En plus de porter la relation N/N, l'attribut d'objet permet de **surcharger** des caractéristiques de l'attribut (caractère obligatoire, traduction, etc).

C'est lors de l'association entre un objet et un attribut via un attribut d'objet que Simplicité créera une colonne portant le nom physique de l'attribut dans la table du nom physique de l'objet.

Outil de configuration : template editor
---------------------------

Le template editor est un outil qui permet de faciliter la création, la modification et la mise en forme des objets de configuration suivants:
- template d'objet : c'est un template HTML qui contrôle l'affichage de l'objet (colonnes, onglets, etc)
- zones d'attributs : les attributs d'objets appartiennent à des zones d'attributs qui permettent de les regrouper. Ces regroupements se retrouveront dans l'affichage en liste de l'objet.
- attributs
- énumérés simple et multiples : listes de valeurs pour les attributs de ce type
<div class="warning">Si aucun template n'est défini. Le template "Base" sera attribué par défaut à l'objet. Les champs de l'objet seront placés les uns sous les autres dans le formulaire.</div>
Dans le template editor, tous ces objets de configuration sont volontairement simplifiés. Pour les configurer dans le détail, il faut passer par le formulaire de l'objet de configuration concerné et non par le template editor

Exercice: Création d'attribut via le template editor
---------------------------

1. Via le modeler, faire un clic droit sur l'objet métier Supplier
2. Sélectionner l'option "éditer le template".
3. Comme l'objet n'a pas encore de template, la plateforme propose un certain nombre de modèles de templates. Sélectionner le premier.
4. Sur le template editor, déplacer la souris sur un bouton "+", puis ajouter un "Attribut" de type "Texte court"
