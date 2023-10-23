Select object
====================

A "select" object is a Simplicity object whose table content is based on the result of an SQL query.   
The name of its table will be **select**.  
It is used to generate an SQL query of the select type and to obtain a result in a list. 
Like standard object lists, this list will be paginated.
You will need to associate as many attributes with the select object as there are columns returned by the select query.
You can define your query directly in the business object settings in the **Filter** or   
the query is defined in the object's postLoad using **setSearchSpec("select...")**.
The select object is of course read-only for all user profiles.

<div class="warning">Warning, a select object must not have any timestamp attributes. (Object settings: Timestamp=None) or the query must include the attributes</div>


Exercise
====================

- Create a select object to display all the addresses, postal codes, cities and countries of the customers in the `trn_client` table who have placed more than 10 orders.


