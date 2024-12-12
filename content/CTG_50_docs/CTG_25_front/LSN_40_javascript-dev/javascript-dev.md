UI Component
============

This documents follows the **Custom Widgets** one, to explain how to enable communication between your custom widget and the rest of Simplicité's solution (backend and instance). 

> Recommended to have read the **Custom Widgets** documentation in order to understand the context for this one.

The creation of an object's behavior and interaction within one Simplicité application sure comes along with the creation of its content & styles. Though it requires a bit more understanding of how Simplicité is organized and how to communicate properly and access the informations.

## Enabling the discussion

The first step is to make sure that our object can be aware of the Simplicité's system that he is a part f. To make such things we are gonna use the `javascript` resources of our External Object: **extobj_script** or **CLASS** or **SCRIPT**.

### Accessing the current session

The communication with Simplicité's environment is allowed by using the `$ui` call within our object's class extending `Simplicite.UI.ExternalObject`. And we get the current session by using the `getApp()` function, returning the current `Simplicite.Ajax` instance.

> Throughout this document, the exposed example will be the same as in *Custom Widgets*, the **CustomWelcomeCard**. Indeed make sure to understand its creation and setup as an embedded custom widget.

### Communicating with Simplicité

Before going further, it is primordial to grasp how Simplicité's sessions are organized, and what are the variables that will allow us to properly access everything we need. Below a quick breakdown of the main accessible components and elements of Simplicité's session:

> For all informations check the full [6.1 JSDoc](https://platform.simplicite.io/6.1/jsdoc/index.html) and the [Simplicite UI organization](https://docs.simplicite.io/lesson/docs/ui/responsive), the table below simply gives you some of the key functions you should know in order to interact with Simplicité's instance.

| Command                         | Returns                      | Description                                            |
|---------------------------------|------------------------------|--------------------------------------------------------|
| getApp()                        | Simplicite.Ajax instance     | Returns the current Simplicite session (Ajax). |
| getView(cbk, name, params)      | Promise - Result: Object     | Loads the view's definition from its **name**. |
| getGrant()                      | Simplicite.Ajax.Grant        | Returns the current user's rights & other infos. |
| getUserInfo(cbk, login, params) | Promise - Result: Object     | Returns fewer data about the current user (login, name, email, picture) from his **login**. |
| getBusinessObject(obj, inst)    | Simplicite.UI.BusinessObject | Gets a new business object, from the name of the object **obj** and (optional) the instance name **inst**. |
|  |  |

### Manipulations and sessions modifications

Being able to fetch elements in order to display them is a good start, but Simplicité also allows those objects to be modified, which will enhance even more the use for your custom widget. Below a table showing a few interesting functions to perform objects' manipulations and changes into database:

> **Warning:** this is slightly outside of what this part of the documentation shall reach, as we are driftign a bit from the frontend development and design of widgets. But still it is important to grasp that objects can be given powerful behaviors and interactions to cover all the possible needs you might have.

First of all let's break into the `Simplicite.UI.BusinessObject` functions: 

| Command                             | Returns                      | Description                                            |
|-------------------------------------|------------------------------|--------------------------------------------------------|
| create(cbk, items, params)          |  | Creates and loads a new item that can be customized with **params**. | 
| getFields()                         |  | Returns TODO
| getField(name, id)                  |  | Returns the field with **name** and **id** from the *fields array* in the *meta-data*. |
| getCount(cbk, filters, params)      |  | Returns the count of *rows* with the **filters** to be applied (current ones if absent). |
| crosstab(cbk, cbt, filters, params) |  | Loads cross table data from the **cbt** crosstab, for the given **filters**. |