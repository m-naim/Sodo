import React, { Component } from 'react';

class Foooter extends Component {

  render() {
    return (
      <footer class="sticky-footer">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
            <span>Contact </span> <br/>
            <a href="#">   <i class="fab fa-linkedin fa-2x"></i></a>
            <a href="#">     <i class="fab fa-github-square fa-2x"></i></a>
            <br/>
            <span> made by naim</span>
            </div>
          </div>
        </footer>
    );
  }
}

export default Foooter;