<h1 align="center">Dream Team Generator</h1>

## Description

This app exclusively features Node.JS, as well as Inquirer and Jest packages in order to create an HTML file displaying a team roster.

Initializing the application will allow the user to be prompted with building their roster around 3 primary roles: Intern, Engineer, and Project Manager. From there, users can create team member profiles, comprising of the member's name, employee ID, and email address. In addition, designated roles will also net additional profile elements for said member: specifically, an office number for any managers, Github username for engineers, and attended universities for interns.

Finally, test parameters (via the Jest Javascript Testing Framework) are included in the application to ensure correctness of the codebase.

## Installation Parameters

`npm i` allows for necessary installation of miscellaneous packages. `npm i inquirer` and `npm i jest` are necessary for proper function of the app, both for creating fluidity and for allowing test functionality. Finally, `npm i email-validator` is used to install the Email Validator package. This ensures that the email input for team members must have proper syntax, in order to minimize error.

## Test Parameters

Once installation of necessary packages are complete, running `npm run test` initializes and is directed towards proper functionality of the constructors, located within the `/lib` and `/test` folders. </br>

Once completed, run the command `node index.js` to open the question prompts and begin creation of the README file.

## Questions? Comments?

Contact me on Github or via email! </br>
Github: [github.com/joeytmab](github.com/joeytmab) </br>
Email: [joseph.t.binas@gmail.com](joseph.t.binas@gmail.com)
