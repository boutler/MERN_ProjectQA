// Dependencies
import React from "react";
import ReactDOM from "react-dom";

//Components import
import { Header, Menu, Main, Footer } from "./mainComponents";
// import Footer from "./footer";

class Main_app extends React.Component {
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
        <Main body={children} />
      </div>
    );
  }
}

export default Main_app;
