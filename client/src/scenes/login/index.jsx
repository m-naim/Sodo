import React, { Component } from "react";
import "./style.css";
import queryString from "query-string";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }

  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <div className="login-body">
          <div className="login-header">
            <h1 className="logo">Ephyon</h1>
            <p>an app to Never forget your tasks </p>
          </div>

          <div className="login-cnt">
            <h2>Login here</h2>
            <div className="fcb-btn">
              <a href="/auth/facebook">
                <i className="fab fa-facebook-f" />
                <span className="fcb-btn-span">Sign in with Facebook</span>
              </a>
            </div>
            <div className="ggl-btn">
              <a href="/auth/google">
                <img
                  alt=""
                  src="https://www.evernote.com/redesign/OpenID/img/GGL_logo_googleg_18.png"
                />
                <span className="ggl-btn-span">Sign in with Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
