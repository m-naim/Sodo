import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'hello me',
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
      id: this.state.id + 1
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
      list: this.state.list.filter(function (obj) {
        if (obj.id == e.target.value) {
          return false;
        } else {
          return true;
        }
      })
    });
  }
  render() {
    const listItems = this.state.list.map((i) =>
      <li key={i.id} className="list-group-item d-flex justify-content-between">
        {i.text}
        <div>
        <button className="btn btn-success" value={i.id} onClick={this.handleDone}>
        <i class="far fa-check-circle" ></i></button>
        <button className="btn btn-ligth" value={i.id} >
        <i class="fas fa-ellipsis-v"></i></button>
        </div>
        
      </li>
    );
    return (
      <div class="card" style={{width: "18em"}}>
        <div class="card-header">
          List Name
        </div>
        <div className="list-group">
          {listItems}
        </div>
        <div class="card-footer">
          <div class="input-group mb-3">
            <input type="text" value={this.state.input} onChange={this.handleChange} />
            <div class="input-group-append">
              <button className="btn btn-info btn-outline-secondary" onClick={this.handleClick} >add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;