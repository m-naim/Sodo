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
          <div>

          </div>
          <Footer />
        </div>
    );
  }
}

export default DashBord;
