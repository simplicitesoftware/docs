Field areas
====================

Attribute fields are used to group fields, both in forms and in lists. 

Often, all the joined fields from a referenced object are grouped together in the same field area. For this case, it is possible to assign the icon of the referenced object as a field area icon using the following syntax: `[EXPR:[OBJECTICON:TrnClient]]`

In list view, the field area appears in the list header above the fields it encloses. Fields are ordered by:
1- the order of the field area (if it exists)
2- the order of the object field

Exercise : improving the order's template
---------------------------

When creating the links, you added some of the customer's and product's fields to the order. Group these fields in the order’s form in dedicated field areas.