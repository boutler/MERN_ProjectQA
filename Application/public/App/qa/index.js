// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// AppRouter
import AppRouter from "./router";

// CSS Dependencies
import "./index.scss";
// import "../../src/css/bootstrap.css";
import "bootstrap";

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById("main-app")
);
