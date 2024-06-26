Business object creation
====================

Concepts
---------------------------

The business object is the cornerstone of any configuration, most of the functionalities of the platform revolve around it:
- search
- lists
- forms
- scripts
- publications
- etc.

From the configuration of the business object, the platform will create a table in the database, and will offer the user the usual data manipulation functionalities: creation, deletion, modification, copy, bulk modification, bulk deletion, merge, etc. Each business object can have business rules that allow to finely control its behavior, this is the subject of the second part of the training.


The set of configuration objects and their relations form the **metamodel**. To obtain a given result, there are several ways to navigate the application, it is the understanding of the metamodel that helps you find your way around the configuration of an application. If the metamodel is the configuration manual, the business object is the first chapter since it is linked to most of the other configuration objects.

Configuration tool : Modeler
---------------------------

To make the visualization of the business objects and their fields easier, Simplicité provides a tool called *Modeler*. The modeler uses the configuration to display the information in a visual *and manipulatable* form. Therefore the modeler grants access to some of Simplicité's functions such as the creation of a business object. A specific lesson is dedicated to the modeler at the end of the training.

To access the business object creation process (also accessible via Administration > Business Objects > Creation assistant):
1. Click on the diagram button at the top right corner of the interface. An empty popup will show - there are currently no models configured in your module.
2. Fill in the following information in the creation form=
	- template name : **ModelBusinessObject** *(not to be mistaken with ModelObject, poorer in features)*
	- name: **ModelTraininng**
	- type: **SVG**
	- module: **Training**
3. Click on "Create", to create a new model and open it in a new window. *(being a navigation tool, it can be useful to keep the modeler on a separate screen)*
4. Right click at the center of the model and select "Add > Create Business object". This will start the creation assistant in the main work area.

Exercise: Create a business object with the creation assistant
---------------------------

To create a business object, the next steps follow each other:
1. Configuration of the business object
	- logical name **TrnSupplier** - *used to identify the business object, name the associated Java class, etc.*
	- physical name **trn_supplier** - *used to create the table in the DB. Some objects, such as webservice objects(data is retrieved via a third party) may not have a table*
	- prefix **sup** - *to be used to enable the syntactic conventions and facilitate the creation of fields*
2. Translation of the business object (by default English and French are suggested) 
	- **Supplier|Suppliers** *NB: using "|" allows the use of the plural form*
3. Defining responsibilities: which groups have what kind of rights on the object
4. Adding to a domain: *select the object's position in the menu. This step can be skipped if the object isn't accessible via the menu*
