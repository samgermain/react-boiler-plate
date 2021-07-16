const path = require("path");

("use strict");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "[name]/[name].js",
  },
  module: {
    rules: require("./rules.config"),
  },
  resolve: {
    extensions: require("./extensions.config"),
    alias: require("./aliases.config"),
  },
  plugins: require("./plugins.config"),
};
