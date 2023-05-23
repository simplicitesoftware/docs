Treeview - Treeview
====================

Treeviews can be set up from the **Interface / Treeview** menu. 
The Treeview allows you to list different business objects in a tree-like list.  
There are 3 ways to set up the parameters:  
- Manual**: The setting of the nodes is manual and strictly interpreted. 
- All**: If only the first node is set up, the other nodes are interpreted by the platform via the 1,N or N,N links following the foreign keys of the first node. The tree view also displays the specific actions set on the nodes, the external objects linked, the shortcuts and the related business processes, the sub-trees.
- Relationships only **: The tree is interpreted by the platform, specific actions on nodes, external objects, shortcuts, processes and sub-trees are not displayed.

A tree can be displayed in a split screen (tree/root object form), or in the menu via an external object by specifying the root data (rowid).

The tree view allows: 
- Define a tree between different business objects by following a foreing-keys path: direct father/son link, or via N,N, or via a virtual link or make particular joins (without going through the key, but through another attribute, a date for example...)
- display functional keys in a tree, add actions or styles/decorations...
- to be called by JSON get/save API to retrieve the tree and update it without UI or to make specific publications.

The tree uses a particular instance of the object.
The **getImageTree**, **getStyleTree** hooks allow you to change the standard style of the treeview.

<div class="warning">Reflexive relationships are also traversed, but it is sometimes advisable to create objects dedicated to a given level: objects without a parent first, then their children, otherwise all objects end up on the top object.
Beware recursive traversal can be expensive in performance when there are many levels and many branches (if the lists are paginated or not).</div>


Exercise
====================

- Create a **Manual** tree for the supplier `TrnSupplierTreeview` with its products and orders on its products as nodes.
