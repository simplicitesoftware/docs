Service Object 
====================

Service objects are a special case of business objects. 
Service objects are remote objects accessible for read-only. They can, for example, be used to initialise the value of attributes by setting datamap.  
They can be enabled, accessible from a menu.

There are several types of service objects.
- Remote objects hosted on another simple instance
- Opendatasoft objects (https://data.opendatasoft.com/pages/home/) 
- REST service objects resulting from REST service calls
- SalesForce service objects
- LDAP service objects

The service objects are set up in the same way. The object has a logical name, its table defines the called service, the searchspec or filter defines the service (url, credentials, other options).
- For Simplicity objects the table will be **service-simplicit**, the filter must have the credentials and the url of the instance
- For opendatasoft objects the table will be **service-opendatasoft**, the filter will be the name of the dataset
- For REST objects the table will be **service-rest**, the filter will be the configuration of the url and credentials
- For SalesForce objects the table will be **service-salesforce**, the filter will be the SalesForce object name and credentials
- For LDAP objects the table will be **service-ldap**, the filter will be the configuration of the url and credentials




Exercise
====================

- Create a service object from the Demo instance. (url + credentials to be provided)
- Create a service object opendatasoft communes-france@agriculture-opendatapaysbasque. Create a datamap so that the client's city is a selection of communes from this dataset.  
- Create a REST service object https://api.insee.fr/entreprises/sirene/V3




