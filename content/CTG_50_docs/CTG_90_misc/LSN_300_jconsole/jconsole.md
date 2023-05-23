JConsole
========

JBoss
-----

To allow JConsole to connect to JBoss add these VM arguments :

```plaintext
-Dcom.sun.management.jmxremote
-Dcom.sun.management.jmxremote.port=58585
-Dcom.sun.management.jmxremote.ssl=false
-Dcom.sun.management.jmxremote.authenticate=false
```

Then launch JConsole and connect to `localhost:58080`

To allow JBoss MBeans to be used in JConsole add these VM arguments :

```plaintext
-Djboss.platform.mbeanserver
-Djavax.management.builder.initial=org.jboss.system.server.jmx.MBeanServerBuilderImpl
```

Tomcat
------

To allow JConsole to connect to Tomcat add these VM arguments :

```plaintext
-Dcom.sun.management.jmxremote
-Dcom.sun.management.jmxremote.port=58585
-Dcom.sun.management.jmxremote.ssl=false
-Dcom.sun.management.jmxremote.authenticate=false
```

Then launch JConsole and connect to `localhost:58585`