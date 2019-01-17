import React, { Component } from 'react';
import './App.css';
import OptionsBar from './components/optionBar';
import SideBar from './components/sideBar';
import Foooter from './components/footer';
import List from './components/list'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'new List',
      lists: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      lists: this.state.lists.concat(this.state.title)
    })
  }
  render() {
    const listsArr = this.state.lists.map((i) => <List />
    );
    return (
      <div className="App">
        <OptionsBar />
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper">
                <div className="d-flex flex-row">
                  {listsArr}
                  <button onClick={this.handleClick}>new list</button>
                </div>
                <Foooter /> 
                
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
