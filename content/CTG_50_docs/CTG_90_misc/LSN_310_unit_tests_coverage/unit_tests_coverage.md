Unit tests coverage
===================

This document explains how to measure your server-side (Java) unit tests coverage using the JaCoCo tool.

Enable the JaCoCo agent for a specified module <span id="agent"></span>
------------------------------------------------------------------------

### Using Docker images <span id="docker"></span>

Our standard images already contains the up-to-date JaCoCo tool by default in the `/usr/local/jacoco` folder.

To enable coverage measurement of unit tests execution just pass the `JACOCO_MODULES` environment variable to the container with a list of spece-separated modules (e.g. `-e JACOCO_MODULES="MyModule MyOtherModule"`).

The JaCoCo agent exec file is generated at the location denoted by the `JACOCO_DESTFILE` environment variable which defaults to `/var/lib/jacoco/jacoco.exec`.

> **Note**: you can use the import specification mechanism to automate the modules import and unit tests execution.

### Manually

You can do the same manually for "traditional" Tomcat deployments.

Download the [JaCoCo tool](https://repo1.maven.org/maven2/org/jacoco/jacoco/0.8.11/jacoco-0.8.11.zip) and unzip it somewhere acessible to Tomcat (noted `<path>` bellow).

Add following option to JVM arguments when starting Tomcat (in the example bellow only one module is monitored noted `<module>`):

```
-javaagent:<path>/jacoco-0.8.11/lib/jacocoagent.jar=destfile=<path>/jacoco-0.8.11/jacoco.exec,includes=com.simplicite.*.<module>.*
```

Generate a human-readable report <span id="debugger"></span>
------------------------------------------------------------

You can generate a human-readable HTML report from the JaCoCo agent exec file using the following command:

```text
java -jar <path>/jacoco-0.8.11/lib/jacococli.jar \
  report jacoco.exec \
  --html report \
  --sourcefiles <tomcat root>/webapps/ROOT/WEB-INF/src \
  --classfiles <tomcat root>/webapps/ROOT/WEB-INF/bin
```
