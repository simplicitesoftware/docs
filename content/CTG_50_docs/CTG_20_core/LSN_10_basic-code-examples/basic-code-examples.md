Basic code examples
===================

These basic guidelines and examples are given using the server-side **Rhino** scripting language syntax for usage within business object
scripts, workflow scripts, external object scripts, ...

For more details on **Rhino** sscripting you can check [the Mozilla Rhino documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Documentation)

> **Note**:
>
> In Rhino scripts the `this` variable correspond to the contextual item (business object, workflow, external obejct, ...) itself,
> it must be **explicitly** used (it can't be implicit like in Java code).
>
> The **Rhino**-only code examples can easily be transposed to equivalent **Java** code.
> Some examples are provided both in Rhino and Java so as you can see the syntax differences.
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

```plaintext
importPackage(Packages.<java package name (e.g. org.apache.commons.lang3)>);
```

or a single additional class by:

```plaintext
importClass(Packages.<java class name (e.g. org.apache.commons.lang3.StringUtils)>);
```

Example:

```javascript
importClass(Packages.org.apache.commons.lang3.StringUtils);
console.log(StringUtils.isNumeric("hello world")); // false
console.log(StringUtils.isNumeric("123")); // true
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

It is also possible to link a message to an explicit log code:

```javascript
console.log("Hello world !", "MYLOGCODE_001");
```

Note that if the log code is omitted the `log` method is the equivalent to the default `info`method.

The messages are actually displayed depending on the log appenders configuration and on the log code associated configuration.

It is possible to set custom target log codes for default log methods using:

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

The Rhino scripting engine has several usual traps that are worth mentionning here:

### Native Rhino string vs Java strings

The native Rhino strings that you may create with instructions like `var s = "";` **are not** Java strings.
This may cause issues when passing these native Rhino strings as arguments of some Java methods.

Our recommendation is thus *not to instanciate* native Rhino strings in your server scripts but rather
instanciate **explicit Java strings** using either `new java.lang.String()` or the `ScriptInterpreter.getString()` method.

### Native Rhino objects/arrays vs Java objects/arrays

The native Rhino arrays that you may create with instructions like `var a = [];` **are not** Java arrays.
Depending on the Rhino version, some methods of the ECMAScript specification are not well
(or not yet) implemented on Rhino native arrays (e.g. the `indexOf` method)
Same for native Rhino objects that you may create with instructions like `var o = {};`.

The worst thing to do is to use native Rhino object/array containing Java objects. For instance:
```javascript
JSON.stringify({name:"myname"}); // OK 
JSON.stringify({name:new java.lang.String("myname")+""}); // OK (the +"" turns Java string into a native Rhino string)
// JSON.stringify({name:new java.lang.String("myname")}); => error
```

Our recommendation is thus *not to use* the confusing native Rhino objects or arrays in your scripts
but rather **Java maps or arrays/lists** like `HashMap` or `ArrayList`
or, better, **Java JSON** objects `JSONObject` and `JSONArray` instead.

Examples:

* Java array: `var a = java.lang.reflect.Array.newInstance(<array item types, e.g. java.lang.String>, <array length, e.g. 10>);`.
  For usual cases, the `ScriptInterpreter` class provides helper methods to create arrays:
	- `ScriptInterpreter.getObjectArray(<n>)` to get a Java Object arrays.
	- `ScriptInterpreter.getStringArray(<n>)` to get a Java String arrays.
	- `ScriptInterpreter.getArrayOfStringArray(<n1>, <n2>)` to get a Java array of Java String arrays
* Javay list: `var a = new ArrayList();`
* Java map: `var o = new HashMap();`
* Java JSON object: `var o = new JSONObject();`
* Java JSON array: `var a = new JSONArray();`

Note that the methods `Tool.concat/append/merge` are useful to simplify the manipulation of Java arrays.

### Comparisions

If you compare Java strings and native Rhino strings you must pay attention to the compare method:

Example:

```javascript
var a = new java.lang.String("hello"); // a is a Java String object
var b = "hello";                       // b is a native Rhino string object
console.log(a.equals(b)); // true
console.log(b.equals(a)); // true
console.log(a == b);      // true
console.log(a === b);     // false (because objects are not of the same type)
```

You also need to pay a particular attention to comparisons between raw Java and/or native Rhino type variables
and Java wrapper objects such as `java.lang.Integer`, `java.lang.Boolean`, ...

Examples:

```javascript
var x = new java.lang.Integer(10);
var y = 10;
console.log(x.equals(y)); // false
console.log(x == y);      // true
console.log(x === y);     // false
//console.log(y.equals(x)); => error
```

or

```javascript
var x = new java.lang.Boolean(true);
var y = true;
console.log(x.equals(y)); // true
console.log(x == y);      // true
console.log(x === y);     // false
//console.log(y.equals(x)); => error
```

And also keep in mind that Rhino is more "tolerant" than Java when comparing strings and raw types:

Example:

```javascript
var x = new java.lang.String("10");
var y = "10";
var z = 10;
console.log(x.equals(y)); // true
console.log(y.equals(x)); // true
console.log(x == y);      // true
console.log(x === y);     // false
console.log(x.equals(z)); // false
console.log(x == z);      // true
console.log(x === z);     // false
console.log(y.equals(z)); // true
console.log(y == z);      // true
console.log(x === z);     // false
//console.log(z.equals(x or y)) => error
```

In all cases, when comparing variables of different types, you need to be sure of what you are doing.
Therefore our **recommendation** is to use `==` by default unless you have a very specific comparison to do.

> **Note**: as of version 4.0 constraint expressions are processed both at server and client level if your constraint is marked both "static/back" and "front".
> In client-side Javascript the `equals` does not exists, so for such server+client constraint expressions you **must** use `==` to avoid issues on client side.

### JVM scripting engine considerations

As of JVM version 1.8 the default `javax.script` scripting engine (_Nashorn_) is not the same as in previous JVMs (_Rhino_).

As of JVM 13 _Nashorn_ is scheduled to be removed shortly from the JVM.

To avoid compatibility problems the up-to-date _Rhino_ script engine has been added as third party JSR223 libs and
is explicitly used instead of the defaut `javax.script`.

For more details on **Rhino** scripting engine you can check [the Mozilla Rhino documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Documentation)

<h2 id="businessobjects">Business objects manipulation</h2>

<h3 id="selecting">Selecting</h3>

Selecting a **single record** from its row ID.

#### Rhino script

```javascript
var o = this.getGrant().getTmpObject("myObject");
o.resetFilters(); // Just in case...
if (o.select(rowId)) {
	var val = o.getFieldValue("myField1");
	// Etc.
}
```

#### Java

```java
ObjectDB o = getGrant().getTmpObject("myObject");
o.resetFilters(); // Just in case...
// Same as above regarding filters
if (o.select(rowId)) {
	String val = o.getFieldValue("myField1");
	// Etc.
}
```

<h3 id="searching">Searching</h3>

Search **multiple records** with filters and ordering.

Without pagination:

#### Rhino script

```javascript
var o = this.getGrant().getTmpObject("myObject");

// Place filters if needed
o.resetFilters();
o.setFieldFilter("myFkField", this.getRowId()); // Foreign key
o.getFieldFilter("myField1", "ABC"); // simple text
o.getFieldFilter("myField2", "is not null"); // or "is null"
o.getFieldFilter("myField3", "in (1,5,8)"); // or "not in"
o.getFieldFilter("myField4", "like 'AB%')"); // or "not like"
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
	// Etc.
}
```

#### Java

```java
ObjectDB o = getGrant().getTmpObject("myObject");

