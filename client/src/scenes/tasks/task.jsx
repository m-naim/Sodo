import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  taskDone } from '../../actions/taskActions';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleDone = this.handleDone.bind(this);
  }
  
  handleDone(e) {
    console.log(this.props.id);
    this.props.taskDone(this.props.id);
  }
  render() {
    return (
        <div key={this.props.id} className="list-group-item ">
        {this.props.name}
        <div className=" float-right">
          <button className="btn-ico grn far fa-check-circle" onClick={this.handleDone}/>
          <a className="text-dark" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="btn-ico fas fa-ellipsis-v"></i>
            </a>   
            <div className="dropdown-menu dropdown-menu-left" aria-labelledby="alertsDropdown">
              <a className="dropdown-item" href="#">delete</a>
              <a className="dropdown-item" href="#">dead line</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">else</a>
            </div>         
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps,
  {taskDone}
)(Task);
