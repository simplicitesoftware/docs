Ajax Library
============

This document presents an overview of the Ajax Library, what are the core methods and functions with it.

## Overview

## Accessing Simplicité's session

Through the `javascript` resource of your external objects, you can easily access every variable and component from your Simplicité's application. Below is a breakdown of some important functions to do so:

| Command                         | Returns                      | Description                                            |
|---------------------------------|------------------------------|--------------------------------------------------------|
| getApp()                        | Simplicite.Ajax instance     | Returns the current Simplicite session (Ajax). |
| getView(cbk, name, params)      | Promise - Result: Object     | Loads the view's definition from its **name**. |
| getGrant()                      | Simplicite.Ajax.Grant        | Returns the current user's rights & other infos. |
| getUserInfo(cbk, login, params) | Promise - Result: Object     | Returns fewer data about the current user (login, name, email, picture) from his **login**. |
| getBusinessObject(obj, inst)    | Simplicite.UI.BusinessObject | Gets a new business object, from the name of the object **obj** and (optional) the instance name **inst**. |
|  |  |

## Manipulating Business Objects

As they are a core feature of Simplicité, it is important to understant some of the ways to manipulate them (getting, creating, etc) within your javascript code:

| Command                             | Returns                      | Description                                            |
|-------------------------------------|------------------------------|--------------------------------------------------------|
| create(cbk, items, params)          |  | Creates and loads a new item that can be customized with **params**. | 
| getFields()                         |  | Returns TODO
| getField(name, id)                  |  | Returns the field with **name** and **id** from the *fields array* in the *meta-data*. |
| getCount(cbk, filters, params)      |  | Returns the count of *rows* with the **filters** to be applied (current ones if absent). |
| crosstab(cbk, cbt, filters, params) |  | Loads cross table data from the **cbt** crosstab, for the given **filters**. |
|  |  |