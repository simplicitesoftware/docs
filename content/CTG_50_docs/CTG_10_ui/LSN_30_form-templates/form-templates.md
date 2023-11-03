Business objects form templates
===============================

This document explains the business object form template configuration capabilities.

Basics
------

A business object has a form template which is a HTML fragment including special tags.

### Field zones

The basic tag is the **field zone** tag `[AREA:n]`, this will tell the platform to display all object fields of zone number `n` in this form area.
For instance:

```html
<div class="area" style="background-color: red; padding: 20px;">[AREA:1]</div>
<div class="area" style="background-color: green; padding: 20px;">[AREA:2]</div>
```

<!-- 
### Panels lists

**TO BE COMPLETED**

### Actions

**TO BE COMPLETED**
-->

Advanced
--------

### Sub-areas

It is possible to embed template fragments within templates:

<!-- 
**TO BE COMPLETED**
-->


### External components

Form templates allow to integrate external web-based components. For instance the following template will display a Google map:

```html
<div class="area">[AREA:1]</div>
<iframe name="gmap" frameborder="0" scrolling="no" style="width: 400px; height: 300px; border: solid 1px gray"></iframe>
<script type="text/javascript">
function page_loaded() {
	var a = getFieldValue("myAddress1") + ", " + getFieldValue("myZipCode") + " " + getFieldValue("myCity") + ", " + getFieldValue("myCountry");
	var u = "../PUB_gmap.jsp?address=" + urlEncodeParam(a) + "&info=" + urlEncodeParam(a);
	openInFrame(window.frames.gmap, u + "&width=400&height=300&title=false");
}
</script>
```

### Resources

Javascript or CSS stylesheets resources can also be attached to a business object.

The javascript resource with the `SCRIPT` code is automatically included in the object form template.

The CSS stylesheet resource with the `STYLES` code is also automatically included in the object form template.

Other resources needs to be explicitly included using HTML include tags like:

```html
<script type="text/javascript" src="[JSRESOURCEURL:<JS resource code>]"></script>
```

or 

```html
<link  type="text/css" rel="stylesheet" href="[CSSRESOURCEURL:<CSS resource code>]"/>
```

