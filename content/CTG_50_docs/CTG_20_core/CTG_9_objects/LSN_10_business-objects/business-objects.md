Business object
====================

### What is a Business object ?

Business objects represent real-world entities or concepts within an application, such as a **Client**, **Product**, **Invoice**, or **Employee**. They typically consist of multiple **attributes**, maintain relationships with other business objects, and follow specific **business logic**. For instance, once an invoice is sent to a client, its items may no longer be editable.  

As explained in the [object tutorial](/lesson/tutorial/configuration/object), the **business object** concept is central to Simplicité's meta-model.  

Business objects are usually linked to a database table, enabling standard **Create, Read, Update, and Delete (CRUD)** operations. Additionally, they may include processing logic (code, constraints, etc.) to enforce behavior and data integrity. However, some objects are not tied to a table:  

- **[Select objects](/lesson/docs/core/objects/select-objects)** – based on SQL queries  
- **Service objects** – interact with external services

Since business objects form the foundation of the platform, most functionalities revolve around them, including:  

- Search  
- Lists  
- Forms
- Scripts
- Publications
- And more...

Additionally, business objects can include **business rules** to precisely control their behavior.