Select object
====================

A "select" object is a Simplicité object whose table content is based on the result of an SQL query. 
It allows you to generate a "select" SQL query and display the result in a list. 
This list, like the standard object lists, will be paginated.
It will be necessary to associate as many fields to the select object as columns returned by the select query.
The query is defined in the postLoad of the object using **setSearchSpec("select...")**.
The select object is of course read-only for all user profiles.

<div class="warning">Warning, a select object should not have timestamp fields. (Setting the object :Timestamp=None)</div>


Exercise
====================

- Create a select object to display all the addresses, postal codes, cities and countries of the customers in the `trn_client` table who have placed more than 10 orders.


