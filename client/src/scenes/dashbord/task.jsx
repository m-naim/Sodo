import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  taskDone, changedate} from '../../actions/taskActions';
import {DatePicker, MuiPickersUtilsProvider} from "material-ui-pickers";
import MomentUtils from "@date-io/moment";



class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {input: "", selectedDate: new Date()}
  }
  handleChange=(e)=>{
    this.setState({ input: e.target.value })
  }
  handleDone=()=> {
    this.props.taskDone(this.props.id);
  }
  handleDateChange=(date)=>{
    
    var obj={
      date: date,
      task_id: this.props.id,
      token: window.localStorage.jwt
    }
    this.props.changedate(obj);
  }
  render() {
    
    return (
        <div key={this.props.id} className="task-group-item ">

           <span className='task-name'>{this.props.name}</span>
          <div className='control'>
              <div className='badge'>
                <MuiPickersUtilsProvider utils={MomentUtils} >
                <DatePicker value={this.props.params.limite} onChange={this.handleDateChange} />
                </MuiPickersUtilsProvider>
              </div>
            <button className="btn-ico grn far fa-check-circle" onClick={this.handleDone}/>
            <button className="btn-ico far fa-star" />
            <button class="btn-ico fas fa-ellipsis-v " type="button" ></button> 
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
