Créer un processus métier de type suite d'écrans
=================================
Comment créer une suite d'écran/ un assistant (ensemble d'écrans) pour de l'aide à la saisie.

Pour lister tous les processus métier, allez dans **Processus métier\Processus métier**.  
Vous devez configurer un processus métier de type "Suite d'écrans"
Saisissez un nom logique unique, un code interne, le module applicatif.  
A la création du processus, 2 activités sont générées : Begin et End.  
Si ces deux activités n'existent pas ou ont été supprimées, elles doivent être créées manuellement.  
NB : Les autres champs sont uniquement pour les processus longs.  

Exercice
====================
Créer un processus métier  
- Nom = **TrnCreateOrder**  
- Code = **ORDC**
- Type = Flux de travail sur écran  
- Module = Training  


Traitement des droits
--------------------------

Allez dans l'onglet _Droits d'accès processus_ pour ajouter des droits au process :  
- Lire uniquement le processus : possibilité de voir les activités du processus
- Instancier le processus : possibilité de démarrer le processus  
- Annuler le processus : possibilité d'arrêter le processus  

Exercice
====================
Pour le processus **TrnCreateOrder**.   
- Ajouter tous les droits au groupe **TRN_SUPERADMIN**.  
Créez un diagramme ModelProcess :  
- Insérez des activités de début et de fin dans votre modèle  
- Sauvegardez le diagramme  

Placez un processus dans un domaine
---------------------------------

Allez dans l'onglet _Menu Principal_ et ajoutez le processus à un domaine.

Exercice
====================
Placez le processus **TrnCreateOrder** dans le domaine **TrnDomain**.


Traduisez le processus métier
--------------------------------------

Ajoutez une traduction à un processus métier.  

Exercice
====================
- Traduire le processus **TrnCreateOrder**.  


Créez des activités
-------------------------
Un assistant d'activité existe pour créer des activités :  
- Soit par le bouton _Ajouter une activité_ sur le formulaire du processus métier.  
- Soit par un clic droit sur le diagramme du modèle (modèle de template `ModelProcess`)    
L'assistant permet de créer une activité, de lui associer des traductions, des aides (Résumé) de l'étape, de définir les groupes de droits pour l'activité, de gérer les transitions entre les activités du processus et de générer les données de l'activité.
Pour créer une activité, saisissez les informations suivantes :  
- Un code d'étape : généralement préfixé par le code processus  
- Un nom : une étiquette qui décrit l'activité pour le modeleur.  
- Un type d'activité : Début, Fin, Rechercher, Créer, Modifier, Supprimer, Appel de service, Sélection unique, Sélectionner multiple, Page externe.  
- Réversibilité : pour bloquer ou non un retour en arrière dans le processus  
- Dialogue utilisateur : oui/non ; s'il est défini sur non, invoque les méthodes du processus  
- Un module  
D'autres propriétés liées au temps sont utilisées pour alerter si l'activité est plus longue (/plus courte).  

Exercice
====================
utiliser cet assistant pour créer 3 activités (comme l'exemple ci-dessous) :  
- Sélection d'un client  
	- Processus = **TrnOrderCreate**
	- Etape = **ORDC-CLIENT**  
	- Nom = **SelectCustomer**  
	- Type = **Sélectionner unique**
	- Réversible = **Non réversible**  
	- Dialogue utilisateur = **Oui**  
	- Module = **Training**  
Donner les droits aux groupes **TRN_SUPERADMIN** (Attention le groupe TRN_SUPERADMIN doit être un groupe worflow.)
- Sélection d'un fournisseur
- Création d'une commande


Données d'activité
----------------------
La dernière étape de l'assistant vous permet de définir les propriétés de cette activité :  
- Celles qui sont cochées seront conservées, les autres sont facultatives et seront supprimées.  
Pour information, d'autres paramètres sont :  
- Next.Step: Nom de l'activité suivante pour forcer une redirection   
- Return.Code: la valeur de retour d'une activité dans le cas de plusieurs transitions.  
- Field <field name>: valeur d'un attribut
Les données entre activités sont accessibles par la syntaxe [Etape.Groupe.Data]  
exemple: **[CLISEL.Field.trnCliNom]** contient le nom du client une fois l'activité validée  
Autres explications :
- Field.row_id: contient la liste des row_id qui ont été sélectionnés (cas de selection multiple).   
- Filter.<field> : Permet de filtrer une liste Par exemple pour filtrer le prix des produits: Filter.trnProPrix `> 100`  
- Search.Spec: permet d'ajouter un filtre SQL à une liste, par exemple la liste des produits commençant par "a": t.trn_pro_nom like 'a%'  

Exercice
====================
- Vérifier et saisir la ligne : Objet | Nom | TrnClient  
- Les autres données ne seront pas utilisées et peuvent rester non cochées  
- Faites de même pour les autres activités et données d'activités.
