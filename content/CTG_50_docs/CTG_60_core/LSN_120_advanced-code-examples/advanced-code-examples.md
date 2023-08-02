Advanced code examples
======================

Please refer to [basic code examples](/lesson/docs/core/basic-code-examples) document for naming conventions and logging strategies. 

These advanced examples are given using the server-side **Rhino** scripting language.

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

<h2 id="parameters">Sharing parameters</h2>

It can be useful to store parameters (or serializable objects) in the user's session (Grant) or object instances (ObjectDB)

<h3 id="objectparam">Object-level parameter</h3>

- Share parameters between screens in the user's navigation: a component needs to know from where it has been opened...
- Use some parameters in Action: asynchronous or recursive calls to limit the stack size (with heap memory)
- Use some parameters in External objects (not thru http parameters on each browser calls)

Examples:

Share a parameter between objects:

```javascript
MyObjectA.initUpdate = function() {
	// To store the current RowId of this object
	this.getGrant().setParameter("MYAPP_CONTEXT_ID", this.getRowId());
}

MyObjectB.initList = function(parent) {
	// To use the current Id of A when a list B is displayed
	var id = this.getGrant().getParameter("MYAPP_CONTEXT_ID");
	if (id && id!="") // ...
};

MyExternalObjectC.display = function(param) {
	// To use the current Id of A when the external object is displayed
	var id = this.getGrant().getParameter("MYAPP_CONTEXT_ID");
	if (id && id!="") ...
};

MyObjectB.myAction = function() {
	// To use the current Id of A when a list B is displayed
	var id = this.getGrant().getParameter("MY_CONTEXT_ID");
	if (id && id!="") ...
};
```

