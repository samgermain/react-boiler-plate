const path = require("path");
const webpack = require("webpack");

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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    ...require("./plugins.config"),
  ],
};
