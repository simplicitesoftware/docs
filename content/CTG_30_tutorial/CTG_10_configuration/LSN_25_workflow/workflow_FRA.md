# Processus métier - workflow

Un workflow est un assistant (suite d'écrans) destiné à assister l'utilisateur lors d'un processus spécifique.
Le workflow peut être défini dans le menu Processus métier/Processus métier.
Le workflow est paramétré par :
    Type : Suite d'écrants ou tâche humaine
    Classe : toute classe Java qui modifie le comportement par défaut
    Module : module d'application

Un workflow est composé d'activités.
Lorsque le processus est créé, 2 activités sont générées : Begin et End.
Si ces deux activités n'existaient pas ou ont été supprimées, elles doivent être créées manuellement.
Les activités peuvent être configurées dans le modeleur en créant un diagramme spécifique avec le modèle ModelProcess.
Les activités ont des données qui permettent de personnaliser le comportement du workflow.
## Droit d'accès
The workflow should be granted to group in Process permission to be used.
Each activitys has its own permission to set up in activity permission.
Un workflow doit être associé au groupe dans le menu "Droit d'accès processus" pour être utilisé.
Chaque activité a ses propres droits d'accès à configurer dans "Droit d'accès d'activité".

## Suite d'écran
Il permet de configurer une suite d'écran spécifique pour les processus complexes, mais court avec plusieurs actions à exécuter de manière séquentielle.
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
* Activité pour sélectionner le produit en stock. Dois être filtré par fournisseur sélectionné avant.
* Activité pour créer la commande avec prédéfinit les options présélectionnées
Abiliter les droits d'accès.

<!-- ## Processus long A VOIR 
Il permet de configurer un assistant de processus long comme pour un suivi de tâche. Le processus peut avoir un temps limité pour être traité de même que toutes ses activités. Pour notre exemple, cela permet d'ajouter un processus de traitement par le fourniseur de la commande avec différents états et des délais de traitment a respecter.
 -->

# Workflow complexe

## scripting
Le comportement par défaut du workflow peut être remplacé via des hooks dans le script Java du processus métier.

## Lien conditionnel / Routage
Vous pouvez ajouter une condition sur la transition d'activité pour configurer un comportement conditionnel.

### Exercice
Mettre en place une alerte à l'utilisateur si le fournisseur choisi n'a pas de produit en stock. En ajoutant une activité de message et en utilisant un script.


    @Override
	public void postValidate(ActivityFile context) {
		AppLog.info("DEBUG contex:"+context.toJSONObject(), getGrant());
		var step = context.getActivity().getStep();
		if(step.equals("TRNORDC-020")){
			ObjectDB prd = this.getGrant().getTmpObject("TrnProduct");
			synchronized(prd){
				prd.getLock();
				prd.setFieldFilter("trnProdSupId",context.getDataValue("Field", "row_id"));
				prd.setFieldFilter("trnProdState", "STOCK");
				List<String[]> rows = prd.search();
				if (Tool.isEmpty(rows)){
					AppLog.info("DEBUG empty", getGrant());
					context.setDataFile("Return", "Code", "MESSAGE");
				}else{
					AppLog.info("DEBUG not empty", getGrant());
					context.setDataFile("Return", "Code", "PRODUCT");
					
				}
			} 
			
		}
	}

### Tips
utilisés `[DEFAULT]` pour configurer le lien par défaut.

## Transition d'activité
Vous pouvez ajouter des transitions entre les activités avec une action spécifique (bouton).
Par exemple, ajoutez un bouton pour ignorer la sélection de produits dans la première activité.
## Redirection
Grâce aux données du groupe `Forward`, vous pouvez configurer la redirection de l'activité.
Avec une `Forward` `Page` vous pouvez par exemple ajouter dans l'activité end une redirection vers la nouvelle commande que vous venez de créer.
### Tips
utilisez un paramètre de données du groupe `Forward` pour utiliser row_id dans l'url.

## Alerte
Vous pouvez paramétrer des alertes par email, social, log ... dans le menu Processus métier/Alerte.
Ces alertes peuvent être appelées depuis le workflow pour alerter l'utilisateur des mises à jour par exemple.
(Cela peut aussi être utile dans le diagramme d'état)

### Exercice
Ajouter une alerte `social` lors de la création de la commande.