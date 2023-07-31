Documentation
=============

For a platform architecture overview, please refer to [this document](/lesson/docs/architecture).

For a comprehensive platform training, please refer to [this website](https://training.simplicite.io).

<h2 id="ui">Generic UI</h2>

The documents of this section provide with generic UI usage and configuration examples.

- [Basic UI usage](/lesson/docs/ui/basic-usage)
- [Search syntax](/lesson/docs/ui/search-syntax)
- [Form templates](/lesson/docs/ui/form-templates)
- [HTML Editor](/lesson/docs/ui/html-editor-params)
- [License key management](/lesson/docs/ui/install-licensekey)
- [Responsive UI](/lesson/docs/ui/responsive)

<h2 id="coredev">Core developement documentation</h2>

The documents of this section provide with server-side **code examples** on additional custom code that can be bind to
core configuration items (business objects, business workflows, external objects, dispositions, ...).

- [Basic code examples](/lesson/docs/core/basic-code-examples)
- [Expressions](/lesson/docs/core/expressions)
- [Business object hooks code examples](/lesson/docs/core/businessobject-code-hooks)
- [Business workflows hooks code examples](/lesson/docs/core/businessworkflow-code-hooks)
- [Grant hooks code examples](/lesson/docs/core/grant-code-hooks)
- [External object code examples](/lesson/docs/core/externalobject-code-examples)
- [Disposition code examples](/lesson/docs/core/disposition-code-examples)
- [Adapter code examples](/lesson/docs/core/adapter-code-examples)
- [Publication examples](/lesson/docs/core/publication-examples)
- [Custom actions examples](/lesson/docs/core/custom-actions-examples)
- [Documents related code examples](/lesson/docs/core/documents-code-examples)
- [Advanced code examples](/lesson/docs/core/advanced-code-examples)
- [Core Javascript code examples](/lesson/docs/core/javascript-code-examples)
- [Javascript UI tools code examples](/lesson/docs/core/ui-tools-code-examples)
- [Modeler hooks code examples](/lesson/docs/core/modeler-code-hooks)
- [Thrid party APIs examples](/lesson/docs/core/third-party-apis-examples)
- [System parameters list](/lesson/docs/core/system-parameters-list)
- [Crontab](/lesson/docs/core/crontab)
- [Unit testing](/lesson/docs/core/unit-testing)

<h2 id="apis">APIs</h2>

The documents of this section provide with usage details and **code examples** on the standard and contributed API libs:

- [Core Ajax API](/lesson/docs/apis/ajax-api)
- [Node.js&reg; &amp; browser JavaScript API](/lesson/docs/apis/nodejs-api) with server-side and client-side examples
  (some of them based on various popular frameworks (Angular&reg;, React&reg;/ReactNative&reg;, Vue.js&reg;, ...)
- [NodeRED&reg; nodes](/lesson/docs/apis/nodered-nodes)
- Legacy [Android&reg; API](/lesson/docs/apis/android-api)
- Legacy [Google Web Toolkit (GWT&reg;) API](/lesson/docs/apis/gwt-api)

> **Note**: All these libs wrap the lower level Simplicit&eacute;&reg; webservices APIs described in the next section,
> the value added of using the above wrapper libs is on the abstraction layer they provide on top of the webservices APIs
> and the management of sometimes tricky topics such as the session cookies, etc.

<h2 id="integration">Integration services</h2>

The documents of this section provide with usage details on **low level** integration services:
I/O interface and webservices.

- [I/O services and command line interface](/lesson/docs/integration/io-commandline) and associated [I/O standard formats: XML, ZIP, CSV, etc.](/lesson/docs/integration/standard-formats)
- [Git repositories interface](/lesson/docs/integration/git-repositories)
- [REST webservices](/lesson/docs/integration/rest-services)
- [SOAP webservices](/lesson/docs/integration/soap-services)
- [RAW webservices](/lesson/docs/integration/raw-services)
- [Custom webservices](/lesson/docs/integration/custom-services)

<h2 id="serviceobjects">Remote/service business objects</h2>

The documents of this section provide with configuration details of remote business objects.

- [Simplicit&eacute;&reg; business objects](/lesson/docs/remote/simplicite)
- [LDAP](/lesson/docs/remote/ldap)
- [SalesForce&reg; business objects](/lesson/docs/remote/salesforce)
- [OpenDataSoft&reg; datasets](/lesson/docs/remote/opendatasoft)

<h2 id="deployment">Deployment / operation</h2>

The documents of this section provide details on various deployments/configurations strategies.

### Docker-based deployments

- [Docker&reg; deployment](/lesson/docs/operation/docker)
- [Kubernetes&reg; deployment](/lesson/docs/operation/kubernetes)

### Managed cloud instances servers

- [Instances manager usage](https:/lesson/docs/misc/manager)

### Other PaaS-based deployments

> **Note**: these documentations for proprietary PaaS deployments are left here for information.
> They may be **outdated** and incomplete as the prefered deployment modes are now the Docker-based ones.

- [CloudFoundry&reg; deployment](/lesson/docs/operation/cloudfoundry)
- [Heroku&reg; deployment](/lesson/docs/operation/heroku)
- [OpenShift&reg; deployment](/lesson/docs/operation/openshift)
- [AWS Elastic Beanstalk&reg; deployment](/lesson/docs/operation/aws-elasticbeanstalk)

### Traditional deployments/operation

> **Note**: these documentations for traditional deployments are left here for information.
> They may be **outdated** and incomplete as the prefered deployment modes are now the Docker-based ones.

- [Apache Tomcat&reg; installation manual (on RedHat Linux)](/lesson/docs/operation/tomcat-installation-linux)
- [Apache Tomcat&reg; installation manual (on Windows)](/lesson/docs/operation/tomcat-installation-windows)
- [Apache TomEE&reg; deployment specificities](/lesson/docs/operation/tomee)
- [Apache Tomcat&reg; operation manual](/lesson/docs/operation/tomcat-operation)

<h2 id="quality">Code quality</h2>

- [Sonarqube&reg; code analysis](/lesson/docs/misc/sonarqube) with your Simplicit&eacute; modules

Mobile
------

- [Cordova: build hybrid application for Androïd and iOS](/lesson/docs/misc/cordova)

<h2 id="auth">Authentication</h2>

- [OAuth2 configuration on Apache Tomcat&reg;](/lesson/docs/authentication/tomcat-oauth2)
- [SAML configuration on Apache Tomcat&reg;](/lesson/docs/authentication/tomcat-saml)
- [LDAP configuration on Apache Tomcat&reg;](/lesson/docs/authentication/tomcat-ldap)
- [Custom applicative authentication on Apache Tomcat&reg;](/lesson/docs/authentication/tomcat-customauth)
<!-- - [Custom realm-based authentication on Apache Tomcat&reg;](/lesson/docs/misc/tomcat-customrealms) -->
- [Custom JAAS-based authentication on JBoss&reg; application server](/lesson/docs/authentication/jboss-custom-jaas-module)
- [Keycloak OAuth2 configuration and users synchronization](/lesson/docs/authentication/keycloak)

<h2 id="misc">Miscellaneous</h2>

The documents of this section provide details on various deployments/configurations strategies.

### Custom configurations

- [Root app deployment configuration](/lesson/docs/misc/root-deploy)
- [Apache/NGINX SSL configuration](/lesson/docs/misc/webserver-ssl)
- [Java SSL configuration](/lesson/docs/misc/java-ssl)
- [Load balancing configuration](/lesson/docs/misc/load-balancing)
- [Application server slimming strategies](/lesson/docs/misc/appservers-slimming)
- [Databases tips and tricks](/lesson/docs/misc/databases-howto)
- [UTF-8 tips and tricks](/lesson/docs/misc/howto/utf8-howto)
- [Logging configuration](/lesson/docs/misc/logging)
- [Additional datasources configuration](/lesson/docs/misc/datasources-howto)
- [E-mail service configuration](/lesson/docs/misc/email-howto)
- [API sessions on Apache Tomcat&reg;](/lesson/docs/authentication/tomcat-apisession)

### Others

- [Project package and standard Apache ANT&reg; tasks](/lesson/docs/misc/project-package-and-ant-tasks)
- [Remote debugging](/lesson/docs/misc/remote-debug)
- [Using java JConsole](/lesson/docs/misc/jconsole)

General
-------

- [Security guidelines](/lesson/docs/security) and [GDPR guidelines](/lesson/docs/gdpr)
- [Compliance tables](/lesson/docs/compliance)
- [Versions](/lesson/docs/versions)
- [Third party components](/lesson/docs/versions/index)
- [Frequently Asked Questions](/lesson/docs/faq)
