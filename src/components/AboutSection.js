import React from "react";
import home1 from "../images/home1.png";
import styled from "styled-components";

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

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 4.2rem 4.4rem;
`;
const Description = styled.div`
  flex: 1;
  transition: all ease 0.3s;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  transition: all ease 0.3s;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
