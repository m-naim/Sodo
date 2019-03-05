import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteList} from '../../actions/listActions';
import {addTask} from '../../actions/taskActions';
import Task from './task';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks:[{
        todo:''
      }],
    }
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }
  
  handleDelClick(){
    this.props.deleteList(this.props.id)
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  handleClick() {
    let obj={
      list_id: this.props.id,
      name: this.state.input,
      token: window.localStorage.jwt
    }
      this.props.addTask(obj);
     
  }
  handleDone(e) {
    let taskObj={
      list_id: this.props.id,
      task_id: e.target.value,
      token: window.localStorage.jwt
    }
    console.log(taskObj)
    this.props.taskDone(taskObj);
  }
  render() {
    
    const array=this.props.tasks.filter(item => item.list.includes(this.props.id))
    console.log(array)
    const taskArr= array.map((i,idx) => <Task idx={idx} key={i._id} name={i.name} id={i._id} />);
    return (
      <div className="card" style={{width: "18em"}}>
        <div className="header-card">
           {this.props.name}
          <button className="btn-ico snow fas fa-ellipsis-v float-right" onClick={this.handleDelClick} />
        </div>
        <div className="list-group">
          {taskArr}
          <div className="input-group text-center">
            <button className="btn-ico snow fas fa-plus" onClick={this.handleClick} >Add</button>
            <input className='inp snow' placeholder="add new Task" type="text" value={this.state.input} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps,
  { deleteList , addTask}
)(List);
