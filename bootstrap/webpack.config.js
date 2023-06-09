"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postsccoptions: {
                plugin: () => [require("autoprefixer")],
              },
            },
          },
          {
            lader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
