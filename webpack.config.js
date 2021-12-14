const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  entry: {
    options: "./src/options.tsx",
    content_script: "./src/content_script.ts",
  },
  output: {
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: [".ts", ".tsx", "..."],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
              },
            },
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                tsx: true,
                syntax: "typescript",
              },
            },
          },
        },
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
      chunks: ["options"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./manifest.json" },
        { from: "./public/resources", to: "./resources" },
      ],
    }),
  ],
};
