Publications
====================

Simplicité provides exporting by default:
- lists in CSV, Excel and PDF format
- forms in Excel and ZIP format (with attachments)

This is often not enough, and Simplicité has built-in mechanisms for generating specific exports. These are called publications. The result of a publication typically fits into one of the following options:
- HTML page
- Microsoft Office file (Excel, Word)
- raw text file (txt, csv, markdown)
- structured data file (JSON, XML, YAML)

A publication consists in filling a template with data. The template may be **fixed** or **dynamically constructed**. The data can be **focused on a single business object** (including via joined fields), or can be **spread throughout the model**.

Publications can be of three types, depending on the type of template used :
- **a Simplicité template :** a template stored in the "Template" configuration object. *This alternative is deprecated*
- **a template file :** a template stored in a file, and containing **Simplicité expressions**. The template will be parsed, and expressions of type `[VALUE:trnPrdName]` will be replaced. Be aware that these expressions are executed in the context of the calling business object, so it is not possible to use data from other objects. *This solution is suitable for the most basic cases and allows you to avoid writing code*.
- **invoking a method of the object:** the method returns a `String` or a `byte[]` depending on the type of publication. This solution allows an infinite range of publications via the Java API. As a parameter to the method, a `PrintTemplate` object is passed which allows, for example, a dynamic file name to be calculated.

Exercise
====================

Create an excel publication on the `TrnSupplier` object which exports the list of products from a supplier.

- create a publication object on the supplier
    - Code: TrnSupPublication
    - Usage: on list only
<!--   - Grantable: no (= all of the groups have access to it) -->
    - Language: *
    - Traduction: "Publication test"
    - Output file name: `Export-[trnSupName]`
    - MIME: Excel
    - Type: Method
    - Method: `pubExcel`

- write the method to generate the desired excel in the supplier's script:

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

- clear the cache and try it out
