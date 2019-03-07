import React, { Component } from 'react';

class Foooter extends Component {

  render() {
    return (
      <footer className="sticky-footer">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
            <span>Contact </span> <br/>
            <a href="https://www.linkedin.com/in/naim-mehenaoui/">   <i className="fab fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/m-naim">     <i className="fab fa-github-square fa-2x"></i></a>
            <br/>
            <span> made by naim</span>
            </div>
          </div>
        </footer>
    );
  }
}

export default Foooter;