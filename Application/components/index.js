// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Components import
import Menu from "./menu";
// import Footer from "./footer";

class Main_app extends React.Component {
  constructor() {
    super();

    this.index = 0;
    this.estado = null;
  }

  render() {
    return (
      <div className="generalWrapper">
        <p>Soy un para</p>
      </div>
    );
  }
}

export default Main_app;
