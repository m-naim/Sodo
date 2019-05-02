import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayAddTask } from '../../actions/taskActions';


class AddModal extends Component { 
    handleValidation=()=>{this.props.displayAddTask(false)}
    render() {
        return(
            <div className="modal">
                <h1>title</h1>
                <input type="text" />
                <button onClick={this.handleValidation}>add</button>
            </div>
          )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
  });
  
export default connect(
    mapStateToProps,
    { displayAddTask }
  )(AddModal);
  