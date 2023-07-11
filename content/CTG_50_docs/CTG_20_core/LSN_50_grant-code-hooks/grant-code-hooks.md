Grant/Platform hooks
====================

This document describes the hooks that can be implemented to put some **additional** business logic at user session level.

> **Important**: As of version 5.0, static grant hooks are **deprecated**, they are replaced by the platform hooks singleton with same methods.
> This document describes `GrantHooks` implementation examples but it can be directly transposed to `PlatformHooks`.

None of these hooks **needs** to be implemented. You can implement one or several of these hooks if you want to apply out some
dynamic business logic that goes beyond what can be configured.

These hooks are located in the singleton shared code named `GrantHooks` that can be implemented either in the server-side **Rhino** scripting language or in **Java**.

> **Note**:
>
> Some of the examples below are only given using the server-side **Rhino** scripting language.
>
> The **Rhino**-only code examples can easily be transposed to equivalent **Java** code.
> Some examples are provided both in Rhino and Java so as you can see the syntax differences.
>
> Apart from the variable and methods declarations syntax, the main point of attention is regarding comparisons syntax for **non raw types**:
>
> - Rhino: `a == b`, Java: `a.equals(b)`
> - Rhino: `a != b`, Java: `!a.equals(b)`

<h2 id="authhooks">Authentication hooks</h2>

The `customAuth` (version 3.2+), `parseAuth` (version 3.0+) and `postAuth` (version 4.0+) can be used to implement/customize authentication flows.

Check [this document about custom authentication](/resource/docs/authentication/tomcat-customauth), [this document about OAuth2 authentication](/resource/docs/authentication/tomcat-oauth2)
or [this document about SAML authentication](/resource/docs/authentication/tomcat-saml) for details.

<h2 id="startpagehook">Start page hook</h2>

The `customStartPage` platform hooks only exists in version 5.0+. It allows to implement a custom low-level start page `/` instead of the default start page that only redirects
to `/ui/`.

Note that similar start page customization can also be achieved at a higher level by implementing the `displayPublic` hook of a disposition associated to the `public` user.

<h2 id="rightshooks">User rights hooks</h2>

### `preLoadGrant` &amp; `postLoadGrant`

Two hooks can be used to dynamically customize the user rights.

The `preLoadGrant` is called **before** actually loading the user rights (at that stage the user is authenticated and the platform only knows its login).

Example:

```javascript
GrantHooks.preLoadGrant(g) {
	var login = g.getLogin();
	// e.g. load custom responsibilities and user profile
}
```

The `postLoadGrant` is called **after** the user rights are loaded (responsibilities, system parameters...).

Example:

```javascript
GrantHooks.postLoadGrant(g) {
	console.log("Hello " + g.getFirststName() + "!");
	// e.g. add custom rights...
}
```

<h2 id="menuhooks">Menu hooks</h2>

### `isMenuEnable`

This hook can be used to dynamically disable a menu item.

It is called for each granted menu item for considered user.

Example:

```javascript
GrantHooks.isMenuEnable(g, domain, item) {
	// Example to hide to group SIMPLE_USER the Product in the Marketing domain.
	if (g.hasResponsibility("SIMPLE_USER") && domain=="DomainMarketing" && item=="Product")
		return false;
	return true;
}
```

<h2 id="searchhooks">Fulltext search hooks</h2>

### `preSearchIndex` &amp; `postSearchIndex`

These hooks change the result of a fulltext search. The `rows` argument is a `Vector` of `SearchItem`.

Example:

```javascript
GrantHooks.postSearchIndex = function(g, rows) {
	// Access to the default result
	for (var i=0; rows && i<rows.size(); i++) {
		var item = rows.get(i);

		// Change anything to display here...
		console.log("score "+item.score);   // Optional scoring
		console.log("object "+item.object); // Optional object name
		console.log("row_id "+item.row_id); // Optional row_id
		console.log("key "+item.key);   // Item unique key
		console.log("ukey "+item.ukey); // Default user key to display
		console.log("data "+item.data); // Default payload or summary to display
		if (item.values) {
			//... Optional object values as a List of String
		}	
	}
	
	// Sample to add an item on top
	var item = new SearchItem();
	item.score = "1000";
	item.ukey = "The best item";
	item.data = "This item is always returned...";
	if (rows) rows.add(0,item);
	
	return rows;
}
```

<h2 id="otherhooks">Other hooks</h2>

### `validatePassword`

This hook is called when a password change is attempted, it can be used to implement custom rules for password fomat validation:

```javascript
GrantHooks.validatePassword = function(g, pwd) {
	if (pwd.indexOf("_") < 0) return "A good password must include an underscore!";
};
```

It can returns either a single error message (like in the example above) or an array of error messages.
An error message can either be a hard-coded label (like in the example above)
or, better, the code of a configured static text (so as it is displayed in the user's language).
Otherwise, it must either return nothing (like in the example above) or an explicit `null` value to indicate that the password is accepted. 

The default system-level implementation for password validation is that a password must have at least 8 digits.
The error(s) returned by the above hooks are **added** to the default error message returned when password length is less than 8 digits.

### `logout`

This hook is called when an explicit or implicit logout occurs (it is called just before the session is dropped)

```javascript
GrantHooks.logout = function(g) {
	console.log("Bye bye " + g.getLogin() + "!");
};
```

### `downloadDocument`

This hook is called when a document download has been requested and has been successfully checked (versions 3.2+):

```javascript
GrantHooks.downloadDocument = function(g, doc) {
	if (doc.getObjectRef() == "MyObject")
		console.log("The doc " + doc.getId() + " from object " + doc.getObjectRef() + " has been downloaded by " + g.getLogin());
};
```