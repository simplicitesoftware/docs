UI Component
============

This document outlines the process of using **External Objects** to design and implement custom widgets from scratch. It breaks down the important steps to create interactive objects to thoroughly address the *creation*, *integration* and the *implementation* processes.

Following this, it will explore how to make these widgets dynamic by incorporating *interactive behaviors*, and seamless communication with Simplicité's backend and features.

## Use Case Scenarios

The need for custom widgets typically arises when existing Simplicité components do not fully meet your requirements. These scenarios may include the need to display information in a particular format, implement specific functionalities that are incompatible with the desired UI, or combine features in ways that the default options do not support.

> ***Note:*** Such requirements are often niche. Most technical operations can already be accomplished using Simplicité's core functionalities. Consequently, the primary purpose of creating custom widgets is to address unique visualization needs, enabling you to embed tailored styles and feature combinations within a custom interface.

### Our Example: Welcome Card

![](welcome-card-result.png)

It is a *highly customizable* element that can be styled to align with the platform's visual identity, offering users an engaging entry point. Depending on the context, its design can include specific elements to match your graphic identity, or interactive icons to reflect the application's tone or purpose.

For instance, a business-oriented platform might feature a professional and minimalist style, while a creative application might opt for bold, vibrant visuals to set an energetic tone. It can also integrate unique ways of calling objects, such as clickable shortcuts or personalized greetings.

## Implementation (Welcome Card)

The creation process is quite straightforward, as it is a specific type of **External Object**, it is mainly instantiating a new external object with specific values and then implementing the content and styles for the widget we want.

### External Object Creation

![](welcome-card-object-form.png)

Start by creating an **External Object**, and make sure it is of nature *UI page or component*, and of class `com.simplicite.webapp.web.widgets.ResponsiveExternalObject`. Also make sure that the *UI widget* field is set to *Yes*.

Another important step is to grant your widget the rights of the module and view you want to embed it in. This way you won't have troubles integrating it to your application. To do so navigate to your object's tab, in the *Permissions* section, and add all the ones you need.

![](welcome-card-permissions.png)

### Adding Content & Styles

Then use the *Create Resources* action button, and click *Yes*. By doing so, you are adding 3 files to your object's *Resources* (visible in the bottom tab section "Resources"):

- **HTML**; the *HTML* file in which you can define the content for your object. By default it just contains the `<div id="ext-obj"></div>` in which you can put whatever style you want.

- **STYLES**; the *CSS* file that serves as stylesheet for your object. There are no default style defined, only an empty bracket `#ext-obj { /* Custom styles */ }`.

- **CLASS**; the *Javascript* script that will be useful for the next lesson. 

![](welcome-card-resources.png)

> ***Note:*** The ressources are organized as any web element, in order to be easily integrated and created by designers and frontend developers.

For the welcome card, both content and style ressources are quite easy to create. Below are the *HTML* and *CSS* codes.

```html
<div id="customwelcomecard">
	<span class="welcome-title">Welcome User</span>
    <span class="welcome-text">
        Welcome to Simplicité's solution! We're excited to have you onboard. Explore, interact, and enjoy a seamless experience tailored for you.
    </span>
    <div class="welcome-buttons">
        <button class="welcome-btn tuto" onclick="">Get Started (Tutorial)</button>
        <button class="welcome-btn prd-nav" onclick="">Products List</button>
        <button class="welcome-btn info" onclick="">My Informations</button>
    </div>
    <div id="welcome-list" hidden></div>
</div>
```

<details>
<summary>CSS Stylesheet</summary>
	
