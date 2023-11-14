Processus métier - workflow
====================
![workflow screenshot](workflow.png)

Un processus (suite d'écrans) est un assistant destiné à assister l'utilisateur lors d'un processus spécifique.  
Le processus peut être défini dans le menu **Processus métier/Processus métier**.
Le processus est paramétré par :  
    Type : Suite d'écrants ou tâche humaine  
    Classe : toute classe Java qui modifie le comportement par défaut  
    Module : module d'application  

Un processus est composé d'activités.  
Lorsque le processus est créé, 2 activités sont générées : Begin et End.  
Si ces deux activités n'existaient pas ou ont été supprimées, elles doivent être créées manuellement.  
Les activités peuvent être configurées dans le modeleur en créant un diagramme spécifique avec le modèle ModelProcess.  
Les activités ont des données qui permettent de personnaliser le comportement du workflow.  
## Droit d'accès
Un processus doit être associé au groupe dans le menu "Droit d'accès processus" pour être utilisé.
Dans les droits d'accès du processus, l'option "Annuler le processus" ajoute un bouton "Abandonner" sur toutes les activités du processus.   
Chaque activité a ses propres droits d'accès à configurer dans "Droit d'accès d'activité".  
Dans les droits d'accès d'une activité, l'option "Autoriser l'annularion de l'activité" Ajoute le bouton "Passer" sur l'écran de l'activité.  

## Suite d'écran
Il permet de configurer une suite d'écran spécifique pour les processus complexes et courts avec plusieurs actions à exécuter de manière séquentielle.
### Exercice
Créer une suite d'écran pour la création d'une commande.
* Name = TrnOrdCreate
* Code = TRNOC
* Module = Training

Habiliter les droits d'accès.
Ajouter le processus au domaine.

Ajoutez 4 activités et reliez-les :
* Activité pour sélectionner le client qui fait la commande
* Activité de sélection du fournisseur
* Activité pour sélectionner le produit en stock. Doit être filtré par fournisseur sélectionné avant.
* Activité pour créer la commande avec prédéfinit les options présélectionnées
Habiliter les droits d'accès aux activités.

<!-- ## Processus long A VOIR 
Il permet de configurer un assistant de processus long comme pour un suivi de tâche. Le processus peut avoir un temps limité pour être traité de même que toutes ses activités. Pour notre exemple, cela permet d'ajouter un processus de traitement par le fourniseur de la commande avec différents états et des délais de traitment a respecter.
 -->

# Workflow complexe

## Scripting
Le comportement par défaut du processus peut être remplacé via des hooks dans le script Java du processus métier.

## Lien conditionnel / Routage
Vous pouvez ajouter une condition sur la transition d'activité pour configurer un comportement conditionnel.  
Utiliser `[DEFAULT]` pour configurer le lien par défaut.  

### Exercice
Afficher un message à l'utilisateur si le fournisseur choisi n'a pas de produit en stock en utilisant le hook preValidate.

	@Override
	public Message preValidate(ActivityFile context) {
		Message m = new Message();
		AppLog.info("DEBUG contex:"+context.toJSONObject(), getGrant());
		String step = context.getActivity().getStep();
		if("PRDSEL".equals(step)){
			ObjectDB prd = getGrant().getTmpObject("TrnProduct");
			synchronized(prd.getLock()){
				prd.setFieldFilter("trnProSupId",context.getDataValue("Field", "row_id"));
				prd.setFieldFilter("trnProStock", 0);
				List<String[]> rows = prd.search();
				if (Tool.isEmpty(rows)){
					AppLog.info("DEBUG empty", getGrant());
					m.raiseError("TRN_ERR_QTE_NEG");
					return m; 
				}
			} 
			
		}
		return super.preValidate(context);
	}


## Transition d'activité
Vous pouvez ajouter des transitions entre les activités avec une action spécifique (bouton).
Par exemple, ajoutez un bouton pour ignorer la sélection de produits.
## Redirection
Grâce aux données du groupe `Forward`, vous pouvez configurer la redirection de l'activité.
Avec une `Forward` `Page` vous pouvez par exemple ajouter dans l'activité end une redirection vers la nouvelle commande que vous venez de créer.

Utilisez un paramètre de données du groupe `Forward` pour utiliser row_id dans l'url.

## Alertes
Vous pouvez paramétrer des alertes par email, social, log ... dans le menu Processus métier/Alerte.
Ces alertes peuvent être appelées depuis le workflow pour alerter l'utilisateur des mises à jour par exemple.
(Cela peut aussi être utile dans le diagramme d'état)
Depuis la version 5.3, il est conseillé d'utiliser le module de **Notifications** pour alerter les utilisateurs de la mise à jour/création/suppression de données.


### Exercice
Ajouter une alerte de type message, social à tous les clients dont la commande a été annulée.