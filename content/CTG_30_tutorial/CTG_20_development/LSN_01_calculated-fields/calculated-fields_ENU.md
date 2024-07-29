Introduction
====================

An application is not only composed of a data model and the other configuration elements mentioned in the first part of the tutorial. Most of the added value lies in the services offered **around** this model. We will study how it is possible to

- customize the behavior of the object via business rules
- export and import data
- connect your application to other systems
- further extend the application's functionalities

Fields calculated through an expression
====================

The simplest type of customization is the calculated field. This is a field whose value will depend **on other fields in the same business object**. In some cases, it may be useful to join fields from related objects just to be used for calculated fields. For example, in the exercise, we will calculate the total price of the order by multiplying the product's price by the number of items ordered. So the product's price will need to be *part of the order for the value to be available*.

Persistence
---------------------------

A calculated field can be persistent or not, depending on whether the field has a physical name or not. Indeed, if there is no physical name, then there is no associated column in the database, and Simplicité will calculate the value each time it is displayed. If there is a physical name, then Simplicité will store the result of the calculation in the database each time the business object is saved.

The upside of the non-persistent field is that there is no need to worry about keeping it up to date, in our example if the product price is updated, as it is calculated each time it is displayed.

The downside of non-persistent fields is precisely their calculation each display time it is displayed, which can be costly for displaying or exporting a list (especially if it is a complex calculation), but also their unavailability for data aggregation functionalities (sums in a list, group by in a list, cross-tabulations, etc.) because they are done by SQL queries.

Simplicité Expressions
---------------------------

A certain number of configuration fields, such as the *Calculated Expression* field, are **Executed Fields**. Before using them, it is worth understanding how they work.

The contents of these executed fields are executed on the server side using the Rhino library, which is an implementation of JavaScript (ES6) written in Java. Rhino allows scripts to be executed in a Java application without first compiling them. However, since the scripts are executed on the server, they have access to the entire Simplicité Java API.

Prior to execution by Rhino, Simplicité also pre-processes the executed fields to transcribe Simplicité expressions (bracketed syntax) into JavaScript code.

Some expressions are available in all executed fields, others are only available in specific executed fields.

Be careful to differentiate the following elements:
- **exectured field:** field of some configuration objects that results in a Rhino execution and gives access to the whole Simplicité API
- **expression Simplicité:** Simplicité syntax transformed into javascript code to simplify the content of the executed fields
- **expression calculée:** this is an *executed field* of the "Attribute" configuration object that automatically calculates the value of the field

Exercise
====================

- If not already done, add the product price back to the order (*NB: if you forget to add a field back during the relationship creation process, it is always possible to add it back later, by setting the object attribute manually, or simply by using the template editor*)
- Add a `trnOrdTotal` field to the order
- Make it a **persistent** calculated field (*if the product price changes later, we don't want to impact the orders already placed*), read-only, with the following expression:

```
[VALUE:trnPrdPrice]*[VALUE:trnOrdQuantity]
```

- check it works by saving a command (for a persistent calculated field, the calculation is done **when saving**)
