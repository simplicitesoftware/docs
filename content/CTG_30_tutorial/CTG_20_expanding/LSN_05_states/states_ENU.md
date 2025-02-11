State transitions
====================

A business object can have states that provide the following features: 
- via the menu, direct access to lists filtered by state
- grantable state transitions (for example, it is possible to grant only the administrator the right to go backwards)- actions / treatments in response to an event (transition, entered parameters, etc.)
- actions / processes in response to an event (transition, parameters entered, etc.)

In order to create a state, the following prerequisites must be met
- the object must have a simple enumerated field (which will carry the state)
- this field must be mandatory
- the object must not already have a state

Exercise: create the state of the order.
---------------------------

- use the template editor to add a **required** enumeration field `trnOrdState` to the order
- once added, modify the field to edit the list of values and create the different options (each option has a code and a translation)
- the pre-requisites being validated, the process of adding a state diagram becomes available on the definition of the Order object:
1. selection of the object field bearing the state (in this case, there is only one: trnOrdState)
2. selection of the possible transitions between the different states
3. selection of the groups that can perform the chosen transitions (assign all transitions to the `TRN_ADMIN` group)
4. translation of the actions: each state transition has a translation associated to it which corresponds to the text displayed on the button allowing to switch from one state to another
5. Navigate to the TRN_ORD_STATE list of value configuration, or alternatively, use the template editor to add the status bar to the user interface (UI).
- clear the cache (*because some grants have been modified*) and test the state transitions