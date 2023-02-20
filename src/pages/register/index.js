import React, { useState } from "react";
import Image from "../../Images/edloan.png";
// import Image5 from "../../Images/background.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CustomAlert } from "../../components";
import { validateRegistrationForm } from "../helpers";

const initialData = {
  firstName: "Pradeep",
  lastName: "Sunkari",
  gender: "M",
  mobileNo: "9152836292",
  emailId: "pradeep@gmail.com",
  password: "123456",
  confirmPassword: "123456",
};

function Register() {
  const [inputData, setInputData] = useState(initialData);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      const errors = validateRegistrationForm(inputData);
      console.log(inputData);
      console.log(errors);
      if (errors.length) {
        setError(errors[0]);
      } else {
        const { data: studentData } = await axios.get(
          `http://localhost:4000/students?emailId=${inputData.emailId}`
        );
        if (!studentData.length) {
          setError("");
          await axios.post("http://localhost:4000/students", inputData);
          navigate("/login");
        } else {
          throw new Error("Student already exists with this email");
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="bg-secondary pt-5">
      {/* <img src={Image5} className="min-vh-100 bg-image" alt="backgroundimg" /> */}
      <div className="container card my-5 shadow">
        <div className="row g-0">
          <div className="col-xl-6 d-none d-xl-block">
            <img
              src={Image}
              style={{ width: "90%", marginTop: "2%" }}
              alt="Registration"
            />
            <p className="pb-0 mb-0 text-center pt-2">
              Have an account?{" "}
              <Link to="/login" className="text-success">
                Login here!
              </Link>
            </p>
          </div>
          <div className="col-xl-6">
            <div className="card-body p-md-4 text-black">
              <h3 className="mb-5 text-uppercase text-center">
                Student registration form
              </h3>
              <form className="row" onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="">
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
                    <div className="">
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
                      value="M"
                      checked={initialData.gender === "M"}
                      onChange={inputChange}
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="FemaleGender"
                      value="F"
                      checked={initialData.gender === "F"}
                      onChange={inputChange}
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="Other"
                      value="O"
                      checked={initialData.gender === "O"}
                      onChange={inputChange}
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>

                <div className=" mb-4">
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

                <div className=" mb-4">
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
                    <div className="">
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
                    <div className="">
                      <input
                        type="password"
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
                  <Link
                    to="/home"
                    className="btn btn-outline-secondary py-2 text-uppercase px-5"
                  >
                    Close
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-success py-2 ms-2 px-5 text-uppercase"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CustomAlert
        heading="Error"
        body={error}
        show={Boolean(error)}
        setShow={setError}
      />
    </section>
  );
}
export default Register;
