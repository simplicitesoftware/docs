Select object
====================

A "service" object is a Simplicity object whose data is based on a service call.   
The name of its table will be **service**.  

It is used to make a service call in order to obtain data without storing it in the Simplicity database.  
The most common use case is to query the referential database services (country database, municipality database, etc.) without having to duplicate the data.  
As many attributes need to be associated with the service object as are returned by the service call, and the names of the attributes need to be mapped to the names received in the flow.    

The service object is seen by the platform as a business object.  
Its class inherits from **com.simplicite.util.ObjectService**.  

The hooks to be implemented are **loadServiceConfig**,**countService()**, **searchService**, **selectService**, **createService**, **updateService**,**deleteService**.  

<div class="warning">Warning, a select object must not have any timestamp attributes. (Object settings: Timestamp=None) or the query must include the attributes</div>


Exercise
====================

- Create a select object to display all the addresses, postal codes, cities and countries of the customers in the `trn_client` table who have placed more than 10 orders.


