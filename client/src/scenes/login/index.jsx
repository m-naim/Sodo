import React, { Component } from 'react';
import './style.css'
import queryString from "query-string";

class LoginPage extends Component {
    state = {
        redirectToReferrer: false
    }
    componentWillMount(){
        var query = queryString.parse(this.props.location.search);
        if (query.token) {
          window.localStorage.setItem("jwt", query.token);
          this.props.history.push("/");
       }
    }
    render() {
        return (
            <div>
                <a href="/auth/facebook" class="button">
                    <div>
                        <span class="button-label">Sign in with Facebook</span>
                    </div>
                </a>
            </div>
        )
    }
}

export default LoginPage;