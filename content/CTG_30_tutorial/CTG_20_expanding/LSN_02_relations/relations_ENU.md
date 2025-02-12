# Building the "Order Management" Training App : Creating links

> Prerequisite : [The Supplier, Product, Client and Order objects must be complete before starting this tutorial](/lesson/tutorial/getting-started/object)

## What is a Link ?

A Link in Simplicité represents a relationship between Business objects. It is defined physically by a foreign key in the database and configured using an Object field... [Learn more](/lesson/docs/platform/business-objects/links)

## Creating a Link between Supplier and Product

To create a link between the **Supplier** Business object and the **Product** Business object, follow the steps below :
1. In the **Business objects > Business objects** menu
2. Open **TrnProduct**
3. Click **Edit form** on the Business object's form (this will open the **template editor**)  
    <img src="edit-form.png" alt="edit-form" width="25%"/>
4. Hover over the **Field Area** and click on the `+`  
    <img src="field-area.png" alt="field-area" width="50%"/>
    > For more information about Field Areas, see [Field Area](lesson/docs/core/objects/field-area)  
5. Click **Business Object**
6. In the search box, enter **TrnSupplier**  
    <img src="search-supplier.png" alt="search" width="25%"/>
7. Check **Functional key ?** and **Required ?** 
    > For more information about Functional keys, see [Functional key](lesson/docs/core/platform/business-objects/fields#functional-key)
8. Click **Save**

The **Supplier Code** Joined field is added to the template.
    > For more information about Joined field, see [Joined field](lesson/docs/core/platform/business-objects/fields#joined-field)

## Creating a Link between Product and Order

To create a link between the **Product** Business object and the **Order** Business object, follow the steps below :
1. In the **Business objects > Business objects** menu
2. Open **TrnOrder**
3. Click **Edit form** on the Business object's form (this will open the **template editor**)
4. Hover over the **Field Area** and click on the `+`
5. Click **Business Object**
6. In the search box, enter **TrnProduct**
7. Check **Functional key ?** and **Required ?** 
8. Click **Save**

This will add the **TrnProduct** joined fields to the template, allowing the Order object to reference a product.

## Creating a link between Client and Order

To create a link between the **Client** and **Order** business objects, follow the same steps as for linking **Product** to **Order**, with one key difference:

6. In the search box, enter **TrnClient** instead of TrnProduct.

This will add the **TrnClient** joined fields to the template, allowing the Order object to reference client information.

