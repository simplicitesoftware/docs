Fields
====================

### What is a Field ?

If the object has a form, the attribute will be a field of this form. The configuration of the attribute allows to determine if it is mandatory or not, its type (text, number, single or multiple enumerated) etc.

Just like a business object, the field has a logical and physical name. The logical name identifies the attribute in the business rules, in the code and will follow the same syntactical conventions as Java variables. The physical name will be used to create a column in the business object's table. A field might not have a physical name, it's the case for non persisted calculated fields.

We will now introduce you to a fundamental aspect of the metamodel: the **object field**. One field can be used on several objects: a "comment" field, for instance, can be used on the 300 objects of the app. If the size of this field needs to be increased, to allow the input of longer comments, it can be done by changing the parameters of one single attribute, instead of changing the 300 comment fields of our 300 business objects. Furthermore, a field doesn't have to be linked to an object (storage field for a planned task, process filed, etc). In the metamodel this concept is represented by a **N/N link between the field and the business object** therefore introducing a link object. In Simplicité, the link object between a business object and a field is called **object field**. The object field object allows to **override** the parameters of the attribute (mandatory, translation, etc).

When a field is linked to an object via an object field, Simplicité will create a column in the business object's table.


### How to create a <Field>

#### Minimal configuration suggestion : 
| Field | Description |
| ----- | ----------- |
| **Field1** | Description |
| **Field2** | Description |