import React, { Component } from 'react';
import OptionsBar from '../../components/optionBar';
import SideBar from '../../components/sideBar';
import QuoteBox from '../../components/quoteBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


class DashBord extends Component {
  constructor(props) {
    super(props);

    this.state={
      list:["cofée", "eat something", "do somme sport"]
    }
  }
  render() {
    const todayTasks = this.state.list.map((i) =>
        <div className="task-card">
          <span className="card-title"> {i} </span>
          <div className="card-bottom">
            <button className="btn done-btn"><i class="far fa-check-circle"></i>  done</button>
            <button className="btn no-btn">missed</button>
          </div>
    </div> )
    const importantTasks = this.state.list.map((i) =>
    <div className="task-card">
      <span className="card-title"> {i} </span>
      <span className="card-title"> il te reste 5j </span>
      <div className="card-bottom">
        <button className="btn done-btn"><i class="far fa-check-circle"></i>  done</button>
        <button className="btn no-btn">missed</button>
      </div>
</div> )

    return (
      <div >
        <OptionsBar />
        <div id="wrapper" >
          <SideBar />
          <div id="dashbord">        
              <div id="today" >
                <h1 className="div-title"> <i class="far fa-caret-square-right"></i> To Do Today</h1>
                {todayTasks}
              </div>
              <div id="important" >
                <h1 className="div-title"> <i class="far fa-star"></i> important</h1>
                {importantTasks}
              </div>
            <div id="quotes">
            <h1 className="div-title"><i class="fas fa-bolt"></i> Some motivation</h1>
              <QuoteBox />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default DashBord;