o.resetFilters();
// Same as above regarding filters

o.resetOrders();
// Same as above regarding orders

for (String[] row : o.search(false)) {
	o.setValues(row, false /* or true if you do an update */);
	String val = o.getField("myField1").getValue();
	// 
}
```

With pagination to limit memory usage:

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

- The **code** is the actual value of the field (the one to manipulate with `set/getValues`, `set/getFeilter`, etc).
- The **value** is only the displayable label translated in the language of the current user

You should thus never use the **values** but only the **codes** in your code.

Example: iterate on the codes of a field's list of values:

#### Rhino script

```javascript
var l = o.getField("myField").getList().getList().getAllItems();
for (var i = 0; i < l.size(); i++)) {
	var code = l.get(i).getCode();
	(...)
}
```

#### Java

```java
for (EnumItem item : o.getField("myField").getList().getAllItems()) {
	String code = item.getCode();
	(...)
}
```

<!-- **TO BE COMPLETED** -->

<!-- 
<h2 id="businessworkflows">Business workflows manipulation</h2>

**TO BE COMPLETED**
-->

<h2 id="others">Others</h2>

<h3 id="emails">Sending emails</h3>

```javascript
try {
	var mailer = new Mail(this.getGrant());
	mailer.send(
			"from@mydomain.com",
			"to@mydomain.com",
			"Subject",
			"<html><body>Hello World !</body></html>");
} catch (e) {
	console.error("Error sending mail" + e.getMessage());
}
```

> **Note**: There are several variants of the `Mail.send` method offering the possibility to add attachments, etc.

<h3 id="zip">ZIP files</h3>

#### Read ZIP file

This simple example unzips a ZIP file read from a public URL and unzip it to a temporary folder for processing files:

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

<!-- **TO BE COMPLETED** -->

