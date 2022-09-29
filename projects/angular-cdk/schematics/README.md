# Schematics

This directory contains the [Angular Schematics](https://angular.io/guide/schematics) of the Strivestudio Angular CDK. They are intended to be bundled and shipped with the library and allow you to scaffold new Angular applications that are intended to use the CDK. With schematics you can:

* Install and configure the library using `ng add`
* Create common components and services using `ng generate`
* Adjust projects for new version of the library using `ng update`

It follows the general Angular guidelines for using schematics within libraries. For more information check the and [this article](https://angular.io/guide/schematics-for-libraries).

## Included Schematics

This readme file documents all included schematics and how to use them. For more information on developing schematics please check the `DEVELOPER.md` file in this directory.

### `ng-add`

Use this schematic for new or existing projects. It will install the library together with all required dependencies and create necessary configuration files and components.

    ng add @strivestudio/angular-cdk

### `add-tailwind`

Adds and configures [Tailwind CSS](https://tailwindcss.com) in your project using the official [installation guidelines](https://tailwindcss.com/docs/guides/angular). This schematic will automatically be run when you use the `ng add` schematic to install the library.
