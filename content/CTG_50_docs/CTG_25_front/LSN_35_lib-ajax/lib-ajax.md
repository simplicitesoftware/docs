Ajax Library
============

This document provides an overview of the Ajax Library, detailing its core methods and functions, while also explaining how the Simplicité solution is structured and operates within the Model-View-Controller (MVC) architecture.

## Overview

### MVC architecture

Simplicité uses the **Model-View-Controller** (MVC) architecture, which organizes an application into three interconnected components: the **Model** (handles data and business logic), the **View** (manages the user interface), and the **Controller** (coordinates interactions between the Model and View). This separation of concerns enhances modularity, simplifies maintenance, and makes the application more flexible for updates and scaling.

Within your Simplicité's instances and applications, the MVC components are referenced as:
- **Controller** `$ui`: Represents the front-end engine instance, `Simplicité.UI.Engine`. This acts as the *primary Controller* in the MVC architecture, orchestrating interactions between the *Model* and *View*, loading components, and handling the application's core logic.
- **Model** `$ui.getApp()`: Used to access the *backend data handler*. This is the part of the architecture responsible for managing *data retrieval* and *interaction* through the `Simplicité.Ajax` class.
- **View** `$ui.view.*`: Provides access to and control over the *UI components* and *rendering logic*. This layer is responsible for what the user *sees and interacts with*, utilizing classes under `Simplicité.UI.View.*` to define and manipulate the user interface.

#### Model

The Model in the Simplicité solution is responsible for handling the data and business logic of the application. It serves as the backbone of the system, managing interactions with the database and ensuring the integrity of the data. In Simplicité's case, the Model is implemented through the Simplicité.Ajax library, which acts as the bridge between the backend and the front-end. This component ensures that data is retrieved, processed, and delivered in a structured way, providing a consistent foundation for the application’s operations. By centralizing data handling, the Model enables smooth integration with the other layers, fostering a reliable and scalable system.

#### View 

The View is the part of the architecture that manages the user interface and presentation layer. It is implemented using the Simplicité.UI.View.* classes, which handle the rendering and display of UI components. The View translates the data provided by the Model into a user-friendly format, allowing users to interact with the application effortlessly. In Simplicité, this layer is designed to be highly customizable, enabling developers to modify styles and scripts to match specific requirements. By focusing solely on presentation, the View ensures a clear separation of concerns, making it easier to adapt and enhance the user experience.

#### Cotnroller

The Controller is the central orchestrator of the Simplicité solution, managing the interaction between the Model and the View. It is implemented through the Simplicité.UI.Engine, which acts as the primary UI controller. The Controller loads components, calls the Ajax services to fetch or update data, and ensures that the View accurately reflects the current state of the application. Additionally, it manages navigation, workflows, and other application-specific interactions. This layer provides flexibility and control, allowing developers to implement hooks, override default behaviors, and integrate custom libraries. The Controller’s role is essential for maintaining responsiveness and ensuring smooth communication between the system's layers.

## Accessing Simplicité's session

Through the **javascript** resource of your external objects, you can easily access every variable and component from your Simplicité's application. Below is a breakdown of some important functions to do so:

| Command                         | Returns                      | Description                                            |
|---------------------------------|------------------------------|--------------------------------------------------------|
| getApp()                        | Simplicite.Ajax instance     | Returns the current Simplicite session (Ajax). |
| getView(cbk, name, params)      | Promise - Result: Object     | Loads the view's definition from its **name**. |
| getGrant()                      | Simplicite.Ajax.Grant        | Returns the current user's rights & other infos. |
| getUserInfo(cbk, login, params) | Promise - Result: Object     | Returns fewer data about the current user (login, name, email, picture) from his **login**. |
| getBusinessObject(obj, inst)    | Simplicite.UI.BusinessObject | Gets a new business object, from the name of the object **obj** and (optional) the instance name **inst**. |
|  |  |

## Manipulating Business Objects

As they are a core feature of Simplicité, it is important to understant some of the ways to manipulate them (getting, creating, etc) within your javascript code:

| Command                             | Returns                      | Description                                            |
|-------------------------------------|------------------------------|--------------------------------------------------------|
| create(cbk, items, params)          |  | Creates and loads a new item that can be customized with **params**. | 
| getFields()                         |  | Returns TODO
| getField(name, id)                  |  | Returns the field with **name** and **id** from the *fields array* in the *meta-data*. |
| getCount(cbk, filters, params)      |  | Returns the count of *rows* with the **filters** to be applied (current ones if absent). |
| crosstab(cbk, cbt, filters, params) |  | Loads cross table data from the **cbt** crosstab, for the given **filters**. |
|  |  |

## Other useful methods