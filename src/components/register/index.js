import React, { useState } from "react";
import Image from "../../Images/edloan.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    mobileNo: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  console.log(inputData);
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("inputData");
    // console.log(inputData);
    if (inputData.password === inputData.confirmPassword) {
      axios
        .get(`http://localhost:4000/users?emailId=${inputData.emailId}`)
        .then((response) => {
          if (response.data.length !== 0) {
            setError("User already exists with this user id.");
          } else {
            setError("");
            axios.post("http://localhost:4000/users", inputData).then(() => {
              navigate("/login");
            });
          }
        })
        .catch((error) => setError(error));
    } else {
      setError("Passwords don't match!");
    }
  };
  return (
    <div>
      <section className="h-100 bg-secondary">
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block ">
                    <img
                      src={Image}
                      style={{ width: "90%", marginTop: "2%" }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase ">
                        Student registration form
                      </h3>
                      <form className="row" onSubmit={handleRegister}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={inputData.firstName}
                                onChange={inputChange}
                                className="form-control form-control-lg"
                                placeholder="First name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={inputData.lastName}
                                onChange={inputChange}
                                className="form-control form-control-lg"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="MaleGender"
                              value="male"
                              onChange={inputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="FemaleGender"
                              value="female"
                              onChange={inputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="femaleGender"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="Other"
                              value="other"
                              onChange={inputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="tel"
                            id="MobileNumber"
                            name="mobileNo"
                            value={inputData.mobileNo}
                            onChange={inputChange}
                            className="form-control form-control-lg"
                            placeholder="Mobile no"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="Email"
                            name="emailId"
                            value={inputData.emailId}
                            onChange={inputChange}
                            className="form-control form-control-lg"
                            placeholder="Email ID"
                          />
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="Password"
                                name="password"
                                value={inputData.password}
                                onChange={inputChange}
                                className="form-control form-control-lg"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="Password"
                                id="ConfirmPassword"
                                name="confirmPassword"
                                value={inputData.confirmPassword}
                                onChange={inputChange}
                                className="form-control form-control-lg"
                                placeholder="Confirm Password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <Link to="/home" className="btn btn-light btn-lg">
                            Close
                          </Link>

                          {/* 
                          <button type="reset" className="btn btn-light btn-lg">
                            Close
                          </button> */}
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                      <div>
                        {error !== "" && (
                          <div className="card d-flex flex-row w-100 bg-danger text-light mt-3">
                            <div className="card-body">{error}</div>
                            <button
                              type="button"
                              className="btn-close my-auto text-white me-2"
                              aria-label="Close"
                              onClick={() => setError("")}
                            ></button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Register;
