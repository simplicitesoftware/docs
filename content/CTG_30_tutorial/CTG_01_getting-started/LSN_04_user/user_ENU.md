# Building the "Order Management" Training App : Creating a User

> Prerequisite : [A Business object with a field must be created before starting this lesson](/lesson/tutorial/getting-started/object)

## What is a User ?

Users belong to groups, and each user-group relationship is defined by a Responsibility. Groups are granted to Business object CRUD functions, in turn granting a User to a Business Object... [Learn more](lesson/docs/core/objects/user)

## Creating a User

To create a test user, follow the steps below :

1. Click **Create a user** in Users and rights
2. Fill in the User information like so :
    - Login : **usertest**
3. Click **Next**
4. Choose a [previously](/lesson/tutorial/getting-started/module) created Group
    - **TRN_SUPER_ADMIN** *if exists, this should be selected by default*
5. Click **Next**
6. Create a Responsibility, click **Next**
    > For more information about Domains, see the [Responsability](/lesson/docs/core/objects/responsability) section. 
7. Choose a new group :
    - For now, select **no**
8. Click **Next**

The user **usertest** is created and opened.

To connect to the application with **usertest**, follow the steps below :

1. Click **Activate**
2. Click **Reset password**
    - Click **Yes**
    - Copy the password displayed in the popup
    - Click **Ok**
3. Empty the platform's cache :
    - Via the header menu :
        - Click on the menu in the top-right corner
        - Click **Clear cache**
        - Click **Clear all sessions and all server caches**
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
</div>

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
    - **TrnSupplier** has a CRUD Function, and is granted to **TRN_SUPERADMIN**
        - In **Business objects > Business objects**
        - Open **TrnSupplier** :
            - In the **Functions** panel linked to the Object :
                - There should be a **Read, create, update and delete** Function (TRN_SUP_CRUD)
                    > If not, create it
                - Open the **TRN_SUP_CRUD** Function :
                    - In the **Grant** panel linked to the Function :
                        - There should be the **TRN_SUPERADMIN** Group
                            > If not, create it
    - **usertest** has the **TRN_SUPERADMIN** Responsibility :
        - In **Users and rights > Users > Show all**
        - Open **usertest** :
            - In the **Responsibilities** panel linked to the user :
                - There should be **TRN_SUPERADMIN**
                    > If not, create it

<!--Take things further : Create a readonly user
---------------------------
* Create a user "read" linked to a group **TRN_READONLY** granted to a **TrnDomainReadOnly** domain in which the user will be able to access the list of **Suppliers**. -->