Compliance tables
=================

This document gives a non exhaustive list of architectures and infrastructure components the Simplicit&eacute;&reg; platform is compliant with.

Containers deployments (Docker and PaaS)
----------------------------------------

The **ideal** / **preferred** deployment model is to deploy Simplicit&eacute; platform as **Docker&reg; container(s)**
from our standard pre-built images available on [DockerHub](https://hub.docker.com/r/simplicite/) or from custom images that you build to fit your needs.
See [this document](/resource/docs/operation/docker) for details.

It is also possible to deploy it as managed application container(s) on a wide range of platforms as a service (**PaaS**) such as:

- Any CloudFoundry flavor (see. [this document](/resource/docs/operation/cloudfoundry) for details))
- AWS ElasticBeanstalk (see. [this document](/resource/docs/operation/aws-elasticbeanstalk) for details))
- Heroku (see. [this document](/resource/docs/operation/heroku) for details))
- Openshift (see. [this document](/resource/docs/operation/openshift) for details))
Etc.

In both cases you will need an external database service - custom or as a service (DBaaS).
See the "Databases" section for details on Simplicit&eacute; database compliances.

Custom deployments
------------------

It is still possible, although highly **discouraged**, to deploy Simplicit&eacute; on custom IaaS infrastructures or even on premises servers.
In such a case you need to verify that your technical platform complies with the following recommendations.

### Introduction

By default, our **recommendation** is that you use only the current **up to date** versions of **all technical components**
(OS, JVM, application server, database server, web servers) unless explicitly stated otherwise.

The versions indicated below are to be considered as **minimal** versions on which Simplicit&eacute; platform should run.
Some of them are now outdated and **should not** be considered as recommended versions.
Using such old versions is likely to be a source of potentially tricky problems that you would not have with up-to-date components.

<h3 id="os">OS</h3>

Any OS on which a suitable Java JVM is officially available. This includes:

- all current **Linux distributions** (RedHat&reg;, CentOS&reg;, Fedora&reg;, Debian&reg;, Ubuntu&reg;, etc.) and some proprietary UNIX (Solaris&reg;, etc.),
- all current Microsoft **Windows&reg;** versions,
- all current **MacOS&reg;** versions,
- etc.

Our **recommended** OS family for production is Linux.

> **Note**: Whichever OS you use, you **MUST** use keep it **up-to-date**.

The OS can run either on **physical** or **virtual** servers or in Docker&reg; **containers**.

It is also possible to deploy Simplicit&eacute;&reg; platform on **PaaS** buildpacks CloudFoundry&reg;, Heroku&reg;, OpenShift&reg;, etc.

<h3 id="jvm">Java VM</h3>

The following table only indicates the **LTS (Long Term Support)** JVM versions.

| ![](https://platform.simplicite.io/logos/logo.svg) | JVM 1.8 | JVM 11       | JVM 17   |
|:--------------------------------------------------:|---------|--------------|----------|
| **6.x** (dev)                                      | no      | yes (1)      | **yes**  |
| **5.x**                                            | no      | **yes**      | **yes**  |
| **4.0**                                            | no (2)  | **yes**      | **yes**  |
| Legacy **3.2**                                     | **yes** | yes (1)      | yes (1)  |
| Legacy **3.1**                                     | **yes** | yes (1)      | yes (1)  |
| Legacy **3.0**                                     | **yes** | no           | no       |

1. Not tested and not supported but should work.
2. Due to optional dependencies that are compiled for the JVM 11, the platform version 4.0+ **requires** a JVM &gt;= 11.
However if you don't use these optional dependencies you can **theoretically** still run the 4.0 platform on a **JDK** 1.8
(_NB: for this legacy version 1.8 a JDK is required, not a JRE_) but it is **discouraged**.

In **bold** the recommended choice for considered Simplicit&eacute;&reg; version.

> **Note**: Whichever JVM version you use, you **MUST** use its **up-to-date release**.
> Only these up-to-date releases are tested and supported.

<h3 id="appservers">Application servers</h3>

| ![](https://platform.simplicite.io/logos/logo.svg) | JEE Web profile (1) | Webapp |
|:--------------------------------------------------:|---------------------|--------|
| **6.x** (dev)                                      | JakartaEE 10        | 6.0    |
| **5.x**                                            | JEE 8               | 4.0    |
| **4.0**                                            | JEE 8               | 4.0    |
| Legacy **3.2**                                     | JEE 7               | 3.1    |
| Legacy **3.1**                                     | JEE 6               | 3.1    |
| Legacy **3.0**                                     | J2EE 1.4            | 2.5    |

1. Web profile by default but full profile is also possible

The implementation we recommend are:

* **Webapp 6.0**: Apache Tomcat&reg; 10.0.x
* **Webapp 4.0**: Apache Tomcat&reg; 9.0.x

An application server with Websocket 1.1+ support is highly recommended for Simplicit&eacute;&reg; versions 3.0 and above.

> **Note**: Whichever application server version you use, you **MUST** use its  **up-to-date maintenance release**. 
> Only these up-to-date releases are tested and supported.

<h2 id="databases">Databases</h2>

| ![](https://platform.simplicite.io/logos/logo.svg) | MySQL/MariaDB | PostgreSQL | Oracle   | SQLServer |
|:--------------------------------------------------:|---------------|------------|----------|-----------|
| **6.x** (dev)                                      | 8+            | 11+        | 12c+     | 2019+     |
| **5.x**                                            | 5.7+          | 11+        | 12c+     | 2019+     |
| **4.0**                                            | 5.5+          | 10++       | 12c+     | 2016+     |
| Legacy **3.2**                                     | 5.1+          | 9+         | 11g+     | 2012+     |
| Legacy **3.1**                                     | 5.1+          | 9+         | 11g+     | 2012+     |
| Legacy **3.0**                                     | 5.1+          | 9+         | 10g+     | 2008+     |

> **Note**: The above versions are not the **recommended** version but the **minimal** versions on which the platform can run.
> Whichever database server you use, you **SHOULD** use an **up-to-date release version** instead of the above minimal versions.
> Only these up-to-date releases versions are tested and supported.

<h2 id="browsers">Web browsers</h2>

| ![](https://platform.simplicite.io/logos/logo.svg) | Edge (1) |Firefox (1) | Chrome (1) | Safari (1) | IE11    |
|:--------------------------------------------------:|----------|------------|------------|------------|---------|
| **6.x** (dev)                                      | yes      | yes        | yes        | yes        | no      |
| **5.x**                                            | yes      | yes        | yes        | yes        | no      |
| **4.0**                                            | yes      | yes        | yes        | yes        | yes (2) |
| Legacy **3.2**                                     | yes      | yes        | yes        | yes        | yes     |
| Legacy **3.1**                                     | yes      | yes        | yes        | yes        | yes     |
| Legacy **3.0**                                     | yes      | yes        | yes        | yes        | yes     |

1. Up to date version only (recent previous versions are not supported but should work)
2. Not recommended, not tested and not supported. Use at your own risks. You may experience poor performances and/or visual/functional issues.
   (IE11 is officially retired on June 6th 2022)
