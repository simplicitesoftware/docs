Documentation
=============

For a platform architecture overview, please refer to [this document](/resource/docs/architecture).

For a comprehensive platform training, please refer to [this website](https://training.simplicite.io).

<h2 id="ui">Generic UI</h2>

The documents of this section provide with generic UI usage and configuration examples.

- [Basic UI usage](/resource/docs/ui/basic-usage)
- [Search syntax](/resource/docs/ui/search-syntax)
- [Form templates](/resource/docs/ui/form-templates)
- [HTML Editor](/resource/docs/ui/html-editor-params)
- [License key management](/resource/docs/ui/install-licensekey)
- [Responsive UI](/resource/docs/ui/responsive)

<h2 id="coredev">Core developement documentation</h2>

The documents of this section provide with server-side **code examples** on additional custom code that can be bind to
core configuration items (business objects, business workflows, external objects, dispositions, ...).

- [Basic code examples](/resource/docs/core/basic-code-examples)
- [Expressions](/resource/docs/core/expressions)
- [Business object hooks code examples](/resource/docs/core/businessobject-code-hooks)
- [Business workflows hooks code examples](/resource/docs/core/businessworkflow-code-hooks)
- [Grant hooks code examples](/resource/docs/core/grant-code-hooks)
- [External object code examples](/resource/docs/core/externalobject-code-examples)
- [Disposition code examples](/resource/docs/core/disposition-code-examples)
- [Adapter code examples](/resource/docs/core/adapter-code-examples)
- [Publication examples](/resource/docs/core/publication-examples)
- [Custom actions examples](/resource/docs/core/custom-actions-examples)
- [Documents related code examples](/resource/docs/core/documents-code-examples)
- [Advanced code examples](/resource/docs/core/advanced-code-examples)
- [Core Javascript code examples](/resource/docs/core/javascript-code-examples)
- [Javascript UI tools code examples](/resource/docs/core/ui-tools-code-examples)
- [Modeler hooks code examples](/resource/docs/core/modeler-code-hooks)
- [Thrid party APIs examples](/resource/docs/core/third-party-apis-examples)
- [System parameters list](/resource/docs/core/system-parameters-list)
- [Crontab](/resource/docs/core/crontab)
- [Unit testing](/resource/docs/core/unit-testing)

<h2 id="apis">APIs</h2>

The documents of this section provide with usage details and **code examples** on the standard and contributed API libs:

- [Core Ajax API](/resource/docs/apis/ajax-api)
- [Node.js&reg; &amp; browser JavaScript API](/resource/docs/apis/nodejs-api) with server-side and client-side examples
  (some of them based on various popular frameworks (Angular&reg;, React&reg;/ReactNative&reg;, Vue.js&reg;, ...)
- [NodeRED&reg; nodes](/resource/docs/apis/nodered-nodes)
- Legacy [Android&reg; API](/resource/docs/apis/android-api)
- Legacy [Google Web Toolkit (GWT&reg;) API](/resource/docs/apis/gwt-api)

> **Note**: All these libs wrap the lower level Simplicit&eacute;&reg; webservices APIs described in the next section,
> the value added of using the above wrapper libs is on the abstraction layer they provide on top of the webservices APIs
> and the management of sometimes tricky topics such as the session cookies, etc.

<h2 id="integration">Integration services</h2>

The documents of this section provide with usage details on **low level** integration services:
I/O interface and webservices.

- [I/O services and command line interface](/resource/docs/integration/io-commandline) and associated [I/O standard formats: XML, ZIP, CSV, etc.](/resource/docs/integration/standard-formats)
- [Git repositories interface](/resource/docs/integration/git-repositories)
- [REST webservices](/resource/docs/integration/rest-services)
- [SOAP webservices](/resource/docs/integration/soap-services)
- [RAW webservices](/resource/docs/integration/raw-services)
- [Custom webservices](/resource/docs/integration/custom-services)

<h2 id="serviceobjects">Remote/service business objects</h2>

The documents of this section provide with configuration details of remote business objects.

- [Simplicit&eacute;&reg; business objects](/resource/docs/remote/simplicite)
- [LDAP](/resource/docs/remote/ldap)
- [SalesForce&reg; business objects](/resource/docs/remote/salesforce)
- [OpenDataSoft&reg; datasets](/resource/docs/remote/opendatasoft)

<h2 id="deployment">Deployment / operation</h2>

The documents of this section provide details on various deployments/configurations strategies.

### Docker-based deployments

- [Docker&reg; deployment](/resource/docs/operation/docker)
- [Kubernetes&reg; deployment](/resource/docs/operation/kubernetes)

### Managed cloud instances servers

- [Instances manager usage](/resource/docs/misc/manager)

### Other PaaS-based deployments

> **Note**: these documentations for proprietary PaaS deployments are left here for information.
> They may be **outdated** and incomplete as the prefered deployment modes are now the Docker-based ones.

- [CloudFoundry&reg; deployment](/resource/docs/operation/cloudfoundry)
- [Heroku&reg; deployment](/resource/docs/operation/heroku)
- [OpenShift&reg; deployment](/resource/docs/operation/openshift)
- [AWS Elastic Beanstalk&reg; deployment](/resource/docs/operation/aws-elasticbeanstalk)

### Traditional deployments/operation

> **Note**: these documentations for traditional deployments are left here for information.
> They may be **outdated** and incomplete as the prefered deployment modes are now the Docker-based ones.

- [Apache Tomcat&reg; installation manual (on RedHat Linux)](/resource/docs/operation/tomcat-installation-linux)
- [Apache Tomcat&reg; installation manual (on Windows)](/resource/docs/operation/tomcat-installation-windows)
- [Apache TomEE&reg; deployment specificities](/resource/docs/operation/tomee)
- [Apache Tomcat&reg; operation manual](/resource/docs/operation/tomcat-operation)

<h2 id="quality">Code quality</h2>

- [Sonarqube&reg; code analysis](/resource/docs/misc/sonarqube) with your Simplicit&eacute; modules

Mobile
------

- [Cordova: build hybrid application for Androïd and iOS](/resource/docs/misc/cordova)

<h2 id="auth">Authentication</h2>

- [OAuth2 configuration on Apache Tomcat&reg;](/resource/docs/authentication/tomcat-oauth2)
- [SAML configuration on Apache Tomcat&reg;](/resource/docs/authentication/tomcat-saml)
- [LDAP configuration on Apache Tomcat&reg;](/resource/docs/authentication/tomcat-ldap)
- [Custom applicative authentication on Apache Tomcat&reg;](/resource/docs/authentication/tomcat-customauth)
<!-- - [Custom realm-based authentication on Apache Tomcat&reg;](/resource/docs/misc/tomcat-customrealms) -->
- [Custom JAAS-based authentication on JBoss&reg; application server](/resource/docs/authentication/jboss-custom-jaas-module)
- [Keycloak OAuth2 configuration and users synchronization](/resource/docs/authentication/keycloak)

<h2 id="misc">Miscellaneous</h2>

The documents of this section provide details on various deployments/configurations strategies.

### Custom configurations

- [Root app deployment configuration](/resource/docs/misc/root-deploy)
- [Apache/NGINX SSL configuration](/resource/docs/misc/webserver-ssl)
- [Java SSL configuration](/resource/docs/misc/java-ssl)
- [Load balancing configuration](/resource/docs/misc/load-balancing)
- [Application server slimming strategies](/resource/docs/misc/appservers-slimming)
- [Databases tips and tricks](/resource/docs/misc/databases-howto)
- [UTF-8 tips and tricks](/resource/docs/misc/howto/utf8-howto)
- [Logging configuration](/resource/docs/misc/logging)
- [Additional datasources configuration](/resource/docs/misc/datasources-howto)
- [E-mail service configuration](/resource/docs/misc/email-howto)
- [API sessions on Apache Tomcat&reg;](/resource/docs/authentication/tomcat-apisession)

### Others

- [Project package and standard Apache ANT&reg; tasks](/resource/docs/misc/project-package-and-ant-tasks)
- [Remote debugging](/resource/docs/misc/remote-debug)
- [Using java JConsole](/resource/docs/misc/jconsole)

General
-------

- [Security guidelines](/resource/docs/security) and [GDPR guidelines](/resource/docs/gdpr)
- [Compliance tables](/resource/docs/compliance)
- [Versions](/resource/docs/versions)
- [Third party components](/resource/docs/versions/index)
- [Frequently Asked Questions](/resource/docs/faq)
