// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// CSS import
import "./index.scss";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = {
      home: { name: "Home", url: "/" },
      user: { name: "My Account", url: "/user" },
      contact: { name: "Contact", url: "/contact" }
    };

    let pathName = document.location.pathname;
    let itemState = Array(Object.keys(this.menuItems).length).fill(false);

    //Setting up the currentPath as active in the menu
    for (let val in this.menuItems) {
      this.menuItems[val].url === pathName
        ? (itemState[Object.keys(this.menuItems).indexOf(val)] = true)
        : "";
    }

    this.state = {
      itemState: itemState
    };
  }

  changeActiveState(i) {
    const newState = Array(Object.keys(this.menuItems).length).fill(false);
    newState[i] = true;
    this.setState({ itemState: newState });
  }

  render() {
    const menuItems = this.menuItems;

    return (
      <nav id="wrapperMenu">
        <ul>
          {menuItems &&
            Object.keys(menuItems).map((value, index) => {
              return (
                <li className="itemList" key={index}>
                  <Link
                    onClick={() => {
                      this.changeActiveState(index);
                    }}
                    className={
                      "item " + (this.state.itemState[index] ? "active" : "")
                    }
                    to={menuItems[value].url}
                  >
                    {menuItems[value].name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}

export default Menu;
