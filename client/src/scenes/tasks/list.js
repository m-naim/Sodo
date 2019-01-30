import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      list: [],
      id: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:8080/todo')
      .then(response => {
        console.log(response.data);
        this.setState({
          list: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  handleClick() {
    this.setState({
      list: this.state.list.concat({
        id: this.state.id + 1,
        text: this.state.input
      }),
      id: this.state.id + 1,
      input: ''
    })
    /*
        let obj={
          text: this.state.input
        }
        axios.post('http://localhost:8080/todo/add', obj)
            .then(res => console.log(res.data));
    */
  }
  handleDone(e) {

    this.setState({
      list: this.state.list.filter(function (o) {
        if (o.id == e.target.value) {
          return false;
        } else {
          return true;
        }
      })
    });
  }
  render() {
    const listItems = this.state.list.map((i) =>
      <li key={i.id} className="list-group-item ">
        {i.text}
        <div className="float-right">
          <button className="btn-ico grn far fa-check-circle" value={i.id} onClick={this.handleDone}/>
          <button className="btn-ico fas fa-ellipsis-v" value={i.id} />
        </div>
        
      </li>
    );
    return (
      <div class="card" style={{width: "18em"}}>
        <div class="header-card">
           {this.props.name}
          <button className="btn-ico snow fas fa-ellipsis-v float-right" />
        </div>
        <div className="list-group">
          {listItems}
          <div class="input-group text-center">
            <button className="btn-ico snow fas fa-plus" onClick={this.handleClick} >Add</button>
            <input class='inp snow' placeholder="add new Task" type="text" value={this.state.input} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default List;