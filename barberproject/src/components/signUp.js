import React, { Component } from "react";
import "./signUp.css";

// I think we will need state here.
class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row cont-body">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-body">
                <form className="text-center ">
                  <label htmlFor="userEmail">Email: </label>
                  <input
                    type="email"
                    id="userEmail"
                    className="form-control mb-4"
                    placeholder="Email"
                  />
                  <label htmlFor="userPassword">Password: </label>
                  <input
                    type="password"
                    id="userPassword"
                    className="form-control mb-4"
                    placeholder="Password"
                  />
                  <button class="btn btn-info btn-block my-4" type="submit">
                    Sign up
                  </button>
                  <div>Already have an account?</div>
                  <a href="/" target="_blank">
                    Sign In
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
