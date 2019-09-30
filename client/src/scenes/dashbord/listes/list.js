import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteList } from "../../../actions/listActions";
import { displayList } from "../../../actions/taskActions";


class List extends Component {

  handleDisplay = () => {
    this.props.displayList({
      id: this.props.id,
      name: this.props.name
    });
    const list = document.getElementById("tasks");
    list.classList.remove("display");
    void list.offsetWidth;
    list.classList.add("display");
  };

  render() {
    let listClass = "list-group-item ";

    this.props.tasks.selectedList.id === this.props.id
      ? (listClass += "active")
      : (listClass = "list-group-item ");

    return (
      <div key={this.props.id} className={listClass} onClick={this.handleDisplay}>
        <span className="task-name" >
          {this.props.name}
        </span>
        <div className="">
          <button
            title="Delete Liste"
            className="btn-ico far fa-trash-alt"
            onClick={() => this.props.deleteList(this.props.id)}
          />
          <button
            title="Edit Liste"
            className="btn-ico far far fa-edit"
            onClick={this.handleDone}
          />
        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(
  mapStateToProps,
  { deleteList, displayList }
)(List);
