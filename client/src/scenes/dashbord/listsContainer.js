import React, { Component } from 'react';
import List from './list'
import { connect } from 'react-redux';
import { getLists, deleteList, addList } from '../../actions/listActions';
import PropTypes from 'prop-types';

class ListsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {input: false }
  }
  componentDidMount() { this.props.getLists() }
  handleKeyPress=(e) => {
    
    console.log({
      1: e.key,
      2:  e.key === "Enter",
      3:  this.state.input
    })

    if (e.key === "Enter" && this.state.input) {
      console.log("press bien")
      const newItem = {
        name: this.state.name,
        token: window.localStorage.jwt,
        tasks: []
      };
      this.setState({ input: false });
      // Add item via addItem action
      this.props.addList(newItem);
    }
  }

  handleAdd=(e)=> { this.setState({ input: true })};

  handleChangeName=(e)=>{ this.setState({name: e.target.value})};
  render() {

    const listsArr = this.props.lists.lists.map(
      (i, k) => 
      <List key={k} name={i.name} id={i._id} del={this.props.deleteList} />
      );
    return (
      <div className="list-container">
        <div className="header-card">
          <h2>Listes</h2>
          <div className="fas fa-plus " onClick={this.handleAdd} />
        </div>
        <div className="card-groupe scrollbar">
        {listsArr}
          {(this.state.input) ? <input type="text"autoFocus 
                                        value={this.state.listName}
                                        onKeyPress={this.handleKeyPress}
                                        onChange={this.handleChangeName} /> : null}
        </div>
        <div className="card-bottom-add">
        </div>
      </div>
    );
  }
}

ListsContainer.propTypes = {
  getLists: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getLists, deleteList, addList }
)(ListsContainer);