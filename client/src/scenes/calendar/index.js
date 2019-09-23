import React, { Component } from 'react';
import OptionsBar from '../../components/optionBar';
import SideBar from '../../components/sideBar';




class DashBord extends Component {

  render() {

    return (
      <div >
        <OptionsBar />

        <SideBar />
        <div style={{ color: '#ffffff !important' }}>
          <h1  >this page is on construction</h1>
        </div>

      </div>
    );
  }
}

export default DashBord;
