import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteList} from '../../actions/listActions';
import {displayList} from '../../actions/taskActions';



class List extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', active: false }
  }
  
  handleDelClick=()=>{
    this.props.deleteList(this.props.id)
  }
  handleChange=(e)=>{
    this.setState({
      input: e.target.value
    })
  }
  handleDisplay=()=>{
    console.log(this.props.id)
    this.setState({active: true})
    this.props.displayList(this.props.id)
  }
 

  render() {
    let listClass="list-group-item ";
    // console.log({
    //   1: this.props.tasks.selectedList,
    //   2:this.props.id
    // })
    (this.props.tasks.selectedList===this.props.id)?listClass+="active":listClass="list-group-item ";
      
    return (
      <div key={this.props.id} className={listClass}>

           <span className='task-name'>{this.props.name}</span>
          <div className='control'>
            <button class="btn-ico fas fa-ellipsis-v " type="button" onClick={this.handleDelClick} ></button> 
            <button class="btn-ico fas fa-arrow-circle-right" type="button" onClick={this.handleDisplay} ></button> 
          </div>
        </div>
      
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps,
  { deleteList , displayList }
)(List);
