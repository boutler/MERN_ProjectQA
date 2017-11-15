// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor() {
    super();

    this.menuItems = {
      home: { name: "Home", url: "/" },
      user: { name: "My Account", url: "/user" },
      contact: { name: "Contact", url: "/contact" }
    };
  }
  render() {
    const menuItems = this.menuItems;

    console.log(menuItems["home"].url);
    return (
      <div className="wrapperMenu">
        <ul>
          {menuItems &&
            Object.keys(menuItems).map((value, index) => {
              return (
                <li key={index}>
                  <Link to={menuItems[value].url}>{menuItems[value].name}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Menu;
