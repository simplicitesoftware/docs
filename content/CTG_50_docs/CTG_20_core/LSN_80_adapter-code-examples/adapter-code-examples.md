Adapter code examples
=====================

Adapters concept
----------------

The principle of an import adapter is to provide a dedicated conversion processing
for any incoming data format (text-based) into standard Simplicit&eacute&reg; XML format.

The principle is to read data from an input stream (depending on the adapter engine, see below)
and to write results to an output stream (depending on the adapter engine, see below).

Converting to standard Simplicit&eacute;&reg; XML is not mandatory, you can also directly call platform business objects APIs.

It is possible to write adapters either in server-side **Rhino** scripting language or in **Java**.

To configure a **Rhino** or a **Java** adapter, the processing type has to be set to &quot;JAVA&quot;.

<h2 id="rhino">Rhino adapter</h2>

In **Rhino** scripts the `this` variable is set to the current instance of `com.simplicite.util.integration.SimpleScriptedAdapter` before calling the adapter script.
Using explicit `this` is mandatory in **Rhino** (in Java it could be implicit).

The following additional packages are included by default (see [this document](/lesson/docs/core/basic-code-examples) for the list of packages included by default in all **Rhino** scripts).

```plaintext
java.io
com.simplicite.util.integration
```

Other custom includes can be explicitly added if needed (e.g. POI or apache commons libs).

When using **Rhino**, all adapters are low-level `com.simplicite.util.integration.SimpleScriptedAdapter` instances.
It is not possible to use higher level adapter helper classes like in Java (see below).

In these **Rhino** scripts:

- You can access to the **input** stream reader using `this.getInputReader()`
- You can access to the **output** stream print writer using ` this.getOutputWriter()`
- You can access to the **error** stream print writer using ` this.getErrorWriter()`
- You can access to the **log** stream print writer using ` this.getLogWriter()`
- You can use current user using `this.getGrant()`

### Examples

#### Example using conversion to standard Simplicit&eacute;&reg; XML

Ths example is a simple CSV adapter (named `MyAdapter`) used for loading system parameters using XML integration APIs

The expected input format is `<system parameter name>;<system parameter value>[;<module name>]`,
module is not mandatory in case of update.

```javascript
MyAdapter.process = function() {
	console.log("Processing start");
	var out = this.getOutputWriter();
	var log = this.getLogWriter();
	var n = 1;
	var l;
	while (l = this.getInputReader().readLine()) {
		console.log("Line " + n + " = [" + l + "]");
		var v = l.trim().split(";");
		if (l.length() > 0  && !l.startsWith("#")) {		
			var o = new ObjectXML("SystemParam", "upsert");
			var d = new DataXML();
			d.add("sys_code", v[0]);
			d.add("sys_value", v[1], ObjectField.TYPE_LONG_STRING);
			if (v.length == 3)
				d.add("row_module_id.mdl_name", v[2]);
			o.addData(d);
			out.println("<!-- " + l + " -->");
			out.println(o.toString());
			log.println("Line " + n + " processed: " + l);
		} else
			log.println("Line " + n + " ignored: " + l);
		n++;
	}
	console.log("Processing end");
};
```

Using this adapter if the input data is:

```plaintext
# Test parameter
TEST;test;Test
```

It produces this XML output (that is processed by the standard XML import feature):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<simplicite xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.simplicite.fr/base" xsi:schemaLocation="http://www.simplicite.fr/base http://www.simplicite.fr/schemas/base.xsd">
<object>
	<name>SystemParam</name>
	<action>upsert</action>
	<data>
		<sys_code>TEST</sys_code>
		<sys_value><![CDATA[test]]></sys_value>
		<row_module_id.mdl_name>Test</row_module_id.mdl_name>
	</data>
