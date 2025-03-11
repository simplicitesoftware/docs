Objet externe
====================

Un objet externe est une page externe (url spécifique) /un composant HTML personnalisé qui peut être placé dans un domaine de la même manière qu'un objet métier ou bien être complètement indépendant de la UI Simplicité. 
Il permet également d'implémenter un service spécifique JSON/REST (lorsqu'il hérite de la classe **com.simplicite.webapp.services.RESTServiceExternalObject**).  

Un objet externe sert à :
- Implémenter une page spécifique au sein de la UI générique 
- Implémenter un front spécifique indépendant en zone publique (avec ou sans authentification)
- Par extension délivrer un contenu spécifique binaire comme un PDF, une image 
- Implémenter un web service spécifique 

Les objets externes sont paramétrables depuis le Menu **Interface/Objets externes** en V5, **Interface utilisateur/Objets externes** à partir de la V6.  
En V6, ils sont typés selon leur usage (Base, Responsive Page, Jquery page..., PDF, ..etc).  

## Implémenter un front spécifique au sein de la UI générique 

L'objet externe est composé à minima de 3 ressources (HTML, CSS, SCRIPT).
L'objet est paramétré par des ressources, le bouton créer des ressources génère une page HTML générique (HTML/css/JavaScript).  
La classe peut se mettre directement dans l'attribut source du paramétrage de l'objet. 

- Base : com.simplicite.util.ExternalObject. Il est conseillé d'utiliser les autres classes dans les versions 5 et 6.
- Responsive page : com.simplicite.webapp.web.ResponsiveExternalObject. 
- Web page : com.simplicite.webapp.web.WebPageExternalObject 
- Jquery page : com.simplicite.webapp.web.JQueryWebPageExternalObject (Web page + jquery) 
- Site web static : com.simplicite.webapp.web.StaticSiteExternalObject (Web page + jquery) 



## Exercice
Créez un objet externe simple qui liste des produits sur une page avec leurs vignettes (public sans authentification).  