import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "./login";
import App from "./App";
import { AppContextProvider } from "../shared/AppContextProvider";

const Routes = (
    <AppContextProvider>
        <Router>
            <div>
                <PrivateRoute path="/" exact component={App} />
                <PrivateRoute path="/calendar" component={App} />
                <PrivateRoute path="/settings" component={App} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    </AppContextProvider>
);

export default Routes;
