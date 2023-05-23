Datamap
====================

A Datamap allows to link/copy fields by value (not by reference) from an object A to an object B. 


In which case do we use a mapping?
- When the relationship between 2 objects is not possible or does not make sense
- When you want a copy by value
- To display a list of values without having to persist the data of the list in the database (service call for example)

The Datamap uses a particular instance of the object.
The hook **initDataMapSelect** allows to overload the standard behavior of the Datamap.


Exercise
====================

- Go to the AppStore and install the ISO Countries module and its dataset
- Create a `trnCliCountry` field in the `TrnClient` object
- Create a `TRNCOUNTRYDM` mapping that maps the `trnCliCountry` source field to the `isoCtyName` attribute of the ISOCountry object  