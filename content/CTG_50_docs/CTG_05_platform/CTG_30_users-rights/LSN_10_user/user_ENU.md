User
====================

### What is a User ?

Users belong to groups. There is a N:N link between a user and a group (a user can belong to N groups and a group can hold N users). The link object between a user and a group is a **responsibility**. It can be active/inactive and a start/end date.

Business objects present functions: 
- **CRUD functions (Create / Read / Update / Delete)** define the type of access to the objects
- **action functions** define access to specific actions (e.g. via a button)

Groups are granted to functions. Therefore, a N:N link exists between a group and a function, The link object is called a **grant**.

Finally, **profiles** allow to create a collection of groups.

<div class="warning">Warning, when updating **grants**, the server's cache must be cleared for it to be acknowledged by the platform.</div>

### How to create a User ?

#### Minimal configuration suggestion : 
| Field | Description |
| ----- | ----------- |
| **Field1** | Description |
| **Field2** | Description |