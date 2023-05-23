Multiple authentication providers
=================================

This document applies to version **4.0 P23** and above.

<h2 id="config">Configuration</h2>

The authentication providers are to be configured as the `AUTH_PROVIDERS` system parameter, e.g.

```json
[
	{ "type": "internal", "name": "simplicite", "visible": false },
	{ "type": "oauth2", "name": "google", "label": "Sign in with Google OAuth2 IdP", "sync": true, "client_id": "<my client ID>", "client_secret": "<my client secret>" },
	{ "type": "saml", "name": "google", "label": "Sign in with Google SAML IdP", "sync": true }
	{ "type": "ldap", "name": "openldap" }
]
```

The specific settings (ex: the OAuth2 client ID) may either be configured:

- directly in the above JSON as the`<setting name (in lowercase)>` attribute (e.g.: `client_id`)
- or as individual system parameters named `<authentication type (in uppercase)>_<setting name (in uppercase)> <authentication provider name>`
  (e.g.: `OAUTH2_CLIENT_ID google` or `SAML_ENTITY_ID google`).

<h3 id="common">Common settings</h3>

The JSON settings include the common attributes:

- `type` (**required**): the authentication provider's type, the supported values are:
	- `internal` (internal OAuth2 authentication)
	- `oauth2` (external OAuth2 authentication)
	- `saml` (external SAML authentication
	- `ldap` external LDAP authentication
	- `crowd` external Atlassian Crowd authentication
- `name` (**required**): the authentication provider's name (must be unique per type)
- `label` (optional): the authentication provider's label on the provider choice page
- `visible` (optional): is the authentication provider's visible on the provider choice page
  (if not visible you can still use the provider appending `?_provider=<type>:<name>`
  (e.g.: `?_provider=internal:simplicite` in the above example where internal authentication provider is not visible)
- `sync` (optional): synchronize data from the authentication provider user info endpoint (if applicable for the considered authentication provider)

> **Note** : You can also customize/add a custom logo for a given provider on the provider choice page by configuring
> an SVG image resource named `<type (in uppercase)>_SIGNIN_<name (in uppercase)>` (e.g. `LDAP_SIGNIN_MYOPENLDAP`).
> As of version 5 it is also possible to configure a `image` setting.

<h3 id="specific">Specific settings</h3>

The other settings depends on the provider's type, please refer to the following document for details:

- [OAuth2](/lesson/docs/authentication/tomcat-oauth2) settings
- [SAML](/lesson/docs/authentication/tomcat-saml) settings

<h3 id="troubleshooting">Troubleshooting</h3>

To investigate authentication issues you can **temporarly** activate the `DAUTHCS001` log event.

Make sure to déactivate it once your investigation is done as it produces rather verbose output.
