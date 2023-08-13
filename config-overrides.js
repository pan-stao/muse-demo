const { override, addLessLoader, fixBabelImports ,addWebpackAlias,adjustStyleLoaders} = require("customize-cra");
const path = require("path");

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: "[local]--[hash:base64:5]",
      modifyVars: {'@primary-color': '#16a951'},
     
    },
    // cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
    // cssModules: {
    //   localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    // },
  }),
  adjustStyleLoaders(({use:[,, postcss]}) =>{
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions}
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, //或者true, true代表运用less
  }),
);
