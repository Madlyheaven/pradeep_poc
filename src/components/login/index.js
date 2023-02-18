import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="container">
      <div className="card m-auto p-3" style={{ width: "400px" }}>
        <div className="card-body">
          <h1 className="card-title">Login!</h1>
          <form className="pt-5">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">
                User ID
              </label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
              />
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <button type="button" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>
            </div>

            <div className="text-center">
              <p>
                Not a member yet? <Link to="/register">Register here</Link>
              </p>
              {/* <p>or sign up with:</p> */}
              {/* <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
