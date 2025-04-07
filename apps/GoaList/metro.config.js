const path = require("path");

const extraNodeModules = {
  "@super/ui": path.resolve(__dirname, "../../packages/ui"),
};

module.exports = {
  resolver: {
    extraNodeModules,
  },
  watchFolders: [path.resolve(__dirname, "../../packages")],
};
