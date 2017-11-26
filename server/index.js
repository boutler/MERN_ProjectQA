"use strict";
import express from "express";
import config from "./config/exp.config.js";
import path from "path";
import webpack from "webpack";
import webpackConfig from "./config/webpack.config.babel.js";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();
const webpackCompiler = webpack(webpackConfig);
const isDevEnv = process.env.NODE_ENV === "dev";

console.log("isDevEnv: " + isDevEnv + " - NODE_ENV:" + process.env.NODE_ENV);

// Express Settings
app.set("env", config.env);
app.set("views", config.exp_views);
app.set("view engine", config.exp_view_engine);
app.set("x-powered-by", config.exp_x_powered_by);

//Middleware
app.use(
  "/static",
  express.static(path.join(__dirname, "../Application/public"))
);

if (isDevEnv) {
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
} else {
}

app.use("/appQa", (req, res) => {
  console.log("appQa");
  res.sendFile(path.join(__dirname, "../Application/public/App/qa/index.html"));
});

app.use("/", (req, res) => {
  console.log("********");
  res.sendFile(
    path.join(__dirname, "../Application/public/App/web/index.html")
  );
});

app.listen(config.port, err => {
  if (!err) {
    console.log(
      "El server está corriendo correctamente en el puerto: " + config.port
    );
  }
});
