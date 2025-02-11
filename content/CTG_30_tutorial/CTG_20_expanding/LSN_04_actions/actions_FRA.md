Actions
====================

Les actions permettent à l'utilisateur d'interagir avec un objet métier. Certaines sont mises à disposition par défaut par la plateforme (créer, copier, éditer en masse, etc), mais il est souvent nécessaire d'ajouter des actions spécifiques au métier.

Au niveau du méta-modèle, l'action est liée à l'objet par une fonction, ce qui permet à une action d'être partagée par plusieurs objets.

Le type d'action et le type d'exécution d'action permettent de distinguer divers scénarios d'utilisation:

<table>
    <tr>
        <td></td>
        <td>Liste</td>
        <td>Elément (Ligne / formulaire)</td>
        <td>Caché</td>
    </tr>
    <tr>
        <td>Front</td>
        <td>Exécuter script front sur un ensemble d'éléments (ex: copier une liste d'emails d'utilisateurs dans le presse-papier)</td>
        <td>Exécuter script front sur un élément unique (ex: copier l'email de l'utilisateurs dans le presse-papier)</td>
        <td>Aucune utilisation possible</td>
    </tr>
    <tr>
        <td>Back</td>
        <td>Exécuter un script back sur un ensemble d'éléments (ex: faire envoyer un mail par la plateforme à un ensemble d'utilisateurs)</td>
        <td>Exécuter un script back sur un élément unique (ex: faire envoyer un mail par la plateforme à l'utilisateur)</td>
        <td>Mettre à disposition une action accessible via webservice ou via code sans afficher de bouton</td>
    </tr>
    <tr>
        <td>Aucune</td>
        <td>Mise à disposition d'un bouton dans l'interface pour utilisation depuis les scripts front</td>
        <td>Mise à disposition d'un bouton dans l'interface pour utilisation depuis les scripts front</td>
        <td>Aucune utilisation possible</td>
    </tr>
</table>

Les actions front
---------------------------

Plus simples que les actions back, le clic sur le bouton d'une action front ne fait que déclencher l'exécution du contenu du champ "URL". 

- si le champ contient effectivement une URL interne (de type `[EXPR:HTMLTool.getExternalObjectURL("DemoOrderAgenda")]`) alors la plateforme redirige vers cette page
- si le champ contient la syntaxe `javascript:` (par exemple `javascript:alert('Hello World');`) alors la plateforme exécutera le code javascript

Si cette syntaxe convient pour les cas les plus simples, il lui est souvent préféré une action **sans exécution** permettant de mettre à disposition un bouton, dont on détectera le clic dans les scripts front. Cela est abordé dans la partie "Développement Front".

Les actions back
---------------------------

Les actions back exécutent un appel de service auprès du back, qui va exécuter un script back: soit une expression Simplicité, soit une fonction de l'objet métier, tel que cela sera abordé dans la partie "Développement back".

Certaines actions peuvent ne pas être visibles par les utilisateurs car elles sont utilisées uniquement par des webservices ou d'autres objets métiers.

Une action back peut s'exécuter de façon synchrone (l'utilisateur attend la fin de l'exécution), asynchrone (s'exécute sur l'instance d'objet appelante dans un thread indépendant, sans bloquer l'interface) ou asynchrone indépendante (s'exécute sur une instance d'objet indépendante dans un thread indépendant, sans bloquer l'interface).

Exercice
====================

L'objectif de cet exercice est de créer une action sur le produit à titre d'exemple. Dans la partie "Développement Back", l'action sera modifiée pour utiliser un script back.

1. Accéder au menu Administration > Actions et créer une nouvelle action:
    - **Nom:**  IncreaseStock
    - **Type:**  Formulaire
    - **Exécution:** Front
    - **URL**: `javascript:alert("To be implemented...")`
2. ajouter une traduction (label du bouton)
3. créer une fonction liant l'action à l'objet `TrnProduct`
4. habiliter cette fonction au groupe `TRN_ADMIN`
5. vider le cache et tester le résultat

