import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../Images/mainpic1.png";
import Image2 from "../../Images/mainpic3.png";
import Image3 from "../../Images/mainpic4.png";

export default function Main() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div className="max-vh-100">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block homeImage" src={Image1} alt="First slide" />
          <Carousel.Caption className="d-flex align-items-center h-100">
            <h3 style={{ textAlign: "justify" }}>
              We, at SP Bank, understand about your career aspirations and offer
              the needed Student Loans, for successfully aiding your journey to
              higher education. Getting an Education Loan through SP Bank is an
              easy and simple process. We aim at providing financial support for
              aspiring students, for pursuing professional higher education in
              India and overseas.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block homeImage" src={Image2} alt="Second slide" />
          <Carousel.Caption className="d-flex align-items-center h-100">
            <h3>WHY SP BANK FOR EDUCATION LOAN?</h3>
            <h3> How to Apply</h3>
            <h3>
              SP Bank presents education loans up to Rs 50 lakh for your
              educational requirements in India and up to Rs 1 crore for
              overseas.
            </h3>
            <ul>
              <li>
                Loans offered for: Domestic institutes/ international institutes
              </li>
              <li>Courses covered: Under Graduate/ Post Graduate</li>
              <li>
                Visit the nearest SP Bank branch, fill the form and get started
                with your loan approval process or Apply online
              </li>
            </ul>
            <h4>
              Disclaimer : I hereby authorize SP Bank and its representatives to
              call, email, WhatsApp or SMS me regarding SP Bank's loans, its
              advantages & offers. This consent will override any registration
              for NC/NDNC.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block homeImage" src={Image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>SP Bank loan helps you save more money</h3>
            <p>Unlimited Income tax benefit on interest paid</p>
            <div>
              <button type="submit" className="btn btn-warning btn-lg ms-2 ">
                Apply now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
