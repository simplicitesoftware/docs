Unit tests coverage
===================

This document explains how to measure your server-side (Java) unit tests coverage using the JaCoCo tool.

Enable the JaCoCo agent for a specified module <span id="agent"></span>
------------------------------------------------------------------------

### Using Docker images

Our standard images already contains the up-to-date JaCoCo tool by default in the `/usr/local/jacoco` folder.

To enable coverage measurement of unit tests execution just pass the `JACOCO_MODULES` environment variable to the container with a list of spece-separated modules (e.g. `-e JACOCO_MODULES="MyModule MyOtherModule"`).

The JaCoCo agent exec file is generated at the location denoted by the `JACOCO_DESTFILE` environment variable which defaults to `/usr/local/tomcat/jacoco/jacoco.exec`.
You must ensure persistence for this file, for instance by mounting the default `/usr/local/tomcat/jacoco` folder (e.g. `-v ./jacoco:/usr/local/tomcat/jacoco`)
which is also useful for report generation as this default folder is the default location for report files, see bellow.

The exec file is not appended by default but you can change this by setting the `JACOCO_DESTFILE_APPEND` environment viariable to `true` (e.g. `-e JACOCO_DESTFILE_APPEND="true"`) 

> **Note**: you can use the import specification mechanism to automate the modules import and unit tests execution.

### Manually

You can do the same manually for "traditional" Tomcat deployments.

Download the [JaCoCo tool](https://repo1.maven.org/maven2/org/jacoco/jacoco/0.8.12/jacoco-0.8.12.zip) and unzip it somewhere acessible to Tomcat (noted `<path>` bellow).

Add following option to JVM arguments when starting Tomcat (in the example bellow only one module is monitored noted `<module>`):

```
-javaagent:<path>/jacoco-0.8.12/lib/jacocoagent.jar=destfile=<path>/jacoco.exec,includes=com.simplicite.*.<module>.*
```

Generate a human-readable report <span id="report"></span>
----------------------------------------------------------

Note that **in all cases** (Docker ou manual) the above agent's `jacococ.exec` exec file is generated only **when the JVM is shut down**.

This means you **must** stop the JVM **before** generating the report as explained bellow.

### Using Docker images

Execute the following Docker command on your running container:

```text
docker exec <container ID or name> jacocoreport.sh
```

The generated human-readable HTML reports will be then available at the folder location denoted by the `JACOCO_REPORTDIR` environment variable which defaults to `/usr/local/tomcat/webapps/jacoco` (in order to be available as the static webapp `https://<base url>/jacoco/`).

> **Note**: you can make the report folder available outside of the container by mounting it as a volume

### Manually

You can manually generate a human-readable HTML report from the JaCoCo agent exec file using the following command:

```text
java -jar <path>/jacoco-0.8.12/lib/jacococli.jar \
  report <path>/jacoco.exec \
  --html <path>/jacoco \
  --sourcefiles <tomcat root>/webapps/ROOT/WEB-INF/src \
  --classfiles <tomcat root>/webapps/ROOT/WEB-INF/bin
```