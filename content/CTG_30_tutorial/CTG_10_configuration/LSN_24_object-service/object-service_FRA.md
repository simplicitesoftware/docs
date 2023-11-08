Objet service	
====================

Un objet "service" est un objet Simplicité dont les données sont basées sur un appel de service.   
Le nom de sa table sera **service**.  

Il permet de faire un appel de service afin d’obtenir les données sans les stocker dans la base Simplicité.
Le cas d'usage le plus courant est d'interroger les services de base référentielle (base des pays, base des communes ...) sans avoir à duppliquer les données. 
Il faudra associer autant d’attributs à l’objet service que d'attributs retournées par l'appel du service et mapper les noms des attributs avec les noms reçus dans le flux.  

L'objet service est vu par la plateforme comme un objet métier.
Sa classe hérite de **com.simplicite.util.ObjectService**.

Les hooks à implémeter sont **loadServiceConfig**,**countService()**, **searchService**, **selectService**, **createService**, **updateService**,**deleteService**.

<div class="information">The service-opendata, service-salesforce, service-ldap, service-rest and service-servicenow objects are special cases of service objects integrated into the platform (the named hooks have been implemented. All you need to do is set the configuration in the object's filter or implement the loadServiceConfig hook.</div>


Exercice
====================

- Créez un objet de service pour afficher les codes et les noms de régions à l'aide du service https://geo.api.gouv.fr/decoupage-administratif/regions#regions-list.  

La base est un ensemble de données qui fournit tous les codes et noms de régions sans pagination.  
Implémentez les crochets utilisés pour lister et afficher les données dans un formulaire.