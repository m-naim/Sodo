import React, { Component } from "react";
import { connect } from "react-redux";
import { taskDone } from "../../../actions/taskActions";

import DropDownbutton from "../../../components/dropDownbutton";
import { ItemDropDown } from "./itemDropDown"

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  handleChange = e => this.setState({ input: e.target.value });
  handleDone = () => this.props.taskDone(this.props.id);
  handleDateChange = date => {
    var obj = {
      date: date,
      task_id: this.props.id,
      token: window.localStorage.jwt
    };
    this.props.changedate(obj);
  };
  render() {
    let dateLimite = new Date(this.props.params.limite);
    return (
      <div key={this.props.id} className="task-group-item ">
        <div className="control">
          <div className="time-badge">
            07/07/2019
            {/* {this.props.params.limite
              ? dateLimite.getDay() + "/" + (dateLimite.getMonth() + 1)
              : null} */}
          </div>
          <DropDownbutton id={"item" + this.props.id} Component={ItemDropDown} />
        </div>
        <div className="info">
          <button
            className="btn-ico grn far fa-check-circle"
            onClick={this.handleDone}
          />
          <span className="task-name">{this.props.name}</span>

        </div>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  { taskDone }
)(Task);
