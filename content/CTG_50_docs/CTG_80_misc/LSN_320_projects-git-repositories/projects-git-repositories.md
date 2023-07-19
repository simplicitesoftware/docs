<<<<<<< HEAD:content/CTG_50_docs/CTG_80_misc/LSN_320_projects-git-repositories/projects-git-repositories.md
Simplicit&eacute; projects and platform Git Repositories
========================================================

This document describe how to use **projects** and **platform** Git repositories.

> **Note**: starting with version 3.2 the configuration modules can be exposed as Git repositories (managed by the Simplicit&eacute; instance itself).
> This document **does not** deal of this feature. Please refer to [this document](/lesson/docs/integration/git-repositories) instead.

Prerequisites
-------------

Have a recent [Git](http://git-scm.com/) version installed.

Turn off SSL verification (our Git repositories are accessible over HTTPS with certificates signed by our own certification authority):

```bash
git config --global http.sslVerify false
```

Projects repositories
---------------------

Our projects Git repositories URIs have the following scheme: `https://<username>@<domain>.git.simplicite.io/<repo>.git`

Where:

* `<domain>` is the domain name of your organization (e.g. `myorg`)
* `<repo>` is the repository name (e.g. `myproject`)
* `<username>` is your username

### Using command line

To clone the project `myproject` of the organization `myorg` as user `me` (password `mypassword`) the command is:

```bash
git clone https://me:mypassword@myorg.git.simplicite.io/myproject.git
```

The password will be prompted (and will be re-prompted for pull/push/... commands)

### Using the Eclipse IDE

You can also clone your project's repository in the Eclipse IDE, to do so:

1) Configure the `http.sslVerify` Git setting

In the _Window_ menu select the _Preferences_ entry, then go to _Team_ > _Git_ > _Configuration_.

In the _User Settings_ tab add or update the `http.sslVerify` to `false`

![](projects-git-repositories-eclipse-1.png)

2) Clone the repository

In the "Project Explorer" view do a right click and select _Import..._ then choose _Git_ > _Projects from Git_, then select _Clone URI_

![](projects-git-repositories-eclipse-2.png)

The type the repository URI (`https://<username>[:<password>]@<domain>.git.simplicite.io/<repo>.git`, see above) the the _URI_ field:

![](projects-git-repositories-eclipse-3.png)

And let go thru the last steps of the import wizard.

> **Note**: you can import in Eclipse a repository cloned using command line (see above): To do so, in the "Project Explorer" view do a right click and select _Import..._
> then choose _Git_ > _Projects from Git_, then select _Existing local repository_ > and select your locally cloned repository

Platform repositories
---------------------

The Simplicit&eacute; platform is provided in the `platform` domain in two packaging:

- Traditional **setup** packages (from version 2.4.0)
- **Instance template** packages (from version 3.0)

All platform packages repositories are **read-only**.

### Setup package usages

1. Clone the desired **setup** package from `https://<username>[:<password>]@platform.git.simplicite.io/setup-<x.y>.git`
2. Copy the content of the setup to a new Java project (avoid working with the setup respository itself unless you are a Git advanced user and are able to configure dedicated custom branches and remotes)
4. Setup the project using `ant setup` ANT task
3. If needed adjust manually the resulting build and properties files in your project

See [project package and ANT tasks document](/lesson/docs/misc/project-package-and-ant-tasks) for details on how to proceed with installation/deployement of your project.

### Instance template packages usage

The instances templates packages usage is straigtforward: it contains a preinstalled Tomcat&reg; webapp (using, by default, and embedded HSQLDB&reg; database) that can be deployed as-is.

You just need to clone the desired **instance template** package from `https://<username>[:<password>]@platform.git.simplicite.io/template-<x.y>.git`,
copy the content of the `app` in your Tomcat's `webapps` folder and start Tomcat.

> **Note**: the instance templates are used by our [instance manager](/lesson/docs/misc/manager) and by our [Docker container](/lesson/docs/operation/docker)
> and other PaaS containers ([Bluemix](/lesson/docs/misc/cloudfoundry-bluemix), [Pivotal](/lesson/docs/misc/cloudfoundry-pivotal), [Heroku](/lesson/docs/operation/heroku), [OpenShift](/lesson/docs/operation/openshift), ...)
=======
Simplicit&eacute; projects and platform Git Repositories
========================================================

