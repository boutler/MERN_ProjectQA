"use strict";
import express from "express";
import config from "./config/exp.config.js";
import path from "path";
import webpack from "webpack";
import webpackConfig from "./config/webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();

const webpackCompiler = webpack(webpackConfig);

// Express Settings
app.set("env", config.env);
app.set("views", config.exp_views);
app.set("view engine", config.exp_view_engine);
app.set("x-powered-by", config.exp_x_powered_by);

//Middleware
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Application/public/index.html"));
});

app.listen(config.port, err => {
  if (!err) {
    console.log(
      "El server está corriendo correctamente en el puerto: " + config.port
    );
  }
});