```css
#customwelcomecard {
	display: flex;
	flex-direction: column;

	width: 100%;
	padding: 1rem 2rem;

	justify-content: start;
	align-items: center;
}
.welcome-title {
	width: 100%;
	color: #303030;
	text-align: center;
	font-size: 3.5rem;
	border-right: solid 0.25rem #5451FF;
}
.welcome-text {
	padding: 0rem 1.5rem;
	color: #474747;
	text-align: left;
	font-size: 2rem;
	margin-bottom: 1rem;
	border-right: solid 0.25rem #58EC9B;
}
.welcome-buttons {
	display: flex;
	flex-direction: row;
	width: 100%
	justify-content: center;
	align-items: center;
	gap: 3rem;
	margin-top: 2rem;
}
.welcome-btn {
	position: relative;
	padding: 1.5rem 3rem;
	border: none;
	color: #303030;
	background-color: transparent;
	overflow: hidden;
	cursor: pointer;
	text-align: center;
	font-size: 2rem;
}
.welcome-btn::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 0.25rem;
	height: 100%;
	background-color: transparent;
	border-left: solid 0.25rem transparent;
	border-bottom: solid 0.125rem transparent;
	transition: all 0.5s ease;
}
.welcome-btn:hover::before {
	border-left-width: 1.5rem;
}
.welcome-btn:active::before {
	border-left-width: 3rem;
}
.tuto {
	background-color: #FFF6E0;
	transition: all 0.25s ease;
	&:active {
		background-color: darken(#FFF6E0,4%);
	}
	&::before {
		border-color: #FFD166;
	}
}
.info {
	background-color: #FBEBFB;
	transition: all 0.25s ease;
	&:active {
		background-color: darken(#FBEBFB,4%);
	}
	&::before {
		border-color: #EC9DED;
	}
}
.prd-nav {
	background-color: #FED7D9;
	transition: all 0.25s ease;
	&:active {
		background-color: darken(#FED7D9,4%);
	}
	&::before {
		border-color: #FB3640;
	}
}
```
</details>

## Integration (Welcome Card)

As for the *creation process*, the process of integrating the created widget is very straightforward, everything will be done in the *User Interface > Views > Show All*, select a view that is of type *Home Page*, and click the *Edit View* action button:

1 - Add a new **Sub-View**.
2 - Make it of type **External Page**.
3 - Select *External Object* as Source.
4 - Fill the *External Object* field with the name of your widget (for the welcome-card use **CustomWelcomeCard**).
5 - Save it, and you shall see a preview of your object integrated within the view.

> ***Warning:*** Make sure to grant the rights for your external object !
> - If encountering the *External object ____ not granted*, first try to clear your cache.
> - If clearing cache wasn't the solution check for your object's rights, and make sure that they matches the ones of your application.

The creation of an object's behavior and interaction within one Simplicité application sure comes along with the creation of its content & styles. Though it requires a bit more understanding of how Simplicité is organized and how to communicate properly and access the informations.

## Implementation (Welcome Card)

The first step is to make sure that our object can be aware of the Simplicité's system that he is a part f. To make such things we are gonna use the *javascript* resources of our External Object: **extobj_script** or **CLASS** or **SCRIPT**.

### File structure

The created *javascript* file initially contains only the base structure to later implement whatever we want in our object:

```javascript
class CustomWelcomeCard extends Simplicite.UI.ExternalObject {
	async render(params, data = {}) {
		$('#demowelcomecard').append('Hello world!');
	}
}
```

* The class extends the `Simplicite.UI.ExternalObject` class, so the object is set to access all (possibly needed features)[]
* Only the `render(params, data)` function is declared yet, as it is the one called inside the server-side java code resource `com.simplicite.webapp.web.ResponsiveExternalObject`.

But for simple embedded *External Objects* we can use a slightly simpler setup, by simply declaring our object as a peculiar namespace in which we'll declare everything we need to ensure it is only related to our object:

```javascript
var CustomWelcomeCard = (function(){
	return {};
})();
```

### Accessing the current session

The communication with Simplicité's environment is allowed by using the `$ui` call within our object's class extending `Simplicite.UI.ExternalObject`. And we get the current session by using the `getApp()` function, returning the current `Simplicite.Ajax` instance.

From the previous example we just need a small improvement, adding the `let app= $ui.getApp()` line to instantiate a reference to the current Simplicité session:

```javascript
var CustomWelcomeCard = (function(){
	let app = $ui.getApp();
	
	return {};
})();
```

### Manipulating Business Objects

As they are a core element of any Simplicité application, it is important to know how to get and use them properly within any **External Object**. In order to do so you first need to have your app declared above, `let app = $ui.getApp();`, and then the method is `getBusinessObject(string name)`, thanks to which you can fetch all the Business Objects having the wanted `name`. 

By doing so, you are gonna get a variable of type `[object Object]`, that is organized as follows:
```json
{
	"count": <INT>, // count of BusinessObjects with this name & applied filters
	"crosstabdata": {},
	"filters": {}, // applied filters in the 'search' call
	"item": {},
	"list": [<OBJECT>...], // array of all the BusinessObject
	"locals": {},
	"maxpage": <INT>,
	"metadata": {
		"name": <STRING>, // BusinessObject's name
		"instance": <STRING>, // Instance where object is located
		"rowidfield": <STRING>, // Id of the object within the Database
	},
	"page": <INT>,
	"selectedIds": <ARRAY>,
	"_app": {
		// specific parameters of your app
		"_errorActive": <BOOL>, "_warningActive": <BOOL>, "infoActive": <BOOL>, "_debugActive": <BOOL>, "_approot": <STRING>, // ...
	}
}
```

