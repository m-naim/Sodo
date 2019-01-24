import React, { Component } from 'react';
import List from './list'
import SideBar from '../../components/sideBar';
import OptionsBar from '../../components/optionBar';
import Footer from '../../components/footer';

class ListsContainer extends Component {
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
    const listsArr = this.state.lists.map((i) => <List />);
    return (
      <div>
          <OptionsBar />
          <div id="wrapper" >
            
            <SideBar />
            <div id='content-wrapper'>
                  {listsArr}
                  <button onClick={this.handleClick}>new list</button>
            </div>
            
          </div>
      
      </div>
      
    );
  }
}

export default ListsContainer;