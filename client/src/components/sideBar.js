import React, { Component } from 'react';

import {Link } from "react-router-dom";
import Footer from './footer';

class SideBar extends Component {
   render() {
    return (
    <div className='sidebar static-top'>
      <ul className="navbar-nav nav-width ">
        <li className="nav-item active">
        <Link to="/" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/tasks" className="nav-link">
          <i className="fas fa-fw fa-tasks"></i>
            <span>Tasks</span>
        </Link>
        </li>
        
      </ul>
      <Footer />
      </div>
    );
  }
}

export default SideBar;