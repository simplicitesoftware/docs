Style customization
====================

Theme and theme styles
---------------------------

A theme is an object that defines the logo and the main colors of the interface.It is possible to add a custom stylesheet in LESS or CSS format to the theme which will be applied globally.


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
