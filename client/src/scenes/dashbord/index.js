import React, { Component } from 'react';
import OptionsBar from '../../components/optionBar';
import QuoteBox from './quoteBox';
import { connect } from 'react-redux';
import { getTasks, taskDone } from '../../actions/taskActions';
import moment from 'moment';
import ListsContainer from './listsContainer';
import TaskContainer from './tasksContainer.jsx';
import FilterdContainer from './filterdContainer';
import AddModal from './addModal'
import './dashbord.css';


class DashBord extends Component {
  
  componentWillMount() {
    this.props.getTasks()
  }
  render() {
    console.log(this.props.todayList.tasks)
    const todayArr = this.props.todayList.tasks.filter(i =>
      i.limite &&
      moment(i.limite).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
    );

    const importantList = this.props.todayList.tasks.filter(item => item.important === true);

    return (
      <div >
        <OptionsBar />
        <div className='dashbord' >
          <ListsContainer />
          <TaskContainer />
          <div className="side">
            <QuoteBox />
            <FilterdContainer name={'important'} array={importantList} />
            <FilterdContainer name={'today'} array={todayArr} />
          </div>
          {(this.props.todayList.displayAddModal)?<AddModal/>: null}
          
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

