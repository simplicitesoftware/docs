Business objects hooks
======================

This document describes the business object hooks that can be implemented to put some **additional** business logic
to your business objects.

None of these hooks **needs** to be implemented, simple business objects can only rely on configuration.

You **need** to implement one or several of these hooks if you want to apply out some dynamic business logic that goes beyond what can be configured.

Note that other mechanisms exists to add some business logic to your business objects using advanced configuration such as:

- default value expressions
- calculated fields expressions
- constraints expressions
- state transitions expressions
- etc.

See [this document](/lesson/docs/core/expressions) for details on expressions.

Hooks are very powerful as you can write any needed code, but you need to be careful on the choice of the hook to put your logic in.
The choice depends on the nature of the considered business logic:

- object definition and right-related logic,
- data manipulation logic,
- data preparation logic,
- etc.

> **Note**:
>
> Some of the examples below are only given using the **Rhino** scripting language.
> In such Rhino scripts the `this` variable correspond to the business object itself,
> it must be **explicitly** used (it can't be implicit like in Java code).
>
> The **Rhino**-only code examples can easily be transposed to equivalent **Java** code.
> Some examples are provided both in Rhino and Java so as you can see the syntax differences.
>
> Apart from the variable and methods declarations syntax, the main point of attention is regarding comparisons syntax for **non raw types**:
>
> - Rhino: `a == b`, Java: `a.equals(b)`
> - Rhino: `a != b`, Java: `!a.equals(b)`

Some very common and useful code examples are given in the [basic code examples](/lesson/docs/core/basic-code-examples) document.
<!-- and some more unusual examples are given [advanced code examples](/lesson/docs/core/advanced-code-examples) document.-->

<h2 id="definitionhooks">Object definition and right-related hooks</h2>

<h3 id="postload">Post load hook</h3>

The `postLoad` hook is called **once** when the object definition is loaded.
It can therefore be used to modify the **static** object definition.

By static we mean the definition settings that will remain the same all along
the user session (i.e. not the dynamic ones that may be updated in other hooks)

For instance it can be used to:

- Add a filtering search spec based on the user's rights
- Change default field behaviour (visibility, updatability, ...) depending on user's rights or depending on the instance
  name (e.g. the instance used by webservices - name is prefixed by `api_` - may hide or make non updatable one field
  which is visible or updatble to UI users)

> **Warning**: you should **never** trigger an object loading within a `postLoad`, this may result in an uncatchable stack overflow **fatal** error for your instance

Example:

**Java**

```java
@Override
public void postLoad() {
	// In this example we set a restrictive search spec on object (to validated records only) if the user is in a specified group
	if (getGrant().hasResponsibility("MYGROUP")
		setDefaultSearchSpec(getStatusField().getColumn() + " = 'VALIDATED'");
}
```

**Rhino**

```javascript
MyObject.postLoad= function() {
	// In this example we set a restrictive search spec on object (to validated records only) if the user is in a specified group
	if (this.getGrant().hasResponsibility("MYGROUP")
		this.setDefaultSearchSpec(this.getStatusField().getColumn() + " = 'VALIDATED'");
};
```

<h3 id="isopencreatecopyupdatedeleteenable">Access rights enabling/disabling hooks</h3>

The `isOpenEnable`, `isCreateEnable`, `isCopyEnable`, `isUpdateEnable` and `isDeleteEnable` hooks
allow to dynamically enable/disable open, create, copy, update, delete rights on the object.

They are called for each record (except for `isCreateEnable`). The `row` parameter passed to these hooks is the
current record for which the hook is called.  

These hooks do not allow to override the granted rights of the users,
they just allow to **restrict** these rights depending on more complex business rules.

Example:

**Java**

```java
@Override
public boolean isCreateEnable() {
	// In this example we check the status of parent object to allow/disallow creation  
	var p = getParentObject();
	if (p != null && "MyParentObject".equals(p.getName()))
		return "VALIDATED".equals(p.getStatus());
	return true;
}

@Override
public boolean isUpdateEnable(String[] row) {
	// In this example update is allowed if a specified field has a true value  
	return Tool.isTrue(row[getFieldIndex("objField1")]);
}

@Override
public boolean isDeleteEnable(String[] row) {
	// In this example we apply the same rule as for update
	return isUpdateEnable(row);
}
```

**Rhino**

```javascript
MyObject.isCreateEnable = function() {  
	// In this example we check the status of parent object to allow/disallow creation  
	var p = this.getParentObject();
	if (p && p.getName() == "MyParentObject")
		return p.getStatus() == "VALIDATED";
};

MyObject.isUpdateEnable = function(row) {
	// In this example update is allowed if a specified field has a true value  
	return Tool.isTrue(row[this.getFieldIndex("objField1")]);
};

MyObject.isDeleteEnable = function(row) {
	// In this example we apply the same rule as for update
	return this.isUpdateEnable(row);
};
```

<h3 id="isactionenable">Custom action processing right enabling/disabling hook</h3>

The `isActionEnable` hook has a similar use as above right hooks but for custom actions.

It can be called either globally (`row` is null in this case) for global actions or for each record.

As above, this hook does not allow to override the granted rights of the users on custom actions,
it just allow to **restrict** the right depending on more complex business rules.

Example:

**Java**

```java
@Override
public boolean isActionEnable(String[] row, String action) {
	// In this example the custom action is allowed depending on the value of a given object field
	if ("myCustomAction".equals(action))
		return Tool.isTrue(row[getFieldIndex("objField1")]);
	return true;
}
```

**Rhino**

```javascript
MyObject.isActionEnable(row, action) {
	// In this example the custom action is allowed depending on the value of a given object field
	if (action == "myCustomAction")
		return Tool.isTrue(row[this.getFieldIndex("objField1")]);
	return true; // Note: In Rhino this can be omitted as default return value is true
};
```

See [this document](/lesson/docs/core/custom-actions-examples) for details on how to implement custom actions.

<h3 id="isprintemplateenable">Publication processing right enabling/disabling hook</h3>

The `isPrintTemplateEnable` hook has a similar use as above right hooks but for publications.

Example:

**Java**

```java
@Override
public boolean isPrintTemplateEnable(String[] row, String printTemplateName) {
	// In this example the publication is allowed depending on the value of a given object field
	if ("myPrintTemplate".equals(printtmpl))
		return Tool.isTrue(row[getFieldIndex("objField1")]);
	return true; 
}
```

**Rhino**

```javascript
MyObject.isPrintTemplateEnable(row, printtmpl) {
	// In this example the publication is allowed depending on the value of a given object field
	if (printtmpl == "myPrintTemplate")
		return Tool.isTrue(row[this.getFieldIndex("objField1")]);
	return true; // Note: In Rhino this can be omitted as default return value is true
};
```

See [this document](/lesson/docs/core/publication-examples) for details on how to implement publications.

<h3 id="isstatetransitionenable">State transitions hook</h3>

The `isStateTransitionEnable` hook allows to dynamically enable/disable a state transition.

This hook is called when building the list of possible state transition. It may be useful to implement specific state transition condition rules.

Example:

**Java**

```java
@Override
public boolean isStateTransitionEnable(String fromStatus, String toStatus) {
	// In this example above the transition between `PENDING` state and `VALIDATED` statuses is dynamically allowed to users of `MYGROUP`:
	if ("PENDING".equals(fromStatus) && "VALIDATED".equals(toStatus))
		return getGrant().hasResponsibility("MYGROUP");
	return true;
}
```

**Rhino**

```javascript
MyObject.isStateTransitionEnable = function(fromStatus, toStatus) {
	// In this example above the transition between `PENDING` state and `VALIDATED` statuses is dynamically allowed to users of `MYGROUP`:
	if (fromStatus == "PENDING" && toStatus == "VALIDATED")
		return this.getGrant().hasResponsibility("MYGROUP");
	return true; // Note: In Rhino this can be omitted as default return value is true
};
```

<!--
#### Current states transition

The current transition can be tested during the save process on UI:

```javascript
MyObject.postSave = function() {
	var tran = this.getCurrentTransition();
	if (tran && tran.getName() == "Transition-A-B-1") {
		// do something
	}
	else if (tran && tran.getName() == "Transition-A-B-2") {
		// do something else
	}
};
```

Set the current transition to determine the callback in case of on several granted transitions from A to B:

```javascript
MyObject.foo = function() {
	// save a transition from A to B
	if (this.getFieldValue("myStatus") == "A") {
		this.setFieldValue("myStatus", "B");
		// Use the callback of transition-A-B-2 (and not transition-A-B-1)
		this.setCurrentTransition("Transition-A-B-2");
		this.save();
	}
}
```

If the granted transition from A to B is unique, the current transition is not required,
by default Simplicite will use the first granted transition from A to B.
-->

<h3 id="canreference">Panel objects hook</h3>

The `canReference` hook allows to show/hide linked objects' panels based on custom business rules.

Example:

**Java**

```java
@Override
public boolean canReference(String objectName, String fieldName) {
	// In this example the MyPanelObject's panel is shown only if the user does not belong to MYGROUP
	return ("MyPanelObject".equals(objectName) && !getGrant().hasResponsibility("MYGROUP"));	
}
```

**Rhino**

```javascript
MyObject.canReference = function(objectName, fieldName) {
	// In this example the MyPanelObject's panel is shown only if the user does not belong to MYGROUP
	return (objectName == "MyPanelObject" && !this.getGrant().hasResponsibility("MYGROUP"));	
};
```

<h3 id="canupdateall">Bulk update hook</h3>

The `canUpdateAll` hook allows to dynamically enable/disable the bulk update feature.

Example:

**Java**

```java
@Override
public boolean canUpdateAll(ObjectField fieldName) {
	// In this example, the bulk update feature is allowed to users who does not belong to MYGROUP
	return (!getGrant().hasResponsibility("MYGROUP"));
}
```

**Rhino**

```javascript
MyObject.canUpdateAll = function(fieldName) {
	// In this example, the bulk update feature is allowed to users who does not belong to MYGROUP
	return (!this.getGrant().hasResponsibility("MYGROUP"));
};
```

<h3 id="ishistoric">Data history hook</h3>

The `isHistoric` hook allows to dynamically restrict the standard historization. By default, this method return true when the business object has been designed with the historic property.
Above, the data bulk update is allowed to user who does not belong to MYGROUP.  

Example:

**Java**

```java
@Override
public boolean isHistoric() {
	// In this example an historization is done only when the object's status had changed
	return !getStatus().equals(getOldStatus());
}
```

**Rhino**

```javascript
MyObject.isHistoric = function() {
	// In this example an historization is done only when the object's status had changed
	return this.getStatus() != this.getOldStatus();
};
```

<h2 id="datapreparationhooks">Data preparation hooks</h2>

These data preparation hooks are Object UI-oriented hooks because they are called before displaying a page for read or write (create, update, delete) of an object item.

- `initCreate` before displaying a create form
- `initCopy` before displaying a copy form
- `initUpdate` before displaying an update form
- `initDelete` before displaying a deletion confirm dialog
- `initAction` before displaying a action confirm dialog

These hooks are useful for dynamically changing the behavior of an object in a particular use context
(e.g. changing one field as updatable depending on the value of another field, forcing a default field values at creation, etc.).

<h3 id="initcreatcopyupdatedelete">Create, copy, update and delete preparation hooks</h3>

The `initCreate`, `initCopy`, `initUpdate` and `initDelete` hooks are called each time you open a form to create, copy, update or delete.

They allow to define the properties of attributes, hide, initialize them, put them in read-only, etc. just before the form is displayed.

Examples:

**Java**

```java
@Override
public void initCreate() {
	getField("objField1").setUpdatable(true);
	getField("objField2").setUpdatable(getGrant().hasResponsibility("MYGROUP"));
}

@Override
public void initUpdate() {
	String s = getStatus();
	getField("objField1").setUpdatable("PENDING".equals(s) || "VALIDATED".equals(s));	
}

@Override
public void initDelete() {
	initUpdate();
}
```

**Rhino**

```javascript
MyObject.initCreate = function() {
	this.getField("objField1").setUpdatable(true);
	this.getField("objField2").setUpdatable(this.getGrant().hasResponsibility("MYGROUP"));
};

MyObject.initUpdate = function() {
	var s = this.getStatus();
	this.getField("objField1").setUpdatable(s == "PENDING" || s == "VALIDATED");	
};

MyObject.initCopy = function() {
	this.initUpdate();
};
```

<h3 id="initlist">List preparation hook</h3>

The `initList` hook is called each time a list is displayed.

It allows to define the properties of attributes, hide, initialize them, put them in read-only, etc. just before the list is displayed.

Example:

**Java**

```java
@Override
public void initList(ObjectDB parent) {
	getField("objField1").setUpdatable(true);
	getField("objField2").setUpdatable(false);
}
```

**Rhino**

```javascript
MyObject.initList = function(parent) {
	this.getField("objField1").setUpdatable(true);
	this.getField("objField2").setUpdatable(false);
};
```

<h3 id="initsearch">Search preparation hook</h3>

The `initSearch` hook is called before a search form is displayed.

It allows to set field filters for example, etc. just before the search page is displayed.

Example:

**Java**

```java
@Override
public void initSearch() {
	getField("objField1").setFilter("is null or <1000");
	getField("objLogin").setFilter(getGrant().getLogin());	
}
```

**Rhino**

```javascript
MyObject.initSearch = function() {
	this.getField("objField1").setFilter("is null or <1000");
	this.getField("objLogin").setFilter(this.getGrant().getLogin());	
};
```

<h3 id="initrefselect">Reference lookup preparation hook</h3>

The `initRefSelect` hook is called before a reference lookup popup is displayed.

It allows to set field filters or search-spec just before the popup page is displayed:
- the parent object is set to get contextual information
- `this.getParentObjectRefField`: useful to know from which foreign key the list is called from UI
- `parent.getOldValue`: contains DB value of parent field
- `parent.getValue`: contains UI current value of parent field
- useful to filter reference pickers with current parent data

Example:

**Java**

```java
@Override
public void initRefSelect(ObjectDB parent) {
	if (parent!=null
	&& "MyParentObject".equals(parent.getName()) // one parent context
	&& "myForeignKey".equals(getParentObjectRefField())) // thru one foreign key
	{
		// DB value of a parent field
		String dbValue = parent.getOldValue("myParentField1");
		// current UI value of a parent field (available since 5.3)
		String uiValue = parent.getValue("myParentField1");
		// set a filter to search records without parent or matching with parent DB or current UI value
		getField("objField1").setFilter("is null or ='+Tool.toSQL(uiValue)+' or ='+Tool.toSQL(dbValue)+'");
	}
}
```

The `initDataMapSelect` hook has the same behavior to get referenced data by values.


<h3 id="initaction">Action preparation hooks</h3>

When action has confirm fields this hook allows to prepare them before rendering.

Exemple:

**Java**

```java
@Override
public void initAction(Action action) {
	ObjectField f = action.getConfirmField(getGrant().getLang(), "myFieldName");
	f.setDefaultValue("aValue");
	f.setRequired(true);
}
```

**Rhino**

```javascript
MyObject.initAction = function(action) {
	var f = action.getConfirmField(this.getGrant().getLang(), "myFieldName");
	f.setDefaultValue("aValue");
	f.setRequired(true);
};
```

<h3 id="otherinit">Other preparation hooks</h3>

The `initExport`, `initCrosstab`, `initGraph`, `initAgenda`, `initPrintTemplate` hooks are called before
displaying the result of an export, a pivot table, a chart, an agenda, a publication.

They allow to define field filters for example, field values, etc. just before the result is displayed.


<h2 id="dataprocessinghooks">Data processing hooks</h2>

<h3 id="prepostvalidatehooks">Pre and post validation hooks</h3>

These `preValidate` and `postValidate` hooks are called before and after the generic data validation
is made by the engine.  

The generic validation is made before saving a record (creation or update). It only checks the
compliance of submitted date in regards to the object definition (e.g. it checks the type of the fileds, checks
value of the mandatory fields, apply regular expression checks, ...).  

If you have some additional validation logic to add to your business object, such as setting a mandatory
field default value before validation or checking a validated value against a more advance business logic
(e.g. check that an order quantity is higher than a previously ordered quantity).  

Information, warning and/or error messages may be returned (only one message or several).  
Only error message(s) prevents the actual saving of the record.  

Examples:

**Java**

```java
@Override
public List<String> preValidate() {
	List<String> msgs = new ArrayList<String>();

	msgs.add(Message.formatError("ERR_TEST0")); // Global error message
	msgs.add(Message.formatInfo("ERR_TEST1", null, "objField1")); // Field error message
	msgs.add(Message.formatWarning("WRN_TEST1", null, "objField2")); // Field warning message

	return msgs; // Return a list of messages
}

@Override
public List<String> postValidate() {
	if (isNew())
		getField("objField1").setValue(getFieldValue("objField2"));

	return null; // No message
}
```

**Rhino**

```javascript
MyObject.preValidate = function() {
	var msgs = new ArrayList();

	msgs.add(Message.formatError("ERR_TEST0")); // Global error message
	msgs.add(Message.formatInfo("ERR_TEST1", null, "objField1")); // Field error message
	msgs.add(Message.formatWarning("WRN_TEST1", null, "objField2")); // Field warning message

	return msgs; // Return a list of messages
};

MyObject.postValidate = function() {

	if (this.isNew())
		this.getField("objField1").setValue(this.getFieldValue("objField2"));

	// No message (in Rhino return statement can be omitted)
};
```

In the above example, the error messages code (`ERR_TEST`) corresponds to a static text
configured in the `TEXT` list.

Note that `pre/postValidate` hooks implemented in **Rhino** can also return only a single message instead of a list like in the above examples:

```javascript
MyObject.preValidate = function() {
	if (this.getField("objQuantity").getInt(0) <= 0)
		return Message.formatError("ERR_TEST", null, "objQuantity");
};
```

<h3 id="prepostselecthooks">Pre and post selection hooks</h3>

The `preSelect` and `postSelect` hooks are called before/after selecting the object data (in a list they are called for each list items). 

They can be used to implement some business rules to set some field values for example.  

Example:
**Java**

```java
@Override
public void preSelect(String rowId, boolean copy) {
	// If the data is selected for a copy set a field with particular value 
	if (copy)
		getField("objField1").setValue("value");
	super.preSelect(rowId, copy);
}
```

**Rhino**
```javascript
MyObject.preSelect = function(rowId, copy) {
	// If the data is selected for a copy set a field with particular value 
	if (copy)
		this.getField("objField1").setValue("value");
};
```

<h3 id="prepostcreateundatedeletehooks">Pre and post creation, update, deletion hooks</h3>

The `preCreate`, `preUpdate`, `preDelete`, `postCreate`, `postUpdate`, `postDelete` hooks are called before/after creating, updating, deleting the object data.

The `preSave` hook is called just after the `preCreate` or `preUpdate` hooks (see below).

The `postSave` hook is called just after the `postCreate` or `postUpdate` hooks (se below).

These hooks can be used to implement some business rules to set some field values (that needs to be done after validation)
or just to prevent saving in some particular cases, etc.

In case of creation, the technical row_id field is not yet set (this is actually done in the create() core method).
The default value for row id is 0 at this step.

The pre delete hook is called before deletion. No validation is processed before deletion. Pre and post save are not executed either in this case.

Pre delete hook can be used to implement some business logic to allow or prevent saving in some particular cases, etc.
When it returns a non null single error code, no actual deletion is done.

Post delete hook can be used to implement some business rules after the object is actually deleted.

> **Note**: Cascade deletion of child object is not supposed to be coded as this behavior is configurable at link level.

Example 1:
**Java**

```Java
@Override
	public String preCreate() {
		// Get a system param sequence next value
		this.setFieldValue("objRefField", "REF"+this.getGrant().getNextSystemParamValue("MYSEQUENCEPARAM"));
		return super.preCreate();
	}
```

**Rhino**
```javascript
MyObject.preCreate = function() {	
	// Get a system param sequence next value
	this.setFieldValue("objRefField", "REF"+this.getGrant().getNextSystemParamValue("MYSEQUENCEPARAM")); 	
};
```

> **Note**: for this simple case, the same result could be obtained using te following default value expression of the `objRefField` field:
> `[EXPR:"REF"+[GRANT].getNextSystemParamValue("MYSEQUENCEPARAM")]`

Example 2:

**Java**

```Java
@Override
	public String preCreate() {
		// Generate a unique number use as an id. For example an Order number for a Client.
		ObjectField client = this.getField("orderClientId");  // foreign key
		ObjectField number = this.getField("orderNumber");
		String n = this.getGrant().getNextValueForColumnWhere(this.getTable(), number.getColumn(), client.getColumn()+" = "+client.getValue());
		number.setValue(n); 	
		return super.preCreate();
	}
```

**Rhino**
```javascript
MyOrder.preCreate = function() {	
	// Generate a unique number use as an id. For example an Order number for a Client.
	var client = this.getField("orderClientId");  // foreign key
	var number = this.getField("orderNumber");
	var n = this.getGrant().getNextValueForColumnWhere(this.getTable(), number.getColumn(), client.getColumn()+" = "+client.getValue());
	number.setValue(n); 	
};
```

> **Note**: to generate unique codes based on the **row ID** the right approach is to configure a default value expression on your field with an expression like
> `[EXPR:Tool.format("ABC-%05d", Long.valueOf([ROWID]))]` (in this example the field gets `ABC-00123` as value at the creation of a record with row ID `123`)

<h3 id="prepostsavehooks">Pre and post save hooks</h3>

The `preSave` and `postSave` hooks are called before/after saving the object data.

In all cases, the `preSave` hook is called after a `preUpdate` or a `preCreate` hook.

In all cases, the `postSave` hook is called after a `postUpdate` or `postCreate` hook.

These hooks can be used to implement some business rules to set some field values (that needs to be done after validation)
or just to prevent saving in some particular cases, etc.  

Example:

**Java**

```Java
@Override
public String postSave() {
	// Update a data of a linked object after
	if (getOldStatus() == "VALIDATED" && getStatus() == "DELIVERED") {
		ObjectDB obj = getGrant().getTmpObject("MyLinkedObject");
		synchronized(obj){
			obj.getLock();
			obj.select(getField("objMyLinkedObjectMyObjectId").getValue());
			obj.getField("otherObjField1").setValue("value");
			try {
				new BusinessObjectTool(obj)/* or obj.getTool() in version 5+ */.validateAndSave();
			} catch (SaveException|ValidateException e) {
				AppLog.error(e, getGrant());
			}
			
		}
		
	}
	return super.postSave();
}
```

**Rhino**

```javascript
MyObject.postSave = function() {
	// Update a data of a linked object after
	if (this.getOldStatus() == "VALIDATED" && this.getStatus() == "DELIVERED") {
		var obj = this.getGrant().getTmpObject("MyLinkedObject");
		obj.select(this.getField("objMyLinkedObjectMyObjectId").getValue());
		obj.getField("otherObjField1").setValue("value");
		try {
			new BusinessObjectTool(obj)/* or obj.getTool() in version 5+ */.validateAndSave();
		} catch(e) {
			console.error(e.javaException ? e.javaException.getMessage() : e);
		}
	}
};
```

`postSave`, `postCreate` and `postUpdate` can also return a redirect or a javascript statement.
The javascript override the default behavior and have to reload the form or redirect somewhere.

```java
// Goto this form instead of reloading the current object
String url = HTMLTool.getFormURL("User", null, "1", "nav=add");
return HTMLTool.redirectStatement(url);
```

or

```java
String js = 
	// Redirect after a given transition
	"if (action=="MyTransition-WAIT-DONE") {" +
		"$ui.info('Transition done!');" +
		"$ui.displayList(null, object, { nav:'new' });" +
	"} else {" +
		// reload the form
		"$ui.displayForm(null, object, object.getRowId(), { nav:'add' });" +
	"}";
return HTMLTool.javascriptStatement(js);
```


<h3 id="prepostsearchhooks">Pre and post search hooks</h3>

The `preSearch` and `postSearch` hooks are called before/after searching the object data: before/after the search core method is called.  

Pre search hook is called to add specific filters or order the result: list, pivot table, graph, publication or export.  

Post search hook is called after search to add specific code for instance to evaluate simple calculated fields, reorder or remove records.

Examples:
**Java**

```Java
@Override
public void preSearch() {
	getField("objField1").setFilter("is null or <1000");
	getField("objField2").setOrder(1);
	getField("objField3").setOrder(-2);
	super.preSearch();
}
@Override
public List<String[]> postSearch(List<String[]> rows) {
	int fieldIndex = getFieldIndex("objField1");
	int i=0;
	for(String[] row: rows){
		row[i] = "Value #" + i;	
		i++;
	}
	return super.postSearch(rows);
	
}
```
```javascript
MyObject.preSearch = function() {
	this.getField("objField1").setFilter("is null or <1000");
	this.getField("objField2").setOrder(1);
	this.getField("objField3").setOrder(-2);
};

MyObject.postSearch = function(rows) {
	var fieldIndex = this.getFieldIndex("objField1");
	for (var i = 0; rows && i < rows.size(); i++) {
		var row = rows.get(i);
		row[i] = "Value #" + i;		
	}
	return rows;
};
```

### Post deletion with message or redirect statement

The `postDelete` and `postDeleteAll` hooks can return a redirect statement.

```java
@Override
public String postDeleteAll() {
	String url = HTMLTool.getFormURL("User", null, "1", "nav=add");
	return HTMLTool.redirectStatement(url);
}

@Override
public String postDelete() {
	String url = HTMLTool.getFormURL("User", null, "1", "nav=add");
	return HTMLTool.redirectStatement(url);
}
```

<h3 id="prepostupdatealldeleteallhooks">Pre and post bulk update and bulk delete hooks</h3>

The `preUpdateAll`, `postUpdateAll`, `preDeleteAll` and `postDeleteAll` hooks are called before/after a data bulk update or bulk delete.

These hooks are called to add specific behaviors before/after a bulk update/delete.

Example:

**Java**:

```java
@Override
public String preUpdateAll(Parameters params) {
	if (params!=null) {
		// Check values
		if ("123".equals(params.getParameter("objField1")))
			return Message.formatError("ERR_TEST", null, "objField1");
		// force values for each record
		params.setParameter("objField2", "forced value");
		params.setParameter("objDate3", Tool.getCurrentDate());
	}
	return super.preUpdateAll(params);
};
```

**Rhino**

```javascript
MyObject.preUpdateAll = function(params) {
	if (params!=null) {
		// Check values
		if (params.getParameter("objField1") == "123")
			return Message.formatError("ERR_TEST", null, "objField1");
		// force values for each record
		params.setParameter("objField2", "forced value");
		params.setParameter("objDate3", Tool.getCurrentDate());
	}
};
```

<h3 id="importhooks">Import hooks</h3>

The `preImport` and `postImport` hooks are called before/after a data is imported.

These hooks are called to add specific behaviors before/after an import.

Examples:
**Java**

```Java
@Override
	public String preImport() {
		if (getFieldValue("objField1").equals("value 1")) {
			setFieldValue("objField2", "value 2");
			setFieldValue("objField3", "value 3");
		}
		return super.preImport();
	}
	@Override
	public String postImport() {
		// Send an alert if a null value is imported 
		Alert a = getAlert("MYALERT", Alert.TYPE_INFO);
		if (!Tool.isEmpty(a) && getField("objField1").isEmpty())
			a.send(this);	
		return super.postImport();
	}
```

**Rhino**

```javascript
MyObject.preImport = function() {
	if (this.getFieldValue("objField1") == "value 1") {
		this.setFieldValue("objField2", "value 2");
		this.setFieldValue("objField3", "value 3");
	}	
};

MyObject.postImport = function() {
	// Send an alert if a value is imported 
	var a = this.getAlert("MYALERT", Alert.TYPE_INFO);
	if (a && this.getField("objField1").isEmpty())
		a.send(this);	
};
```

<h3 id="exporthooks">Export hooks</h3>

The `isExportAllowed` hook is called before exporting data to deny or confirm the export.

- returns a warning: ask the user to export the data
- returns an error: do not export data with a message
- returns null: export is allowed

Examples:

**Java**

```java
@Override
public String isExportAllowed(String mode, String media, String rowId) {
	// List export by a non-admin user
	if (rowId==null && !getGrant().hasResponsibility("ONE_ADMIN_GROUP")) {
		long max = 5000;
		List<String> ids = canSelectRow() ? getSelectedIds() : null;
		long n = ids==null ? getCount() : ids.size();
		if (n > max)
			return Message.formatSimpleError("Too many records to export:" + n + " (limited to "+max+")");
		if (n > max/5)
			return Message.formatSimpleWarning("Are you sure to export "+n+" records?");
	}
	return null; // ok
}
```

The `preExport` and `postExport` hooks are called before/after data export.

- `preExport`: to force some field filters
- `postExport`: to change some values, remove or add records.

Examples:

**Java**

```java
@Override
public void preExport() {
	if (getGrant().hasResponsibility("ONE_GROUP"))
		setFieldFilter("objField", "Public");
}

@Override
public List<String[]> postExport(List<String[]> rows) {
	if (rows!=null && getGrant().hasResponsibility("ONE_GROUP")) {
		int i = getFieldIndex("objField");
		for (String[] row : rows)
			row[i] = "forced value";
	}
	return rows;
}
```

The `getExportFileName` hook is called to force the exported filename on client side.

Examples:

**Java**

```java
@Override
public String getExportFileName(String type, String name, String row[]) {
	if ("PDF".equals(type) && row!=null)
		return "pdf-" + getFieldValue("objField") + "-" + Tool.getCurrentDate();
	// default based on display or user-key label
	return super.getExportFileName(type, name, row);
}
```

<h3 id="prepostalerthooks">Pre and post alerts hooks</h3>

The `preAlert` and `postAlert` hooks are called before/after the alert is sending.  

The `preAlert` hook can be used to change the alert just before sending (change the core message and/or add specific recipients).

Example:
**Java**

```Java
@Override
public String preAlert(Alert a) {
	if (a!=null) {
		a.setSubject("ENU", "Dear [bill_last_name]");
		a.setContent("ENU", "Your bill of [bill_amount] ...");
		a.addRecipient("john@domain.com", Alert.RECIP_TO);
		a.addRecipient(getGrant().getEmail(), Alert.RECIP_CC);
	}
	return super.preAlert(a);
}
```

**Rhino**
```javascript
MyObject.preAlert = function(alert) {
	if (alert!=null) {
		alert.setSubject("ENU", "Dear [bill_last_name]");
		alert.setContent("ENU", "Your bill of [bill_amount] ...");
		alert.addRecipient("john@domain.com", Alert.RECIP_TO);
		alert.addRecipient(getGrant().getEmail(), Alert.RECIP_CC);
	}
};
```

The `postAlert` hook can be used to implement some business logic just after sending.

Example:

**Java**

```Java
@Override
public String postAlert(Alert a) {
	getField("objField4").setValue("Mail sent !");
	return super.postAlert(a);
}
```

**Rhino**
```javascript
MyObject.postAlert = function(alert) {
	this.getField("objField4").setValue("Mail sent !");
};
```

<h4 id="sendalert">Send alert with custom attachments</h4>

It is possible to send one alert from any other hook and to add specific attachments:

**Java**

```Java
@Override
public String postSave() {
	Grant g = getGrant();
	// Get the alert definition (with subject, body, recipients... or null if the alert is disabled)
	Alert alert = getAlert("MyAlert", Alert.TYPE_INFO);
	if (!Tool.isEmpty(alert)) {
		// Add attachments from a child object with a document field
		List<DocumentDB> att = new ArrayList();
		ObjectDB a = g.getTmpObject("MyObjectAttachment");
		synchronized(a){
			a.getLock();
			a.resetFilters();
			a.setFieldFilter("MyObject_FK", getRowId());
			for (String[] row : a.search()) {
				a.setValues(row);
				DocumentDB doc = a.getField("MyDocField").getDocument(g);
				if (!Tool.isEmpty(doc)) {
					AppLog.info("debug attach: "+doc.toString(), g);
					att.add(doc);
				}
			}
		}
		
		// Send with custom attachments
		alert.send(this, att);
	}
	return super.postSave();
}
```

**Rhino**

```javascript
MyObject.postSave = function() {
	var g = this.getGrant();
	// Get the alert definition (with subject, body, recipients... or null if the alert is disabled)
	var alert = this.getAlert("MyAlert", Alert.TYPE_INFO);
	if (alert) {
		// Add attachments from a child object with a document field
		var i, doc, list, att = new ArrayList();
		var a = g.getTmpObject("MyObjectAttachment");
		a.resetFilters();
		a.setFieldFilter("MyObject_FK", this.getRowId());
		list = a.search();
		for (i=0; i<list.size(); i++) {
			a.setValues(list.get(i));
			doc = a.getField("MyDocField").getDocument(g);
			if (doc) {
				console.log("debug attach: "+doc.toString());
				att.add(doc);
			}
		}
		// Send with custom attachments
		alert.send(this, att);
	}
}
```

<h3 id="predefinedsearchhooks">Predefined searches hooks</h3>

It is possible to add code during the predefined search creation:

- `preSavePredefinedSearch`: useful to prevent creation or update, or change filters before save
- `postSavePredefinedSearch`: for cascading operations
- `getPredefinedSearches`: override predefined searches accessibility
**Java**
```Java
@Override
	public String preSavePredefinedSearch(PredefinedSearch ps) {
		// stop creation
		if (ps.getId() == "0" && ps.getName("0")=="something reserved")
			return "ERROR";
		return null; // ok
	}
	@Override
	public List<PredefinedSearch> getPredefinedSearches() {
		// all public + privates
		List<PredefinedSearch> list = getGrant().getPredefinedSearch("MyObject");
		int i =0;
		for (PredefinedSearch ps: list) {
			// remove ungranted searches
			if (ps.getName(ps.getId())=="something reserved") {
				list.remove(i);
			}else{
				i++;
			}
		}
		return list;
	}
```

**Rhino**
```javascript
MyObject.preSavePredefinedSearch = function(ps) {
	// stop creation
	if (ps.getId() == "0" && ps.getName()=="something reserved")
		return "ERROR";
	return null; // ok
};
MyObject.getPredefinedSearches() {
	// all public + privates
	var list = this.getGrant().getPredefinedSearch("MyObject");
	for (var i=0; list && i<list.size(); i++) {
		var ps = list.get(i);
		// remove ungranted searches
		if (ps.getName()=="something reserved") {
			list.remove(i);
			i--;
		}
	}
	return list;
};
```


<h2 id="otherhooks">Other hooks</h2>

<h3 id="shortlabelhook">Short label hook</h3>

The `getUserKeyLabel` hook can be used to override a business object record's default "short" label (the one which is displayed on form titles, on indexed search results, on treeviews, ...)

Example:

**Java**:

```java
@Override
public String getUserKeyLabel(String[] row) {
	if (this.isTreeviewInstance()) // On treeviews
		return getFieldValue("myFirstLabelField", row) + " - " + getFieldValue("mySecondLabelField", row);
	else // Elsewhere
		return getFieldValue("myThirdLabelField", row);
}
```

**Rhino**:

```javascript
MyObject.getUserKeyLabel = function(row) {
	if (this.isTreeviewInstance()) // On treviews
		return row[this.getFieldIndex("myFirstLabelField")] + " - " + row[this.getFieldIndex("mySecondLabelField");
	else if (!row) // On forms
		return this.getFieldValue("myFormLabelField");
	else // On lists
		return row[this.getFieldIndex("myListLabelField")];
}
```

<h3 id="stylehook">Style hook</h3>

It is possible to set style (for instance a CSS class) on a field based on business logic:

**Java**

```Java
@Override
public String getStyle(ObjectField f, String[] row) {
	String style;
	if (f.getName().equals("myField"))
		style = this.getFieldValue("myOtherField").equals("V1") ? "greenbg" : "redbg";
	return style;
}
```

**Rhino**:

```javascript
MyObject.getStyle = function(f, row) {
	if (f.getName() == "myField")
		return this.getFieldValue("myOtherField") == "V1" ? "greenbg" : "redbg";
};
```

**Java** (a more complex example):

```java
@Override
public String getStyle(ObjectField field, String[] row) {
	// style on myFieldDate1
	if (field!=null && row!=null && field.getName().equals("myFieldDate1")) {
		String d1 = row[getFieldIndex("myFieldDate1")];
		String today = Tool.getCurrentDate();
		if (!Tool.isEmpty(d1) && Tool.diffMonth(today, d1) <= 3) {
			// CSS class name added to control (already defined or to define in resource STYLES)
			return "redbg"; // default red background
		}
	}
	// default style
	return super.getStyle(field, row);
}
```

<h3 id="helphooks">Help hooks</h3>

As of version `3.2 MAINTENANCE06` the `getHelp` and `getCtxHelp` hooks can be use to dynamically create/update main help and contextual helps:

**Rhino**

```javascript
MyObject.getHelp = function() {
	if (this.getGrant().hasResponsibility("MYGROUP"))
		return "This is a custom main help";
};
MyObject.getCtxHelp = function(ctx) {
	if (this.getGrant().hasResponsibility("MYGROUP") && ctx == ObjectCtxHelp.CTXHELP_UPDATE)
		return "This is a custom contextual help";
};
```

**Java**

```javascript
@Override
public String getHelp() {
	if (getGrant().hasResponsibility("MYGROUP"))
		return "This is a custom main help";
	return super.getHelp();
};
@Override
public String getCtxHelp(String context) {
	if (getGrant().hasResponsibility("MYGROUP") && ObjectCtxHelp.CTXHELP_UPDATE.equals(ctx))
		return "This is a custom contextual help";
	return super.getCtxHelp(ctx);
};
```

<h3 id="usinghistory">Using history</h3>

If a `MyObject` business object is historized, there is an additional business object names `MyObjectHistoric` that stores the values of each record.

A new record is created each time one of the common fields of `MyObject` and `MyObjectHistoric` is changed.

To access the historic records of a given record you can use:

```javascript
var h = this.getGrant().getTmpObject(this.getHistoricName()); // Get historic object
h.resetFilters();
h.getField("row_ref_id").setFilter(this.getRowId()); // Filter on current row ID
h.getField("row_idx").setOrder(-1); // Reverse order on history index
h.search(false);
(...)
```
 
<h3 id="redirections">Redirection</h3>
 
It is possible to open a given "abstract" father object (e.g. `Vegetable`) record
as its corresponding specialized child object (e.g. `Carrot` or `Cabbage`) record by implementing a father-child redirect hook.
 
Example:

Java 

```java
@Override
public String[] getTargetObject(String rowId, String[] row) {
	if (isCopied())
		rowId = getCopyId(); // Propagate the copy Id (not "0")
	else if (rowId.equals(ObjectField.DEFAULT_ROW_ID))
		return null; // No redirection at creation
	if (row==null && select(rowId))
		row = getValues();
	String target = null;
	if (row!=null) {
		String type = getFieldValue("vegetableType"), row);
		if (type.equals("CARROT"))
			target = "Carrot";
		else if (type.equals("CABBAGE"))
			target = "Cabbage";
	}
	if (target==null)
		return null; // Unknown type, no redirection

	return new String[] { target, "the_ajax_" + target, rowId };
};
```

Rhino javascript

```javascript
Vegetable.getTargetObject = function(rowId, row) {
	if (this.isCopied())
		rowId = getCopyId(); // Propagate the copy Id (not "0")
	else if (rowId.equals(ObjectField.DEFAULT_ROW_ID))
		return null; // No redirection at creation
	if (!row && this.select(rowId))
		row = this.getValues();
	var target = null;
	if (row) {
		var type = row[this.getFieldIndex("vegetableType")];
		if (type=="CARROT")
			target = "Carrot";
		else if (type=="CABBAGE")
			target = "Cabbage";
	}
	if (!target)
		return null; // Unknown type, no redirection
		
	var t = ScriptInterpreter.getStringArray(3);
	t[0] = target; // target object
	t[1] = "the_ajax_" + target; // main target instance
	t[2] = rowId; // target row Id (same in this inheritance case)
	return t;
};
```

This mechanism can also be used to do redirection between objects that don't have a father-child relationship.


<!-- TO BE COMPLETED -->

<h2 id="inheritance">Inheritance</h2>

Let's say you have a `MyChildObject` that inherits from `MyFatherObject` you can call the hooks of the father object's code
from the child object's code by using the `MyFatherObject.<hook name>.call(this, <hook arguments>)` syntax (the `.call(this, ` part
make the call to be done for the child object's scope).

Example:

```javascript
MyChildObject.postCreate = function() {
	MyFatherObject.postCreate.call(this); // Call parent object hook
	// Do something specific to the child object
}
```