import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

let urlQuotes = 'https://gist.githubusercontent.com/'+
                'camperbot/5a022b72e96c4c9585c32bf6a75f62d9/'+
                'raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let somequotes=[
       {
         quote: "quote of the day",
         author: "me"
       } ];


console.log(somequotes);

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monted: false,
            position: 0,
            quotes: somequotes
        }
    };

    componentDidMount() {

        $('#tweet-quote')
        .attr('href',
         'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
         + encodeURIComponent('"' + this.state.quotes[this.state.position].text + '" -By:'
          + this.state.quotes[this.state.position].author)); 
    } 

    componentWillMount() {
        axios.get(urlQuotes)
          .then(res => {
              console.log(res.data.quotes);
            this.setState({ quotes: res.data.quotes, monted: true });
          })
      }
    

    render() {
        var date= new Date();
        date=date.getTime()%100;
        return (
            <div id="quote-box" >
                <blockquote id="blockquote">
                    <p id="text"><i className="fa fa-quote-left"> </i>
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

export default QuoteBox;