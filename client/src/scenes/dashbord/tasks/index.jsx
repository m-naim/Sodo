import React, { Component } from "react";
import { connect } from "react-redux";
import { displayAddTask, addTask } from "../../../actions/taskActions";

import Task from "./task";
import AddModal from './addModal';



class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      name: "something"
    };
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  };
  closeModal = () => {
    this.setState({ openModal: false });
  };


  render() {
    const { tasks, selectedList } = this.props.store;
    console.log(tasks);

    const listeTaskes = tasks.filter(i =>
      i.list.includes(selectedList.id)
    );
    const tasksArr = listeTaskes.map((i, idx) => (
      <Task key={i._id} name={i.name} id={i._id} params={i} />
    ));
    return (
      (selectedList.id === '') ? <div id="tasks"></div> :
        <div id="task-container" className="task-container">
          <div className="header-card">
            <h2>{selectedList.name}</h2>

            <button
              title="Ajouter Une Tache"
              className="btn-ico fas fa-plus"
              onClick={this.handleOpenModal}
            />
          </div>
          <div id="tasks" className="card-groupe">{tasksArr}</div>
          <AddModal open={this.state.openModal} close={this.closeModal} />
        </div>
    );
  }
}



const mapStateToProps = state => ({
  store: state.tasks
});
export default connect(
  mapStateToProps,
  { displayAddTask, addTask }
)(TaskContainer);
