<style>
  h1 {
    color: #2e9ca3;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-color: #e0edfb;
    width: fit-content;
    padding: 10px;
    border-radius: 40px;
    margin: 1rem auto;
  }

  h2 {
    color: #8cafd4;
    font-family: Arial, Helvetica, sans-serif;
  }

  h3 {
    color: #8cafd4;
    width: fit-content;
    padding-right: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #8cafd4;
  }
  
  h4 {
    background-color: #131314;
    padding-top: 10px;
    color: #8cafd4;
  }

  strong {
    color: #f9c854;
    letter-spacing: 1px;
  }
</style>

# ![favicon.ico](/public/favicon.ico) prb-button

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## GitHub Repository

[https://github.com/prbdude/prb-button](https://github.com/prbdude/prb-button)

## Environment Setup

### Command to create this project

```bash
ng new prb-button -p prb --style scss --standalone --ai-config none --ssr false --zoneless true
```

### Command to add the library

You must be in the root of the project to run this command.

```bash
ng generate library prb-buttons -p plib --project-root lib/buttons --standalone 
```

### Private NPM Registry

If your company has a private NPM registry, you should use it.

Examples of private *NPM* registries your company may use:

- Sonatype Nexus
- Artifactory (JFrog)
- GCP Artifact Registry
- AWS Artifact Registry

If you don't have a private NPM registry, and you would like to use a private *npm* registry,
you can use [Verdaccio](https://verdaccio.org/).
Keep in mind that Veradaccio is a *PRIVATE LOCAL NPM* registry and will not work with your
*CICD* pipeline.

Veradaccio can be setup on an IIS server https://verdaccio.org/docs/iss-server to make it
work with your *CICD* pipeline.

See the following for more information:
[VERADACCIO-SETUP.md](VERDACCIO-SETUP.md)

### Local NPM Registry
[verdaccio](https://verdaccio.org/) is a great option for a local NPM registry.

If your company has a private NPM registry, you can use that instead.

#### NPM Setup

Make sure you use the .npmrc file to set your registry.
This project uses verdaccio as the local NPM registry.
You can change it to your company's registry.

## Build the library before using it in the project

***IMPORTANT:***
The library must be built before using it in the project.
The library will be built in the dist folder.

To build the library, run this command:

```bash
ng build prb-buttons
```

Run the npm script build:lib:watch to build the library in watch mode.
This will automatically rebuild the library when changes are made to the source files.

```npm
build:lib:watch
```

## Development server

The project is used to demo the library.

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
