Pivot tables
====================

Crosstabs allow you to cross-reference information object's fields of a given object. The tables are configured by choosing the following axes:
- the fields used as columns
- the fields used as rows
- the fields used as values

Only the object fields of the target business object can be used.

If there is no "value" axis, then the platform performs an enumeration.

Crosstabs offer many options to users:
- display or not the presented axes
- swapping of axes (rows <-> columns)
- filtering of the data used (note that the crosstab uses the filters already active on the object if a search has been performed)
- creation of graphs
- CSV, Excel, JSON exports (the latter can also be obtained by webservice)

Exercise
====================

Create a pivot table that summarizes the number of orders by product, supplier (columns) and by state.

- via the template editor, join the id and the name of the supplier on the order from the product object
- in Interface > Pivot Tables, create a new pivot table `TrnTcOrders`.
- create two "column" axes (supplier and product) and one "row" axis (report). 
- clear the cache and note the presence of the pivot table