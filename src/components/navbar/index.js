import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogInOut = () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      localStorage.removeItem("id");
      navigate("/");
    } else {
      navigate("login");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} className=" ms-2" width={80} alt="LOGO" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item mx-2">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/calculator">
                  Calculator
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/loan">
                  Apply Loan
                </NavLink>
              </li>
              {!localStorage.getItem("id") && (
                <li className="nav-item mx-2">
                  <NavLink className="nav-l" to="/register">
                    <button className="btn btn-outline-success my-auto">
                      Register
                    </button>
                  </NavLink>
                </li>
              )}
              <li className="nav-item nav-link mx-2">
                <button className=" btn btn-success" onClick={handleLogInOut}>
                  {localStorage.getItem("id") ? "Log out" : "Log in"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
