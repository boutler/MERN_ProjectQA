// Dependencies
import React from "react";
import ReactDOM from "react-dom";

//Components import
import { Header, Menu, Container, Footer } from "../components/GroupBox/web.js";
// import Footer from "./footer";

class main_web extends React.Component {
  constructor(props) {
    super(props);

    this.index = 0;
    this.estado = null;
  }

  render() {
    const { children } = this.props;

    return (
      <div className="appWrapper">
        <Header title="Mi primera APP con MERN Stack" />
        <Menu />
        <Container body={children} />
      </div>
    );
  }
}

export default main_web;
