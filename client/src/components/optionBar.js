import React, { Component } from "react";
import { Link } from "react-router-dom";

class OptionsBar extends Component {
  onLogout = () => {
    window.localStorage.removeItem("jwt");
    window.location.assign("/");
  };

  handleClick = () => {
    console.log("clk");
  };
  render() {
    return (
      <nav id="nav" className="side-bar">
        <Link className="nav-title" to="/">
          Ephyon
        </Link>

        <div className="sidebar-user">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png"
            alt="avatar"
            width="32px"
            height="32px"
            onClick={this.handleClick}
          />
          <div className="js-drop-down">
            <div>User name</div>
            <button className="logout" onClick={this.onLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default OptionsBar;
