import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input: 'hello me',
      list: [],
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount(){
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

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }
  handleClick(){
    this.setState({
      list: this.state.list.concat({text: this.state.input})
    })

    let obj={
      text: this.state.input
    }
    axios.post('http://localhost:8080/todo/add', obj)
        .then(res => console.log(res.data));
  }
  /*
  componentDidMount(){
    console.log('axios au travail');
   axios.get('hhtp://localhost:8080/todo/')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  */
  render() {
    const listItems = this.state.list.map((i) =>
    <li>
      {i.text}
    </li>
    );
  
    return (
      <div className="App">
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleClick} >add</button>
        <div>
          {listItems}
        </div>
        
      </div>
    );
  }
}

export default App;
