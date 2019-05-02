import React, { Component } from 'react';
import Task from './task'
import { connect } from 'react-redux';
import { getLists, deleteList } from '../../actions/listActions';
import PropTypes from 'prop-types';

class FilterdContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input:'',
        }
    
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      componentDidMount() {
        console.log(this.props.array)
      }
      handleAddClick() {
        const newItem = {
          name: this.state.input,
          token: window.localStorage.jwt,
          tasks:[]
        };
        this.setState({input:''});
        // Add item via addItem action
        this.props.addList(newItem); 
      }
      handleChange(e) {
        this.setState({
          input: e.target.value
        })
      }

  render() {
    const tasksArr = this.props.array.map((i,idx) => 
    <Task idx={idx} key={i._id} name={i.name} id={i._id} del={this.props.deleteList} params={i}/>);
    return (
          <div className="filted-container">
            <div className="header-card"> <h2> {this.props.name} </h2> </div>
            <div className="card-groupe"> {tasksArr} </div>
        </div>
       );
  }
}

FilterdContainer.propTypes = {
  getLists: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(
  mapStateToProps,
  { getLists, deleteList }
)(FilterdContainer);