</object>
</simplicite>
```

The processing produces the following log:

```plaintext
2014-09-09 18:11:55,157 INFO  [/demo] Start adapter: SimpleScriptedAdapter
2014-09-09 18:11:55,158 INFO  [/demo]   User: designer
2014-09-09 18:11:55,158 INFO  [/demo]   Date: Tue Sep 09 18:11:55 CEST 2014
Line 3 processed: TEST;test;Tutorial
2014-09-09 18:11:55,191 INFO  [/demo] End adapter: SimpleScriptedAdapter
2014-09-09 18:11:55,191 INFO  [/demo]   Date: Tue Sep 09 18:11:55 CEST 2014
2014-09-09 18:11:55,192 INFO  [/demo]   Status: T
2014-09-09 18:11:55,214 INFO  [/demo] Start import:
2014-09-09 18:11:55,214 INFO  [/demo]   User: designer
2014-09-09 18:11:55,214 INFO  [/demo]   XMLSupervisor: 6
2014-09-09 18:11:55,218 INFO  [/demo] AUTO COMMIT
2014-09-09 18:11:55,218 INFO  [/demo] Start import object SystemParam:
2014-09-09 18:11:55,218 INFO  [/demo]   Found field sys_code = [TEST]
2014-09-09 18:11:55,218 INFO  [/demo]   Found field sys_value = [test]
2014-09-09 18:11:55,218 INFO  [/demo]   Found field row_module_id.mdl_name = [Tutorial]
2014-09-09 18:11:55,219 INFO  [/demo]   Found internal key row_id = 184
2014-09-09 18:11:55,220 INFO  [/demo]   Action: UPDATE
2014-09-09 18:11:55,221 INFO  [/demo]   Save ok.
2014-09-09 18:11:55,222 INFO  [/demo] Close import:
2014-09-09 18:11:55,222 INFO  [/demo]   Status: OK
2014-09-09 18:11:55,222 INFO  [/demo]   Time(sec): 0.008
```

#### Example directly using business objects APIs

Instead of generating XML an adapter can directly use the business object APIs to import records.
In such a case the XML import itself is useless and can be inhibited.

```javascript
MyAdapter.process = function() {
	var n = 1;
	var line;
	var c = new CSVTool(';', '"', "%CR%");
	var obj = this.getGrant().getTmpObject("MyObject");
	this.getInputReader().readLine(); // Read Header line

	while ((line = this.getInputReader().readLine()) !== null) {
		this.getLogWriter().println("Line " + (n++) + " started");
		var vals = c.parse(line,true);
		var field1 = vals[0];
		var field2 = vals[1];
		var field3 = vals[2];

		obj.resetFilters();
		obj.getField("field1").setFilter(field1);
		if (obj.count() == 0) {
			obj.resetValues(true); // Prepare record for creation (true is to evaluate default values)
			obj.setFieldValue("field2", field2);
			obj.getFieldValue("field3", field3);
			new BusinessObjectTool(obj)/* or obj.getTool() in version 5+ */.validateAndSave();
		} else {
			this.getErrorWriter().println("ERROR line " + n + " : object already exists");
			this.setStatus('E');
		}
		this.getLogWriter().println("Line " + n + " finish");
	}
};

MyAdapter.postProcess = function() {
	// Inhibitate output to avoid useless XML import
	this.setOutputStream(null);	
};
```

<h2 id="java">Java adapter</h2>

To have more flexibility and higher performance adapters it is preferable to use compiled **Java** adapters instead of Rhino-scripted adapters.

By default, the fully qualified class name of the class to implement is `com.simplicite.adapters.<Module name>.<Adapter name>`.

This class must implement (directly or indirectly) the `com.simplicite.utils.integration.AdapterInterface` interface,
which means basically implementing the two following methods.

```java
public void init(Grant g);
public void process(InputStream in, OutputStream out);
```

But in order to simplify adapter development several specialized helper classes are provided
in the `com.simplicite.util.integration` package such as:

- `com.simplicite.util.integration.SimpleAdapter` dedicated to custom low-level input stream processing (like in **Rhino**)
- `com.simplicite.util.integration.LineBasedAdapter` dedicated to process text files line by line
- `com.simplicite.util.integration.CSVLineBasedAdapter` dedicated to process CSV text files line by line
- `com.simplicite.util.integration.SAXParserAdapter` dedicated to process XML text files
- `com.simplicite.util.integration.SimpleJSONAdapter` dedicated to process JSON text files
- `com.simplicite.util.integration.SimpleYAMLAdapter` dedicated to process YAML text files
Etc.

Some of them are described below, for others please refer to the Javadoc.

<h3 id="linebased">Line-based adapters</h3>

A line based adapter is provided as an abstract class to be overridden `com.simplicite.util.integration.LineBasedAdapter`. 
The methods to implement are in this case (current grant is available using the getGrant() method).:

```java
public String preProcess(}
public String postProcess()
public String processLine(long lineNumber, String line)
```

<h3 id="linebased">CSV line-based adapters</h3>

A line based adapter specialized for CSV data is also provided as an abstract class to be overridden `com.simplicite.util.integration.CSVLineBasedAdapter`. 
The methods to implement are in this case:

```java
public String preProcess(}
public String postProcess()
public String processLine(long lineNumber, String[] values)
```

<h3 id="xmlparser">XML parser adapters</h3>

A SAX XML parser based adapter is provided as an abstract class to
be overridden `com.simplicite.util.integration. SAXParserAdapter`.
You just need to implement the SAX handler like. Typical usage is as follows:

```java
private class MyAdapter extends com.simplicite.util.integration.SAXParserAdapter {
	private class MyHandler extends com.simplicite.util.integration.SAXParserHandler {
		public MyHandler(OutputStream out, OutputStream err, OutputStream log) { super(out, err, log); }
			// You SAX handler implementation here...
		}

