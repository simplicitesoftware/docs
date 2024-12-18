Javascript Development
======================

This document presents the base & guidelines to javascript development within Simplicité. As the main use for it is the implementation of specific interactions for different external objects. Here we will provide an understanding of how javascript codes are handled within Simplicité, giving some guidelines for your developments and tips on how to work with javascript for your external objects.

> **Quick Tips:**
> * Always align your customizations with Simplicité's documented best practices to ensure compatibility and upgradability. Keep your JavaScript code modular and maintainable, making it easier for future developers to adapt or debug.
> * Before delving into javascript dev, make sure the specific behaviors and possible features you want to implement within your Simplicité application don't have a possible implementation with Simplicité's features !

# NPM Library

Simplicité NPM library serves as a bridge to integrate JavaScript functionalities into Simplicité applications, both in front-end & back-end contexts. By default it is installed for everything within your instances and applications.
[Here](https://www.npmjs.com/package/simplicite) you will find the node.js® & browser JavaScript API client module for the Simplicité® platform.

The basic usage for the *JavaScript API client module* is the following:

```javascript
import simplicite from 'simplicite';

const app = simplicite.session({ url: '<my instance base URL>' });

try {
  const user = await app.login({ username: '<my username>', password: '<my password>' });
	console.log('Hello ' + user.login + '!');
	const obj = app.getBusinessObject('MyObject');
	const list = await obj.search();
	// Do something with the search results list
} catch (err) {
  console.error(err.message);
}
```

It provides several APIs for:
- **Authentication** to manage user session programmatically.
- **Object Handling**, performing *CRUD* operations on Business Objects.
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

## More Examples

If you want to have a larger amount of examples don't hesitate to go on the `test/test*js` file from the [Github repository](https://github.com/simplicitesoftware/javascript-api) to see other basic usage examples and start playing with the library.

If you want more advanced examples for different usages, you can check the existing demos:

* **Server-Side:**

* **Client-Side:** several front-end demos are available for this case; 

- [Plain Web](https://github.com/simplicitesoftware/web-demo) 

- [Vue.js](https://github.com/simplicitesoftware/vue-demo)

- [React](https://github.com/simplicitesoftware/react-demo)

- [Angular](https://github.com/simplicitesoftware/angular-demo)

* **Native:** this [git repo](https://github.com/simplicitesoftware/react-native-demo) is a basic native front-end demo written in *React Native* for a Simplicité use case.

# Core Javascript usages

Below are explained some of the main contexts in which javascript development will be encountered and needed. As Simplicité is mainly based on Java development, the use cases for javascript coding are more specific to **External Objects** and correlated to front-end development within Simplicité.

## External Objects (within Simplicité)

The main utility for javascript development within Simplicité is the implementation of custom behaviors for your **External Objects** that you want to embed within Simplicité (so of type `com.simplicite.webapp.web.widgets.ResponsiveExternalObject`), this is shown in the [UI Component](https://docs.simplicite.io/lesson/docs/front/ui-component) lesson.

The javascript development will happen within the *SCRIPT* resource of your *External Object*, and will allow you to do two things:

* **Customized Behaviours:** first, you are gonna be able to apply custom behaviors and interactions for your custom object
* **Communicate with Simplicité:** then, you will be able to make your widget even more interactive by allowing it to discuss in various ways 

In this case, you can declare all your javascript code within the *SCRIPT* resource, make sure that you respect common rules and methodologies, so define your methods thoughfully, don't make redundant code, don't hesitate to document your code and make reusable functions in case you need it.

**Example Code:** Displaying a list of the DemoProducts objects, with only the name and price.

* HTML content of the custom widget:
```html
<!-- Starting with an empty object that we'll fill using Javascript -->
<div id="mycustomwidget">
  <div id="mycustomwidget-productlist"></div>
</div>
```

* JS instantiation script of the custom widget:
```javascript
/* Basic javascript simply fetching and displaying the DemoProduct Business Objects */
let app = $ui.getApp();
let prdList = app.getBusinessObject("DemoProduct");
products.search(function(){
  for (let i=0; i<products.list.Length; i++)
  {
    const prd = products.list[i];
    document.getElementById("mycustomwidget-productlist").insertAdjacentHTML(
      'beforeend',
      `<div class="mycustomwidget-product>
        <span class="mycustomwidget-product-name">${prd.demoPrdName}</span>
        <span class="mycustomwidget-product-name">${prd.demoPrdUnitPrice}</span>
      </div>`
    );
  }
}, null, {});
```

* CSS stylesheet of the custom widget:
```css
/* Simple yet good looking Styles for our objects */
#mycustomwidget {
  width: 100%
}
.mycustomwidget-product {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-color:rgb(228, 228, 228);
  color: rgb(36, 36, 36);
  border: solid 0.125rem rgb(36, 36, 36);
  border-radius: 0.5rem;
  transition: all 0.25s ease;
}
.mycustomwidget-product:hover {
  border-radius: 1rem;
  transform: scale(1.05);
}
.mycustomwidget-product-name {
  font-size: 1.25rem;
}
.mycustomwidget-product-price {
  font-size: 1rem;
}
```

## External Objects (external pages)

Another slightly different case of javascript development within Simplicité can be the implementation of **External Object** being used as *external pages* (so of type `com.simplicite.webapp.web.WebPageExternalObject`), furtherly explored in the [External Pages](https://docs.simplicite.io/lesson/docs/front/external-pages) lesson.

Indeed, the development of a whole web-page isn't quite the same as the development of an embedded widget. First of all you'll have your javascript acting solely as *client-side* script, with a dedicated *server-side* script in Java.

## UI Tools