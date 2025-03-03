# Building the "Order Management" Training App : Adding icons and a theme

> Prerequisite : [The Order has a state model](/lesson/tutorial/expanding/relations) and a [home page](/lesson/tutorial/expanding/views) exists

## What is a Theme ?

A theme defines the logo and the main colors of the interface...[Learn more](/lesson/docs/platform/userinterface/themes)

## Creating a Theme

To create a Theme and add it to the App, follow the steps below :

1. In the **User interface > Themes** menu, click **Create**  
    <img src="theme-create.png" alt="create-theme" width="50%"/>
2. Fill in the Theme's information like so : 
    - Name : **TrnTheme**
    - Base theme : **Dark**
    - Module Name : **Training**
    - Header logo : <img src="header-logo.png" alt="header-logo" width="15%"/>  
    <img src="theme-form.png" alt="theme-form" width="50%"/>
3. Click **Save**  
4. In the **User interface > Views > Home page** menu, open **TrainingScope**
5. In the **Home page** tab, click on the *magnifying glass* button next to the **Theme name** field  
    <img src="theme-select.png" alt="theme-select" width="50%"/>
6. Select the previously created **TrnTheme** theme  
    <img src="theme-pick.png" alt="theme-pick" width="50%"/>
7. Click **Save**

## Adding icons to the Supplier, Product, Client and Order

To add an icon to a Supplier Business object, follow the steps below :

1. In the **Buiness objects > Business objects** menu, open **TrnSupplier**
2. Click the *magnifying glass* on the **Icon code** field to select an icon  
    <img src="icon-pick.png" alt="icon-pick" width="50%"/>
3. Click **Save**

Repeat these steps for the TrnProduct, TrnClient and TrnOrder objects.

## Styling the Order's state field

To add colours and icons to the Order's state field, follow the steps below :

1. Open the **trnOrdState** field :
    - Via the list of Orders, click on the **State** label  
    <img src="open-field.png" alt="open-field" width="50%"/>
    - Via the **Business objects > Fields** menu  
    <img src="open-field-alt.png" alt="open-field-alt" width="50%"/>
2. Click on the *arrow* next to the **List of values** field, to open the **TRN_ORD_STATE** List of values   
    <img src="open-lov.png" alt="open-lov" width="50%"/>
3. In the **List code** list linked to the List of values, open the first (Pending) List code  
    <img src="open-code.png" alt="open-code" width="50%"/>
4. Fill in the List code information like so :
    - Background color : **#6fa8dc**
    - Icon : **icon/color/btn_blue**
    - Text color : **#ffffff**
    - Display on list : **Icon | Label**  
    <img src="code-values.png" alt="code-values" width="50%"/>
5. Click **Save & Close**

Repeat these step 3 -> 5 for :
- Canceled : 
    - Background color : **#e06666**
    - Icon : **icon/color/btn_red**
    - Text color : **#ffffff**
    - Display on list : **Icon | Label**  
- Validated 
    - Background color : **#f6b26b**
    - Icon : **icon/color/btn_orange**
    - Text color : **#ffffff**
    - Display on list : **Icon | Label**    
- Validated 
    - Background color : **#93c47d**
    - Icon : **icon/color/btn_green**
    - Text color : **#ffffff**
    - Display on list : **Icon | Label**    

<img src="lov.png" alt="lov" width="50%"/>

## Test the Theme with the usertest User

1. Clear the platform's cache and log in using *usertest*
    > For a detailed step-by-step, see : [Testing the User](/lesson/tutorial/getting-started/user#activating-and-testing-the-user)

<div class="success">
    <p>The new Theme and header logo are applied to the App</p>
    <p>The objects have icons</p>
    <p>The Order's state field have icons</p>
    <img src="success.png" alt="logon" width="50%"/>
    <p>The Order's state transition actions have colours</p>
    <img src="order-colours.png" alt="logon" width="50%"/>
</div>