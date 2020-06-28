module.exports = {
  productionSourceMap: false,
  assetsDir: "assets",
  outputDir: "../public",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/styles/_config.scss";
        @import "@/assets/styles/_media.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
  }
};