> This is the example organization for the **DemoProduct** Business Object, some things might defer from one object to another, but still it is roughly the same for all.

The next step is so to fetch the different instances of our business object, which are stored in the `list` array of our Business Object. But for manipulating our objects this way, you have to use the `search()` method from the BusinessObject class. This methods will start searching through the declared Business Object, and it's within this method that you will declare your related code:

```javascript
businessObject.search( function() {
    for (let i=0; i<businessObject.list.Length; i++)
    {
        const objectInstance = businessObject.list[i];

        // manipulate your object here
    }
});
```

And the final step to access your different objects from here is to know how they are organized, and that you can do within the Simplicité's designer UI, as when declaring your object, each field and attribute of it has followed specific naming rules: 
- A Business Object from the module *Demo* with the name *Product* and Prefix *prd* will always have its fields start with **demoPrd**.
- If you have links between your Business Objects, for example if  your *DemoProduct* as several fields from *DemoSupplier* using the key **demoPrdSupId**, these fields will be accessible from javascript by using `demoPrdSupId__*` where `*` is the name of your field (let's take **demoSupName** for example).

> ***Note:*** If you want to access this without having to think of the possible names you had, or if you are unsure about your fields, you can chekc them from a *designer* scope, by going to **Business Objects > Your Object"* and then in the bottom tabs, select *Object Fields* to have the list of all fields and the possible links (example below).

![](demo-prd-fields-list.png)

Now here is how we implemented a simple product fetching & display function within the **CustomWelcomeCard** External Oject using the previously explained methods:

```javascript
function displayProductsWithin()
{
	var app = $ui.getApp();
	let productdBusinessObject = app.getBusinessObject("DemoProduct");
    
	productdBusinessObject.search( function() { //Here it is important to put the function here and not outside, so the search() operation is actually done before accessing the object, otherwise you might access a non-updated (empty) version of your object.
		document.getElementById("welcome-list").hidden = false;
		
		console.dir(productdBusinessObject);
		
		for (let i=0; i<productdBusinessObject.list.length; i++)
		{
			const prd = productdBusinessObject.list[i];
			console.log(`prd_${i}:\n${JSON.stringify(prd)}`);
			
			document.getElementById("welcome-list").insertAdjacentHTML(
		        'beforeend',
		        `<div class="welcome-product-card">
		        	<div class="welcome-prd-card-left">
		        		<div class="prd-card-left-header">
		        			<div class="prd-card-left-header-texts">
		        				<span class="card-left-header-prd-name">${prd.demoPrdName}</span>
		        				<span class="card-left-header-prd-type">${prd.demoPrdType}</span>
		        			</div>
		        			<span class="card-left-header-prd-price">${prd.demoPrdUnitPrice}</span>
		        		</div>
		        		<div class="prd-card-left-body">
		        			<span class="card-left-body--prd-descr">${prd.demoPrdDescription}</span>
		        		</div>
		        	</div>
		        </div>`
		    );
		}
	}, null, {});
}
```

![](welcome-product-cards.png)

Additionaly we create the corresponding styles for the product card we are dynamically adding:

<details>
<summary>CSS styles</summary>

```css
.welcome-product-card {
	display: flex;
	flex-direction: row;
	width: 25%;
	gap: 1rem;
	padding: 2rem;
	font-size: 2rem;
	background-color: rgba(226, 226, 226, 0.24);
	border-left: solid 0.125rem #E2E2E2;
	box-shadow: none;
	
	transition: all 0.33s ease-in;
}
.welcome-product-card:hover {
	transform: scale(1.05);
	box-shadow: 0rem 0rem 0.5rem rgba(0,0,0,0.25);
	border-left: solid 0.125rem #777777;
}
.welcome-prd-card-left {
	display: flex;
	flex-direction: column;
}
.prd-card-left-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: start;
	margin-bottom: 0.5rem;
}
.prd-card-left-header-texts {
	display: flex;
	flex-direction: column;
	text-align: left;
}
.card-left-header-prd-name {
	font-size: 1.25rem;
	font-weight: bold;
}
.card-left-header-prd-type {
	font-size: 0.6rem;
	font-style: italic;
}
.card-left-header-prd-price {
	font-size: 0.75rem
	text-align: right;
}
.prd-card-left-body {
	text-align: left;
	font-size: 1rem;
}
```
</details>

> ***Note:*** The way to input HTML from javascript is your choice, here we did it this way to ease the understanding from an external perspective.

### Displaying Content

Another interesting possibility is to implement custom shortcuts from our widgets, basically to redirect to any display Business Object's form, or even redirect to more general parts of the solution.

Such interactions can be done using the `BusinessObject.displayForm()` or `BusinessObject.displayList()` methods. The use case for displaying **Products' Form** is pretty straightforward:

```javascript
document.getElementById("welcome-list").insertAdjacentHTML(
    'beforeend',
    `<div class="welcome-product-card" onclick="CustomWelcomeCard.goToProductForm(${prd.row_id})">
    . . . `
);

// ... end of function & rest of code ...

function goToProductForm(prdRowId) {
	$ui.displayForm(null, "DemoProduct", prdRowId, {
		nav: "add",
		target: "work"
	});
}
```

The `display` methods available for **Business Objects** are all working as follows; specify the name of the Business Object, the `row_id` of the specific instance of this object, and then some options as `nav` --that defines the behavior regarding the navigation element (breadcrumb)-- or `target` --that specifies the UI area in which the form will be displayed (`"work"` is the only appropriate for forms, lists etc)--.

### Getting User Infos

Keeping the idea of redirecting our user, we will implement a slightly different interaction; displaying the current user's form. Such feature will require us to get the currently logged user, and to do so here is a simple script workflow:

```javascript
let grant = $ui.getGrant(); // can be removed if using $grant
let currentUserLogin = grant.login; // equivalent: $grant.login

let userBusinessObject = app.getBusinessObject("User");
```

Then thanks to the following script, we can easily use the previously fetched informations to properly display the currently logged user's form:

```javascript
userBusinessObject.search( function(){
	const user = userBusinessObject.list.find(u => u.usr_login === currentUserLogin);
	
	if (user && user.row_id) {
		$ui.displayForm(null, "User", user.row_id, {
			nav: "add",
			target: "work"
		});
	} else {
		console.error("User not found.");
	}
}, null, {});
```

## Final Welcome-Card

After all that we should be done with the implementation of our customized Welcome-Card widget ! We so have 3 resource files that should look like this:

***HTML*** resource file:
```html
<div id="customwelcomecard">
	<span class="welcome-title">Welcome User</span>
    <span class="welcome-text">
        Welcome to Simplicité's solution! We're excited to have you onboard. Explore, interact, and enjoy your experience with us !
    </span>
    <div class="welcome-buttons">
        <button class="welcome-btn tuto" onclick="CustomWelcomeCard.goToSimpliciteDoc()">Get Started (Tutorial)</button>
        <button class="welcome-btn prd-nav" onclick="CustomWelcomeCard.displayProductsWithin()">Products List</button>
        <button class="welcome-btn info" onclick="CustomWelcomeCard.goToUserInfos()">My Informations</button>
    </div>
    <div id="welcome-list" hidden></div>
</div>
```

***CLASS*** resource file (script):
```javascript
var CustomWelcomeCard = (function(){
	let app = $ui.getApp();
	let grant = $ui.getGrant();
	let productdBusinessObject = app.getBusinessObject("DemoProduct");
	let userBusinessObject = app.getBusinessObject("User");
	let currentUserLogin = grant.login;
	
	function goToSimpliciteDoc() {
		window.open("https://docs.simplicite.io/", "_blank");
	}
	
	function displayProductsWithin() {
		productdBusinessObject.search( function() {
			document.getElementById("welcome-list").hidden = false;
			
			console.dir(productdBusinessObject);
			
			for (let i=0; i<productdBusinessObject.list.length; i++)
			{
				const prd = productdBusinessObject.list[i];
				console.log(`prd_${i}:\n${JSON.stringify(prd)}`);
				
				document.getElementById("welcome-list").insertAdjacentHTML(
			        'beforeend',
			        `<div class="welcome-product-card" onclick="CustomWelcomeCard.goToProductForm(${prd.row_id})">
			        	<div class="welcome-prd-card-left">
			        		<div class="prd-card-left-header">
			        			<div class="prd-card-left-header-texts">
			        				<span class="card-left-header-prd-name">${prd.demoPrdName}</span>
			        				<span class="card-left-header-prd-type">${prd.demoPrdType}</span>
			        			</div>
			        			<span class="card-left-header-prd-price">${prd.demoPrdUnitPrice}</span>
			        		</div>
			        		<div class="prd-card-left-body">
			        			<span class="card-left-body-prd-descr">${prd.demoPrdDescription}</span>
			        		</div>
			        	</div>
			        </div>`
			    );}
		}, null, {});
	}
	
	function goToUserInfos() {
		userBusinessObject.search( function(){
			const user = userBusinessObject.list.find(u => u.usr_login === currentUserLogin);
			
			if (user && user.row_id) {
				$ui.displayForm(null, "User", user.row_id, {
					nav: "add",
					target: "work"
				});
			} else {
				console.error("User not found.");
			}
        }, null, {});
	}
	
	function goToProductForm(prdRowId) {
		$ui.displayForm(null, "DemoProduct", prdRowId, {
			nav: "add",
			target: "work"
		});
	}
	
	return {
        goToSimpliciteDoc: goToSimpliciteDoc,
        displayProductsWithin: displayProductsWithin,
        goToUserInfos: goToUserInfos,
        goToProductForm: goToProductForm,
    };
})();
```

***STYLES*** resource file (stylesheet):
```css
#customwelcomecard {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 1rem 2rem;

    justify-content: start;
    align-items: center;
}
.welcome-title {
	width: 100%;
    color: #303030;
    text-align: center;
	font-size: 3.5rem;
    border-right: solid 0.25rem #5451FF;
}
.welcome-text {
	padding: 0rem 1.5rem;
    color: #474747;
    text-align: left;
	font-size: 2rem;
    margin-bottom: 1rem;
    border-right: solid 0.25rem #58EC9B;
}

/*
	GENERIC BUTTON STYLES
                           */
.welcome-buttons {
    display: flex;
    flex-direction: row;
    width: 100%

    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
}
.welcome-btn {
    position: relative;
    padding: 1.5rem 3rem;
    border: none;
    color: #303030;
    background-color: transparent;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;
}
.welcome-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.25rem;
    height: 100%;
    background-color: transparent;
    border-left: solid 0.25rem transparent;
    border-bottom: solid 0.125rem transparent;
    transition: all 0.5s ease;
}
.welcome-btn:hover::before {
	border-left-width: 1.5rem;
}
.welcome-btn:active {
	&::before {
		border-left-width: 3rem;
	}
}

/*
	SPECIFIC BUTTONS STYLES
                              */

.tuto {
	background-color: #FFF6E0;
	transition: all 0.25s ease;
	&:active {
		background-color: darken(#FFF6E0,4%);
	}
}
.info {
	background-color: #FBEBFB;
	transition: all 0.25s ease;
	&:active {
		background-color: darken(#FBEBFB,4%);
	}
}
.prd-nav {
	background-color: #FED7D9;
	transition: all 0.25s ease;
	&:active {
		background-color: darken(#FED7D9,4%);
	}
}
.tuto::before {
    border-color: #FFD166;
}
.info::before {
    border-color: #EC9DED;
}
.prd-nav::before {
	border-color: #FB3640;
}


#welcome-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	
	justify-content: center;
	align-items: center;
	
	width: calc(100%-2rem);
	
	margin-top: 2rem;
	padding: 2rem;
	gap: 2rem;
}

/*
	PRODUCT CARDS STYLES
                           */
.welcome-product-card {
	display: flex;
	flex-direction: row;
	width: 25%;
	gap: 1rem;
	padding: 2rem;
	font-size: 2rem;
	background-color: rgba(226, 226, 226, 0.24);
	border-left: solid 0.125rem #E2E2E2;
	box-shadow: none;
	
	transition: all 0.33s ease-in;
}
.welcome-product-card:hover {
	transform: scale(1.05);
	box-shadow: 0rem 0rem 0.5rem rgba(0,0,0,0.25);
	border-left: solid 0.125rem #777777;
}
.welcome-prd-card-left {
	display: flex;
	flex-direction: column;
}
.prd-card-left-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: start;
	margin-bottom: 0.5rem;
}
.prd-card-left-header-texts {
	display: flex;
	flex-direction: column;
	text-align: left;
}
.card-left-header-prd-name {
	font-size: 1.25rem;
	font-weight: bold;
}
.card-left-header-prd-type {
	font-size: 0.6rem;
	font-style: italic;
}
.card-left-header-prd-price {
	font-size: 0.75rem
	text-align: right;
}
.prd-card-left-body {
	text-align: left;
	font-size: 1rem;
}
``` 