import React, { Component } from 'react';
import OptionsBar from '../../components/optionBar';
import SideBar from '../../components/sideBar';
import Footer from '../../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


class DashBord extends Component {
  
  render() {
    
    return (
        <div >
        <OptionsBar />
        
        <SideBar />
          <div style={{color: '#ffffff !important'}}>
            <h1  >this page is on construction</h1>
          </div>
          <Footer />
        </div>
    );
  }
}

export default DashBord;
