# Building the "Order Management" Training App : Creating a User

> Prerequisite : [A Business object with a field must be created before starting this tutorial](/lesson/tutorial/getting-started/object)

## What is a User ?

Users belong to Groups, and each user-group relationship is defined by a Responsibility. Groups are granted to Business object CRUD functions, in turn granting a User to a Business Object... [Learn more](lesson/docs/core/objects/user)

## Creating a User

To create a test user, follow the steps below :

1. Click **Create a user** in Users and rights and fill in the User information like so :
    - Login : **usertest**  
    <img src="process.png" alt="process" width="50%"/>
3. Click **Next**
4. Choose a [previously](/lesson/tutorial/getting-started/module) created Group :
    - **TRN_SUPER_ADMIN** *if exists, this should be selected by default*  
    <img src="group.png" alt="group" width="50%"/>
5. Click **Next**
6. Create a Responsibility, click **Next**  
    <img src="resp.png" alt="resp" width="50%"/>
    > For more information about Domains, see the [Responsability](/lesson/docs/core/objects/responsability) section. 
7. Choose a new group :
    - For now, select **no**
8. Click **Next**

<div class="success">
    <p>The <b>usertest</b> User is created and opened</p>
    <img src="success-user.png" alt="user" width="50%"/>
</div>


## Activating and testing the User

To connect to the application with **usertest**, follow the steps below :

1. Click <img src="activate.png" alt="activate"/>
2. Click <img src="reset-password.png" alt="reset"/>
    - Click **Yes**
    - Copy the password displayed in the popup
    - Click **Ok**
3. Empty the platform's cache :
    - Via the header menu :
        - Click on the menu in the top-right corner, click **Clear cache**  
        <img src="shortcut.png" alt="shortcut" width="50%"/>
        - Click **Clear all sessions and all server caches**  
        <img src="clear-cache.png" alt="clear-cache" width="50%"/>
    - Via the keyboard shortcut : [ <kbd>Alt</kbd>+<kbd>C</kbd>+<kbd>C</kbd> ]
    > For more information about the cache, see the [Platform cache](/lesson/docs/core/objects/platform-cache) section. 

4. Log-in using **usertest** :
    - Login : **usertest**
    - Password : *previously reset password*
5. Click **Connection**
6. Create a new password
7. Click **Save**

You should now be connected with **usertest**

<div class="success">
    <b>Expected result :</b>
    <ul>
        <li>A Menu entry is visible</li>
        <li>The list of Suppliers is displayed when the menu is clicked</li>
    </ul>
    <img src="success-logon.png" alt="logon" width="50%"/>
</div>

 
[Next step : Add objects](/lesson/tutorial/expanding/addobjects)

***


Troubleshooting
---------------------------
> These steps must be done using the **designer** user with **no active module filter**, see [Module filter](path/to/module-filter)
- <span class="error">Authentication error</span> when logging in, check that : 
    - **usertest** is active
    - password is reset

- No menu is displayed when logged in, check that :
    - The the Domain exist, contains **TrnSupplier** and is granted to **TRN_SUPERADMIN** :  
        
        - In **Business objects > Domains** 
        - Open **TrnDomain** : 
            - The Domain is granted to **TRN_SUPERADMIN** :
                - In the **Permissions** tab, there should **TRN_SUPERADMIN**
                    > If not, create it
            - The Domain contains the **TrnSupplier** Business object :
                - In the **Main menu** tab, there should be **TrnSupplier** 
                    > If not, create it    

            <img src="trbl-domain.png" alt="logon" width="50%"/>
  
    - **TrnSupplier** has a CRUD Function, and is granted to **TRN_SUPERADMIN**
        - In **Business objects > Business objects**
        - Open **TrnSupplier** :
            - In the **Functions** panel linked to the Object :
                - There should be a **Read, create, update and delete** Function (TRN_SUP_CRUD)
                    > If not, create it  

                <img src="trbl-object.png" alt="object" width="50%"/> 

                - Open the **TRN_SUP_CRUD** Function :
                    - In the **Grant** panel linked to the Function :
                        - There should be the **TRN_SUPERADMIN** Group
                            > If not, create it

                <img src="trbl-function.png" alt="function" width="50%"/> 

    - **usertest** has the **TRN_SUPERADMIN** Responsibility :
        - In **Users and rights > Users > Show all**
        - Open **usertest** :
            - In the **Responsibilities** panel linked to the user :
                - There should be **TRN_SUPERADMIN**
                    > If not, create it
                
            <img src="trbl-user.png" alt="user" width="50%"/> 