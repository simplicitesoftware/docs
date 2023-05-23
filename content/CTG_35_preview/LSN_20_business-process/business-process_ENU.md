Create a screen suite business process
=================================
How to create a screen suite/wizard (set of screens) for input help.

To list all business processes, go to **Business Processes**.  
You need to set up a "Screen Suite" business process
Enter a unique logical name, an internal code, the application module.  
When the process is created, 2 activities are generated: Begin and End.  
If these two activities do not exist or have been deleted, they must be created manually.  
NB: The other fields are only for long processes.  

Exercise
====================
Create a business process  
- Name = **TrnCreateOrder  
- Code = **ORDC**
- Type = On-screen workflow  
- Module = Training  


Rights handling
--------------------------

Go to the tab _Process Access Rights_ to add rights to the process:  
- Read only process: Ability to see the activities of the process
- Instantiate the process: possibility to start the process  
- Cancel the process: possibility to stop the process  

Exercise
====================
For the **TrnCreateOrder** process.   
- Add all rights to the **TRN_SUPERADMIN** group.  
Create a ModelProcess diagram:  
- Insert start and end activities in your model  
- Save the diagram  

Place a process in a domain
---------------------------------

Go to the _Main Menu_ tab and add the process to a domain.

Exercise
====================
Place the **TrnCreateOrder** process in the **TrnDomain**.


Translate the business process
--------------------------------------

Add a translation to a business process.  

Exercise
====================
- Translate the **TrnCreateOrder** process.  


Create activities
-------------------------
An activity wizard exists to create activities:  
- Either by the _Add Activity_ button on the business process form.  
- Or by right-clicking on the model diagram (template `ModelProcess`)    
The wizard allows you to create an activity, associate translations, step helpers, define rights groups for the activity, manage transitions between process activities and generate activity data.
To create an activity, enter the following information:  
- A step code: usually prefixed by the process code  
- A name: a label that describes the activity to the modeler.  
- An activity type: Start, Finish, Search, Create, Modify, Delete, Service call, Single selection, Multiple selection, External page.  
- Reversibility: to block or not a return in the process  
- User dialog: yes/no; if set to no, invokes the process methods  
- A module  
Other time-related properties are used to alert if the activity is longer (/shorter).  

Exercise
====================
Use this wizard to create 3 activities (like the example below):  
- Selecting a customer  
	- Process = **TrnOrderCreate
	- Step = **ORDC-CLIENT**  
	- Name = **SelectCustomer**  
	- Type = **Single Select**
	- Reversible = **Non-reversible**  
	- User dialog = **Yes**  
	- Module = **Training**  
Give rights to the **TRN_SUPERADMIN** groups (Note that the TRN_SUPERADMIN group must be a worflow group.)
- Selection of a supplier
- Creation of an order


Activity data
----------------------
The last step of the wizard allows you to define the properties of this activity:  
- Those that are checked will be kept, the others are optional and will be deleted.  
For information, other parameters are :  
- Next.Step: Name of the next activity to force a redirection   
- Return.Code: the return value of an activity in the case of several transitions.  
- Field <field name>: value of an attribute
Data between activities can be accessed using the syntax [Step.Group.Data]  
example: **[CLISEL.Field.trnCliName]** contains the name of the client once the activity has been validated  
Other explanations :
- Field.row_id: contains the list of row_ids that have been selected (multiple selection case).   
- Filter.<field>. Allows you to filter a list For example to filter the price of products: Filter.trnProPrice `> 100`  
- Search.Spec: allows you to add an SQL filter to a list, for example the list of products starting with "a": t.trn_pro_name like 'a%'  

Exercise
====================
- Check and enter the line: Object | Name | TrnClient  
- Other data will not be used and can remain unchecked  
- Do the same for the other activities and activity data.
