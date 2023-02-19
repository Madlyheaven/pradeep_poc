import React from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import logo from "../../Images/logo.png";

const CustomAlert = ({
  heading = "Error",
  body = "toast message",
  show = false,
  setShow = () => {},
  position = "top-center",
  headingClassName = "text-white",
}) => {
  return (
    <>
      <Row>
        <Col xs={6}>
          <ToastContainer className="mt-1 " position={position}>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header className="bg-danger">
                <img
                  src={logo}
                  className="me-2 bg-dark"
                  width={50}
                  alt="LOGO"
                />
                <strong className={`ms-auto fs-5 ${headingClassName}`}>
                  {heading}
                </strong>
              </Toast.Header>
              <Toast.Body className="fs-5 py-3 text-center border border-danger ">
                {body}
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </>
  );
};

export default CustomAlert;