This document describe how to use **projects** and **platform** Git repositories.

> **Note**: starting with version 3.2 the configuration modules can be exposed as Git repositories (managed by the Simplicit&eacute; instance itself).
> This document **does not** deal of this feature. Please refer to [this document](/resource/docs/integration/git-repositories) instead.

Prerequisites
-------------

Have a recent [Git](http://git-scm.com/) version installed.

Turn off SSL verification (our Git repositories are accessible over HTTPS with certificates signed by our own certification authority):

```bash
git config --global http.sslVerify false
```

Projects repositories
---------------------

Our projects Git repositories URIs have the following scheme: `https://<username>@<domain>.git.simplicite.io/<repo>.git`

Where:

* `<domain>` is the domain name of your organization (e.g. `myorg`)
* `<repo>` is the repository name (e.g. `myproject`)
* `<username>` is your username

### Using command line

To clone the project `myproject` of the organization `myorg` as user `me` (password `mypassword`) the command is:

```bash
git clone https://me:mypassword@myorg.git.simplicite.io/myproject.git
```

The password will be prompted (and will be re-prompted for pull/push/... commands)

### Using the Eclipse IDE

You can also clone your project's repository in the Eclipse IDE, to do so:

1) Configure the `http.sslVerify` Git setting

In the _Window_ menu select the _Preferences_ entry, then go to _Team_ > _Git_ > _Configuration_.

In the _User Settings_ tab add or update the `http.sslVerify` to `false`

![](projects-git-repositories-eclipse-1.png)

2) Clone the repository

In the "Project Explorer" view do a right click and select _Import..._ then choose _Git_ > _Projects from Git_, then select _Clone URI_

![](projects-git-repositories-eclipse-2.png)

The type the repository URI (`https://<username>[:<password>]@<domain>.git.simplicite.io/<repo>.git`, see above) the the _URI_ field:

![](projects-git-repositories-eclipse-3.png)

And let go thru the last steps of the import wizard.

> **Note**: you can import in Eclipse a repository cloned using command line (see above): To do so, in the "Project Explorer" view do a right click and select _Import..._
> then choose _Git_ > _Projects from Git_, then select _Existing local repository_ > and select your locally cloned repository

Platform repositories
---------------------

The Simplicit&eacute; platform is provided in the `platform` domain in two packaging:

- Traditional **setup** packages (from version 2.4.0)
- **Instance template** packages (from version 3.0)

All platform packages repositories are **read-only**.

### Setup package usages

1. Clone the desired **setup** package from `https://<username>[:<password>]@platform.git.simplicite.io/setup-<x.y>.git`
2. Copy the content of the setup to a new Java project (avoid working with the setup respository itself unless you are a Git advanced user and are able to configure dedicated custom branches and remotes)
4. Setup the project using `ant setup` ANT task
3. If needed adjust manually the resulting build and properties files in your project

See [project package and ANT tasks document](/resource/docs/misc/project-package-and-ant-tasks) for details on how to proceed with installation/deployement of your project.

### Instance template packages usage

The instances templates packages usage is straigtforward: it contains a preinstalled Tomcat&reg; webapp (using, by default, and embedded HSQLDB&reg; database) that can be deployed as-is.

You just need to clone the desired **instance template** package from `https://<username>[:<password>]@platform.git.simplicite.io/template-<x.y>.git`,
copy the content of the `app` in your Tomcat's `webapps` folder and start Tomcat.

> **Note**: the instance templates are used by our [instance manager](https:/resource/docs/misc/manager) and by our [Docker container](/resource/docs/operation/docker)
> and other PaaS containers ([Bluemix](/resource/docs/misc/cloudfoundry-bluemix), [Pivotal](/resource/docs/misc/cloudfoundry-pivotal), [Heroku](/resource/docs/operation/heroku), [OpenShift](/resource/docs/operation/openshift), ...)
>>>>>>> rec:content/CTG_50_docs/CTG_90_misc/LSN_360_projects-git-repositories/projects-git-repositories.md
