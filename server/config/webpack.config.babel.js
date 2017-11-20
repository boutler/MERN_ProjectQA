// webpack.config.js

const webpack = require("webpack");
const path = require("path");
const chunksPlugin = require("webpack-split-chunks");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let PATH = {
  index: path.join(__dirname, "../../Application/public/App/web/index.js"),
  build: path.join(__dirname, "../../Application/public/build"),
  base: path.join(__dirname, "../../Application")
};

const isDevEnv = process.env.NODE_ENV === "dev";

const getDevTool = () => "cheap-module-eval-source-map";
const getEntry = () => {
  let entry = [PATH.index];

  if (isDevEnv) {
    entry.push("webpack-hot-middleware/client?reload=true");
  }

  return { app: entry };
};

const getOutput = () => ({
  path: PATH.build,
  publicPath: "/",
  filename: "[name].bundle.js"
});

const getPlugins = () => {
  let plugins = [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery",
    //   Popper: ["popper.js", "default"]
    // })
    // new ExtractTextPlugin("[name].css")
    // new chunksPlugin({ to: "vendor", test: /node_modules/ })
  ];
  //

  if (isDevEnv) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );
  } else {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })
    );
  }

  return plugins;
};

const getModule = () => ({
  loaders: [
    {
      test: /\.js?$/,
      loader: "babel-loader",
      query: {
        presets: ["es2015", "react"]
      },
      include: PATH.base
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", {
        loader: "postcss-loader",
        options: { plugins: function () {
        return [
          require('precss'),
          require('autoprefixer')
        ];
      }}}, "sass-loader"]
    },
    {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"],
      include: PATH.base
    }
  ]
});

module.exports = {
  devtool: getDevTool(),
  entry: getEntry(),
  output: getOutput(),
  module: getModule(),
  plugins: getPlugins()
};
