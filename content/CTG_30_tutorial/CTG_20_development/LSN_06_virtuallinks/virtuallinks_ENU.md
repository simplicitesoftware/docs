Virtual links
==================

A virtual link enables you to access a business object's data without having to go though the model.

This works by creating a "virtual" link between two business objects.
This link doesn't come with a physical column, therefore no foreign key is created in the child object's table.
The data is retrieved through an SQL query configured on the link between the two objects.

For instance, to view a supplier's clients list, we will provide a filter for the link between the Supplier and Customer objects.

```sql
t.row_id in (select c.row_id from trn_client c
left join trn_order o on o.trn_ord_cli_id = c.row_id
left join trn_product p on o.trn_ord_prod_id = p.row_id
left join trn_supplier s on p.trn_prod_sup_id = s.row_id
where s.row_id = [row_id]
)
```

In this example, we wish to get the row_ids of the **trn_client** table, the 't' alias is given to the linked object (TrnClient).
We start off our parsing of the model by selecting the orders of the clients, we proceed with selecting the products of each order and finally, the supplier of each product and the id of the supplier we are viewing. Here, **[row_id]** is an expression that returns the row_id of the record displayed.

Exercise
=================
- Create a field with no physical column and add it to the **Client** object with **Supplier** as linked object. This will create a link between both objectS.
- Fill in the filter on the link that allows to view the list of a supplier's products that are linked to a sent order.


*To prevent typos when typing field names or list codes, we recommend you use the "copy" functionnality in the modeler.*
