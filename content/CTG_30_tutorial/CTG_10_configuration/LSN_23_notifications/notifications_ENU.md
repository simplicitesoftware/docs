Notifications
====================

Notifications are configured in **Social > Notifications > Configuration**
They allow to alert a users when an event occurs.

Notifications are linked to a business object, they are triggered by an action (create, update, delete) and depending on an optional condition.

A notification can be sent through multiple broadcast channels and sent to multiple recipients. Its content is defined by language and can be overriden for a particular channel and/or recipient. 

Recipients can be concerned by all of the notification's channels or be set up individually for a more precise configuration per recipient. 

Users have the option to subscribe or unsubscribe from the notifications they receive (via the *Subscriptions* button on their notification list).

The channels :
* Internal : The counter of a bell icon visible in the platform's header is updated with each new notification. Notifications are stored in a system table
* Mail : An email is sent to the recipients of the notification
* Specific : Invokes a method of the business object linked to the notification

Recipients can be :
* User : a named user of the platform
* Group : a group of users
* SQL : the result of an SQL query

Exercise
====================

Create an **internal** notification that alerts users in the **TRN_ADMIN** group when an **order** is **validated** :
1. Configure the notification :
* Name : **TrnOrderValidated**
* Action : **Update**
* Module : **Training**
* Object : **TrnOrder**
* Expression: `[OLDVALUE:trnOrdStatus] == 'P' && [VALUE:trnOrdStatus] == 'V'` *warning: the codes corresponding to the status may be different depending on your configuration* 

2. Configuration of the broadcast channels:
* Associate the channel **Internal**

3. Content configuration:
* Language : **English**
* Module : **Training**
* Subject : *empty* (corresponds to the subject of an email)
* Content: `The [VALUE:trnOrdNumber] order has been validated`.

4. Configuration of the recipients : 
* Order: **10**
* Type: **Group**
* Group: **TRN_ADMIN**

5. Synchronise notification recipients
* Click on the **Synchronise Recipients** action available on the list of notifications

6. Add the **NOTI_READER** group to the **TRN_ADMIN** Profile

7. Clear the cache

Exercise (autonomous)
====================

* Create a notification that alerts users in the **TRN_READONLY** group when the **stock of a product** becomes **lower than 10**. Users should receive an **mail** and an **internal** notification. 
**The content of the email must be different from the content of the internal notification.