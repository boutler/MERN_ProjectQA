// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";

// View Routes
import MainApp from "../../../App/web.js";
import Home from "../../../views/home";
import User from "../../../views/user";
import Contact from "../../../views/contact";
import Page404 from "../../../views/Page404";

const AppRouter = () => (
  <MainApp>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/contact" component={Contact} />
      <Route component={Page404} />
    </Switch>
  </MainApp>
);

export default AppRouter;
