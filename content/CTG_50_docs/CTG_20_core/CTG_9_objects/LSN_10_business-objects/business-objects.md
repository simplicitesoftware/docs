Introduction
====================

Business objects are a representation of a real-world entity or concept within the application, for example a Client, a Product, an Invoice, an Employee. They are typically composed of several **attributes**, have relationships with other Business Objects, and have a defined behaviour called "business logic": for example, the Items of an Invoice might not be modifiable once the invoice is sent to the client.

As stated in the [object tutorial](/lesson/tutorial/configuration/object), the concept of **business object** is at the center of Simpicité's meta-model. 

Objects are tipically associated to a table in the database allowing for basic Create/Read/Update/Delete (CRUD) operations, and to some logic  processing (code, constraints, etc) to control its behaviour, integrity, etc. However some objects are not associated to a table:
- [select objects](/lesson/docs/core/objects/select-objects), based on a SQL query
- service objects, based on requests to external services
- external objects, which are 


