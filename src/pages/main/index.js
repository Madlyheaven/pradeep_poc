import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../Images/pic.png";
import Image2 from "../../Images/pic2.png";
import Image3 from "../../Images/pic3.png";

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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Edu laon</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block homeImage" src={Image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Edu loan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block homeImage" src={Image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Edu loan</p>
            <div>
              <button type="submit" className="btn btn-warning btn-lg ms-2 ">
                Submit
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
