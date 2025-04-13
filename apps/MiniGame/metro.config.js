const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../../");

const config = getDefaultConfig(projectRoot);

config.projectRoot = projectRoot;

config.watchFolders = [
  path.resolve(workspaceRoot, "node_modules"),
  path.resolve(workspaceRoot, "packages"),
  projectRoot,
];

config.resolver = {
  ...config.resolver,
  unstable_enableSymlinks: true,
  nodeModulesPaths: [path.resolve(workspaceRoot, "node_modules")],
};

module.exports = config;
