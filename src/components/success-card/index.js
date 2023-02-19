import React from "react";
import { Link } from "react-router-dom";
import "./success.css";
const SuccessCard = () => {
  return (
    <>
      <div className="bg-secondary py-5">
        <div className="container py-5">
          <div
            className="successCard card shadow-lg m-auto p-3 my-5 pt-1"
            style={{ maxWidth: "340px", minHeight: "300px" }}
          >
            <div className="card-body pb-0 px-3 text-center mt-5">
              <h3 className="mt-3 mb-4">Awesome!</h3>
              <p>
                Your booking has been confirmed. Check your email for detials.
              </p>
              <div className="col mx-3 mt-5">
                <Link to="/" className="btn btn-success w-100" type="submit">
                  OK
                </Link>
              </div>
            </div>
            <div className="successIcon">
              <i class="bi bi-check-circle-fill display-1 text-success"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessCard;
