Introduction to Frontend Dev
============================

This document presents Simplicité's tools and functionalities that can be used to *customize your UIs* and implement your own designs or looks while still accessing all of Simplicité's back-office features.

## Target Users

The presented functionalities may be used mainly by *web-designers* or *frontend-developers*, in order to possibly answer specific needs that are not covered by Simplicité's default interface.
Most of the following concepts are relying on *web development*, involving both basic web architectures with **HTML**, **CSS** & **Javascript** and more peculiar technologies like *web frameworks*, *CSS preprocessors*.

## Use Cases

The use of such features can be encountered due to various needs, or specific use cases. Those can vary from simple custom widgets within Simplicité's UI to external webpages with access to all of Simplicité's back-office features.

### Visual identity & design guidelines

![](identity-guidelines.png)

When integrating a Simplicité's instance into an existing system with a *distinct identity*, or specific *design guidelines*, you have the possibility to customize and align your instance's UI to those in order to ensure ease of use and familiarity for end-users.
These customizations can extend to the layout and organization of your Simplicité application.

**Example**: the government's interfaces shall follow the *DSFR design guideline*, so they need to align their Simplicité's interface to match it's rules.

![](dsfr-simplicite.png)

### Client-oriented interfaces

![](client-oriented-webpage.png)

If your solution is *client-oriented*, you may benefit from creating a *custom front-end* that is tailored to meet the specific needs of your end-users and possible customers.

**Example**: in case of a system or application containing orders, possibly emitted by clients, you might benefit from having a minimalist webpage using a more *user-friendly* interface than Simplicité's default one.

![](order-internal-page.png)

### Use of specific web technologies

If your teams or organization are committed to a specific technical solution (web frameworks or templates) for design and integration, then you might want to format your interfaces to simplify and optimize the internal development and evolution of your solutions.

**Example**: it is possible that your teams are more comfortable with specific web frameworks like **VueJs**, or even templating frameworks like **Mustache**. Simplicité then allows you to use those to design and develop your specific interfaces.

![](vue-webpage.png)
![](mustache-webpage.png)

## Disposition

In order to properly manipulate and customize your Simplicité applications, it is important to understand how it is organized and rendered. Starting with the **Disposition**, being responsible for serving several **front elements**:

### Major HTML blocks

![](disposition-schema.png)

### CSS stylesheet.s (optional)

### JS script.s (optional)

## Agenda

This part of the documentation follows the following organization and flow:

### Basic customizations

1 - *Theme Editor*; presents the tool and illustrating how to modify the general theme and to adjust specific elements.
2 - *Addons*; explains how to specificaly customize micro-interactions or overriding foundational styles with *{less}*
3 - *Widgets Integration*; shows the workflows to integrate existing Simplicité's widget in order to understand the logic behind the integration of external objects.

### Advanced customizations

1 - *Widgets Creation*; understanding how to design and implement custom tools such as widgets or dashboards.
2 - *Responsive External Objects*; presents how to create and manage responsive, external design elements for seamless integration.
3 - *External Webpages (Native)*; shows and illustrates how to develop specific pages fully connected and integrated into your Simplicité's application.
4 - *External Webpages (Framework*); explains how to do the same as *3* but using web frameworks instead of native configurations.dsfr.

### Other relevant lessons

* !(**External Objects (Tutorial)**)[https://https://docs.simplicite.io/lesson/tutorial/development/external-object]
* !(**Responsive UI (Documentation)**)[https://docs.simplicite.io/lesson/docs/ui/responsive]
* !(**Custom UI disposition (Documentation)**)[https://docs.simplicite.io/lesson/docs/core/disposition-code-examples]
* !(**Core Javascript (Documentation)**)[https://docs.simplicite.io/lesson/docs/core/javascript-code-examples]
* !(**Interface tool `$ui` (Documentation)**)[https://docs.simplicite.io/lesson/docs/core/ui-tools-code-examples]
* !(**Custom Services through External Objects (Dodumentation)**)[https://docs.simplicite.io/lesson/docs/integration/webservices/custom-services]
* !(**Ajax API (Documentation)**)[https://docs.simplicite.io/lesson/docs/integration/librairies/ajax-api]
