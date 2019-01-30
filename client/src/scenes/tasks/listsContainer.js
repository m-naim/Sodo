import React, { Component } from 'react';
import List from './list'
import SideBar from '../../components/sideBar';
import OptionsBar from '../../components/optionBar';

class ListsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input:'',
          lists: [],
        }
    
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleClick() {
        this.setState({
          lists: this.state.lists.concat(this.state.input),
          title: this.state.input
        })
      }
      handleChange(e) {
        this.setState({
          input: e.target.value
        })
      }

  render() {
    const listsArr = this.state.lists.map((i) => <List name={i} />);
    return (
      <div>
          <OptionsBar />
          <div id="wrapper" >
            
            <SideBar />
            <div id='tasks' className="scrollbar">
                  {listsArr}
                  <div class="card text-center">
                    <button className="btn-ico btn-pad snow fas fa-plus" onClick={this.handleClick} >New list</button>
                    <input class='inp snow' 
                      placeholder="Tape the liste name" 
                      type="text" value={this.state.input} 
                      onChange={this.handleChange} />

                  </div>
            </div>
            
          </div>
      
      </div>
      
    );
  }
}

export default ListsContainer;