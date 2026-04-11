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
  color: #8cafd4;
}

strong {
  color: #f9c854;
  letter-spacing: 1px;
}
</style>

# ![favicon.ico](../../public/favicon.ico) PrbButtons

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

Buttons were copied from [programmer-roadblocks](https://github.com/PRBDUDE/programmer-roadblocks) project from the /src/app/core/buttons folder.

Each button component was renamed to drop '**.component**' from the file name.

Each component **selector:** was changed to '**plib**-{button-name}' where '{button-name}' is the name of the button.

## Local NPM Registry
[verdaccio](https://verdaccio.org/) is a great option for a local NPM registry.

If your company has a private NPM registry, you can use that instead.

### NPM Setup

Make sure you use the .npmrc file to set your registry.
This project uses verdaccio as the local NPM registry.
You can change it to your company's registry.

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

To build the library, run:

```bash
ng build prb-buttons
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can manually publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/prb-buttons
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

#### Or you can use the npm script to watch for changes and publish the library automatically

From the NPM script menu in Webstorm or IntelliJ, run this script:
```npm
build:lib:watch
```

## Running unit tests

To execute unit tests with the [ViTest](https://vitest.dev/) test runner, use the following command:

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
