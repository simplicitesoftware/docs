Creating a field
====================

Concepts
---------------------------

If the object has a form, the attribute will be a field of this form. The configuration of the attribute allows to determine if it is mandatory or not, its type (text, number, single or multiple enumerated) etc.

Just like a business object, the field has a logical and physical name. The logical name identifies the attribute in the business rules, in the code and will follow the same syntactical conventions as Java variables. The physical name will be used to create a column in the business object's table. A field might not have a physical name, it's the case for non persisted calculated fields.

We will now introduce you to a fundamental aspect of the metamodel: the **object field**. One field can be used on several objects: a "comment" field, for instance, can be used on the 300 objects of the app. If the size of this field needs to be increased, to allow the input of longer comments, it can be done by changing the parameters of one single attribute, instead of changing the 300 comment fields of our 300 business objects. Furthermore, a field doesn't have to be linked to an object (storage field for a planned task, process filed, etc). In the metamodel this concept is represented by a **N/N link between the field and the business object** therefore introducing a link object. In Simplicité, the link object between a business object and a field is called **object field**. The object field object allows to **override** the parameters of the attribute (mandatory, translation, etc).

When a field is linked to an object via an object field, Simplicité will create a column in the business object's table.

Configuration tool : template editor
---------------------------

The template editor is a tool that facilitates the creation, modification and templating of the following objects:
- object template : HTML template that defines the display of an object (columns, tabs, etc)
- field areas : they regroup object fields. These groups are also visible in the list view of the object.
- fields
- enumerations (single and multiple) : list of values for the field

<div class="warning">If no template has been defined. The "Base" template will be used by default. The object fields will be positioned one underneath the other.</div>
In the template editor, all of the configuration objects have purposely been simplified. To configure them in deeper detail, you must access the form of the configuration object.

Exercise: Creating a field via the template editor
---------------------------

1. Via the modeler, right-click on the Supplier object.
2. Select the option "Template editor".
3. Since the object doesn't have a template yet, the platform will suggest a few models. Select the fist one.
4. On the template editor, move your mouse over the "+" button, and add a "Short text" "Field".