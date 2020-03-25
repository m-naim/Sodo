import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { authentification } from '../utils/authentification';

const PrivateRoute = ({ children, ...rest }: any) => (

  <Route
    {...rest}
    render={({ location }) => (authentification.isAuthenticated() ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
