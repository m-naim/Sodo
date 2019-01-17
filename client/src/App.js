import React, { Component } from 'react';
import './App.css';
import OptionsBar from './components/optionBar';
import SideBar from './components/sideBar';
import Foooter from './components/footer';
import List from './components/list'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OptionsBar />
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper">
                <List />
                <Foooter /> 
                </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
