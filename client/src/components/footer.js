import React, { Component } from 'react';

class Foooter extends Component {

  render() {
    return (
      <footer class="sticky-footer">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
            <span>Contact me on </span>
            <a href="#">   <i class="fab fa-linkedin"></i></a>
            <a href="#">     <i class="fab fa-github-square"></i></a>
            <br/>
            <span>Copyright © Your Website 2018</span>
            </div>
          </div>
        </footer>
    );
  }
}

export default Foooter;