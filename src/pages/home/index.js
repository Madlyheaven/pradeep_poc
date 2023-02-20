import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Images/homepic1.png";
import "../../Images/homepic1.png";

export default function Home() {
  return (
    <>
      <div className="my-0 py-0">
        <div className="container-fluid px-0 my-0 pt-0 pb-0">
          <div className="row align-content-center mx-0 px-0">
            <div className="col-12 text-end mx-0 px-0 homeContainer">
              {/* <img src={Image} className="" alt="home" /> */}
              <h2 className="min-vh-100 d-flex flex-column justify-content-center col-6 text-light">
                <h1
                  className="d-inline-block display-4 fw-bold text-uppercase"
                  // style={{ textAlign: "justify" }}
                >
                  Believe it or not! Your Education Loan is few clicks away
                </h1>
                <span
                  className="d-inline-blocks"
                  // style={{ textAlign: "justify" }}
                >
                  Unlimited tax benefit on the interest paid, Loan upto 1 crore,
                  Get an Education loan now.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
