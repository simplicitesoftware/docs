Rights management
====================

The following items correspond to the minimal configuration required for a functional app:
- a module that contains the configuration
- a business object and it's fields to manipulate lists and forms
- a domain (menu) to access the object
- a user with granted rights to access the domain and object

The first three items are covered by the previous chapters, the goal here is to explain how rights work and create a user to test the configuration.

Concepts
---------------------------

Users belong to groups. There is a N:N link between a user and a group (a user can belong to N groups and a group can hold N users). The link object between a user and a group is a **responsibility**. It can be active/inactive and a start/end date.

Business objects present functions: 
- **CRUD functions (Create / Read / Update / Delete)** define the type of access to the objects
- **action functions** define access to specific actions (e.g. via a button)

Groups are granted to functions. Therefore, a N:N link exists between a group and a function, The link object is called a **grant**.

Finally, **profiles** allow to create a collection of groups.

<div class="warning">Warning, when updating **grants**, the server's cache must be cleared for it to be acknowledged by the platform.</div>

*This will be explained in further detail later, for performance purposes, Simplicité stores in a cache a given amount of information - the rights configuration is part of this information. Hence the reason why the cache must be emptied when it is updated. If only the responsibilities are updated, the user will simply need to re-connect to the app.*

Exercise : Creating a test user
---------------------------
1. Empty the cache (menu in the top-right corner > empty cache > all sessions and server ([ <kbd>Alt</kbd>+<kbd>C</kbd>+<kbd>C</kbd> ])
2. Scope "Rights management" > Domaine "Users and Rights" > Users > Show all > Create
3. Create a test user "usertest" and copy the password that is displayed
4. Click on the "Activate" button
5. In the "Responsibility" tab, click on the "Associate" button and select the first group **TRN_SUPERADMIN** in the popup
6. Logon to the app with "usertest"
7. Check the access to the Supplier object

Congratulations ! You have created your first app !



Take things further : Create a readonly user
---------------------------
* Create a user "read" linked to a group **TRN_READONLY** granted to a **TrnDomainReadOnly** domain in which the user will be able to access the list of **Suppliers**.

