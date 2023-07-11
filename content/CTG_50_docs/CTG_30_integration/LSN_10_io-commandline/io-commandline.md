I/O services and command line interface (CLI)
=============================================

As of **version 3.0**, usual administrative tasks can be done using the `curl` command line tool using the I/O endpoint.

> **Note**: in version 3.x adding `-b cookies.txt -c cookies.txt` as arguments of the `curl` calls is **required**
> as they allow to re-use the same server session (identified by the `JSESSIONID` cookie).
> In versions 4.0+ a technical session is used to avoid taking care of the session cookie.

As of **version 3.1**, the I/O endpoint supports either I/O authentication (using the I/O password stored in a `EAI <login>:<password>` system parameter, in this case `<credentials>` is `-u <login>[:<I/O password>]`)
or the API endpoint authentication mechanisms described in [this document](/resource/docs/integration/services-auth) (in this case `<credentials>` are API endpoint authentication headers).

As of **version 4.0.P22**, the I/O endpoint does not any longer support API authentication, to use such API authentication you now need to use the I/O service deployed on the API endpoint.

As of **version 5**, the I/O endpoint allows passing a dedicated password as the `io.password` JVM argument or the `IO_PASSWORD` environment parameter
instead of the legacy `EAI *` system parameters.

> **Warning**: In production the I/O endpoint should be restricted only to allowed origins (e.g. using filtering on request's origin IP address or similar approaches).

<h2 id="rights">Rights</h2>

The I/O interface uses, by default, the `system` pseudo user which is only granted the `ADMIN` group, and thus only the groups being part of the `ADMIN` group's profile.

If you get "Object ... not granted" messages, make sure the considered object is allowed to at least one of the groups of the `ADMIN` group profile.

<h2 id="formats">Standard formats</h2>

The standard formats used by the standard I/O imports/exports are described in [this document](/resource/docs/integration/standard-formats)

<h2 id="url">I/O URL</h2>

The `<I/O URL>` used in `curl` commands below is the one available on the I/O endpoint: `http[s]://<host[:port]>[/<app root>]/io`.

As of **version 4.0.P22** it can also be one available on the API endpoint `http[s]://<host[:port]>[/<app root>]/api/io`

> **Note**: all requests to these URL **must** use the `POST` method with multipart for data (this is what does the `--form` arguments passed to the `curl` commands)

<h2 id="imports">Imports</h2>

To import a file `<file>` the command is:

	curl <credentials> --form service=<import command> --form file=@<file> [<extra parameters>] <I/O URL>

Where `<import command>` is one of :

- `xmlimport` : import a **standard XML** file (no extra parameter required)
- `zipimport` : import a **standard ZIP** file (no extra parameter required)
- `csvimport` : import a single object's **standard CSV** file with `<extra parameters>` = `--form object=<object name>`
- `adpimport` : import a custom file using an adapter with `<extra parameters>` = `--form adapter=<adapter name>`
- `moduleimport` : import a **standard XML/JSON or ZIP/tar.gz** using module strategy file with `<extra parameters>` = `--form module=<module name> --form version=<module version> --form zip=<true|false>` (restricted to users who have a responsibility on the `ADMIN` group)
	- an optional extra parameter can be set the diff mode import: `--form diff=<true|false>` (defaults to `true`)
- `sqlscript` : execute a SQL script (no extra parameter required, restricted to users who have a responsibility on the `ADMIN` group)

The file can also be designated by a URL then the `--form file=@<file>` is to be changed to `--form url=@<url>`.

- An optional extra parameter can be set to get processing logs or not: `--form log=<true|false>` (defaults to `false`)
- An optional extra parameter can be set to indicate processing logs output format: `--form output=<plain|xml>` (defaults to `plain`)

> **Note**: the standard XML, ZIP and CSV formats are described [here](../../schemas/)

<h2 id="exports">Exports</h2>

To export data in a file `<file>` the command is:

	curl <credentials> --form service=<export command> -o <file> [<extra parameters>] <I/O URL>

Where `<export command>` is one of :

- `xmlexport`: export an object data to a **standard XML** file with `<extra parameters>` = `--form object=<object name>`
	- an optional  extra parameter can be set to inline documents and images as Base64 strings in the XML file: `--form inlinedocs=<true|false>` (default is `false`)
- `zipexport`: export an object data to a **standard ZIP** file with `<extra parameters>` = `--form object=<object name>`
- `csvexport`: export an object data to a **standard CSV** file with `<extra parameters>` = `--form object=<object name>`
- `moduleexport`: export module configuration to a standard XML file with `<extra parameters>` = `--form module=<module name>` (restricted to users who have a responsibility on the `ADMIN` group
	- an optional extra parameter can be set to indicate the output format: `--form zip=<true|false>` (defaults to `false`)
	- an optional extra parameter can be set to inline documents and images as Base64 strings in the XML file: `--form inlinedocs=<true|false>` (default is `false`, `true` does not make sense in case of ZIP export)
- `moduleexportdata` (as of **version 4.0**): export data of all module business objects marked with an export order in **standard XML** format (restricted to users who have a responsibility on the `ADMIN` group
  Note that this service is primarily dedicated to export small amounts of reference and/or dev/test data as a complement to the module configuration.

<!--
**********************************************
TODO: arguments for various formats (XML/JSON)
**********************************************
-->

> **Note**: the standard XML, ZIP and CSV formats are described [here](../../schemas/)

<h2 id="git">Git</h2>

As of **version 3.2**, to do a Git commit on a module, the command is:

	curl <credentials> --form service=modulecommit --form module=<module name> --form message="<commit message>" <I/O URL>

<h2 id="others">Others</h2>

<h3 id="clearcache">Clear cache</h3>

To flush server-side cache, the command is:

	curl <credentials> --form service=clearcache <I/O URL>

<h3 id="purge">Purge tasks</h3>

Various purge tasks can be processed using following commands:

	curl <credentials> --form service=<purge command> <I/O URL>

Where `<purge command>` is one of:

- `purgelogs` : purge logs
- `purgejobs` : purge cron jobs
- `purgesupervisions` : purge import supervisions entries
- `purgerecyclebin` : purge documents recycle bin
- `purgeexports` : purge exports
- `purgetempfiles` : purge temporary files

As of version 5.2 for `purgelogs`, `purgejobs`and `purgesuversions` an additonal parameter `depth` alows to preserve the latest records:

- If `depth` is **negative** it gives the number of days of records to keep (e.g. `depth=-7`: delete all except last week's reords)
- If `depth` is **positive** it gives the number of records to keep (e.g. `depth=100`: delete all except the last 100 records)

<h3 id="indexation">Indexation</h3>

To force indexation to be (re)built, the command is:

	curl <credentials> --form service=buildindex <I/O URL>

<h3 id="unittests">Unit tests</h3>

To run a **business object**'s unit tests, the command is:

	curl <credentials> --form service=unittests --form object=<business object name> <I/O URL>

To run an **external object**'s unit tests, the command is:

	curl <credentials> --form service=unittests --form extobject=<external object name> <I/O URL>

To run a **business process**'s unit tests, the command is:

	curl <credentials> --form service=unittests --form process=<business process name> <I/O URL>

As of **version 5.1**, to run all tests from a **test shared code**, the command is:

	curl <credentials> --form service=unittests --form test=<test shared code name> <I/O URL>

<h3 id="logs">Logs</h3>

To retreive the server logs, the command is:

	curl <credentials> --form service=logs <I/O URL>
