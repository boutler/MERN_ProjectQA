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
      <nav
        id="wrapperMenu"
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        role="navigation"
      >
        <div
          className="navbar-toggler col-12"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="container">
            <div class="row align-items-center">
              <div className="text col-10">MENU</div>
              <span class="col-2 mr-auto navbar-toggler-icon" />
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="col-12 navbar-nav nav-pills nav-justified">
            {menuItems &&
              Object.keys(menuItems).map((value, index) => {
                return (
                  <li className="nav-item itemList" key={index}>
                    <Link
                      onClick={() => {
                        this.changeActiveState(index);
                      }}
                      className={
                        "nav-link " +
                        (this.state.itemState[index] ? "active" : "")
                      }
                      to={menuItems[value].url}
                    >
                      {menuItems[value].name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
