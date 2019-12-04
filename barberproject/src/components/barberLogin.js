import React from "react";

const barberLogin = () => {
  return (
    <div id="login">
      <h3 class="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" action="" method="post">
                <h3 class="text-center text-info">Login</h3>
                <div className="form-group">
                  <label for="username" class="text-info">
                    Username:
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                  ></input>
                </div>

                <div className="form-group">
                  <label for="password" class="text-info">
                    Username:
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="form-control"
                  ></input>
                </div>

                <div className="form-group"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default barberLogin;
