import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomAlert } from "../../components";
import { validateLoanForm } from "../helpers";

const initialData = {
  fatherName: "Philip",
  dob: "1998-02-10",
  pan: "EPDPY2884H",
  aadhar: "661866302206",
  courseName: "M.Tech",
  courseCollege: "IITH",
  courseCommencement: "2023-06-10",
  courseCompletion: "2025-02-10",
  guarantorName: "Paul",
  guarantorMobile: "7846275610",
  guarantorPAN: "HSINE5992R",
  guarantorIncome: "50000",
};

const LoanPage = () => {
  const [inputData, setInputData] = useState(initialData);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const inputChange = (event) =>
    setInputData({ ...inputData, [event.target.name]: event.target.value });

  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      const errors = validateLoanForm(inputData);
      if (errors.length) {
        setError(errors[0]);
      } else {
        const currentStudent = localStorage.getItem("id");
        const { data: studentData } = await axios.get(
          `http://localhost:4000/students/${currentStudent}`
        );
        if (studentData.id && studentData.emailId) {
          await axios.patch(
            `http://localhost:4000/students/${currentStudent}`,
            inputData
          );
          navigate("/apply");
        }
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  return (
    <>
      <section className="bg-secondary" style={{ padding: "90px 0px" }}>
        <div className="container card py-2 px-4 my-5 bg-dark text-light">
          <div className="card-body">
            <h3 className="text-uppercase text-center">Application form</h3>
            <hr className="mt-3 mb-3" />
            <form onSubmit={handleRegister}>
              <h6 className="row ps-3 mb-3">Student details:</h6>
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="fatherName"
                    value={inputData.fatherName}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Father name"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    name="dob"
                    value={inputData.dob}
                    onChange={inputChange}
                    className="form-control form-control-md text-muted"
                    placeholder="Date of birth"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="pan"
                    value={inputData.pan}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="PAN number"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="aadhar"
                    value={inputData.aadhar}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Aadhar number"
                  />
                </div>
              </div>

              <h6 className="row ps-3 mb-3">Education details:</h6>
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="courseName"
                    value={inputData.courseName}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Course name"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="courseCollege"
                    value={inputData.courseCollege}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Institution name"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    name="courseCommencement"
                    value={inputData.courseCommencement}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Commencement date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    name="courseCompletion"
                    value={inputData.courseCompletion}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Completion date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
              </div>

              <h6 className="row ps-3 mb-3">Guarantor details:</h6>
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="guarantorName"
                    value={inputData.guarantorName}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Guarantor name"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="guarantorMobile"
                    value={inputData.guarantorMobile}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Guarantor mobile"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="guarantorPAN"
                    value={inputData.guarantorPAN}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Guarantor PAN"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <input
                    type="text"
                    name="guarantorIncome"
                    value={inputData.guarantorIncome}
                    onChange={inputChange}
                    className="form-control form-control-md"
                    placeholder="Guarantor income"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end pt-4">
                <Link
                  to="/home"
                  className="btn btn-outline-secondary text-light text-uppercase px-5"
                >
                  Close
                </Link>
                <button
                  type="submit"
                  className="btn btn-success ms-2 px-5 text-uppercase"
                >
                  Submit
                </button>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </section>
      <CustomAlert
        heading="Error"
        body={error}
        show={Boolean(error)}
        setShow={setError}
      />
    </>
  );
};

export default LoanPage;
