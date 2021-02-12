// Form needs UI validation

import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = (props) => {

  const { register, handleSubmit} = useForm(); // initialize the hook

  //register is a function to be used as a ref provided by the useForm hook. We can assign it to each input field so that the react-hook-form can track the changes for the input field value.

  const onSubmit = (data) => {
    // This is using axios to make a post request to our backend and send {name,email,password}
    // and store it in mongoDB

    axios({
      url: "/users/register", // route in backend
      method: "POST",
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
         props.history.push('/login')
        }
      })
      .catch((error) => {
        console.log("Error: ", error.data);
      });
  };

  // This function checks localstorage to see if the user is already logged in and then redirects them if they try to relogin
  const isAuthedRedirect = () => {
    const ISAUTHENTICATED = window.localStorage.getItem("isAuthenticated");

    if (ISAUTHENTICATED) {
      return <Redirect to= "/Dashboard" />;
    }
  };

  

  return (
    <div>
      {isAuthedRedirect()} 
      <div className="d-flex justify-content-center ">
        <div className="login-box">
          <div className="login-logo">
            <b>SignUp</b>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign Up to start your session</p>
              <form
                action="/users/signup"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="input-group mb-3">
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    ref={register({ required: true })}
                    required
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
                    autoComplete="username"
                    ref={register({
                      required: true,
                      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    })}
                    required
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
                    className="form-control pd-password-validation"
                    placeholder="Create Password"
                    autoComplete="false"
                    ref={register({ required: true})}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                {/* <div className="input-group mb-3">
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    className="form-control"
                    autoComplete="false"
                    placeholder="Confirm Password"
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  {/* /.col */}
                  <div className="col">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign Up
                    </button>
                    <p className="lead mt-4">
                      Have An Account?{" "}
                      <Link to="/login" className="text-center">
                        Login
                      </Link>
                    </p>
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
    </div>
  );
};

export default Signup;
