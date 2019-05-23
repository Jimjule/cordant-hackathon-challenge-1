# Challenge 1
## Freshservice Angular widget

## Context

Cordant Group is using Freshservice as a ticketing system to record and process the various tickets users are creating.

In the apps we are currently using, we need to provide a quick and easy way for users to tell us when something has to be dealt with, being either defects that need to be fixed, or service requests.

## Challenge
Your mission is to create a widget, accessible anywhere in an Angular website, that will take the relevant input and context information, and then create a ticket.

The “static” inputs that the component will need are:

- Freshservice API Keys
- Logged in person unique identifier type
- Logged in person unique identifier
- Logged in person name

The component should capture through a form are:

- A description editable by the user
- The urgency of the issue encountered


On saving, the ticket should then be created with the information captured above, plus the current url on the page the user is viewing.
## Bonus
If you are done with the work above, then let’s crack on !

- On the component inputs
  - Add a ticketPrefix attribute, to prefix all subject of tickets created for this implementation
  - Add a category attribute => i.e.: name of the project
  - Add a subCategory attribute => i.e.: name of the app
  - Add a file attachment to the ticket information collection component about to be created (screenshot? Simple file attachment)
  - Add a store management / a service to edit the information that needs to be sent to FreshService (i.e.: we want to change the ticket prefix for a specific action)
  - Implement more attribute collection based on the API documentation
  - Export as an Angular Library
