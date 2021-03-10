import readPkg from 'read-pkg';
import factory from './factory';

const { workspaces } = readPkg.sync();

const args = process.argv;
const scope = args.reduce((results, arg) => {
  const [, name] = arg.match(/--scope=(.*)/) || [];
  if (name) {
    return [
      ...results,
      name,
    ];
  }
  return results;
}, []);

const configurations = [];

workspaces.forEach((workspace) => {
  const pkg = readPkg.sync({ cwd: workspace });
  const { name } = pkg;
  if (scope.length > 0 && scope.indexOf(name) === -1) {
    return;
  }
  configurations.push(factory(name, workspace));
});

export default configurations;
