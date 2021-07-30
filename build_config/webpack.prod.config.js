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
        PUBLIC_URL: JSON.stringify("https://react-boiler-plate.netlify.app"),
      },
    }),
    ...require("./plugins.config"),
    ...require("./service-worker-plugin.config"),
  ],
};