Store a set of data (as `org.json.JSONObject` between hooks of the same object:

```javascript
MyObject.postValidate = function() {
	var data = new JSONObject().put("key1", "value").put("key2", 123).put("key3", new JSONArray().put(new JSONObject(...)));
	this.setParameter("MY_DATA", data);
}
MyObject.postSave = function() {
	var data = this.getParameter("MY_DATA");
	console.log(data.toString());
	var k1 = data.getString("key1");
	var k2 = data.getInt("key2");
	var k3 = data.getJSONArray("key3");
	// ...
}
```

Etc.

<h3 id="globalparam">Global parameter</h3>

To make a global setting, it is necessary to use the system singleton

```javascript
Grant.getSystemAdmin().setParameter(name, value);
Grant.getSystemAdmin().getParameter(name);
Grant.getSystemAdmin().removeParameter(name);
```

<h3 id="sessionparam">Session parameter</h3>

The best solution is to load the parameter depending on user in the `GrantHooks` at logon:

- To request only once any external resource (LDAP, ...) to retrieve external data, rights...
- Or read some fields added to the object User or in the local database

Example: 

```javascript
GrantHooks.postLoadGrant = function(grant) {
	var login = grant.getLogin();
	var employeeId = grant.simpleQuery("select ... query depending on login ...");
	grant.setParameter("MYAPP_EMP_ID", employeeId || "unknown");
	var empPhone = Tools.readURL("http://...external REST service...");
	grant.setParameter("MYAPP_EMP_PHONE", empPhone || "");
};
```

### Booby traps:

- `name`: prefix the names of the grant-level parameters with your **unique** project code to prevent any conflicts
- `value`: store small values/objects in memory (parameters are in the user's session = the JVM heap)
- use the `removeParameter` to free memory when the parameter has been used (if not parameters will expire with the session)

<h2 id="validations">Advanced validations</h2>

### Phone number validations

As of version 3.1 MAINTENANCE 07, it is possible to do an advanced validation of phone numbers fields (typically in a `preValidate` or `postValidate` hook).

**Example**:

```javascript
var f = this.getFieldValue("myPhoneNumber");
f.setValue("myPhoneNumber", new PhoneNumTool("fr").getNationalNumber(f.getValue()));
```

> **Note**: it is also possible to format as international number using `getInternationalNumber` instead of `getNationalNumber`

<h2 id="preparation">Data preparation</h2>

<h3 id="dynamiclist">Dynamic list generation</h3>

In order to programmatically generate a list of values, you have to:

1. assign a non-empty static list of values to the field, as you would do for a normal list (this is to avoid "empty list" errors to be triggered by the platform)
2. build the dynamic list in the appropriate object's hook:
	- in the `postLoad` hook if the list is fixed for the duration of the user's session
	- in the `postSelect` hook if, for instance, the list depends on the current record
	- etc.

**Example**:

```javascript
MyObject.postLoad = function(){
	var field = this.getField("myField");
	field.setList(new ObjectFieldList(field)); // Empty the configured list

	// Build list (here the next 10 years)
	var list = field.getList();
	var year = Tool.parseInt(Tool.getCurrentYear(), 2000);
	for (var i = year; i <= year + 10; i++)
		list.putItem(new EnumItem(i.toString(), this.getGrant().T("YEAR") + " " + i)); // enum item = (value, label)
};
```

<h2 id="encryption">Data encryption</h2>

As of version 3.2 you can use the `EncryptionTool`class to encrypt/decrypt a field value.
`EncryptionTool` uses the parameter `ENCRYPTION_ALGORITHM` = `AES` by default.

**Example:**

```javascript
MyObject.key = function() {
	// ZZZ set as a system parameter (make sure to configure it as "private") ZZZ
	//return this.getGrant().getParameter("MY_ENCRYPTION_KEY");
	// or
	// ZZZ pass this to the JVM by -Dmy.encryption.key=...
	//return System.getProperty("my.encryption.key");
	// or
	// ZZZ set this in the JVM environment
	return System.getEnv("MY_ENCRYPTION_KEY");
	// etc.
};

MyObject.preSave = function() {
	// Encrypt the value before saving
	var l = this.getField("mySensitiveField");
	l.setValue(EncryptionTool.encrypt(l.getValue(), MyObject.key.call(this)));
};

MyObject.postSelect = function(rowId, copy) {
	// Decrypt the value after selecting it
	var l = this.getField("mySensitiveField");
	l.setValue(EncryptionTool.decrypt(l.getValue(), MyObject.key.call(this)));
};
```

> **Note**: an encrypted field using this method cannot be searchable except of exact values (by encrypting the search filter in the `preSearch` hook)

Since version 6.0, you can use the hook `fieldEncryptDB`
- To be called automatically on form, list (edit list...), search 
- but also in more UI context: crosstab, redolog...

**Example:**

```java
private String getKey() {
	// ZZZ set as a system parameter (make sure to configure it as "private") ZZZ
	//return getGrant().getParameter("MY_ENCRYPTION_KEY");
	// or
	// ZZZ pass this to the JVM by -Dmy.encryption.key=...
	//return System.getProperty("my.encryption.key");
	// or
	// ZZZ set this in the JVM environment
	return System.getEnv("MY_ENCRYPTION_KEY");
	// etc.
}

/**
 * Encrypt or decrypt the field value
 * @param f    Object Field
 * @param value Field value (crypted or decrypted)
 * @param encrypt true to encrypt the value, false to decrypt
 * @param context create/update to encrypt, select/redolog to decrypt
 * @return crypted or decrypted value
 */
public String fieldEncryptDB(ObjectField f, String value, boolean encrypt, String context) {
	if (f.getName().equals("mySensitiveField")) {
		return encrypt 
			? EncryptionTool.encrypt(value, getKey())
			: EncryptionTool.decrypt(value, getKey());
	}
	return super.fieldEncryptDB(f, value, encrypt, context);
}
```

<h2 id="clientcertificate">Call remote URL with client certificate</h2>

In this example the object is storing the client certificate JKS file as a document field
and the certificate password as a password field.

It can be easily transposed with the JKS avialable as a static local file or as a (protected) resource
and with the password stored as a system parameter or a environment variable etc.
  
```javascript
MyObject.callAPI = function() {
	var url = "https://myremotehost/myservice";
	var cert = this.getField("myClientCertificateField").getDocument();
	var pwd = this.getFieldValue("myClientCertificatePasswordField");
	console.log("Calling " + url + " with client certificate " + cert.getName());
	return Tool.readUrlWithClientCert(url, cert.getBytes(true), pwd);
};
```

> **Note**: the client certificate **must** be a JKS file, if you have a PEM certificate you can convert
> it to JKS format converting it first as PKCS12 using `openssl pkcs12 -export -inkey mycert.key -in mycert.pem -out mycert.p12`
> and then importing it in a JKS file using `keytool -importkeystore -destkeystore mycert.jks -srckeystore mycert.p12 -srcstoretype PKCS12`
> (you will be prompted to enter the passwords for the certficates)

<!-- 
Asynchronous code
-----------------

**TO BE COMPLETED**
-->
