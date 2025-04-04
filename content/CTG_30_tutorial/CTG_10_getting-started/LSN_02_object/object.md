# Building the "Order Management" Training App : Creating a Business object

> Prerequisite : [A module, domain and group must be created before starting this tutorial](/lesson/tutorial/getting-started/module)

## What is a Business object ?

Business objects are the cornerstone of the platform, structuring data, enforcing rules, and driving key features.... [Learn more](/lesson/platform/businessobjects/business-objects)

## Creating a Business object

To create a Business object, follow the steps below :

1. Click **Creation assistant** in Business objects > Business objects    
	<img src="assistant.png" alt="assistant" width="50%"/>

	> This assistant is also available via the Modeler, for more information see the [How to create an object using the modeler](/lesson/platform/businessobjects/business-objects#creation-assistant-via-the-modeler)
2. Fill in the Object information like so :
	- Code : **TrnSupplier**
	- Table : **trn_supplier**
	- Module Name : **Training**
	- Prefix : **sup**  
	<img src="object.png" alt="object" width="50%"/>
3. Click **Next**
4. Fill in the Translation for your Object :
	- English : **Supplier|Suppliers** *NB: using "|" allows the use of the plural form (label used for lists)*
	<img src="translate.png" alt="translate" width="50%"/>
5. Click **Next**
6. Select a Function for the [previously](/lesson/tutorial/getting-started/module) created Group :
	- **Read, create, update, delete**  
	<img src="grant.png" alt="grant" width="50%"/>
7. Click **Next**
8. Add the Object to the [previously](/lesson/tutorial/getting-started/module) created Domain
	- Should be selected by default  
	<img src="domain.png" alt="domain" width="50%"/>
9. Click **Next**

<div class="success">
	<p>The <b>TrnSupplier</b> Object is created and opened.</p>
	<img src="success.png" alt="success" width="50%"/>
</div>
