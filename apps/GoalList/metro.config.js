const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../../");

const config = getDefaultConfig(projectRoot);

config.projectRoot = projectRoot;

config.watchFolders = [
  path.resolve(workspaceRoot, "node_modules"), // pnpm symlink 대상
  path.resolve(workspaceRoot, "packages"), // 모노레포 패키지들
  projectRoot,
];

config.resolver = {
  ...config.resolver,
  unstable_enableSymlinks: true,
  nodeModulesPaths: [
    path.resolve(workspaceRoot, "node_modules"), // Metro가 이 경로에서 @babel/runtime 탐색
  ],
};

module.exports = config;
