import React, { Component } from 'react';
import {Link } from "react-router-dom";

class OptionsBar extends Component {
onLogout=()=>{
    window.localStorage.removeItem('jwt');	
}
  render() {
    return (
      <nav id="nav" className="navbar">
        <Link className="nav-title" to="/">Ephyon</Link>

        <button className="logout" onClick={()=>{
          window.localStorage.removeItem("jwt");
          window.location.assign("/") }
          }>
           Logout
        </button>
      </nav>
    );
  }
}

export default OptionsBar;