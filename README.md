```markdown
# Cypress with TypeScript Template

This is a template project that provides a starting point for using Cypress with TypeScript. It allows you to write end-to-end tests for your web applications in a simple and efficient manner.

## Prerequisites

Before getting started, please ensure that you have the following prerequisites installed on your machine:

- Node.js (version >= 10)
- Git

## Getting Started

To begin using this template, follow the steps below:

1. Clone the project repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd cypress-typescript-modulo
   ```

3. Install the project dependencies using Yarn:

   ```bash
   yarn install
   ```

## Running Tests

- Opening Cypress Test Runner:

  To open the Cypress Test Runner with a graphical interface, use the following command:

  ```bash
  npx cypress open
  ```

  This will open the Cypress Test Runner window, where you can select and run your tests interactively.

- Running Tests in Headless Mode:

  To run the tests in headless mode without the graphical interface, use the following command:

  ```bash
  npx cypress run
  ```

## Writing Tests

By default, this template provides an example test located at `cypress/e2e/spec.cy.ts`. You can modify or delete this file and create your own test files in the same directory.

Cypress uses a powerful API to interact with your application and perform various actions and assertions. You can find more information about writing tests using Cypress in the official documentation.

## Custom Commands

This template includes custom commands that can be used in your tests to interact with the application or perform common actions. These commands are defined in the following files:

- `cypress/support/api_commands.ts`: Contains custom commands for API interactions.
- `cypress/support/gui_commands.ts`: Contains custom commands for the graphical interface.

You can modify these files to add your own custom commands based on your application's requirements.

## Type Definitions

The template includes a type definition file named `index.d.ts`. This file allows you to define type definitions for your custom commands, enabling TypeScript to provide better code completion and type checking.

You can modify this file to add type definitions for your custom commands in the `Cypress.Commands.add` function calls.

## Configuration

The template project includes a configuration file named `cypress.json`. This file allows you to configure various aspects of Cypress, such as the base URL of your application and additional settings. You can refer to the Cypress configuration documentation for more details.

## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress GitHub Repository](https://github.com/cypress-io/cypress)

## License

This project is licensed under the MIT License. Feel free to modify and use it according to your needs.
