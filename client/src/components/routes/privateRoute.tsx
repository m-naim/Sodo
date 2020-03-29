import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authentification from '../../utils/authentification';

const PrivateRoute = ({ children }: any) => (

  <Route
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
