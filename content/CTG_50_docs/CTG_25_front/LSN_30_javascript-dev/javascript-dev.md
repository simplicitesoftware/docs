Javascript Development
======================

This document presents the base & guidelines to javascript development within Simplicité. As the main use for it is the implementation of specific interactions for different external objects. Here we will provide an understanding of how javascript codes are handled within Simplicité, giving some guidelines for your developments and tips on how to work with javascript for your external objects.

> Before delving into javascript dev, make sure the specific behaviors and possible features you want to implement within your Simplicité application don't have a possible implementation with Simplicité's features !

# NPM Library

Simplicité NPM library serves as a bridge to integrate JavaScript functionalities into Simplicité applications, both in front-end & back-end contexts. By default it is installed for everything within your instances and applications.
[Here](https://www.npmjs.com/package/simplicite) you will find the node.js® & browser JavaScript API client module for the Simplicité® platform.

It provides several APIs for:
- **Authentication** to manage user session programmatically.
- **Object Handling**, performing CRUD operations on *Business Objects*.
- **Ajax Call** to communicate with Simplicité's back-end in order to fetch data or invoke specific logic.
- **Utilities** in order to acess helper methods for logging, debugging, etc.

***Example:*** Fetching a Business Object
```javascript
const simplicite = require('simplicite');
const session = simplicite.session({ url: 'https://your-instance.simplicite.io', username: 'admin', password: 'password' });

session.login()
  .then(() => session.getBusinessObject('MyObject').search())
  .then(data => console.log('Business object data:', data))
  .catch(err => console.error('Error:', err));
```
# Integrations with Simplicité Framework

Javascript enables integrations with existing frameworks, --both within Simplicité or from third-party libraries-- for enhanced functionality.

This part is especially explored in the [UI Components]() lesson, where we explain how to develop interactive widgets using *javascript*.

## UI Customizations 

The main use for javascript development within Simplicité is for dynamically manipulating the views (using `$ui.views.*`), in order to enhance any user interface.
`
**Example:** Displaying a Chart within a modal:
```javascript
$ui.view.showModal('My Chart', '<canvas id="myChart"></canvas>');
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March'],
    datasets: [{ label: 'Sales', data: [10, 20, 30], backgroundColor: 'blue' }]
  }
});
```

## Back-End Integrations

Thanks to the **Ajax Library** (explanations developped in the next "[Ajax Library]()" lesson), you can use Ajax services using `$ui.getApp()` to call back-end workflows.

**Example:** within an *External Object* you can fetch *Business Objects* or other data from your application's database:
```javascript
let app = $ui.getApp();
let clients = app.getBusinessObject("DemoClient");

clients.search(function() {
  for (var i=0; i<clients.list.Length; i++)
  {
    const cli = clients.list[i];
    console.log(`Client n°${i} is named ${cli.demoCliName}`);
  }
}, null, {})
```

## Use of Third-Party libraries

Simplicité also supports the addition and use of external libraries for extended functionalities.

> Before adding libraries, you might want to check if some parts of it aren't already included in Simplicité. Such practices will help you reduce duplicatas and debugging.

# Common Concepts

In order to properly develop with JavaScript within Simplicité solutions, some concepts are important to understand properly. Knowing the following will help you navigate development more efficiently.

## Object Hooks

> Here is only an overview, you can have more details in the associated Tutorial and lesson about **Object Hooks** in Simplicité [here]().

Hooks in Simplicité allow developers to *extend or modify* the default behavior of *objects* and *fields*. These hooks, such as `onLoad`, `onChange`, and `onSave`, act as entry points where you can inject **custom logic** to adapt the application to *specific requirements*.

For instance, an `onChange` hook can validate field inputs or dynamically fetch additional data when a value is modified. Hooks are defined in the *JavaScript* object corresponding to the Simplicité business object, ensuring that the custom logic is closely tied to the object’s lifecycle. For example, an onLoad hook can be used to pre-populate fields or adjust UI settings dynamically when an object is initialized. By using hooks strategically, you can maintain Simplicité’s standard functionality while adding tailored features.

**Example:** validating a specific field using the `onChange` object hook:

```javascript
MyObject.onChange = function(field, value) {
  if (field === 'myField' && value.length < 5) {
    $ui.alert('Validation Error', 'The value must be at least 5 characters long.');
  }
}
```

## View Manipulations

With the `$ui.views` --mentionned before for UI Customizations-- presented to perform any **integration**, you can also control the display and layout of existing UI components dynamically.

Such manipulations can be used to change the content of a view, by showing or hiding elements based on different conditions.

**Example:**

# Tips & Guidelines

In order to ensure efficient and maintainable development, here are few tips to start off with. 

> Basic development tips are obviously appliable here:
> - Organize & Document your code to structure it and make it more readable to ease your debugging and possible reuse.
> - Test it before deployment to ensure it works as intended in sandbox environments to prevent it from having unintended impacts on production.
> - Try to optimize performances, on one hand by avoiding uneeded heavy behaviors with the back-end, and on the other hand by minimizing DOM manipulations to avoid long loading and possibly bugged interfaces. 

> Always align your customizations with Simplicité's documented best practices to ensure compatibility and upgradability. Keep your JavaScript code modular and maintainable, making it easier for future developers to adapt or debug.

## Working with Hooks

When using the **Object Hooks** to implement specific behaviors for your objects, make sure to inject logic that won't disrupt the standard behavior of Simplicité's objects.

Also make sure to use existing and not already used hooks, or properly override them if it's the case.

## Work with `$ui` effectively

## Fetching data and Ajax requests

## Respect MVC organization

## Security Practices