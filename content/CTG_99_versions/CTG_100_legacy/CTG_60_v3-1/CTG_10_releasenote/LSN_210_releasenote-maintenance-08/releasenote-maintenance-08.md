Version 3.1 maintenance 08 release note
=======================================

Changes
-------

- Added `displayHome`, `displayPublic`, `displayPublicHome`, `displayLogon` and `displayLogout` to disposition to override home page, public main page, public home page, logon page and logout page when needed
- Improved CSV import (added `MAPPINGS=<field>:<col #>[:date|datetime|time|float|boolean][,(...)]` parameter to add column mapping and basic transformation when needed), upgraded CSV import UI to reflect these changes
- Added `PRV` (private) system parameter type filtered for public grant
- Simplified OAuth2 configuration
- Made call to Google+ API non mandatory during Google OAuth2 identification/authentication sequence
- Added business object hook `isMergeMaster` to tell wether a record is the "master" in a multi-record merge
- Substituted new lines in long strings fields for CSV export

Fixes
-----

- Fixed pivot table on REST APIs
- Fixed UI when `canReference` hide the current view
- Fixed regression on `ScriptedGrantHooks` that was not returning function results (e.g. `parseAuth`)
- Fixed length and type of `usr_login_read`that was breaking long usernames at password change
- Fixed CSV import with tab separator
- Fixed usage of `EMAIL_DEFAULT_SENDER` system parameter on alerts when `BPMALERT_FROM` is not set
- Fixed `Tool.shiftMonths`
