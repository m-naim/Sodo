import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteList } from "../../actions/listActions";
import { displayList } from "../../actions/taskActions";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleDelClick = () => {
    this.props.deleteList(this.props.id);
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleDisplay = () => {
    this.props.displayList(this.props.id);
    const list = document.getElementById("task-container");
    list.classList.remove("display");
    void list.offsetWidth;
    list.classList.add("display");
  };

  render() {
    let listClass = "list-group-item ";
    // console.log({
    //   1: this.props.tasks.selectedList,
    //   2:this.props.id
    // })
    this.props.tasks.selectedList === this.props.id
      ? (listClass += "active")
      : (listClass = "list-group-item ");

    return (
      <div key={this.props.id} className={listClass}>
        <span className="task-name" onClick={this.handleDisplay}>
          {this.props.name}
        </span>
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
