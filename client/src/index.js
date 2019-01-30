import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import DashBord from './scenes/dashbord/index';
import calendar from './scenes/calendar/index';
import settings from './scenes/settings/index';
import ListsContainer from './scenes/tasks/listsContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={DashBord} />
        <Route path="/tasks" component={ListsContainer} />
        <Route path="/calendar" component={calendar} />
        <Route path="/settings" component={settings} />
      </div>
    </Router>
  )

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
