import React from "react";
import home1 from "../images/home1.png";
import styled from "styled-components";
import { About, Description, Hide, Image } from "../Styles";
function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us to get a ticket for Mars Planet and stay there forever
          Lorem ipsum dolor sit amet.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="a guy holding the camera" />
      </Image>
    </About>
  );
}

export default AboutSection;
