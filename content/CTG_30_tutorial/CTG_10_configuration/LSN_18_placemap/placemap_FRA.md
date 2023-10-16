Place map
====================
 
La géolocalisation Google Map à partir d'une adresse est paramétrable depuis le menu **Interface/Places maps** ou **Cartes d'emplacement**, en  V6, depuis le menu **Interface utilisateur/Affichage d'objets/Cartes d'emplacement**.  
L'objet métier sur lequel on veut générer une carte d'emplacement doit comporter un attribut de type **Coordonnées géographiques** (**Geographical coordinates**) afin de stocker les longitute et lattitude d'une adresse.  
La valeur de ce champ n’est pas calculée automatiquement (en effet il faut spécifier à partir de quel(s) autre champ(s) le calcul peut se faire : attributs d'un objet ou source de données externe).  
Il convient donc de calculer ces données à partir d'une adresse via la classe **GMapTool** dans un hook preSave.   
(cf javadoc)

<div class="error">ATTENTION: nous fournissions une clé d’API Google par défaut dans le paramètre système GOOGLE_API_KEY il est IMPERATIF de la remplacer par votre propre clé.</div>

Exemple de calcul :  

```java
@Override
public String preSave() {
		try {

			ObjectField coords = getField("trnCliCoords");
			ObjectField ad = getField("trnCliAddress");
			ObjectField zc = getField("trnCliZipCode");
			ObjectField ci = getField("trnCliCity");
			ObjectField co = getField("trnCliCountry");
			
			if (coords.isEmpty() || ad.hasChanged() || zc.hasChanged() || ci.hasChanged() || co.hasChanged()) {
				String a = ad.getValue() + (ad.isEmpty() ? "" : ", " + zc.getValue() + ", " + ci.getValue() + ", " + co.getValue();
				Location c = new GMapTool(getGrant()).geocodeOne(a);				
				coords.setValue(c==null ?  "" : c.toString());
			}
		} catch (Exception e) {
			AppLog.error(null, e, getGrant());
		}
		return super.preSave();
}  
```

Le placemap utilise une instance particulière de l'objet.  
Le hook **initPlaceMap** permet de surcharger le comportement standard du Placemap.  


Exercice
====================

- Créer un attribut de type **Coordonnées géographique** dans l'objet `TrnClient`.  
- Créer une carte d'emplacement sur l'objet `TrnClient`.  
- Vérifier qu'une action de liste apparait  
- Cliquer sur l'icône situé à droite de l'input du champ **Coordonnées géographique**    


Pour approfondir : Création d'une action  
---------------------------
- Créer une action sur l'objet `TrnClient` afin de pouvoir afficher dans le formulaire d'un client le point de localisation de son adresse.  

