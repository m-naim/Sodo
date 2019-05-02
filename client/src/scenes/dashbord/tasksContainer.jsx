import React, { Component } from 'react';
import Task from './task'
import { connect } from 'react-redux';
import { displayAddTask, addTask} from '../../actions/taskActions';
import Modal from 'react-modal';


class TaskContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      openModal: false,
      name: "something"
    }
  }
  handleClick=()=>{ this.setState({openModal: true})}
  closeModal=()=>{ this.setState({openModal: false})}
  handelAddTask = () => {
    this.props.addTask({
      name: this.state.name,
      token: window.localStorage.jwt,
      list_id: this.props.store.selectedList
    })
    this.setState({ openModal: false })
  }
  handleChangeName=(e)=>{ this.setState({name: e.target.value})}
  render() {

    const listeTaskes = this.props.store.tasks.filter(i => i.list.includes(this.props.store.selectedList));
    const tasksArr = listeTaskes.map((i, idx) => <Task key={i._id} name={i.name} id={i._id} params={i} />);
    return (
      <div className="task-container">
        <div className="header-card">
          <h2>Tasks</h2>
          <div className="fas fa-plus" onClick={this.handleClick} />
        </div>
        <div className="card-groupe scrollbar">{tasksArr}</div>
        <div className="card-bottom-add">
        </div>
        <Modal
            isOpen={this.state.openModal}
            // onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"  >

            <div className="modal-header">
              <h4>Add a new task</h4>
            </div>

            <div className="modal-body">
              <div>
                  <h5>Task name</h5>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} />
              </div>
              <div>
                  <h5>time limite to do the task</h5>
                  <input type="date" />
              </div>
              {/* <div>
                  <h5>is it important?</h5>
                  <input type="radio" name="gender" value="male"/>
                  <input type="radio" name="gender" value="female"/>
              </div> */}
            </div>
            <div className="modal-foot">
                <a onClick={this.closeModal}>Cancel</a>
                <button className="modal-valid" onClick={this.handelAddTask}>Validation</button>
              </div>
        </Modal>

      </div>
    );
  }
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#36393f',
    height                : '338px',
    width                 :  '440px',
    color                 : 'snow',
    border                : 'none',
    padding               : '0',
    display               : 'flex',
    flexDirection         : 'column',
    justifyContent        : 'space-between'
  }
};


const mapStateToProps = state => ({
  store: state.tasks
});
export default connect(
  mapStateToProps,
  {displayAddTask, addTask}
)(TaskContainer);