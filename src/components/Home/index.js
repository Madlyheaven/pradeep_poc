import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Images/edloan1.png";

export default function Home() {
  return (
    <>
      <div className="my-0 py-0">
        <div className="container-fluid px-0  my-0 pt-0 pb-0">
          <div className="row align-content-center">
            <div className="col-12 text-end">
              {/* <div
                className="display-1 fw-bold header-title text-white"
                style={{ letterSpacing: "10px" }}
              > */}
              <img src={Image} style={{ width: "100%", marginTop: "0%" }} />
              {/* <h1 className="display-4 fw-bold justify-content-center">
                  UNLOCK
                </h1>
                <span>THE TRUE VALUE OF</span>
                <span className="d-block text-info">YOUR GOLD</span> */}
              {/* </div> */}
              {/* <p className="col-6 ms-auto text-black header-title">
                One of the largest private banks in India, YAS has a sizable
                branch network. Customers may obtain loans from YAS with a
                maximum 36-month payback period. Farmers in rural regions can
                also take advantage of YAS's Gold Loan programme. The largest
                loan accessible through this site is Rs. 50 lakh, with interest
                rates starting at 7.50 percent.
              </p> */}
              {/* {!localStorage.getItem("id") && (
                <Link
                  to="register"
                  className="btn btn-outline-info btn-lg px-5 my-5 text-uppercase"
                >
                  Register
                 </Link> 
               )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
