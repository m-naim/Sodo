import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  taskDone, changedate} from '../../actions/taskActions';
import moment from 'moment';




class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handDateChange = this.handDateChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value)
    this.setState({ input: e.target.value })
  }
  handleDone() {
    this.props.taskDone(this.props.id);
  }
  handDateChange(e){
    var obj={
      date: this.state.input,
      task_id: this.props.id,
      token: window.localStorage.jwt
    }
    this.props.changedate(obj);
  }
  render() {
    const dropdown=<div class="dropdown-menu dropdown-left" aria-labelledby="dropdownMenuButton">
                      <input value={this.state.input} onChange={this.handleChange} type="date"/>
                      <button className='btn btn-dark'  onClick={this.handDateChange}>Change</button>
                    </div>

    const timeBtn=<button className="btn-ico far fa-clock " 
                      type="button"  data-toggle="dropdown" 
                      aria-haspopup="true" aria-expanded="false">
                      </button>

    return (
        <div key={this.props.id} className="list-group-item ">
        <div className='badge bg-danger'>
          {timeBtn}
          { dropdown }
          { this.props.params.limite ? moment(this.props.params.limite).format('DD MMM') : ''}
        </div>
        <div>
          {this.props.name}
          <div className=" float-right">
            <button className="btn-ico grn far fa-check-circle" onClick={this.handleDone}/>
            <button class="btn-ico fas fa-ellipsis-v " 
            type="button" ></button>
          </div> 
        </div>                  
        </div> 
    );
  }
}


const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(mapStateToProps,
  {taskDone,changedate}
)(Task);
