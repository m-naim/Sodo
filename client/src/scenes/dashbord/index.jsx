import React, { Component } from "react";
import OptionsBar from "../../components/optionBar.js";
import { connect } from "react-redux";
import { getTasks, taskDone } from "../../actions/taskActions";
import ListsContainer from "./listsContainer";
import TaskContainer from "./tasksContainer.jsx";
import AddModal from "./addModal";
import "./dashbord.css";

class DashBord extends Component {
  componentWillMount() {
    this.props.getTasks();
  }
  render() {
    return (
      <div>
        <OptionsBar />

        <div className="dashbord">
      
              <ListsContainer />
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
