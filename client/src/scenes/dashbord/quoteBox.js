import React, { Component } from 'react';
import axios from 'axios';

let urlQuotes = 'https://gist.githubusercontent.com/'+
                'camperbot/5a022b72e96c4c9585c32bf6a75f62d9/'+
                'raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let somequotes=[
       {
         quote: "",
         author: ""
       } ];


class QuoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monted: false,
            position: 0,
            quotes: somequotes
        }
    };


    componentWillMount() {
        axios.get(urlQuotes)
          .then(res => {
              console.log(res.data.quotes);
            this.setState({ quotes: res.data.quotes, monted: true });
          })
          .catch(
            err => console.log(err)
          )
      }
    

    render() {
        var date= new Date();
        date=date.getTime()%100;
        return (
            <div className="quote-box" >
                <blockquote className="blockquote">
                    <p ><i className="fa fa-quote-left"> </i>
                        {  this.state.monted?this.state.quotes[date].quote:this.state.quotes[0].quote }
                    </p>
                    <footer className="blockquote-footer">
                        <p id="author">{ this.state.monted?this.state.quotes[date].author:this.state.quotes[0].author }</p>
                    </footer>
                </blockquote>
            </div>
        );
    };
};

export default QuoteContainer;