Views
====================

A view is an aggregation of components that can be used:
- a domain home page,
- a group home page,

The main components are:
- predefined searches,
- crosstabs,
- external objects (particular objects allowing, among other things, to create specific components to be inserted in the views)

Scopes
---------------------------

When a user has many groups of rights, it is often useful to offer him a way to limit his rights. For example, an application administrator may want the application to behave as if he were a regular user. This use case is made possible thanks to scopes.

A scope is a group homepage that defines a certain number of active groups. When the user uses this scope, only these groups remain active.

As a designer, it is easy to test this functionality with the scopes already available:
- Application design
- Platform operation
- Rights management
- Simplicité Administrator (wildcard scope where all groups are active)
- etc.

Exercise
====================  

<div class="error"> To set up the view correctly, your development user must have rights to your objects </div>  
  
- create a view `TrnHome` of type `Domain page`
- add two areas to it:
    - the list of current orders via a predefined search
    - the pivot table previously set up
- define this view as the home page of the Training domain (make sure that the domain displays the home page)
- empty the cache and check the presence of the home page
