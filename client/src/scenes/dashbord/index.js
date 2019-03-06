import React, { Component } from 'react';
import OptionsBar from '../../components/optionBar';
import SideBar from '../../components/sideBar';
import QuoteBox from './quoteBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { connect } from 'react-redux';
import { getTasks, taskDone } from '../../actions/taskActions';
import moment from 'moment';


class DashBord extends Component {
  constructor(props) {
    super(props);

    this.state={
    }
  }
  componentWillMount() {
    this.props.getTasks()
  }
  render() {
    console.log(this.props.todayList.tasks)
    const todayArr= this.props.todayList.tasks.filter(i=> 
      i.limite && moment(i.limite).format('YYYY-MM-DD')===moment().format('YYYY-MM-DD'));
    const todayTasks = todayArr.map((i) =>
        <div className="task-card">
          <span className="card-title"> {i.name} {}</span>
          <div className="card-bottom">
            <button className="btn done-btn"><i class="far fa-check-circle"></i>  done</button>
            <button className="btn no-btn">missed</button>
          </div>
    </div> )

    const importantList= this.props.todayList.tasks.filter(item => item.important==true);
    const importarray = importantList.map((i) =>
        <div className="task-card">
          <span className="card-title"> {i.name} </span>
          <span className="card-title"> {i.limite ? moment("20190620", "YYYYMMDD").endOf('day').fromNow() : ""} </span>
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
          <div id="dashbord" className="scrollbar">        
              <div id="today" >
                <h1 className="div-title"> <i class="far fa-caret-square-right"></i> To Do Today</h1>
                {
                  todayTasks
                }
              </div>
              <div id="important" >
                <h1 className="div-title"> <i class="far fa-star"></i> important</h1>
                {
                  importarray}
              </div>
            <div id="quotes">
            <h1 className="div-title"><i class="fas fa-bolt"></i> Some motivation</h1>
              <QuoteBox/>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  todayList: state.tasks
});

export default connect(
  mapStateToProps,
  { getTasks, taskDone }
)(DashBord);

