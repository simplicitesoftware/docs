Additional datasources howto
============================

This document shows how to configure additional datasources that can be used to configure Simplicité business objets that points to remote databases.

<h2 id="tomcat">Context-level configuration for Tomcat</h2>

You can manually put additional datasources resources in the deployed `META-INF/context.xml` (refer to Tomcat documentation for details)

<h2 id="config">Configuration-level configuration</h2>

As of version 3.1 it is possible to configure additional datasources either as environment variables or as system parameters.

<h3 id="postgresql">PostgreSQL</h3>

For instance, if you configure a `MY_PGSQL_DATASOURCE` for a **PostgreSQL** database as:

```json
{
	"driver": "org.postgresql.Driver",
	"username": "<username>",
	"password": "<password>",
	"url": "postgresql://<host>:<port>/<database>"
}
```

You can then configure a business object with `MY_PGSQL_DATASOURCE;[<schema name>.]<table name>` in the table name.

<h3 id="mysql">MySQL/MariaDB</h3>

Or, for instance, if you configure a `MY_MYSQL_DATASOURCE` for a **MySQL/MariaDB** database as:

```json
{
	"driver": "com.mysql.jdbc.Driver",
	"username": "<username>",
	"password": "<password>",
	"url": "mysql://<host>:<port>/<database>?autoReconnect=true"
}
```

You can then configure a business object with `MY_MYSQL_DATASOURCE;<table name>` in the table name.

<h3 id="oracke">Oracle</h3>

Or, for instance, if you configure a `MY_ORACLE_DATASOURCE` for an **Oracle** database as:

```json
{
	"driver": "oracle.jdbc.driver.OracleDriver",
	"username": "<username>",
	"password": "<password>",
	"url": "oracle:thin:@<host>:<port>:<database>"
}
```

> **Note**: it is, in general, recommended that you use the Oracle JDBC driver that exactly matching your Oracle server version.

You can then configure a business object with `MY_ORACLE_DATASOURCE;[<schema name>.]<table name>` in the table name.

<h3 id="sqlserver">Microsoft SQLServer</h3>

Or, for instance, if you configure a `MY_SQLSERVER_DATASOURCE` for an **Microsoft SQLServer** database as:

```json
{
	"driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver",
	"username": "<username>",
	"password": "<password>",
	"url": "sqlserver://<host>:<port>;database=<database>"
}
```

You can then configure a business object with `MY_SQLSERVER_DATASOURCE;[<schema name>.]<table name>` in the table name.

<h3 id="extjdbc">External JDBC driver</h3>

As of version 5.0, you can specify an external location for the JDBC driver location of the datasource:

```json
{
	...
	"jdbc": "</path/to/myjdbcdriver.jar>"
}
```
