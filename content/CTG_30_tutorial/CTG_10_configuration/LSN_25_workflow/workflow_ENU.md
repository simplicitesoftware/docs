# Business process - workflow

A workflow is a wizard (set of screens) intended to assist the user during a specific process.
The workflow can be defined in the Business process/Business process menu. 
The workflow is parmeter by:
    Type: Screen workflow or Human task
    Class: any java class which modify default behaviour
    Module: application module

A workflow is compose of activity.
When the process is created 2 activities are generated: Begin and End.
If these two activities did not exist or were removed, they must be created manually.
Activitys can be set up in modeler by create a specific diagram with template ModelProcess.
Activitys have Data whitch permise to customise the workflow behavior
## Permission
The workflow should be granted to group in Process permission to be used.
Each activitys has its own permission to set up in activity permission.

## Screen workflow
It allows setting up a specific screen flow for complex processes with multiple actions to be performed sequentially.
### Exercise
Create a screen workflow for the creation of a commande.
* Name = TrnOrdCreate
* Code = TRNOC
* Module = Training

Set up permission.
Add your process in TrnDomain.

Add 4 activitys and link them:
* Activity to select the client who make the commande
* Activity to select the suplier
* Activity to select the stock product. Should be filter by suplier select befor.
* Activity to create the order with preset preSelected options

Set up permission.

## Human task
It allows to configure a long process wizard like for task tracking. The process may have a limited time to process as well as all activities. For our example, this allows you to add a process for order processing by the supplier with different statuses and processing times to be respected.


# Complexification

## scripting
Workflow default behavior can be overridden via hooks in script java of the business process.


## Conditional link / Routing
You can add a condition on the activity link to set up conditional behavior.

### Exercise
Set up an alert to the user if the chosen supplier does not have a product in stock. By adding à message activity and ussing script


    @Override
	public void postValidate(ActivityFile context) {
		AppLog.info("DEBUG contex:"+context.toJSONObject(), getGrant());
		var step = context.getActivity().getStep();
		if(step.equals("TRNORDC-020")){
			ObjectDB prd = this.getGrant().getTmpObject("TrnProduct");
			synchronized(prd){
				prd.getLock();
				prd.setFieldFilter("trnProdSupId",context.getDataValue("Field", "row_id"));
				prd.setFieldFilter("trnProdState", "STOCK");
				List<String[]> rows = prd.search();
				if (Tool.isEmpty(rows)){
					AppLog.info("DEBUG empty", getGrant());
					context.setDataFile("Return", "Code", "MESSAGE");
				}else{
					AppLog.info("DEBUG not empty", getGrant());
					context.setDataFile("Return", "Code", "PRODUCT");
					
				}
			} 
			
		}
	}

### Tips
use `[DEFAULT]` to set up default link. 

## activity link
You can add link between activities with specific action (button).
For exemple add button to skip product selection on the first activity.

## Redirection
Thanks to data of groupe `Forward` you can set up redirection for activity.
With a `Forward` `Page` you can for exemple add a redirection to the new order you juste create at the end activity.
### Tips
use a data param of `Forward` group to use row_id in url.

## Alert
You can configure alert by email social log ... in Business process/Alert menu.
This allert can be call from workflow to allert user of update for exemple.
(It can also be usfull in state diagram)

### Exercise
Add social alert to suplier when order was create.