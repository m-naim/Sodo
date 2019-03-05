import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import LoginPage from './scenes/login/index.jsx';
import DashBord from './scenes/dashbord/index';
import calendar from './scenes/calendar/index';
import settings from './scenes/settings/index';
import ListsContainer from './scenes/tasks/listsContainer';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      window.localStorage.jwt ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <PrivateRoute  exact path="/" component={DashBord} />
        <PrivateRoute  path="/tasks" component={ListsContainer} />
        <PrivateRoute  path="/calendar" component={calendar} />
        <PrivateRoute  path="/settings" component={settings} />
        <Route  path='/login' component={LoginPage} />
        <PrivateRoute path="**" component={DashBord} />
      </div>
    </Router>
    </Provider>
  )

 
ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
