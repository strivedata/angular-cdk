import { Tree } from '@angular-devkit/schematics';

interface PackageJson {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

/**
 * Sorts the keys of the given object.
 */
function sortObjectByKeys(obj: Record<string, string>) {
  return Object.keys(obj)
    .sort()
    .reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {} as Record<string, string>);
}

/**
 * Adds a package to the package.json in the given host tree.
 */
export function addPackageToPackageJson(host: Tree, pkg: string, version: string, asDevDependency = false): Tree {
  if (host.exists('package.json')) {


    const sourceText = host.read('package.json')!.toString('utf-8');
    const json = JSON.parse(sourceText) as PackageJson;

    let dependencyProp = asDevDependency ? json['devDependencies'] :  json['dependencies'];

    if (!dependencyProp) {
      dependencyProp = {};
    }

    if (!dependencyProp[pkg]) {
      dependencyProp[pkg] = version;
      dependencyProp = sortObjectByKeys(dependencyProp);
    }

    json[asDevDependency ? 'devDependencies' : 'dependencies'] = dependencyProp;

    host.overwrite('package.json', JSON.stringify(json, null, 2));
  }

  return host;
}
