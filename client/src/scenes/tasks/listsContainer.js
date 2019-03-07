import React, { Component } from 'react';
import List from './list'
import SideBar from '../../components/sideBar';
import OptionsBar from '../../components/optionBar';
import { connect } from 'react-redux';
import { getLists, deleteList,addList } from '../../actions/listActions';
import PropTypes from 'prop-types';

class ListsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input:'',
        }
    
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      componentDidMount() {
        this.props.getLists()
      }
      handleAddClick() {
        const newItem = {
          name: this.state.input,
          token: window.localStorage.jwt,
          tasks:[]
        };
        this.setState({input:''});
        // Add item via addItem action
        this.props.addList(newItem); 
      }
      handleChange(e) {
        this.setState({
          input: e.target.value
        })
      }

  render() {
    
    const listsArr = this.props.lists.lists.map((i,idx) => <List idx={idx} key={i._id} name={i.name} id={i._id} del={this.props.deleteList}/>);
    return (
      <div>
          <OptionsBar />
          <div id="wrapper" >
            
            <SideBar />
            <div id='tasks' className="scrollbar">
                  {listsArr}
                  <div className="card text-center">
                    <button className="btn-ico btn-pad snow fas fa-plus" onClick={this.handleAddClick} >New list</button>
                    <input className='inp snow' 
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

ListsContainer.propTypes = {
  getLists: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getLists, deleteList ,addList}
)(ListsContainer);