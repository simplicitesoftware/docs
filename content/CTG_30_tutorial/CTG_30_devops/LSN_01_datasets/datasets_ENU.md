Data sets
====================

When installing a module, it is often useful to provide a test data set

To transfer data from one instance to another, the first method that comes to mind is to export the database or a sub-part of the database. This is **technical export**. The problem that can arise in **partial** technical exports is the following
- if an exported object A refers to a non-exported object B
- the SQL export of the table of object A will therefore contain the technical key of object B
- when importing on another instance, this technical key may not correspond at all to what object B was in the original instance.

This is why there is a **functional export**, which is an export that contains **only functional data**, not technical data such as IDs. When it is imported, Simplicité will *fetch the ID of the linked object from its functional key*, and make the link. For this to work, object A must of course contain all the fields of the functional key of object B to which it is linked, otherwise object B cannot be found to make the link.

An export per object is available on the lists as a designer (menu plus > export > export Simplicité), but to create a real dataset, the platform offers the possibility to generate them automatically. To do this, it is important to understand that the order of import is crucial. It is impossible to import products before suppliers. In cases of complex models (circular relationships), it is complicated for the platform to determine the import order. Some objects may not make sense in a dataset (for example, one may decide not to include historical data). It is for these reasons that it is necessary to configure this order manually.

Exercise
====================

- set up the export order for the customer, the product and the supplier (the order is ignored)
- check that the product contains the functional key of the supplier
- go to the module definition and generate a dataset using the "Export data" action: the dataset is generated in the dedicated panel object
- check the content
- delete all data from the objects, and import the dataset