		public void process() throws InterruptedException {
			setParser(this.new MyHandler(getOutputStream(), getErrorStream(), getLogStream()));
			super.process();
		}
	}
}
```

And a simplified wrapper adapter for SAX parser based adapter is also provided as an
abstract class to be overridden: `com.simplicite.util.integration. SimpleSAXParserAdapter`.
The methods to implement are in this case (current grant is available using the `getGrant()` method).:

```java
public void startProcess()
public void startTagProcess(String uri, String localName, String qName, Attributes attributes)
public void processValue(String value)
public void endTagProcess(String uri, String localName, String qName)
public void endProcess()
```

<h2 id="awk">AWK adapter (deprecated)</h2>

Although it is deprecated as of version 4.0, it is also possible to write adapters in the well-known UNIX **AWK scripting language**.

The advantage of using this scripting language is that it is highly efficient for simple text transformations.
The main drawback is that it does not allow to use Simplicit&eacute,&reg; Java APIs neither to access to current
user grant data.

To configure a AWK adapter, the processing type has to be set to &quot;AWK&quot; and the script content must contain the AWK script itself.

Input and output streams are implicit with AWK.

Example: Simple CSV adapter example for system parameters
(input format is `<system parameter name>;<system parameter value>[;<module name>]`,
module is not mandatory in case of update).

```awk
BEGIN { FS=";" }
/^[ \t]*#/ { next }
{
print "<object>"
print 	"<name>SystemParam</name>"
print 	"<action>upsert</action>"
print 	"<data>"
print 		"<sys_code>"$1"</sys_code>"
print 		"<sys_value>"$2"</sys_value>"
if ($3 != "")
	print 		"<row_module_id.mdl_name>"$3"</row_module_id.mdl_name>"
print	"</data>"
print "</object>"
}
```

Programatic adapter usage
-------------------------

<h3 id="action">Custom business object action to submit object data to an adapter</h3>

You can configure a business object custom action that submits some of your text field content to an adapter.

Example

**Rhino**

```javascript
MyObject.myAction = function() {
	var data = this.getFieldValue("myTextField").getBytes();
	// Or for a document field:
	// var data = this.getField("myDocumentField").getDocument().getBytes(true);
	var res = new Integration().importADP(this.getGrant(), "MyAdapter", new ByteArrayInputStream(data), this.getName(), null);
	return "<pre>" + res.getResultLog() + "</pre>"
};
```

**Java**

```java
public String myAction() {
	byte[] data = getFieldValue("myTextField").getBytes();
	// Or for a document field:
	// byte[] java = getField("myDocumentField").getDocument().getBytes(true);
	Message res = new Integration().importADP(this.getGrant(), "MyAdapter", new ByteArrayInputStream(data), getName(), null);
	return "<pre>" + res.getResultLog() + "</pre>"
};
```

<h3 id="externalobject">Custom page (external object) to submit form data to adapter</h3>

You can configure a simple custom page (external object) that displays an upload form for submitting a file to an adapter:

Example:

**Rhino**

```javascript
MyExternalObject.form = function(params) {
	var form = "uploadform";
	var tab = 1;
	var h = new HTMLTool.openSimpleMultipartForm(form, params.getLocation());
	h += "<table class=\"workform\" style=\"width: 100%;\">";
	h += "<tr><td class=\"workfieldname\"><div class=\"workfieldname\">" + this.getGrant().T("UPLOAD") + "</div></td>";
	h += "<td class=\"workfield\"><div class=\"workfield\">";
	h += HTMLTool.fileInput(form, "file", 80, tab++) + "&nbsp;";
	h += HTMLTool.submit(form, "ok", this.getGrant().T("OK"), null, "buttonaction", tab++);
	h += "</div></td></tr></table>";
	h += HTMLTool.closeForm(form, "file", "ok");
	return h;
};

MyExternalObject.display = function(params) {
	var g = this.getGrant();
	if (params.getMethod() == "GET") {
		return MyExternalObject.form.call(this, params);
	} else {
		var m = "";
		try {
			var file = params.getDocument("file");
			if (Tool.isEmpty(file.data)) throw new Exception("No data");
			var res = new Integration().importADP(g, "MyAdapter", new ByteArrayInputStream(data), file.path, null);
			m += "<div class=\"workinfo\">Your file has been uploaded!</div>";
			m += "<pre class=\"mono\" style=\"max-height: 300px; overflow: auto;\">" + res.getAdapterLog() + "\n" + res.getResultLog() + "</pre>"
		} catch(e) {
			m += "<div class=\"workerror\">" + e.message + "</div>"
		}
		return m + MyExternalObject.form.call(this, params);
	}
};
```

Instead of a file upload input, you can adapt this example to use a `<textarea>` to provide input data.

The above **Rhino** example can easily be transposed to **Java**.


> **Note**: this custom page only offers a subset of the features available out of the box in the more complex _XML import_ page of the generic UI.