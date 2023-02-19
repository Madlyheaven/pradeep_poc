import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { convertToCurrency, emiCalculator } from "../helpers";

const Calculator = () => {
  const [inputData, setInputData] = useState({
    amount: 400000,
    duration: 12,
    interest: 11,
    emi: 0,
  });

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

  return (
    <>
      <div className="bg-secondary py-5">
        <div className="container py-5">
          <div
            className="card bg-dark text-light shadow-lg m-auto p-3 my-5 pt-1"
            style={{ maxWidth: "600px" }}
          >
            <div className="card-body pb-0">
              <h2 className="text-center">EMI Calculator!</h2>
              <form className="py-3 row">
                <div className="form-outline mb-4">
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
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label" htmlFor="duration">
                    Duration (months)
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={inputData.duration}
                    onChange={inputChange}
                    className="form-control"
                    min={12}
                    step={12}
                    max={72}
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label" htmlFor="interest">
                    Interest (%)
                  </label>
                  <input
                    type="number"
                    id="interest"
                    name="interest"
                    value={inputData.interest}
                    onChange={inputChange}
                    className="form-control"
                  />
                </div>
                <div className="mt-3 row">
                  <div className="col-md-6 mb-4">
                    <span className="small">Monthly EMI:</span>
                    <span className="fw-bold fs-5 ms-3">
                      {convertToCurrency(inputData.emi)}
                    </span>
                  </div>
                  <div className="col-md-6 mb-4">
                    <span className="small">Interest payable:</span>
                    <span className="fw-bold fs-5 ms-3">
                      {convertToCurrency(
                        inputData.emi * inputData.duration - inputData.amount
                      )}
                    </span>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-6 mb-4 mx-auto">
                    <span className="small">Total value:</span>
                    <span className="fw-bold fs-5 ms-3">
                      {convertToCurrency(inputData.emi * inputData.duration)}
                    </span>
                  </div>
                </div> */}

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
                    <Link
                      to="/loan"
                      className="btn btn-success w-100"
                      type="submit"
                    >
                      APPLY LOAN
                    </Link>
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

export default Calculator;
