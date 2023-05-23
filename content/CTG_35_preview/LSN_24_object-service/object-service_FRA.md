Objet service 
====================

Les objets service sont un cas particulier d'objets métiers. 
Les objets service sont des objets distants accessibles pour lecture seule. Ils peuvent par exemple permettre d'initialiser la valeur d'attributs par paramétrage de datamap.  
Ils peuvent être habilités, accessibles depuis un menu.

Il existe plusieurs type d'objets service.
- Les objets distants hébérgés sur une autre instance simplicité
- Les objets opendatasoft (https://data.opendatasoft.com/pages/home/) 
- Les objets service REST résultat d'appels de service REST
- Les objets service SalesForce
- Les objets service LDAP

Les objets service se paramétrent de la même façon. L'objet a un nom logique, sa table définit le service appelé, la searchspec ou filtre définit le service (url, credentials, autres options).
- Pour les objets Simplicité la table sera **service-simplicite**,  le filtre doit impérativement avoir les credentials et l'url de l'instance
- Pour les objets opendatasoft la table sera **service-opendatasoft**, le filtre sera le nom du jeu de données
- Pour les objets REST la table sera **service-rest**, le filtre sera la configuration de l'url et des credentials
- Pour les objets SalesForce la table sera **service-salesforce**, le filtre sera le nom de l'objet SalesForce et les crédentials
- Pour les objets LDAP la table sera **service-ldap**, le filtre sera la configuration de l'url et des credentials




Exercice
====================

- Créer un objet service depuis l'instance de Demo. (url + credentials à fournir)
- Créer un objet service opendatasoft communes-france@agriculture-opendatapaysbasque. Créer un datamap pour que la ville du client soit une sélection de commune de ce jeu de données.  
- Créer un objet service REST https://api.insee.fr/entreprises/sirene/V3


