Hooks d'objet
====================

<div class="warning">À partir de cette leçon, il est nécessaire de comprendre les notions de base de Java: programmation orientée objet, héritages, surcharges etc.</div>

Lorsque qu'un objet est configuré, il a un comportement par défaut sur la base des différents éléments et propriétés configurés.

Par exemple, si un attribut est obligatoire:
- lors de la préparation du formulaire, ce sera pris en compte par la plateforme pour transmettre l'information au front
- lors de la sauvegarde de l'objet, une étape de validation vérifie la présence d'une valeur pour cet attribut, renvoie une erreur et annule la sauvegarde s'il n'y en a pas

On peut imaginer qu'un appel de webservice soit nécessaire pour savoir si l'attribut est obligatoire, auquel cas une contrainte n'est plus vraiment adaptée car le code devient trop complexe pour un champ exécuté.

C'est pour ces cas de figure qu'il est possible **d'étendre** le comportement par défaut des objets métier. Le comportement par défaut est codé dans une classe Java du socle Simplicité qui se nomme `ObjectDB`. Tous les objets métiers héritent de cette classe, qui met à disposition de nombreux hooks qui sont exécutés à différents moments du cycle de vie de l'objet métier. En héritant de cette classe et en surchargeant les hooks, il devient possible de modifier le comportement de l'objet métier. La liste exhaustive des hooks se trouve donc dans la javadoc, et nous ne présentons ici que les plus communs. *Les possibilités sont infinies, et la bonne connaissance des hooks et de l'API Java Simplicité est un important facteur de réussite.*

Les scripts d'objet peuvent être écrits en Java ou en Javascript (qui sera exécuté par Rhino, à l'insta des champs exécutés), mais **la bonne pratique est d'utiliser des scripts Java** qui incluent une étape de compilation et assurent que la syntaxe du script est bonne. *Dans des cas d'utilisation avancés qui ne sont pas au programme du tutoriel, l'utilisation de Java permet de valoriser l'ensemble des outils classiques du développement d'applications : debugging pas-à-pas, tests unitaires, développement dans un IDE Java, analyses de qualité de code avec Sonar etc.*

Exercice
====================

Implémenter les règles de gestion suivantes:

### La quantité de la commande ne peut être inférieure à 0

Pour ce faire :
- créer un script Java pour la commande
- ajouter un hook `postValidate` (après les validations par défaut, pour ajouter une validation supplémentaire), qui renvoie une erreur en cas de quantité négative
    - on utilise `getInt(0)` au lieu de `getValue()` pour obtenir un `int` avec une valeur par défaut de 0 plutôt qu'un `String` ou un `Integer`, cf la Javadoc de ObjectDB.getField(), ObjectField.getValue() et ObjectField.getInt()
    - on utilise Message.formatError() pour fournir à Simplicité un message d'erreur qui sera interprété pour envoyer une erreur à l'interface
    - les **snippets Simplicité**, disponibles dans l'éditeur via le raccourci <kbd>Ctrl</kbd>+<kbd>Espace</kbd>, offrent des squelettes de hooks prêts-à-l'emploi

```
@Override
public List<String> postValidate() {
    List<String> msgs = new ArrayList<String>();
    if (getField("appOrdQuantity").getInt(0) <= 0){
        msgs.add(Message.formatError("APP_ERR_QUANTITY", null, "appOrdQuantity"));
    }
    return msgs;
}
```

- vider le cache (nécessaire après la **création** d'un script, mais pas lors des modifications subséquentes de ce script), et vérifier le fonctionnement de la règle de gestion

### La quantité de la commande ne peut être supérieure au stock du produit

En autonomie, coder cette seconde règle de gestion. Cette fois, il ne sera pas nécessaire de vider le cache (modification d'un script existant).

### Le code d'un fournisseur doit commencer par le trigramme "SUP"

En autonomie, coder cette troisème règle de gestion. Cette fois, il ne sera pas nécessaire de vider le cache (modification d'un script existant).
