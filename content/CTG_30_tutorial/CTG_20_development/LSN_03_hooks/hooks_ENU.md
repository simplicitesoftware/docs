Object Hooks
====================

<div class="warning">In this lesson, it is necessary to understand the basic concepts of Java: object-oriented programming, inheritance, overriding, etc.</div>

When an object is configured, it has a default behaviour based on the different elements and properties configured.

For example, if an attribute is mandatory:
- when preparing the form, it will be taken into account by the platform to transmit the information to the front-end
- when saving the object, a validation step checks the presence of a value for this attribute, returns an error and cancels the saving if there is none

It is conceivable that a webservice call is needed to find out whether the attribute is mandatory, in which case a constraint is no longer really appropriate as the code becomes too complex for an executed field.

It is for these cases that it is possible to extend the default behaviour of business objects. The default behaviour is coded in a Simplicité Java class called `ObjectDB`. All business objects inherit from this class, which provides a number of hooks that are executed at different points in the business object's lifecycle. By inheriting from this class and overriding the hooks, it becomes possible to modify the behaviour of the business object. The exhaustive list of hooks can be found in the javadoc, and here we present only the more common ones. *The possibilities are endless, and a thorough understanding of the hooks and the Java Simplicité API is an important part of success*.

Object scripts can be written in Java or JavaScript (which will be executed by Rhino, just like the executed fields), but **good practice is to use Java scripts** which include a compilation step and ensure that the syntax of the script is correct. *In advanced use cases that are not part of this tutorial, the use of Java gives access to all of the classic application development tools: step-by-step debugging, unit tests, development in a Java IDE, code quality analysis with Sonar etc.*.

Exercise
====================

Implement the following business rules

### The order quantity cannot be less than 0

To do so :
- create a Java script for the order
- add a `postValidate` hook (after the default validations, to add an additional validation), which returns an error if the quantity is negative
    - we use `getInt(0)` instead of `getValue()` to obtain an `int` with a default value equal to 0 instead of a `String` or an `Integer`, cf the JavaDoc de ObjectDB.getField(), ObjectField.getValue() and ObjectField.getInt()
    - we use Message.formatError() to provide Simplicité with an error message that will be interpreted to froward an error to the interface
    - the **Simplicité snippets**, available in the editor via the shortcut <kbd>Ctrl</kbd>+<kbd>Space</kbd>, provide ready to use templates

```
@Override
public List<String> postValidate() {
	List<String> msgs = new ArrayList<String>();
	if (getField("appOrdQuantity").getInt(0) <= 0){
		msgs.add(Message.formatError("APP_ERR_QUANTITY", null, "appOrdQuantity"));
	}
	return msgs;
}
```

- clear the cache (necessary after **creation** of a script, but not during subsequent modifications of the script), and check the implementation of the business rule

### The order quantity cannot exceed the stock of the product

Independently, code this second business rule. This time, it will not be necessary to clear the cache (modification of an existing script).

### Le code d'un fournisseur doit commencer par le trigramme "SUP"

Independently, code this third business rule. This time, it will not be necessary to clear the cache (modification of an existing script).
