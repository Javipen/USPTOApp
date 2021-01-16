import React, { Component } from "react";
import { Link } from "react-router-dom";

class signup extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center ">
        <div className="login-box">
          <div className="login-logo">
            <b>SignUp</b>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign Up to start your session</p>
              <form action="/users/signup" method="POST">
                <div className="input-group mb-3">
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    // value="<%= typeof name != 'undefined' ? name : '' %>"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    // value="<%= typeof email != 'undefined' ? email : '' %>"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Create Password"
                    // value="<%= typeof password != 'undefined' ? password : '' %>"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    className="form-control"
                    placeholder="Confirm Password"
                    // value="<%= typeof password2 != 'undefined' ? password2 : '' %>"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* /.col */}
                  <div className="col">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign Up
                    </button>
                    <p className="lead mt-4">Have An Account?  <Link to="/login" className="text-center">
                  Login
                </Link></p>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/* /.social-auth-links */}
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}

export default signup;

