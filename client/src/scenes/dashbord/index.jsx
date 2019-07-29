import React, { Component } from "react";
import OptionsBar from "../../components/optionBar.js";
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
        <OptionsBar />

        <div className="dashbord">
          <div className="container">
            <div className="focus">
              <h1>your main focus today</h1>
            </div>

            <div className="mid-container">
              <ListsContainer />
              <TaskContainer />
            </div>
          </div>

          <div className="info-container">
            <div className="info-container-stats">
              <h1>Stats</h1>
              <div>
                <p>Done</p>
                <span>today 0 </span>
                <span>week 0 </span>
                <span>month 0 </span>
              </div>
              <div>
                <p>To do</p>
                <span>today 0 </span>
                <span>week 0 </span>
                <span>month 0 </span>
              </div>
            </div>
          </div>

          {this.props.todayList.displayAddModal ? <AddModal /> : null}
        </div>

        <div className="sidebar-sign">
          made with <span className="haert">♥ </span> by m-naim
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
