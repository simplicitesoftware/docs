Instances et cache d'objet
====================

Pour manipuler correctement les objets métier via l'API Java, il faut comprendre la notion d'instance d'objet, et par extension avoir une idée schématique du fonctionnement du système de cache dans Simplicité. Cela permet également de comprendre à quoi correspondent les différentes actions de vidage de cache et dans quelles situations elles sont nécessaires.

Pour déterminer le comportement d'un objet, à la différence d'une application Java classique où tout le comportement est codé et compilé en bytecode, Simplicité interprète un paramétrage qui est stocké en base de donnée. La construction d'un objet (object load) implique des mécanismes complexes: héritages, récursivités, définitions d'attributs, nombreux appels SQL, templates, etc. Les objets étant stables en production, Simplicité ne les construit qu’une fois et conserve le résultat de cette construction dans le core cache (=cache serveur). **Le core cache stocke donc en mémoire la partie de définition de l'objet (fields, template, nom de table), c'est une version en mémoire du paramétrage.**

À chaque fois qu'un utilisateur manipule un objet, il va avoir besoin de l'instancier, et d'y charger les informations nécessaires, de la même façon qu'on charge une classe java avec des données particulières. Pour ce faire, un clone de l'objet chargé dans le core cache est positionné dans la session de l'utilisateur, c'est ce que l'on appelle une instance de l'objet. L'instance est persistante dans la session de l'utilisateur, c'est pour cela, par exemple, que si on fait une recherche sur un objet, qu'on navigue ailleurs sur l'application, et qu'on revient à la liste, la recherche est toujours active. **La session stocke donc des instances de l'objet, avec la partie de définition de l'objet, clonée, et la partie dynamique de l'objet (données, recherche, paramètres courants etc.)**

Lorque l'objet, héritant de `ObjectDB` est manipulé dans le code comme à la leçon précédente, c'est l'une de ces instances qui est utilisée. Attention, si une seule instance de l'objet était utilisée, cela voudrait dire qu'en faisant une recherche sur l'objet dans le code (cf ci-dessous) pour modifier programmatiquement un ensemble d'objets, l'utilisateur naviguant ensuite sur l'objet, verrait cette recherche positionnée sans qu'il l'ait lui-même effectuée!

```java
setFieldFilter("trnPrdName", "Supercomputer");
List<String[]> results = this.search();
```

Pour éviter ce problème, la session ne charge pas une, mais de nombreuses instances de l'objet, chacune avec un nom correspondant à son utilisation:
- **the_ajax_ObjectName:** instance principale (main), utilisée pour la liste principale
- **ref_ajax_ObjectName:** instance dédiée à la sélection d'objets sur les relations (par exemple la sélection du produit pour la commande)
- **panel_ajax_ObjectName:** instance dédiée aux panels (par exemple le panel des commandes sous un produit)
- **bpm_ajax_ObjectName:** instance dédiée aux processus (par exemple lors du processus de création de module)
- **tmp_ObjectName:** instance "temporaire" dédiée à l'utilisation dans le code côté serveur
- etc.

Il y a de nombreux noms d'instances utilisés par la plateforme, on n'en fera pas la liste exhaustive, mais retenons:
- que chaque instance a un nom (accessible via `ObjectDB.getInstanceName()`) qui dépend du contexte d'utilisation
- que chaque instance conserve en mémoire les recherches, valeurs chargées, etc.

En conséquence, lorsqu'on utilise une instance dans les script, il faut garder à l'esprit:
- qu'il peut être nécessaire de vider les recherches et valeurs chargées (via `ObjectDB.resetFilters()` et `ObjectDB.resetValues()`)
- que pour éviter l'utilisation concurrente d'une même instance par plusieurs threads, il est indispensable d'utiliser un bloc de synchronisation (cf exemple commenté ci-dessous)

```java
// chargement d'une instance temporaire
ObjectDB product = getGrant().getTmpObject("TrnProduct");
// bloc synchronized pour empêcher l'utilisation concurrente de cette instance par un autre thread
synchronized(product.getLock){
    // vidage des potentielles recherches déjà présentes sur l'instance en mémoire
    product.resetFilters();
    // posistionnement d'un filtre;
    product.setFieldFilter("trnPrdName", "Supercomputer");
    // recherche en base
    List<String[]> results = product.search();
    //boucle sur les résultats
    for(String[] row : product.search()){
        // chargement d'une ligne de résultat dans l'instance
        product.setValues(row);
        // opérations sur l'instance
    }
}
```

Exercice
====================

### Implémenter le code de l'action `IncreaseStock`

- Modifier l'action pour qu'elle appelle une méthode de l'objet plutôt que le javascript précédemment positionné
- Ajouter un code Java au produit
- Y implémenter la méthode permettant d'incrémenter de 10 la valeur du produit

<div class="info">NB: dans les codes suivants, les "this" ont été ajoutés pour expliciter que c'est sur l'instance courante que la méthode est appelée, mais ils sont en général omis car facultatifs</div>

```java
public void increaseStock(){
    ObjectField prdStock = this.getField("prdStock");
    prdStock.setValue(prdStock.getInt(0)+10);
    save();
}
```

### Lors de la validation de la commande, impacter le stock

- Sur le code de la commande, implémenter le hook `postUpdate`
- lors du changement d'état, charger le produit commandé et diminuer son stock de la quantité de la commande

<div class="info">NB: sur la slide correspondant à cet exercice, une autre approche est utilisée</div>

```java
@Override
public String postUpdate() {
	Grant g = getGrant();
	String objname="TrnProduct";
	boolean[] oldcrud = g.changeAccess(objname, true, true, true, false);
	ObjectDB prd = g.getTmpObject(objname);
	if("PROCESSING".equals(getOldStatus()) && "VALIDATED".equals(getStatus())){
		try{	        
			synchronized(prd.getLock()){
				// select = chargement dans l'instance des valeurs en base à partir d'une clef technique (id)
				prd.select(getFieldValue("trnOrdPrdId"));
				// lecture de la quantité commandée sur l'instance courante et du stock du produit sur l'instance chargée
				int orderedQuantity = getField("trnOrdQuantity").getInt(0);
				int stock = prd.getField("trnPrdStock").getInt(0);
				// modification du stock sur l'instance chargée
				prd.getField("trnPrdStock").setValue(stock-orderedQuantity);
				// écriture des données de l'instance chargée dans la BDD
				prd.getTool().validateAndSave();
			}
		} catch (Exception e) {
			AppLog.error(e.getMessage(), e, g);
		} finally {
			g.changeAccess(objname, oldcrud); 
		}   
	}
	return super.postUpdate();
}
```

### Vérification

Vider le cache et tester les fonctionnalités implémentées


### Pour approfondir

- Lorsqu'une commande a l'état "Validée" est annulée, le stock du produit doit revenir à sa quantité avant validation de la commande.

- Un produit pouvant être "En stock" ou "Épuisé" ajouter un diagramme d'état sur l'objet Produit et implémenter le hook adéquat permettant de passer un Produit à l'état "Épuisé" lorsque le stock est égal à 0.
