import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  schematic
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { NgAddOptions } from './schema';

export function ngAdd(options: NgAddOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {

    const rules: Rule[] = [];

    // Rule: Add Tailwind (optional)
    if (options.addTailwind) {
      rules.push(schematic("tailwind-setup", options));
    }

    // Step 1: Chain and execute rules
    const ruleChain = chain(rules)(tree, context);

    // Step 2: Add and install dependencies (optional)
    if (options.runInstall) {
      context.addTask(new NodePackageInstallTask());
    }

    return ruleChain;

  };
}
