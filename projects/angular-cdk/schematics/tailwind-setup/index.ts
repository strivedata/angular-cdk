import {
  Rule,
  Tree,
  SchematicsException,
  apply,
  url,
  mergeWith,
  SchematicContext,
  template,
  branchAndMerge
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema as TailwindSetupOptions } from './schema';
import { addPackageToPackageJson } from '../commons/add-package';

export function myService(options: TailwindSetupOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (!options.blue) {
      throw new SchematicsException('A color code for blue is required!');
    }
    // Step 1: Add packages to package.json
    addDependencies(tree);
    // Step 2: Copy required tailwind files
    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        ...options,
      }),
    ]);
    return branchAndMerge(mergeWith(templateSource));
  };
}

function addDependencies(tree: Tree): void {
  addPackageToPackageJson(tree, 'tailwindcss', '^3.1.8', true);
  addPackageToPackageJson(tree, 'postcss', '^8.4.16', true);
  addPackageToPackageJson(tree, 'autoprefixer', '^10.4.12', true);
}
