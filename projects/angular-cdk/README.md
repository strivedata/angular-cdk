# Strive Angular Component Dev Kit (CDK)

Component Dev Kit (CDK) for building Angular UI components.

## Schematics

This library ships with schematics for ng-add.

To make a dry-run when developing the schematics first install the Angular schematic CLI, run:

    npm intall -g @angular-devkit/schematics-cli

After build, you can then test the schematic by running from the `dist` folder:

    schematics .:ng-add

To test within a real project, run:

    schematics [RELATIVE PATH TO PROJECT]:ng-add --debug=false

## Build

To build the source of the library run the following command from the root directory:

    ng build angular-cdk

To build the library with schematics, you first have to build the library its self (see above) and after that build the schematics:
    
    cd projects/angular-cdk
    npm run schematics:build

## Publish

To publish on NPM run:

    npm publish --access public

To mark the release as alpha or beta version add a tag:

    npm publish --access public --tag alpha
    npm publish --access public --tag beta
