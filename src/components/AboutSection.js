import React from "react";
import home1 from "../images/home1.png";
function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us to get a ticket for Mars Planet and stay there forever
          Lorem ipsum dolor sit amet.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="a guy holding the camera" />
      </div>
    </div>
  );
}

export default AboutSection;
