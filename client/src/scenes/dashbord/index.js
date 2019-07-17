import React, { Component } from "react";
import OptionsBar from "../../components/optionBar";
import QuoteBox from "./quoteBox";
import { connect } from "react-redux";
import { getTasks, taskDone } from "../../actions/taskActions";
import moment from "moment";
import ListsContainer from "./listsContainer";
import TaskContainer from "./tasksContainer.jsx";
import FilterdContainer from "./filterdContainer";
import AddModal from "./addModal";
import "./dashbord.css";

class DashBord extends Component {
  componentWillMount() {
    this.props.getTasks();
  }
  render() {
    console.log(this.props.todayList.tasks);
    const todayArr = this.props.todayList.tasks.filter(
      i =>
        i.limite &&
        moment(i.limite).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
    );

    const importantList = this.props.todayList.tasks.filter(
      item => item.important === true
    );

    return (
      <div>
        <div className="dashbord">
          <div className="side-bar">
            <OptionsBar />
            <div className="sidebar-user">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png"
                alt="avatar"
                width="50px"
                height="50px"
              />
              <div className="sidebar-user-name">User Name</div>

              <div>
                <i className="fas fa-angle-double-down" />
              </div>
            </div>
            <div className="sidebar-listes">
              <p>Lists</p>
              <p>Important tasks</p>
              <p>Tasks for today</p>
            </div>
            <QuoteBox />
            <div className="sidebar-sign">
              made with <span className="haert">♥ </span> by m-naim
            </div>
          </div>
          <ListsContainer />

          <div className="side">
            <TaskContainer />
          </div>
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
