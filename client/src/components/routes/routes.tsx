import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Login from '../login';
import App from '../App';
import { AppContextProvider } from '../../shared/AppContextProvider';

const Routes = (
  <AppContextProvider>
    <Router>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <App />
        </PrivateRoute>

      </Switch>
    </Router>
  </AppContextProvider>
);

export default Routes;
