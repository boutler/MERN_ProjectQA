// webpack.config.js

const webpack = require("webpack");
const path = require("path");

const PATH = {
  index: path.join(__dirname, "../../Application/public/App/web/index.js"),
  build: path.join(__dirname, "../../Application/build"),
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
  filename: "bundle.js"
});

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
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"],
      include: PATH.base
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: PATH.base
    }
  ]
});

const getPlugins = () => {
  return [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ];
};

module.exports = {
  devtool: getDevTool(),
  entry: getEntry(),
  output: getOutput(),
  module: getModule(),
  plugins: getPlugins()
};
