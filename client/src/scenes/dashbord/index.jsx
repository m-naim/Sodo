import React, { Component } from "react";
import OptionsBar from "../../components/optionBar.js";
import { connect } from "react-redux";
import { getTasks, taskDone } from "../../actions/taskActions";
import ListsContainer from "./listes/index";
import TaskContainer from "./tasks/index";
import AddModal from "./tasks/addModal";
import "./dashbord.css";

class DashBord extends Component {
  componentWillMount() {
    this.props.getTasks();
  }
  render() {
    return (
      <div>


        <div className="dashbord">
          <div className="left-side">
            <OptionsBar />
            <ListsContainer />
          </div>

          <TaskContainer />

          {this.props.todayList.displayAddModal ? <AddModal /> : null}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  todayList: state.tasks
});

export default connect(
  mapStateToProps,
  { getTasks, taskDone }
)(DashBord);
