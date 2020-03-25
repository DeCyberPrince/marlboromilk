const path = require("path");
module.exports = {
  productionSourceMap: false,
  assetsDir: "assets",
  outputDir: path.resolve(__dirname, "../server/public")
};
