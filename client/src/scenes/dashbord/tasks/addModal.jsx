import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayAddTask, addTask } from "../../../actions/taskActions";
import Modal from "react-modal";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "something"
    };
  }
  handleValidation = () => { this.props.displayAddTask(false) }

  handelAddTask = () => {
    this.props.addTask({
      name: this.state.name,
      token: window.localStorage.jwt,
      list_id: this.props.store.selectedList.id
    });
    this.props.close();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.open}
        onRequestClose={this.props.close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-header">
          <h4>Add a new task</h4>
        </div>

        <div className="modal-body">
          <div>
            <h5>Task name</h5>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>
          <div>
            <h5>time limite to do the task</h5>
            <input type="date" />
          </div>

        </div>
        <div className="modal-foot">
          <button className="modal-cancel" onClick={this.props.close}>Cancel</button>
          <button className="modal-valid" onClick={this.handelAddTask}>
            Validation
            </button>
        </div>
      </Modal>
    )
  }
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "440px",
    border: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

  }
};

const mapStateToProps = state => ({
  store: state.tasks
});

export default connect(
  mapStateToProps,
  { displayAddTask, addTask }
)(AddModal);
