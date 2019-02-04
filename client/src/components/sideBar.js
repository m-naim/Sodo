import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';
import {Link } from "react-router-dom";
import Footer from './footer';

class SideBar extends Component {
    componentDidMount(){
        $("#sidebarToggle").on('click',function(e) {
            e.preventDefault();
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");
          });
    }
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
        <li className="nav-item">
          <Link to="/Calendar" className="nav-link">
          <i className="fas fa-fw fa-calendar-alt"></i>
            <span>Calendar</span></Link>
        </li>
        <li className="nav-item">
            <Link to="/Settings" className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Settings</span></Link>
        </li>
      </ul>
      <Footer />
      </div>
    );
  }
}

export default SideBar;