const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    options: "./src/options.tsx",
    content_script: "./src/content_script.ts",
  },
  output: {
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/options.html",
      filename: "./options.html",
      chunks: ["app"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./public/manifest.json", to: "./manifest.json" }],
    }),
  ],
};
