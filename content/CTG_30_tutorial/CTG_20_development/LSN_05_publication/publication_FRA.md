Publications
====================

Simplicité offre par défaut d'exporter:
- les listes au format CSV, Excel et PDF
- les formulaires au format Excel et ZIP (avec les pièces jointes)

Ce n'est souvent pas suffisant, et Simplicité intègre des mécanismes permettant de générer des exports spécifiques. C'est ce que l'on appelle des publications. Le résultat d'une publication rentre typiquement dans l'une des options suivantes:
- page HTML
- fichier Microsoft Office (Excel, Word)
- fichier texte brut (txt, csv, markdown)
- fichier d'information structurée (JSON, XML, YAML)

Une publication consiste schématiquement à remplir un template avec des données. Le template peut être **fixe** ou **construit dynamiquement**. Les données peuvent être **concentrées sur un seul objet métier** (y compris via des champs ramenés), ou peuvent être **éclatées dans le modèle**.

Les publications peuvent être de trois types qui désignent le type de template utilisé
- **par template Simplicité :** un template stocké dans l'objet de configuration "Template". *Cette solution est dépréciée*
- **par template fichier :** un template stocké dans un fichier, et contenant des **expressions simplicité**. Le template sera parsé, et les expressions de type `[VALUE:trnPrdName]` seront remplacées. Attention, il faut garder à l'esprit que ces expressions sont exécutées dans le contexte de l'objet métier appelant, et qu'il n'est donc pas possible d'utiliser les données d'autres objets. *Cette solutions convient aux cas les plus basiques et permet de ne pas écrire de code*
- **par appel d'une méthode de l'objet:** la méthode retourne un `String` ou un `byte[]` selon le type de publication. Cette solution permet un éventail infini de publications via l'API Java. En paramètre de la méthode est passé un objet `PrintTemplate` qui permet par exemple de calculer un nom du fichier dynamique.

Exercice
====================

Définir une publication de type excel sur l'objet `TrnSupplier` qui permet d'exporter la liste des produits de ce fournisseur.

- créer un objet de type publication sur le fournisseur
    - Code: TrnSupPublication
    - Utilisation: sur l'objet uniquement
<!--     - Habilitable: non (= tous les groupes y ont accès) -->
    - Langue: *
    - Traduction: "Publication test"
    - Nom de fichier: `Export-[trnSupName]`
    - MIME: Excel
    - Type: Méthode
    - Méthode: `pubExcel`

- écrire la méthode permettant de générer le excel voulu dans le code du supplier:

```java
import org.apache.poi.ss.usermodel.Sheet; 
[...]
public byte[] pubExcel(PrintTemplate pt){
	//Simple Example of SQL query
	String sqlQuery = "select trn_prd_reference, trn_prd_name, trn_prd_stock, trn_prd_price from trn_product where trn_prd_sup_id="+getRowId();

	//Dynamically set file name
	pt.setFilename(pt.getFilename().replace("[trnSupName]", getFieldValue("trnSupName")));
	try{
		ExcelTool xls = new ExcelTool(true);
		Sheet sheet = xls.addSheet("Simple sheet");
		int line = 0;

		// use Grant.query to retrieve a List<String[]> containing the results from the query
		for(String[] row : getGrant().query(sqlQuery)){
			ExcelTool.ExcelRow nRow = new ExcelTool.ExcelRow(line++);  
			int col=0;  
			for (String cell : row ) nRow.add(new ExcelTool.ExcelCell(col++, cell ));  
			xls.addRow(sheet,nRow);  
		}			
		return xls.generateToByteArray();
	}
	catch(Exception e){
		AppLog.error(getClass(), "pubExcel", "Excel generation error", e, getGrant());
		return null;
	}
}
```

- vider le cache et tester
