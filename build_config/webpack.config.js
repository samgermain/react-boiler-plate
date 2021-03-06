const path = require("path");
const webpack = require("webpack");

("use strict");
module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name]/[name].js",
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    port: 8080,
    // proxy: {
    //   "/api": {
    //     target: "https://server.example.com"
    //   }
    // }
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
        NODE_ENV: JSON.stringify("development"),
        PUBLIC_URL: JSON.stringify("https://react-boiler-plate.netlify.app"),
      },
    }),
    ...require("./plugins.config"),
  ],
};
