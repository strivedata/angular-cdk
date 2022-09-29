# Schematics (Developer)

This file contains all necessary information for developing the Angular Schematics for the Strivestudio Angular CDK library.

For an overview on schematics please check the [official README](https://github.com/angular/angular-cli/blob/HEAD/packages/angular_devkit/schematics/README.md).

## Setup

In order to develop and test-run schematics we recommend to globally install the [Schematics CLI](https://www.npmjs.com/package/@angular-devkit/schematics-cli):

    npm install -g @angular-devkit/schematics-cli

## Build

Schematics are compiled separately from the library source code using the `tsconfig.schematics.json` contained in the root directory of the library project. To start a build, execute the npm build script defined in the package.json: 

    npm run build:schematics

This will use `tsc` to compile all source files from the `schematics` folder and copy the resulting build into the dist folder of the library: `dist/angular-cdk/schematics`.

## Testing

In order to test your schematics, you can make dry-runs with debug output using the schematics CLI. Navigate to the dist folder of the library and run:

    schematics .:[NAME OF SCHEMATIC]

To test within a real project navigate to the project root in the terminal and run:

    schematics [RELATIVE PATH TO PROJECT]:ng-add --debug=false
