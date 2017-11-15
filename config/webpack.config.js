// webpack.config.js

const webpack = require("webpack");
const path = require("path");

const PATH = {
  index: path.join(__dirname, "../Application/public/index.js"),
  build: path.join(__dirname, "../Application/build"),
  base: path.join(__dirname, "../Application")
};

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    app: ["webpack-hot-middleware/client?reload=true", PATH.index]
  },
  output: {
    path: PATH.build,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        },
        include: PATH.base
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
