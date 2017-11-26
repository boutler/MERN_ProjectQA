// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// CSS import
import "./index.scss";

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = {
      goApp: { name: "Panel de control", url: "/appQa" },
      login_register: {
        name: "Login / Registro ",
        url: "/login_register",
        subMenu: { type: "component", value: "LoginRegister" }
      },
      help: { name: "Ayuda", url: "/help" }
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
      <nav id="wrapperToolbar" className="nav">
        <ul className="nav col-sm-12 nav-pills justify-content-end">
          {menuItems &&
            Object.keys(menuItems).map((value, index) => {
              let hasSubmenu = menuItems[value].subMenu != undefined;
              return (
                <li
                  className={"nav-item " + (hasSubmenu ? "dropdown " : "")}
                  key={index}
                >
                  <Link
                    onClick={() => {
                      this.changeActiveState(index);
                    }}
                    className={
                      "nav-link " +
                      (this.state.itemState[index] ? "active " : "") +
                      (hasSubmenu
                        ? "dropdown-toggle dropdown-toggle-split "
                        : "")
                    }
                    to={menuItems[value].url}
                    data-toggle={hasSubmenu ? "dropdown" : ""}
                    aria-haspopup={hasSubmenu ? "true" : ""}
                    aria-expanded={hasSubmenu ? "false" : ""}
                  >
                    {menuItems[value].name}
                  </Link>

                  {hasSubmenu ? (
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {menuItems[value].subMenu["type"] === "component"
                        ? '<${menuItems[value].subMenu["value"]}/>'
                        : ""}
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          <li className="nav-item ">
            <a
              className="nav-link "
              data-toggle=""
              aria-haspopup=""
              aria-expanded=""
              href="appQa"
            >
              Panel de control
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Toolbar;
