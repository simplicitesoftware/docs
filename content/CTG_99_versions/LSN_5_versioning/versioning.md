Versioning
===========

## Versions

| **Version** | **Maintenance State**  | **Support type** | **Release date**                            | **Maintenance end date**                    | **Docker images tags**              | **Template branch** |
|-------------|------------------------|------------------|---------------------------------------------|---------------------------------------------|-------------------------------------|---------------------|
| `6.2`       | ⚠️ Alpha                | Not applicable   | *<abbr title="To Be Determined">TBD</abbr>* | *<abbr title="To Be Determined">TBD</abbr>* | `6-alpha[-light]`                   | `6.2[-light]`       |
| `6.1`       | ⚠️ Beta                 | Not applicable   | June 28th, 2024                             | *<abbr title="To Be Determined">TBD</abbr>* | `6-beta[-light]`                    | `6.1[-light]`       |
| `6.0`       | ✅ **Current release** | Standard         | January 31st, 2024                          | September 30th, 2024                        | `6[-light]`, `6.0[-light]`, `6.0.x` | `6.0[-light]`       |
| `5.3`       | ☑️ Maintained           | Long-term (LTS)  | April 24th, 2023                            | January 31st, 2027                          | `5[-light]`, `5.3[-light]`, `5.3.x` | `5.3[-light]`       |
| `5.2`       | ❌ Expired!            | Short term       | April 20th, 2022                            | September 30th, 2023                        | `5.2[-light]`, `5.2.x`              | `5.2[-light]`       |
| `5.1`       | ❌ Expired!            | Short term       | September 1st, 2021                         | October 31st, 2022                          | `5.1[-light]`, `5.1.x`              | `5.1[-light]`       |
| `5.0`       | ❌ Expired!            | Short term       | January 11th, 2021                          | September 30th, 2021                        | `5.0[-light]`, `5.0.x`              | `5.0[-light]`       |
| `4.0`       | ❌ Expired!            | Long-term (LTS)  | April 2018                                  | January 15th, 2024                          | `4.0[-light]`                       | `4.0[-light]`       |
| `3.x`       | ❌ Expired!            | Long-term (LTS)  | 2014 (for 3.0)                              | July 3rd, 2020                              | `3.x`                               | `3.x`               |


Some intechangeable terms:
- **Current release**: release, lastest version, latest stable
- **Beta/release candidate**: pre-release, test
- **Alpha**: developement version, master, nightly build

The [platform site](https://platform.simplicite.io) contains generated technical docs for all versions:
- Java & JS docs
- Java & JS dependecies list
- CVE Audit report

The [compatibility page](/lesson/docs/compatibility) maintains a list of compatible options to chose from when running Simplicité: OS, Database, Browser, etc.

### Versioning strategy

Simplicité follows a flavour of **semantic versioning**. 

A `major.minor.revision` (eg. `5.3.25`) numbering system is used where:
- the `major` number is incremented when **new features whith major breaking changes** are added to the platform
- the `minor` number is incremented when **new features** without major breaking changes are added to the platform
- the `revision` number is incremented when **improvements and fixes without any breaking change**

Unreleased (alpha and beta) version's numbers can be subject to change if major breaking changes are introduced in the platform (for example, planned version `5.4` was never released and became version `6.0` instead).

### Maintenance strategy

1. When a new minor version is released, the last minor version (n-1) gets a **Standard maintenance period (>= 6 months)**
2. When a new major version is released, the last minor version (n-1) gets a **Long Term Support (LTS) maintenance period (>= 3 years)**
3. Thus, some parameters of version `n` are definitively fixed once version `n+1` is released:
    - **support type**: if `n+1` becomes major, then `n` becomes LTS. 
    - **maintenance end date**: depends on the release date of `n+1` and if it falls under the major/minor category 

**NB:** Major breaking changes are anticipated way ahead on the roadmap, so when a new major version in the workings it is announced with plenty of time ahead.

> **Fixes associated to security risks are landed on all maintained versions as soon as possible**

> **Once a version is released, it only recieves critical fixes**. There are exceptions to this rule for the latest release where easily backportable and backward-compatible features are sometimes included.

## Upgrade requirements

Maintainers of a Simplicité application have the duty of keeping the platform up-to-date which is **at the very least on the last revision of a maintained version**. 

Not upgrading the platform is associated to numerous risks:
- Security: due to known CVEs (bugs) on the platform or any of its dependencies
- Version freezing: usually, the more commits between two versions, the more complex the upgrade
- Support difficulties and latency: although flexible, our team officially only offers support on up-to-date platforms (mainly to rule out the responsibility of known bugs, and facilitate case reproduction)

| Upgrade type | Priority | Planning and testing | Justification |
|---|---|---|---|
| revision | Upgrade ASAP | None | May contain critical fixes, should have no impact on the app. |
| minor | Plan upgrade | Low | If you can do a minor upgrade, it means your version is in standard maintenance period, which has a lifespan of ~6months. A **minor version** is just a slightly more impacting revision which **may** require some minor refactoring of "atypical" custom code (e.g. custom code that is not using the Simplicité Java API). The configuration remains fully compatible vs previous minor version. |
| major | Put it on your roadmap | Medium | A **major version** includes significant compatibility-breaking changes, including on the platform's technical components, that **will** require impact analysis and potential refactoring on your custom code. The configuration remains fully compatible vs previous major version except that some configuration concepts can become outdated. Upgrading to the next major version is **recommended** as no further functional changes will be done on the previous major version |
