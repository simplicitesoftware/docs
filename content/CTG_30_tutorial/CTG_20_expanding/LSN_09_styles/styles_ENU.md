<!--Style customization
====================

Theme and theme styles
---------------------------

A theme is an object that defines the logo and the main colors of the interface. It is possible to add a custom stylesheet in LESS or CSS format to the theme which will be applied globally.


The theme must be associated to a scope.

Object styles
---------------------------

It is possible to define a specific style sheet for a business object by adding a "CSS Style" resource (LESS or CSS format) named `STYLES`.

Field styles
---------------------------

Field styles are a configuration element allowing to add a CSS class to a field

List item icons
---------------------------

Particularly useful in the case of lists used in state diagrams, it is possible to add an icon to each list item


Exercise
====================

- Create a « light » theme with a custom icon
- Assign this theme to the scope created automatically by the module creation process
- Assign a color to each state of the order
    - via field styles for the background (to use CSS classes)
    - via list items for the icons

*To avoid typing errors when entering field names or list codes, it is recommended to use the "copy" function of the modeler*.
-->

# Building the "Order Management" Training App : Adding icons and a theme

> Prerequisite : [The Order has a state model](/lesson/tutorial/expanding/relations) and a [home page](/lesson/tutorial/expanding/views) exists

## What is a Theme ?

A theme defines the logo and the main colors of the interface...[Learn more](/lesson/docs/platform/user-interface/theme)

## Creating a Theme

To create a Theme and add it to the App, follow the steps below :

1. In the **User interface > Themes** menu, click **Create**  
    <img src="theme-create.png" alt="create-theme" width="50%"/>
2. Fill in the Theme's information like so : 
    - Name : **TrnTheme**
    - Base theme : **Dark**
    - Module Name : **Training**
    - Header logo : 
<a href="header-logo.png" download>
  Header logo
</a>  
    <img src="theme-form.png" alt="theme-form" width="50%"/>

3. Click **Save**  
4. In the **User interface > Views > Home page** menu, open **TrainingScope**
5. In the **Home page** tab, click on the *magnifying glass* button next to the **Theme name** field  
    <img src="theme-select.png" alt="theme-select" width="50%"/>
6. Select the previously created **TrnTheme** theme  
    <img src="theme-pick.png" alt="theme-pick" width="50%"/>
7. Click **Save**

## Adding icons to Business objects

## Styling the Order's state field

## Test the Theme with the usertest User

1. Clear the platform's cache and log in using *usertest*
    > For a detailed step-by-step, see : [Testing the User](/lesson/tutorial/getting-started/user#activating-and-testing-the-user)

<div class="success">
    <p>The new Theme and header logo are applied to the App</p>
    <img src="success.png" alt="logon" width="50%"/>
</div>
