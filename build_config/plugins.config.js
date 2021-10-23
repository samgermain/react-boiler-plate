const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyPlugin = require("copy-webpack-plugin");

const icon192 = "src/assets/images/icon-192x192.png";
const icon512 = "src/assets/images/icon-512x512.png";
const desc =
  "Full Stack Developer - B.Sc. in Computer Science - B.ScHn in Bioinformatics";

module.exports = [
  new HtmlWebpackPlugin({
    template: "./entry_points/index.html",
    filename: "./index.html",
    favicon: "./src/assets/images/svg/react-icon.svg",
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[name].css",
  }),
  new WebpackPwaManifest({
    icons: [
      {
        src: path.resolve(icon192),
        sizes: [192],
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: path.resolve(icon512),
        sizes: [512],
        type: "image/png",
      },
    ],
    name: "Sam Germain",
    short_name: "Sam Germain",
    orientation: "portrait",
    start_url: "/",
    theme_color: "#f5e6cc",
    background_color: "#ffffff",
    description: desc,
    display: "standalone",
    prefer_related_applications: false,
  }),
  new CopyPlugin({
    patterns: [{ from: "robots.txt", to: "robots.txt" }],
  }),
];
