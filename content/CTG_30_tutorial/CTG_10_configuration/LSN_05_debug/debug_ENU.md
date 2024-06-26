Software quality, tests, logs, debug
===================================

This is not specific to Simplicité, but we will discuss the different ways to ensure the quality of the software.

Code quality
---------------------------

**Unit testing** with JUnit and **code quality analysis** with Sonar is can be found in the documentation.


Functional testing
---------------------------

The functional tests can be done manually as in the previous chapter and this will be the preferred method throughout the tutorial as it is the most direct. It is however possible to automate these tests:
- by testing the UI with tools like Selenium
- by testing the API

<div class="success">It is recommended to perform manual tests in a private browser window to avoid crossover between the test user session and the designer session.</div>

Application logs
---------------------------

Application logs are both a quality assurance tool (it is advisable to monitor the logs and process all warnings and errors) and a debugging tool.

They are available:
- in the browser's JS console if the logged in user is a designer
- via the URL `/ui/logs` which can be opened in another tab

Debug
---------------------------

To diagnose a bug, the two main strategies are :
- observing the logs when reproducing the bug
- step by step debugging, which is considered as advanced usage of the platform

Wether it's due to a problem with the configuration, specific queries or other reasons, one may suspect an error in the construction of the SQL queries. To test the queries:
- if an SQL query fails it will most likely be in the logs
- if it is not a failure but a poorly constructed query that returns no results, it may be useful to enable the `LOG_SQL_USER` system parameter (Configuration > System Parameter) to force all queries to be written to the logs. Be sure to disable this option once the query is retrieved, as this mode is very verbose and will quickly saturate the space dedicated to logs
- test the query via the DBAccess tool (scope "Platform operation" > Home > Actions > Database Access or direct access via the URL '/ui/ext/DBAccess')

Exercise : model completion
====================

Complete the model by creating the Product, Customer and Order objects and all their fields as presented in the previous chapter:
- the mandatory fields are highlighted in red
- the fields forming the functional key of the object are in bold
- do not hesitate to test different types of attributes and to enhance the suggested model
- be aware of naming conventions

<div class="info">In the following chapters, links will be created between the objects and the the fields will be used for business rules.</div>

After each object creation and addition of its fields:
- clear the cache so that the created responsibilities are taken into account
- functionally test the form of each object with the user usertest (private nav.) and create data
- during these tests, check for errors in the logs
- during these tests, analyze the columns and rows created in the database using DBAccess and basic SQL queries like `select * from trn_supplier`

<div class="info">As you follow the contents of the database, you will notice that Simplicité automatically handles 5 technical fields in addition to the parameterized fields: `row_id, created_dt, created_by, updated_dt, updated_by`. The next chapter will go into more detail about the difference between technical key (`row_id`) and functional key (supplier code, customer name+first name, etc.)</div>

Support
====================

As a reminder, if you have any difficulties, the Simplicité design community is active at http://community.simplicite.io