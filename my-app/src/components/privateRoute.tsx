import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }: any) => (
    <Route
        {...rest}
        render={props => {

            if (window.localStorage.jwt || window.localStorage.session)
                return children;


            return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }
        }
    />
);

export default PrivateRoute;