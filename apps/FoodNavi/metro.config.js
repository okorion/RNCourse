const path = require("node:path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../.."); // 루트 경로

const config = getDefaultConfig(projectRoot);

config.watchFolders = [
  path.resolve(workspaceRoot, "node_modules"),
  path.resolve(workspaceRoot, "packages"), // 있으면 추가
  projectRoot,
];

config.resolver = {
  ...config.resolver,
  unstable_enableSymlinks: true,
  nodeModulesPaths: [path.resolve(workspaceRoot, "node_modules")],
  extraNodeModules: {
    react: path.resolve(workspaceRoot, "node_modules/react"),
    "react-native": path.resolve(workspaceRoot, "node_modules/react-native"),
  },
};

module.exports = config;
