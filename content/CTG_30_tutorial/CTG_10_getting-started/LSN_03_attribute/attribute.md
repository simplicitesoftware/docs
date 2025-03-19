# Building the "Order Management" Training App : Creating a Field

> Prerequisite : [A business object (TrnSupplier) must be created before starting this tutorial](/lesson/tutorial/getting-started/object)

## What is a Field ?

In Simplicité, fields are configurable attributes of business objects (mandatory, type, etc.). They have a logical name (used in code) and a physical name (for database columns). When linked to an object, it creates a database column and allows parameter overrides... [Learn more](/lesson//platform/businessobjects/fields)

## Creating a Field

To create a field, follow the steps below :

1. Click **Edit form** on the Business object's form (this will open the **template editor**)  
    <img src="edit-form.png" alt="field-area" width="50%"/>
	> The template editor is also available via the Modeler, for more information see the [Accessing the template editor via the Modeler](/lesson//platform/businessobjects/business-objects#creation-assistant-via-the-modeler)
2. Select the first **Template**    
    <img src="template.png" alt="template" width="25%"/>
3. Hover over the empty **Field Area** and click on the `+`
    > For more information about Field Areas, see [Field Area](/lesson//platform/userinterface/templating/fields-areas)

    <img src="field-area.png" alt="field-area" width="50%"/>
    
4. Click **Field**  
    <img src="add-field.png" alt="add-field" width="50%"/>
5. Click **+ Create field**, and select **Short text**  
    <img src="short-text.png" alt="short-text" width="50%"/>
6. Fill in the Field fields like so :
    - Label : **Code**
    - Logical name : **trnSupCode** *should be auto-completed* 
    - Physical name : **trn_sup_code** *should be auto-completed*
    - Functional key : **Toggled**
    - Required : **Toggled**  
        <img src="create-field.png" alt="create-field" width="25%"/>
7. Click **Save**

<div class="success">
    <p>The <b>trnSupName</b> Field has been added to the <b>TrnSupplier</b> Business object and the template has a <b>Name</b> input visible on it</p>
    <img src="success.png" alt="success" width="50%"/>
</div>