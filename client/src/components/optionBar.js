import React, { Component } from "react";


class OptionsBar extends Component {
  onLogout = () => {
    window.localStorage.removeItem("jwt");
    window.location.assign("/");
  };

  handleClick = () => {
    const list = document.getElementById("nav-drop");
    list.classList.remove("dropdown-active");
    void list.offsetWidth;
    list.classList.add("dropdown-active");
  };
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

          <button class="btn-ico fas fa-ellipsis-v " type="button" onClick={this.handleClick} />
          <div id="nav-drop" className="js-drop-down">
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
