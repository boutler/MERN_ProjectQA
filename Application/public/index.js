// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// AppRouter
import AppRouter from "./router";

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById("main-app")
);
