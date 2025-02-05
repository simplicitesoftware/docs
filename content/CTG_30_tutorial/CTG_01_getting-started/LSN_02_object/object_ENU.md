Creating a business object
====================

Business objects are the cornerstone of the platform, structuring data, enforcing rules, and driving key features.... [Learn more](/lesson/docs/core/objects/business-objects)

Building the "Order Management" Training App
---------------------------

> Prerequisite : [A module must be created before starting this lesson](/lesson/tutorial/getting-started/module)


### Using the Modeler

<figure>
  <img
  src="image-1.png"
  alt="modeler" width="75%">
  <figcaption>Open Modeler shortcut</figcaption>
</figure>


<figure>
<p align="center">
  <img src="image-1.png" alt="init_result" width="75%">
  <figcaption><p align="center">Open Modeler shortcut</p></figcaption>
  </p>
</figure>


<img src="image-1.png" alt="modeler" width="75%"/>

To make the visualization of the business objects and their fields easier, Simplicité provides a tool called *Modeler*. The modeler uses the configuration to display the information in a visual *and manipulatable* form. Therefore the modeler grants access to some of Simplicité's functions such as the creation of a business object.

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
