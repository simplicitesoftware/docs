# User

## What is a User ?

In Simplicité, a User represents an individual or system entity that has access to the platform. Users interact with the system based on their responsibilities, which determine their access to business objects and system functionalities.

A user can be:
- A human user (e.g., an employee, administrator, or external partner)
- A system user (e.g., a web service account with API access)
- Etc.

## Key Characteristics of a User 

1. Authentication & Access
    - By default, users log in using a **username and password**
    - Authentication can be enhanced with [multi-factor authentication](/lesson/docs/authentication/internal-auth) or [third-party authentication providers](/lesson/docs/authentication/oauth2)
    - Access to business objects and functionalities is governed by responsibilities
2. User Status 
    - Enabled: The user can log in and access the platform
    - Disabled: The user exists but cannot log in
    - Web services only: The user cannot log in but can access the platform's data through API calls

## Configuration objects linked to a User

- [Dashboards](/lesson/docs/platform/user-interface/views/dashboard) : List of Dashboards created by the user
- [Responsibilites](/lesson/platform/user-rights/responsibilites) : List of a user's Responsiblities

## Learn more

- [Internal authentication](/lesson/docs/authentication/internal-auth)
- [Authentication providers](/lesson/docs/authentication/auth-providers)
- [OAuth2](/lesson/docs/authentication/oauth2)
- [Custom user object](https://community.simplicite.io/t/custom-user-object)