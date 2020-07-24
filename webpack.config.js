
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "app");

module.exports = {
  mode: "production",
  entry: {
    index: "./app/index.js"
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    contentBase: dist,
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, "app")
    ]),

    new WasmPackPlugin({
      crateDirectory: __dirname,
      outDir: "./app/pkg",
    }),
  ]
};