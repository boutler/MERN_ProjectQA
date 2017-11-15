// Dependencies
import React from "react";
import ReactDOM from "react-dom";

//Components import
import content from "./content";
// import Footer from "./footer";

class Main_app extends React.Component {
  constructor() {
    super();

    this.index = 0;
    this.estado = null;
  }

  render() {
    const { children } = this.props;

    return (
      <div className="generalWrapper">
        <header>
          <p>Soy un Header</p>
        </header>
        <content body={children} />
      </div>
    );
  }
}

export default Main_app;
