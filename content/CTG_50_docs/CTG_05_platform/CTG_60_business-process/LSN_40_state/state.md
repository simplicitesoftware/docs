# State

A business object can have states that provide the following features: 
- via the menu, direct access to lists filtered by state
- grantable state transitions (for example, it is possible to grant only the administrator the right to go backwards)- actions / treatments in response to an event (transition, entered parameters, etc.)
- actions / processes in response to an event (transition, parameters entered, etc.)

In order to create a state, the following prerequisites must be met
- the object must have a simple enumerated field (which will carry the state)
- this field must be mandatory
- the object must not already have a state