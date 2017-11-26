// Dependencies
import React from "react";
import Toolbar from "../toolBar/";

//CSS dependencies
import "./index.css";

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <header id="headerWrapper">
        <Toolbar />
        <img className="logoHeader" src="static/img/ico.gif" alt="HTML5 Icon" />
        <h1 className="titleHeader">{title}</h1>
      </header>
    );
  }
}

export default Header;
