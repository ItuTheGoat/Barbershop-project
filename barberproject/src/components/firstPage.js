import React from "react";
import "./firstPage.css";
import selfie from "../Images/selfie.png";
import barber from "../Images/barber.png";

class FirstPage extends React.Component {
  onBarberSignIn = () => {};

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Barber Shop</h1>
          </div>
        </div>
        <div className="container">
          <h3>Welcome</h3>

          <p>Sign in below</p>
          <hr />
          <div class="row">
            <div class="col-sm-6">
              <div class="card card-contents card-style">
                <div class="card-body">
                  <h5 class="card-title">I am a Client</h5>
                  <img
                    src={selfie}
                    class="img-fluid card-image"
                    alt="selfie"
                  ></img>
                  <br />
                  <a href="/" class="btn btn-outline-secondary card-buttons">
                    Sign in as Client
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card card-contents card-style">
                <div class="card-body">
                  <h5 class="card-title">I am a Barber</h5>
                  <img
                    src={barber}
                    class="img-fluid card-image"
                    alt="barber"
                  ></img>
                  <br />
                  <a href="/" class="btn btn-outline-secondary">
                    Sign in as Barber
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <hr />
          <p>Dont have an account! Sign up here:</p>
          <button className="btn btn-secondary" onClick={this.onBarberSignIn}>
            Sign up
          </button>
        </div>
      </div>
    );
  }
}

export default FirstPage;
