import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import {  deleteList } from '../../actions/listActions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks:[],
      id: 1
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
      todo: this.state.input
    }
      axios.post('/addtask', obj)
          .then(res => console.log(res.data));

    this.setState({
      tasks: this.state.tasks.concat({
        id: this.state.id + 1,
        todo: this.state.input
      }),
      id: this.state.id + 1,
      input: ''
    })
     
  }
  handleDone(e) {

    this.setState({
      list: this.state.tasks.filter(function (o) {
        if (o.id == e.target.value) {
          return false;
        } else {
          return true;
        }
      })
    });
  }
  render() {
    const listItems = this.props.tasks.map((i) =>
      <li key={i._id} className="list-group-item ">
        {i.todo}
        <div className="float-right">
          <button className="btn-ico grn far fa-check-circle" value={i.id} onClick={this.handleDone}/>
          <button className="btn-ico fas fa-ellipsis-v" value={i.id} />
        </div>
        
      </li>
    );
    return (
      <div className="card" style={{width: "18em"}}>
        <div className="header-card">
           {this.props.name}
          <button className="btn-ico snow fas fa-ellipsis-v float-right" onClick={this.handleDelClick} />
        </div>
        <div className="list-group">
          {listItems}
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
  lists: state.lists
});

export default connect(mapStateToProps,
  {  deleteList }
)(List);
