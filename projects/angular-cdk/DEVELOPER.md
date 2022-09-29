# Strive Angular Component Dev Kit (CDK)

This file contains developer specific information on the CDK.

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
