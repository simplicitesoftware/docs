Versioning
===========

<h2 id="branches">Branches</h2>

The Simplicité platform is available on 3 active branches:

- The `release` branch which contains the current **stable** version of the platform.
- The `prerelease` branch which contains a potentially unstable **beta** or a **release candidate** of the next version of the platform.
- The `master` branch which contains the usually unstable current **development** (also called **alpha**) version of the platform.

The usage of these branches is as follows:

- The `release` branch is the **only** one to be used in **production**
- The `prerelease` branch should **only** be used for testing or validation purposes of the next version.
- The `master` branch should **never** be used except for very ponctual testing purposes.

Maintained previous minor and major versions have also dedicated branches (see bellow).

<h2 id="versions">Version numbers</h2>

Each version is identified with:

- a **major version number** (e.g. `5`)
- a **minor version version number** previously known as the "patch level" (e.g. `P02`)
- a revision

The minor version number is suffixed:

- by `a` (for "**A**lpha") on the `master` branch (e.g. `P04a`),
- by eiher `b` (for "**B**eta") or `c` (for "release **C**andidate) on the `prerelease` branch (e.g. `P03b`),
- no suffix on the `release` branch.

As of **major version 5** the "official" **full version number** is noted `m.p.r` where:

- `m` is the **major version number** (e.g. `5`)
- `p` is the numeric value of the **minor version number** (e.g. `2` for minor version `P02`)
- `r` is an incremental **revision** number increased each time a set of changes/fixes is pushed on the `release` branch.

> **Note**:
>
> - On the `prerelease` branch `r` is always `0` and suffixed by `-beta`
> - On the `master` branch `r` is always `0` and suffixed by `-alpha`.

<h2 id="releaseprocess">Release process</h2>

The **functional changes** (e.g. new features, refactored features, etc.) are **only** done on the `master` branch.
Some isolated minor features may also be backported to the `prerelease` and `release` branches.

Fixes are applied on **all** branches:

- Any fix on the `master` branch (critical, major or minor)
- Only major and critical fixes on the `prerelease` branch (only critical fixes during release candidate phase)
- Only critical fixes on the `release` branch

![](versions.png)

The usual delay between two release versions is between 3 and 6 months.

In the meantime the released version is amended by **revisions** which contains only fixes.
The delay between two revisions is variable (from few days to several weeks) because it depends on the identified defects
and other required fixes (e.g. vulnerable third party libs upgrades).

<h2 id="upgradepolicies">Upgrade policies</h2>

Each **revision** of the `release` branch **should** be upgraded as soon as made available (it may contain critical security fixes).
Upgrading to the next revision is **mandatory** and has absolutely **no impact** on your business application's configuraton or custom code.

A **minor version** is just a slightly more impacting revision which **may** require some minor refactoring of "atypical" custom code (e.g. custom code that is not using the Simplicité Java API).
The configuration remains fully compatible vs previous minor version.
Upgrading to the next minor version is **required** because, once release a new minor version, the previous minor version is only maintained during a short period
(see bellow for the **short term maintenance** strategy of minor versions)

A** major version** includes significant compatibility-breaking changes, including on the platform's technical components, that **will** requires impact analysis and potential refactoring on your custom code.
The configuration remains fully compatible vs previous major version except that some configuration concepts can become outdated.
Upgrading to the next major version is **recommended** as no further functional changes will be done on the previous major version
(see bellow for the **long term maintenance** strategy of major versions).

## Maintenance

### Maintenance timeline table

| Version | Maintenance State                      | Support type    | Release date      | Maintenance end date |
|---------|----------------------------------------|-----------------|-------------------|----------------------|
| `6.1`   | ⚠️ Alpha (Development / Nightly build) | Standard        | ?                 | ?                    |
| `6.0`   | ⚠️ Beta (Testing stage)                | Standard        | ?                 | ?                    |
| `5.3`   | ✅ **Current release**                 | Long-term (LTS) | April 24, 2023    | ~ January 2027       |
| `5.2`   | ❌ Expired !                            | Standard        | April 20, 2022    | September 30th, 2023 |
| `5.1`   | ❌ Expired !                            | Standard        | September 1, 2021 | October 31th, 2022   |
| `5.0`   | ❌ Expired !                            | Standard        | January 11, 2021  | September 30th, 2021 |
| `4.0`   | ☑️ **Maintained**                     | Long-term (LTS) | ?                 | January 15th, 2024   |
| `3.x`   | ❌ Expired !                            | Long-term (LTS) | ?                 | ?                    |

(*) the official major version 5 long term maintenance end date will be announced when major version 6 is officially released (schedulled for January 2024).

#### Short term maintenance

As of major version 5 each non final **minor version** becomes a **short term maintenance** branch which is forked from the `release` branch prior to releasing a new minor version.

The minimal duration for the short term maintenance period is **6 months** after a new minor version is released.
In some particular cases the short term maintenance period can be extended.

A short term maintenance branch **only** receives critical fixes.

#### Long term maintenance

Each **major version** becomes a **long term maintenance** branch which is forked from the `release` branch prior to releasing a new major version.

The duration for the long term maintenance period is **3 years** after a new major version is released.

A long term maintenance branch **only** receives critical fixes.

### Git branches and Docker images tags

| Version                   | Instance templates<br/>Git branches | Docker images tags                                |
|:-------------------------:|-------------------------------------|---------------------------------------------------|
| 6.1 (alpha)               | `6.1[-light]`                   | `6-alpha[-light]`                            |
| 6.0 (beta)                | `6.0[-light]`                   | `6-beta[-light]`                            |
| **5.3** (current release) | `release[-light]`              | `5[-light]`, `5.3[-light]`, `5.3.x` (*)  |
| 5.2                       | `5.2[-light]`                   | `5.2[-light]`, `5.2.x`                      |
| 5.1                       | `5.1[-light]`                   | `5.1[-light]`, `5.1.x`                      |
| 5.0                       | `5.0[-light]`                   | `5.0[-light]`, `5.1.x`                      |
| 4.0                       | `4.0[-light]`                   | `4.0[-light]`                                 |
| 3.x                       | `3.x`                              | `3.x`                                           |


In **bold** the ones you should be using.

(*) The use of the "latest" Docker images tags (e.g. `latest`, `5-latest`, `5`) is discouraged unless you are willing to be always pointing to the latest minor release.