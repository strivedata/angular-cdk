import {
  Rule,
  Tree,
  SchematicsException,
  apply,
  url,
  mergeWith,
  SchematicContext,
  template,
  branchAndMerge,
  chain
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema as TailwindSetupOptions } from './schema';
import { addPackageToPackageJson } from '../commons/add-package';

/**
 * Adds Tailwind to project according to https://tailwindcss.com/docs/guides/angular.
 */
export function myService(options: TailwindSetupOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // Step 1: Check for required params
    if (!options.blue) {
      throw new SchematicsException('A color code for blue is required!');
    }
    // Step 2: Define and chain rules
    const rules: Rule[] = [
      addFiles(options),
      addDependencies(),
      addDirectives()
    ];
    return chain(rules)(tree, context);
  };
}

/**
 * Adds tailwind.config.js to project.
 */
function addFiles(options: TailwindSetupOptions): Rule {
  const templateSource = apply(url('./files'), [
    template({
      ...strings,
      ...options
    }),
  ]);
  return branchAndMerge(mergeWith(templateSource));
}

/**
 * Adds Tailwind Directives to stylesheet.
 */
function addDirectives(): Rule {
  return (tree: Tree) => {
    const stylesheet = '/src/styles.scss'; // TODO: Check project for type of styles (e.g. CSS vs. SCSS)
    const contents = '/* Tailwind CSS Directives */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;';
    if (!tree.exists(stylesheet)) {
      tree.create(stylesheet, contents);
    }
    let buffer = tree.read(stylesheet);
    if (buffer != null) {
      let updatedStylesheet = `${buffer.toString()}\n${contents}`;
      tree.overwrite(stylesheet, updatedStylesheet);
    }
  }
}

/**
 * Adds required tailwind packages to package.json.
 */
function addDependencies(): Rule {
  return (tree: Tree) => {
    addPackageToPackageJson(tree, 'tailwindcss', '^3.1.8', true);
    addPackageToPackageJson(tree, 'postcss', '^8.4.16', true);
    addPackageToPackageJson(tree, 'autoprefixer', '^10.4.12', true);
  }
}
