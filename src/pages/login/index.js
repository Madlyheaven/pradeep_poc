import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomAlert } from "../../components";
import { validateLoginForm } from "../helpers";
export default function Login() {
  const [inputData, setInputData] = useState({
    emailId: "pradeep@gmail.com",
    password: "pradeep407",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const errors = validateLoginForm(inputData);
      if (errors.length) {
        setError(errors[0]);
      } else {
        const { data: studentData } = await axios.get(
          `http://localhost:4000/students?emailId=${inputData.emailId}&password=${inputData.password}`
        );
        if (studentData.length) {
          setError("");
          localStorage.setItem("id", studentData[0].id);
          navigate("/");
        } else {
          throw new Error("Invalid credentials! Please try again.");
        }
      }
    } catch (err) {
      err.message.includes("404")
        ? setError("Invalid credentials! Please try again.")
        : setError(err.message);
    }
  };

  return (
    <div className="bg-secondary py-5">
      <div className="container py-5">
        <div
          className="card bg-dark text-light shadow-lg m-auto p-3 my-5"
          style={{ maxWidth: "400px" }}
        >
          <div className="card-body pb-0">
            <h1 className="text-center">Login!</h1>
            <form className="pt-3" onSubmit={handleLogin}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Email ID
                </label>
                <input
                  type="email"
                  id="Email"
                  name="emailId"
                  value={inputData.emailId}
                  onChange={inputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={inputData.password}
                  onChange={inputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="row gy-2 gx-3 mt-5">
                <div className="col">
                  <Link
                    to="/"
                    className="btn btn-outline-success w-100"
                    type="reset"
                  >
                    CANCEL
                  </Link>
                </div>
                <div className="col">
                  <button className="btn btn-success w-100" type="submit">
                    SIGN IN
                  </button>
                </div>
              </div>

              <div className="text-center mt-4">
                <p>
                  Not a member yet?{" "}
                  <Link to="/register" className="text-success">
                    Register here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CustomAlert
        heading="Error"
        body={error}
        show={Boolean(error)}
        setShow={setError}
      />
    </div>
  );
}
