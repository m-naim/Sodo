import React, { Component } from "react";
import { DropDownbutton } from "./dropDownbutton";
import { NavDropDown } from "./navDropDown"


class OptionsBar extends Component {

  render() {
    return (
      <nav id="nav" className="side-bar">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png"
            alt="avatar"
            width="32px"
            height="32px"
          />
          <span>user</span>
        </div>

        <div className="sidebar-user">
          <DropDownbutton id="nav-drop" Component={NavDropDown} />
        </div>
      </nav>
    );
  }
}


export default OptionsBar;
