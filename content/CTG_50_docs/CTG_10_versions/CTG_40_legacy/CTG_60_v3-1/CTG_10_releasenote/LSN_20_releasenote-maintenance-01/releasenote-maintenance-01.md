Version 3.1 maintenance 01 release note
=======================================

Changes
-------

<div id='mailservice'/>

### Mail service settings as system parameter

It is now possible to configure mail service using the `MAIL_SERVICE` system parameter, check [this document](/resource/docs/misc/email-howto) for details.

<div id='datasources'/>

### Additional datasources as system parameters

When using Apache Tomcat, it is now possible to configure additional datasource using system parameters, check [this document](/resource/docs/misc/datasources-howto) for details.

<div id='ean'/>

### Added lib and helper class for handling EAN Barcodes

The open source Barcode4J has been included and an associated `com.simplicite.util.tools.BarcodeTool` helper class has been added.

<div id='online'/>

### Online Javadoc and JSDoc

The Javadoc and JSDoc buttons of the editor page are now on the [online resources](../../).

If you still need local Javadoc and JSDoc you can set the `JAVADOC_LOCATION` and `JSDOC_LOCATION` to a local URL or relative web path.

If you use default online Javadoc you benefit from the direct class search feature which is available by clicking on the _Javadoc_ button
on the script editor page when you have highlighted the name of the class you look for.

### TinyMCE as HTML Rich editor

We switch to <a href="http://www.tinymce.com" target="_blank">TinyMCE</a> as editor for HTML field. It provides HTML5 support, better copy-paste features and generates compliant HTML code.

2 system parameters are available to customize the available plugins and toolbar of the editor.
* HTML_EDITOR_PLUGINS
* HTML_EDITOR_TOOLBAR

Default values can be seen on the <a href="http://www.tinymce.com/tryit/basic.php" target="_blank">basic example page</a>.
You can also find <a href="http://www.tinymce.com/wiki.php/Plugins" target="_blank">a list of available plugins</a> to use.

<!-- **TO BE COMPLETED** -->

Fixes
-----

- Field rendering: Integer with rendering Euro displays now the thousands separator
