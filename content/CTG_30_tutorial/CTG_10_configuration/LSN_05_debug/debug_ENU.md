
Exercise : model completion
====================

Complete the model by creating the Product, Customer and Order objects and all their fields as presented in the previous chapter:
- the mandatory fields are highlighted in red
- the fields forming the functional key of the object are in bold
- do not hesitate to test different types of attributes and to enhance the suggested model
- be aware of naming conventions

<div class="info">In the following chapters, links will be created between the objects and the the fields will be used for business rules.</div>

After each object creation and addition of its fields:
- clear the cache so that the created responsibilities are taken into account
- functionally test the form of each object with the user usertest (private nav.) and create data
- during these tests, check for errors in the logs
- during these tests, analyze the columns and rows created in the database using DBAccess and basic SQL queries like `select * from trn_supplier`

<div class="info">As you follow the contents of the database, you will notice that Simplicité automatically handles 5 technical fields in addition to the parameterized fields: `row_id, created_dt, created_by, updated_dt, updated_by`. The next chapter will go into more detail about the difference between technical key (`row_id`) and functional key (supplier code, customer name+first name, etc.)</div>

Support
====================

As a reminder, if you have any difficulties, the Simplicité design community is active at http://community.simplicite.io