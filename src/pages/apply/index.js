import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  convertToCurrency,
  emiCalculator,
  validateApplyForm,
} from "../helpers";

const Apply = () => {
  const [inputData, setInputData] = useState({
    amount: 0,
    duration: 0,
    interest: 11,
    emi: 0,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const inputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    setInputData({
      ...inputData,
      emi: emiCalculator(
        +inputData.amount,
        +inputData.interest,
        +inputData.duration
      ),
    });
  }, [inputData.amount, inputData.interest, inputData.duration]);

  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      const errors = validateApplyForm(inputData);
      if (errors.length) {
        setError(errors[0]);
      } else {
        const currentStudent = localStorage.getItem("id");
        const { data: studentData } = await axios.get(
          `http://localhost:4000/students/${currentStudent}`
        );
        if (studentData.id && studentData.emailId) {
          axios
            .patch(`http://localhost:4000/students/${currentStudent}`, {
              loanAmount: inputData.amount,
              loanDuration: inputData.duration,
              emi: inputData.emi,
            })
            .then(() => navigate("/success"));
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="bg-secondary py-5">
        <div className="container pb-5">
          <div
            className="card bg-dark text-light shadow-lg m-auto p-3 my-5 pt-1"
            style={{ maxWidth: "600px" }}
          >
            <div className="card-body pb-0">
              <h2 className="text-center">Loan Requirements!</h2>
              <hr />
              <form className="py-3 row" onSubmit={handleRegister}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="amount">
                    Amount (Rupees)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={inputData.amount}
                    onChange={inputChange}
                    className="form-control"
                    required
                  />
                  <input
                    type="range"
                    id="amount"
                    name="amount"
                    min={100000}
                    step={100000}
                    max={1000000}
                    value={inputData.amount}
                    onChange={inputChange}
                    className="form-range mt-3"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="duration">
                    Duration (months)
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    min={12}
                    step={12}
                    max={72}
                    value={inputData.duration}
                    onChange={inputChange}
                    className="form-control"
                    required
                  />
                  <input
                    type="range"
                    id="duration"
                    name="duration"
                    min={12}
                    step={12}
                    max={72}
                    value={inputData.duration}
                    onChange={inputChange}
                    className="form-range mt-3"
                    required
                  />
                </div>

                <div className="mt-3 row">
                  <div className="col-md-6 mb-4">
                    <span className="small">Interest rate:</span>
                    <span className="fw-bold fs-5 ms-3">
                      {inputData.interest}%
                    </span>
                  </div>
                  <div className="col-md-6 mb-4">
                    <span className="small">Monthly EMI:</span>
                    <span className="fw-bold fs-5 ms-3">
                      {convertToCurrency(inputData.emi)}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <span className="small">Interest payable:</span>
                    <span className="fw-bold fs-5 ms-3">
                      {convertToCurrency(
                        inputData.emi * inputData.duration - inputData.amount >=
                          0
                          ? inputData.emi * inputData.duration -
                              inputData.amount
                          : 0
                      )}
                    </span>
                  </div>
                  <div className="col-md-6 mb-4 mx-auto">
                    <span className="small">Total:</span>
                    <span className="fw-bold fs-5 ms-3">
                      {convertToCurrency(inputData.emi * inputData.duration)}
                    </span>
                  </div>
                </div>

                <div className="row gy-2 gx-3 mt-4">
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
                      APPLY LOAN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
