Basic code examples
===================

These basic guidelines and examples are given using the server-side **Rhino** scripting language syntax for usage within business object
scripts, workflow scripts, external object scripts, ...

For more details on **Rhino** sscripting you can check [the Mozilla Rhino documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Documentation)

> **Note**:
>
> Object scripts can be written in Java or Javascript (which will be executed by Rhino, just like the executed fields), but good practice is to use Java language which  
> include a compilation step and ensure that the syntax of the script is correct. In advanced use cases that are not part of this tutorial, the use of Java gives access > to all of the classic application development tools: step-by-step debugging, unit tests, development in a Java IDE, code quality analysis with Sonar etc..

> Examples are provided both in Rhino and Java so as you can see the syntax differences.
> In Rhino scripts the `this` variable correspond to the contextual item (business object, workflow, external object, ...) itself,
> it must be **explicitly** used (it can't be implicit like in Java code).
>
> The **Rhino**-only code examples can easily be transposed to equivalent **Java** code.

>
> Apart from the variable and methods declarations syntax, the main point of attention is regarding comparisons syntax for **non raw types**:
>
> - Rhino: `a == b`, Java: `a.equals(b)`
> - Rhino: `a != b`, Java: `!a.equals(b)`

<h2 id="namingconventions">Naming conventions</h2>

Recommended naming conventions are:

- Name modules, business objects, business workflows, external objects, adapters, ... as you would name a Java
  class (put a capital letter at the beginning of each word, e.g. `MyBusinessObject`)
- Name field as you would name a Java variable (do not start by a capital letter, but afterwards put a capital
  letter at the beginning of each word, e.g. `myFirstName`)

<h2 id="inclusions">Packages inclusions</h2>

All scripts are processed with the following packages included **by default** (no need to import them explicitly):

```plaintext
java.lang
java.util
org.json
com.simplicite.util.exceptions
com.simplicite.util.tools
com.simplicite.util
com.simplicite.bpm
com.simplicite.webapp
com.simplicite.webapp.tools
```

It is possible to include a whole additional packages by:

#### Rhino script

```plaintext
importPackage(Packages.<java package name (e.g. org.apache.commons.lang3)>);
```
#### Java
```plaintext
import <java class name (e.g. org.apache.commons.lang3)>.*;
```
or a single additional class by:
#### Rhino script
```plaintext
importClass(Packages.<java class name (e.g. org.apache.commons.lang3.StringUtils)>);
```
#### Java
```plaintext
import <java class name (e.g. org.apache.commons.lang3.StringUtils)>;
```
Example:

#### Rhino script

```javascript
importClass(Packages.org.apache.commons.lang3.StringUtils);
console.log(StringUtils.isNumeric("hello world")); // false
console.log(StringUtils.isNumeric("123")); // true
```
#### Java

```java
import org.apache.commons.lang3.StringUtils;
AppLog.info(StringUtils.isNumeric("hello world"),getGrant()); // false
AppLog.info(StringUtils.isNumeric("123"),getGrant()); // true
```

<h2 id="logging">Logging</h2>

<h3 id="consolelogging">Console logging</h3>

It is possible to log messages using:

```javascript
console.debug("Hello world !");   // Debug level message
console.info("Hello world !");    // Info level message
console.warning("Hello world !"); // Warning level message
console.error("Hello world !");   // Error level message
console.fatal("Hello world !");   // Fatal level message
```
#### Java

```java
AppLog.debug("Hello world !",getGrant());   // Debug level message
AppLog.info("Hello world !",getGrant());    // Info level message
// e is type java.lang.Throwable
AppLog.warning(e,getGrant()); // Warning level message
AppLog.error(e,getGrant());   // Error level message
AppLog.fatal(e,getGrant());   // Fatal level message
```
It is also possible to link a message to an explicit log code:
### Rhino script

```javascript
console.log("Hello world !", "MYLOGCODE_001");
```
#### Java

```java
AppLog.log("MYLOGCODE_001","Hello world !" ,getGrant());
```

Note that if the log code is omitted the `log` method is the equivalent to the default `info`method.

The messages are actually displayed depending on the log appenders configuration and on the log code associated configuration.

It is possible to set custom target log codes for default log methods using:

#### Rhino script

```javascript
console.setDebugCode("MYLOGCODE_000");   // Otherwise the default DEBUG code is used 
console.setInfoCode("MYLOGCODE_001");    // Otherwise the default INFO code is used 
console.setWarningCode("MYLOGCODE_002"); // Otherwise the default WARN code is used 
console.setErrorCode("MYLOGCODE_003");   // Otherwise the default ERROR code is used 
console.setFatalCode("MYLOGCODE_004");   // Otherwise the default FATAL code is used 
```

<h3 id="debughookscalls">Debug hook calls &amp; SQL logging (as of version 3.1)</h3>

Designers can activate the hooks tracer during the development phase. 
At the top of the object script add the following code:
#### Rhino script

```javascript
// Trace object hooks
// - Tracks the calls hierarchy
// - Tracks the call frequency and the durations
var trace = true;     // to active the hooks tracer
var traceAll = true;  // trace all hooks to display the calls hierarchy or only the implemented ones
var traceArgs = true; // trace all hooks arguments or only simple ones
console.traceHooks(trace, traceAll, traceArgs);

// Trace object CRUD 
// - Tracks object accesses
// - Explains the SQL statements
console.traceObject(true);
```

<h2 id="rhinotraps">Rhino usual traps</h2>

### JVM scripting engine considerations

As of JVM version 1.8 the default `javax.script` scripting engine (_Nashorn_) is not the same as in previous JVMs (_Rhino_).

As of JVM 13 _Nashorn_ is scheduled to be removed shortly from the JVM.

To avoid compatibility problems the up-to-date _Rhino_ script engine has been added as third party JSR223 libs and
is explicitly used instead of the defaut `javax.script`.

For more details on **Rhino** scripting engine you can check [the Mozilla Rhino documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Documentation)

<h2 id="businessobjects">Business objects manipulation</h2>

<h3 id="selecting">Selecting</h3>

Selecting a **single record** from its row ID.

#### Java

```java
ObjectDB o = getGrant().getTmpObject("myObject");
o.resetFilters(); // Just in case...
o.resetValues(); // Just in case...
// Same as above regarding filters
if (o.select(rowId)) {
	String val = o.getFieldValue("myField1");
	// etc.
}
```
#### Rhino script

```javascript
var o = this.getGrant().getTmpObject("myObject");
o.resetFilters(); // Just in case...
if (o.select(rowId)) {
	var val = o.getFieldValue("myField1");
	// etc.
}
```

<h3 id="searching">Searching</h3>

Search **multiple records** with filters and ordering.

Without pagination:

#### Java

```java
ObjectDB o = getGrant().getTmpObject("myObject");

o.resetFilters();
o.resetValues();
o.resetOrders(); 

for (String[] row : o.search(false)) {
	o.setValues(row, false /* or true if you do an update */);
	String val = o.getField("myField1").getValue();
	// etc
}
```
#### Rhino script

```javascript
var o = this.getGrant().getTmpObject("myObject");

// Place filters if needed
o.resetFilters();
o.resetValues();
o.setFieldFilter("myFkField", this.getRowId()); // Foreign key
o.setFieldFilter("myField1", "ABC"); // simple text
o.setFieldFilter("myField2", "is not null"); // or "is null"
o.setFieldFilter("myField3", "in (1,5,8)"); // or "not in"
o.setFieldFilter("myField4", "like 'AB%')"); // or "not like"
o.getField("myDate1").setFilterDateMin(Tool.getCurrentDate());
o.getField("myDatetime1").setFilterDateMax("2013-06-26 23:45:23");
o.getField("myBoolean1").setFilter(true); // or false
o.getField("myInteger1").setFilter(">100 and <200");
o.getField("myString1").setFilter("='abc' or ='def'");

// Place orders if needed
o.resetOrders();
o.getField("myField1").setOrder(1); // order by myField1 ascendant
o.getField("myField2").setOrder(-2); // then order by myField2 descendant

var rows = o.search(false);
for (var i = 0; i < rows.size(); i++) {
	var row = rows.get(i);
	o.setValues(row, false /* or true if you do an update */);
	var val = o.getField("myField1").getValue();
	// etc.
}
```


With pagination to limit memory usage:

#### Java

Before V5, you have to prepare the object before a loop per page:

```java
long totalNbRows = o.getCount();
int maxRowsPerPage = 200;
o.preparePagination(totalNbRows, maxRowsPerPage);
for (int p = 0; p <= o.getMaxPage(); p++) {
	o.setCurrentPage(p);
	for (String[] row : o.search(true, maxRowsPerPage)) {
		o.setValues(row, false /* or true if you do an update */);
		String val = o.getField("myField1").getValue();
		// ...
	}
}
```
#### Rhino script

```javascript
var totalNbRows = o.getCount();
var maxRowsPerPage = 200;
o.preparePagination(totalNbRows, maxRowsPerPage);
for (var p = 0; p <= o.getMaxPage(); p++) {
	o.setCurrentPage(p);
	var rows = o.search(true, maxRowsPerPage);
	for (int i = 0; i < rows.size(); j++) {
		var row = rows.get(i);
		o.setValues(row, false /* or true if you do an update */);
		var val = o.getField("myField1").getValue();
		(...)
	}
}
```

In V5, a simplified way is available with a callback for each page:

```java
int maxRowsPerPage = 200;
obj.search(true, maxRowsPerPage, (rows) -> {
	for (String[] row : rows)
		o.setValues(row, false /* or true if you do an update */);
		// ...
	});
```
<h3 id="enum">Using enumerations fields' code/values</h3>

Enumeration fields are particular because they refer a list of value which consist of a list of **code** and **value**.

- The **code** is the actual value of the field (the one to manipulate with `set/getValues`, `set/getFilter`, etc).
- The **value** is only the displayable label translated in the language of the current user

You should thus never use the **values** but only the **codes** in your code.

Example: iterate on the codes of a field's list of values:

#### Java

```java
for (EnumItem item : o.getField("myField").getList().getAllItems()) {
	String code = item.getCode();
	(...)
}
```
#### Rhino script

```javascript
var l = o.getField("myField").getList().getAllItems();
for (var i = 0; i < l.size(); i++)) {
	var code = l.get(i).getCode();
	(...)
}
```

<h3 id="filtering">Filtering</h3>

The setSearchSpec is a method that allows you to set an SQL where clause on your business object.

For example , users can only read, update the data they have created
users can only view or modify the data to which they are assigned...etc

If it's a static filter that never changes, use the postLoad hook to define your search spec.   
The object's table alias is t.   
The alias of the related object table is t_logical name technical key.   

#### Java

```java
@Override   
public void postLoad() {   
	if (getGrant().hasResponsibility(USER_GROUP))   
		setSearchSpec("t.column1='abc' or t.column2>123");    
}

@Override   
public void postLoad() {   
	if (getGrant().hasResponsibility(USER_GROUP))   
		setSearchSpec(getSearchSpec() + " and exists(select 1 FROM table1 where t_userAssignedId.row_id=" + getGrant().getUserId());    
}
``` 

<h2 id="others">Others</h2>

<h3 id="emails">Sending emails</h3>

#### Java

```java
	ObjectDB obj = getGrant().getTmpObject("myObject");
	ObjectField myObjectFile = obj.getField("myObjFile"); // must be of type file
	
	// https://www.simplicite.io/resources/4.0/javadoc/com/simplicite/util/tools/MailTool.html
	MailTool mail = new MailTool(getGrant());
	mail.addRcpt("contact@null.fr");
	mail.setSubject("Test Mail");
	mail.addAttach(obj, myObjectFile); 
	mail.setBody("<p>Hello</p>");
	mail.send();
	);
```

<h3 id="zip">ZIP files</h3>

#### Read ZIP file

This simple example unzips a ZIP file read from a public URL and unzip it to a temporary folder for processing files:

#### Java
```java
public void readZip(File zipFile){
	File destDir = new File(this.getGrant().getTmpDir() + "/mydata." + System.currentTimeMillis());
	try {
		ZIPTool.extract(zipFile, destDir);
		// Do something with files of file contents located in destDir, e.g. using FileTool methods
	} catch (IOException e) {
		AppLog.error(e, getGrant());
	} finally {
		FileTool.deleteFileOrDir(destDir);
	}
}
```
#### Rhino script

```javascript
	var destDir = new File(this.getGrant().getTmpDir() + "/mydata." + System.currentTimeMillis());
	try {
		var zipData = Tool.readUrlAsByteArray(url, true);
		ZIPTool.extract(zipData, destDir);
		// Do something with files of file contents located in destDir, e.g. using FileTool methods
	} catch (e) {
		console.log(e.message);
	} finally {
		FileTool.deleteFileOrDir(destDir);
	}
```

#### Write ZIP file

This simple example zips a list of text files and return the ZIP file as a byte array:

#### Java
```java
public byte[] writeZip() {
	try {
		Map<String,byte[]>  files = new HashMap<>();
		String data = "Hello world";
		files.put("test1.txt", (data + " 1").getBytes());
		files.put("test2.txt", (data + " 2").getBytes());
		files.put("testN.txt", (data + " N").getBytes());
		return ZIPTool.build(files);
	} catch (IOException e) {
		AppLog.error(e,getGrant());
		return new byte[0];
	}
}
```
#### Rhino script

```javascript
try {
	var files = new HashMap<>();
	var data = "Hello world";
	files.put("test1.txt", (data + " 1").getBytes());
	files.put("test2.txt", (data + " 2").getBytes());
	// ...
	files.put("testN.txt", (data + " N").getBytes());
	return ZIPTool.build(files);
}
catch (e)
{
	console.log(e.message);
}
```

> **Note**: There are several other methods and variants in `Tool`, `ZIPTool` and `FileTool` that you ca use to manipulate URLs and files


