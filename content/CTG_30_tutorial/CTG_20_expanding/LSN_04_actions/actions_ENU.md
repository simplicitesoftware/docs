# Building the "Order Management" Training App : Adding actions

> Prerequisite : [The Supplier, Product, Client and Order objects must be complete before starting this tutorial](/lesson/tutorial/expanding/addobjects)

## What is an Action ?

Actions in Simplicité allow users to interact with business objects. While some actions are built into the platform (e.g., create, edit, bulk update), custom actions can be added for specific business needs. Actions can be executed on the front end or the back end... [Learn more](/lesson/docs/platform/business-objects/actions)

## Creating a front-end Action for the Product Business object

To create an Action for the Product Business object, follow the steps below :
1. In the **Business objects > Actions** menu, click **Create**  
    <img src="create-action.png" alt="create" width="50%"/>
    
2. Fill in the Action information like so :
    - Name : **IncreaseStock**
    - Type : **Form**
    - Execution : **Front**
    - URL : `javascript:alert("To be implemented...")`
3. Click **Save**
4. In the **Functions** panel linked to the Action, click **Create**  
    <img src="create-function.png" alt="create" width="50%"/>
5. Fill in the Function information like so :
    - Function : **TRN_PRD_INCREASE_STOCK_A**
    - Object : **TrnProduct**  
    > For more information about Functions, see [Functions](/lesson/docs/platform/users-rights/functions)
6. Click **Save**
7. In the **Grant** panel linked to the **Function**, click **Associate Groups**  
    <img src="create-grant.png" alt="create" width="50%"/>
8. Select the **TRN_SUPERADMIN** Group and click **Apply the selection**  
    <img src="select-group.png" alt="select-group" width="50%"/>
9. Click **Save & Close**

<div class="success">
    The <b>Increase stock</b> Action is now granted to the <b>TRN_SUPERADMIN</b> Group.
</div>


## Test the Action with the usertest User


1. Clear the platform's cache and log in using *usertest*
    > For a detailed step-by-step, see : [Testing the User](/lesson/tutorial/getting-started/user#activating-and-testing-the-user)

2. Open an existing Product

<div class="success">
    <p>The "Increase stock" button is visible</p>
    <img src="success-btn.png" alt="success" width="50%"/>
    <p>An alert is displayed when clicked</p>
    <img src="success-action.png" alt="success" width="50%"/>
</div>