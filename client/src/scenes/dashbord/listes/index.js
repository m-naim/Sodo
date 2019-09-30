import React, { Component } from "react";
import { connect } from "react-redux";
import { getLists, deleteList } from "../../../actions/listActions";
import PropTypes from "prop-types";


import AddBox from "./addBox";
import List from "./list";

class ListsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { input: false };
  }

  handleAdd = e => {
    this.setState({ input: true });
  };

  componentDidMount() {
    this.props.getLists();
  }


  render() {

    const listsArr = this.props.lists.lists.map((i, k) => (
      <List key={k} name={i.name} id={i._id} del={this.props.deleteList} />
    ));
    return (
      <div className="list-container">
        <div className="header-card">
          <h2>Listes</h2>

          <button
            title="Ajouter Une Liste"
            className="btn-ico fas fa-plus"
            onClick={this.handleAdd}
          />
        </div>

        <div className="card-groupe">
          {this.state.input ? <AddBox /> : null}
          {listsArr}
        </div>

        <div className="card-bottom-add" />
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
  { getLists, deleteList }
)(ListsContainer);
